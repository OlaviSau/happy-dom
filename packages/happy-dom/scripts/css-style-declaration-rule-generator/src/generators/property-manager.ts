/**
 * Generates CSSStyleDeclarationPropertyManager.ts
 * The central storage and orchestration layer.
 */

import { fileHeader } from '../utils/template-utils.js';

export function generatePropertyManager(): string {
	let out = fileHeader();

	out += `import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import CSSStyleDeclarationPropertySetParser from './CSSStyleDeclarationPropertySetParser.js';
import CSSStyleDeclarationPropertyGetParser from './CSSStyleDeclarationPropertyGetParser.js';
import CSSStyleDeclarationCSSParser from '../css-parser/CSSStyleDeclarationCSSParser.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';
import { CSS_ALIAS_TO_CANONICAL } from '../property-definitions/CSSAliasDefinitions.js';

/**
 * Shorthands that toString() will attempt to collapse longhands into.
 */
const COLLAPSE_SHORTHANDS = [
\t'margin',
\t'padding',
\t'border',
\t'border-width',
\t'border-style',
\t'border-color',
\t'border-image',
\t'border-radius',
\t'outline',
\t'flex',
\t'flex-flow',
\t'overflow',
\t'gap',
\t'place-content',
\t'place-items',
\t'place-self',
\t'background',
\t'font',
\t'text-decoration',
\t'list-style',
\t'columns',
\t'overscroll-behavior',
\t'inset',
\t'margin-block',
\t'margin-inline',
\t'padding-block',
\t'padding-inline',
\t'inset-block',
\t'inset-inline',
\t'scroll-margin',
\t'scroll-padding',
\t'border-top',
\t'border-right',
\t'border-bottom',
\t'border-left',
\t'font-variant'
];

/**
 * Pre-built reverse map: longhand property name → list of collapsible shorthands
 * (in COLLAPSE_SHORTHANDS priority order) that include that longhand.
 * Built once at module load to avoid recomputing on every toString() call.
 */
const LONGHAND_TO_COLLAPSE_SHORTHANDS = new Map<string, string[]>();
for (const shorthand of COLLAPSE_SHORTHANDS) {
\tconst lhs = CSS_SHORTHAND_TO_LONGHANDS[shorthand];
\tif (!lhs) {
\t\tcontinue;
\t}
\tfor (const lh of lhs) {
\t\tif (!LONGHAND_TO_COLLAPSE_SHORTHANDS.has(lh)) {
\t\t\tLONGHAND_TO_COLLAPSE_SHORTHANDS.set(lh, []);
\t\t}
\t\tLONGHAND_TO_COLLAPSE_SHORTHANDS.get(lh)!.push(shorthand);
\t}
}

/**
 * Manages CSS property storage. Only longhands are stored internally.
 *
 * Orchestrates all behavioral contracts:
 * - B1: set() decomposes shorthands via SetParser
 * - B2: get() recomposes shorthands via GetParser
 * - B3: Longhand override naturally invalidates shorthands (consequence of B2)
 * - B4: remove() clears longhands (all for shorthand, one for longhand)
 * - B6: Invalid values are silently ignored (SetParser returns null)
 * - B7: Empty value removes property
 * - B8: Priority propagates through shorthand expansion
 * - B9: toString() collapses longhands into shorthands
 * - B10: length/item track stored longhands
 * - B12: Custom properties (--*) stored alongside standard properties
 * - B13: Aliases resolved to canonical names
 */
export default class CSSStyleDeclarationPropertyManager {
\t#properties: Record<string, ICSSStyleDeclarationPropertyValue> = {};
\t#propertyNames: string[] = [];

\t/**
\t * Constructor.
\t *
\t * @param [options] Options.
\t * @param [options.cssText] CSS string.
\t */
\tconstructor(options?: { cssText?: string }) {
\t\tif (options?.cssText) {
\t\t\tconst { rules } = CSSStyleDeclarationCSSParser.parse(options.cssText);
\t\t\tfor (const rule of rules) {
\t\t\t\tif (rule.important || !this.get(rule.name)?.important) {
\t\t\t\t\tthis.set(rule.name, rule.value, rule.important);
\t\t\t\t}
\t\t\t}
\t\t}
\t}

\t/**
\t * Returns the underlying property store (used by computed style).
\t */
\tpublic get properties(): Record<string, ICSSStyleDeclarationPropertyValue> {
\t\treturn this.#properties;
\t}

\t/**
\t * Returns property value.
\t *
\t * @param name Property name.
\t * @returns Property value.
\t */
\tpublic get(name: string): ICSSStyleDeclarationPropertyValue | null {
\t\t// Resolve alias (B13)
\t\tconst canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

\t\t// Direct longhand lookup
\t\tif (this.#properties[canonical]) {
\t\t\treturn this.#properties[canonical];
\t\t}

\t\t// Shorthand recomposition (B2)
\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[canonical];
\t\tif (longhands) {
\t\t\treturn CSSStyleDeclarationPropertyGetParser.get(canonical, this.#properties);
\t\t}

\t\treturn null;
\t}

\t/**
\t * Sets a property value.
\t *
\t * @param name Property name.
\t * @param value Property value.
\t * @param important Whether the value has !important.
\t */
\tpublic set(name: string, value: string, important: boolean): void {
\t\t// Resolve alias (B13)
\t\tconst canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

\t\t// Empty value removes (B7)
\t\tif (value === null || value === undefined || value.trim() === '') {
\t\t\tthis.remove(canonical);
\t\t\treturn;
\t\t}

\t\t// Parse and validate (B1, B6)
\t\tconst parsed = CSSStyleDeclarationPropertySetParser.parse(canonical, value, important);

\t\t// Invalid value — silently ignore (B6)
\t\tif (!parsed) {
\t\t\treturn;
\t\t}

\t\t// Store the resulting longhands
\t\tfor (const [propName, propValue] of Object.entries(parsed)) {
\t\t\tif (propValue) {
\t\t\t\tif (!this.#properties[propName]) {
\t\t\t\t\tthis.#propertyNames.push(propName);
\t\t\t\t}
\t\t\t\tthis.#properties[propName] = propValue;
\t\t\t}
\t\t}
\t}

\t/**
\t * Removes a property.
\t *
\t * @param name Property name.
\t */
\tpublic remove(name: string): void {
\t\t// Resolve alias
\t\tconst canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

\t\t// Check if it's a shorthand — remove all longhands (B4)
\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[canonical];
\t\tif (longhands) {
\t\t\tfor (const lh of longhands) {
\t\t\t\tdelete this.#properties[lh];
\t\t\t\tconst idx = this.#propertyNames.indexOf(lh);
\t\t\t\tif (idx !== -1) {
\t\t\t\t\tthis.#propertyNames.splice(idx, 1);
\t\t\t\t}
\t\t\t\t// Also recursively remove if this longhand is itself a shorthand
\t\t\t\tconst subLonghands = CSS_SHORTHAND_TO_LONGHANDS[lh];
\t\t\t\tif (subLonghands) {
\t\t\t\t\tfor (const sub of subLonghands) {
\t\t\t\t\t\tdelete this.#properties[sub];
\t\t\t\t\t\tconst subIdx = this.#propertyNames.indexOf(sub);
\t\t\t\t\t\tif (subIdx !== -1) {
\t\t\t\t\t\t\tthis.#propertyNames.splice(subIdx, 1);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}
\t\t}

\t\t// Special case: parseFont() stores 'font-variant' as a direct property key,
\t\t// but CSS_SHORTHAND_TO_LONGHANDS['font'] only lists font-variant-* sub-properties.
\t\t// Explicitly remove font-variant when removing the font shorthand.
\t\tif (canonical === 'font') {
\t\t\tdelete this.#properties['font-variant'];
\t\t\tconst fvIdx = this.#propertyNames.indexOf('font-variant');
\t\t\tif (fvIdx !== -1) {
\t\t\t\tthis.#propertyNames.splice(fvIdx, 1);
\t\t\t}
\t\t}

\t\t// Remove the property itself (longhand or custom property)
\t\tdelete this.#properties[canonical];
\t\tconst idx = this.#propertyNames.indexOf(canonical);
\t\tif (idx !== -1) {
\t\t\tthis.#propertyNames.splice(idx, 1);
\t\t}
\t}

\t/**
\t * Returns item.
\t *
\t * @param index Index.
\t * @returns Item.
\t */
\tpublic item(index: number): string {
\t\treturn this.#propertyNames[index] || '';
\t}

\t/**
\t * Returns size.
\t *
\t * @returns Size.
\t */
\tpublic size(): number {
\t\treturn this.#propertyNames.length;
\t}

\t/**
\t * Returns CSS text.
\t *
\t * @returns CSS text.
\t */
\tpublic toString(): string {
\t\tconst used = new Set<string>();
\t\tconst parts: string[] = [];

\t\tfor (const name of this.#propertyNames) {
\t\t\tif (used.has(name)) {
\t\t\t\tcontinue;
\t\t\t}

\t\t\t// Try to collapse this longhand into a shorthand, checking candidates in
\t\t\t// COLLAPSE_SHORTHANDS priority order (most-general first).
\t\t\tconst candidateShorthands = LONGHAND_TO_COLLAPSE_SHORTHANDS.get(name);
\t\t\tlet collapsed = false;

\t\t\tif (candidateShorthands) {
\t\t\t\tfor (const shorthand of candidateShorthands) {
\t\t\t\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[shorthand];
\t\t\t\t\tif (!longhands) {
\t\t\t\t\t\tcontinue;
\t\t\t\t\t}
\t\t\t\t\tif (!longhands.every((lh) => this.#properties[lh] && !used.has(lh))) {
\t\t\t\t\t\tcontinue;
\t\t\t\t\t}
\t\t\t\t\tconst composed = CSSStyleDeclarationPropertyGetParser.get(shorthand, this.#properties);
\t\t\t\t\tif (composed) {
\t\t\t\t\t\tfor (const lh of longhands) {
\t\t\t\t\t\t\tused.add(lh);
\t\t\t\t\t\t}
\t\t\t\t\t\tconst imp = composed.important ? ' !important' : '';
\t\t\t\t\t\tparts.push(\`\${shorthand}: \${composed.value}\${imp};\`);
\t\t\t\t\t\tcollapsed = true;
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}

\t\t\tif (!collapsed) {
\t\t\t\tused.add(name);
\t\t\t\tconst prop = this.#properties[name];
\t\t\t\tif (!prop) {
\t\t\t\t\tcontinue;
\t\t\t\t}
\t\t\t\tconst imp = prop.important ? ' !important' : '';
\t\t\t\tparts.push(\`\${name}: \${prop.value}\${imp};\`);
\t\t\t}
\t\t}

\t\treturn parts.join(' ');
\t}
}
`;

	return out;
}
