/**
 * Generates CSSStyleDeclarationPropertySetParser.ts
 *
 * The SetParser is the core of B1 (shorthand → longhand expansion).
 * It validates incoming CSS values and returns a map of longhand properties.
 */

import type { PropertyIR, PropertyDefinition } from '../ir/property-ir.js';
import { fileHeader, quote, objectKey, shorthandToMethodName } from '../utils/template-utils.js';

/**
 * Properties that are colors.
 */
const COLOR_PROPERTIES = new Set([
	'color',
	'background-color',
	'border-top-color',
	'border-right-color',
	'border-bottom-color',
	'border-left-color',
	'border-block-start-color',
	'border-block-end-color',
	'border-inline-start-color',
	'border-inline-end-color',
	'outline-color',
	'text-decoration-color',
	'column-rule-color',
	'caret-color',
	'accent-color',
	'flood-color',
	'lighting-color',
	'stop-color',
	'fill',
	'stroke',
	'-webkit-text-fill-color',
	'-webkit-text-stroke-color',
	'text-emphasis-color',
	'scrollbar-color'
]);

/**
 * Properties that accept length/percentage values.
 */
const LENGTH_PROPERTIES = new Set([
	'width',
	'height',
	'min-width',
	'min-height',
	'max-width',
	'max-height',
	'top',
	'right',
	'bottom',
	'left',
	'margin-top',
	'margin-right',
	'margin-bottom',
	'margin-left',
	'padding-top',
	'padding-right',
	'padding-bottom',
	'padding-left',
	'border-top-width',
	'border-right-width',
	'border-bottom-width',
	'border-left-width',
	'font-size',
	'line-height',
	'letter-spacing',
	'word-spacing',
	'text-indent',
	'outline-width',
	'outline-offset',
	'column-width',
	'column-gap',
	'row-gap',
	'flex-basis',
	'gap',
	'block-size',
	'inline-size',
	'min-block-size',
	'min-inline-size',
	'max-block-size',
	'max-inline-size',
	'margin-block-start',
	'margin-block-end',
	'margin-inline-start',
	'margin-inline-end',
	'padding-block-start',
	'padding-block-end',
	'padding-inline-start',
	'padding-inline-end',
	'border-block-start-width',
	'border-block-end-width',
	'border-inline-start-width',
	'border-inline-end-width',
	'inset-block-start',
	'inset-block-end',
	'inset-inline-start',
	'inset-inline-end',
	'scroll-margin-top',
	'scroll-margin-right',
	'scroll-margin-bottom',
	'scroll-margin-left',
	'scroll-padding-top',
	'scroll-padding-right',
	'scroll-padding-bottom',
	'scroll-padding-left',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-right-radius',
	'border-bottom-left-radius',
	'border-start-start-radius',
	'border-start-end-radius',
	'border-end-start-radius',
	'border-end-end-radius',
	'cx',
	'cy',
	'r',
	'rx',
	'ry',
	'x',
	'y',
	'stroke-width',
	'stroke-dashoffset'
]);

/**
 * Properties that accept only non-negative lengths.
 */
const NON_NEGATIVE_LENGTH_PROPERTIES = new Set([
	'width',
	'height',
	'min-width',
	'min-height',
	'padding-top',
	'padding-right',
	'padding-bottom',
	'padding-left',
	'border-top-width',
	'border-right-width',
	'border-bottom-width',
	'border-left-width',
	'font-size',
	'outline-width',
	'block-size',
	'inline-size',
	'min-block-size',
	'min-inline-size',
	'padding-block-start',
	'padding-block-end',
	'padding-inline-start',
	'padding-inline-end',
	'border-block-start-width',
	'border-block-end-width',
	'border-inline-start-width',
	'border-inline-end-width',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-right-radius',
	'border-bottom-left-radius',
	'scroll-padding-top',
	'scroll-padding-right',
	'scroll-padding-bottom',
	'scroll-padding-left',
	'column-width',
	'column-gap',
	'row-gap',
	'r',
	'rx',
	'ry',
	'stroke-width'
]);

/**
 * Number-only properties.
 */
const NUMBER_PROPERTIES = new Set([
	'opacity',
	'flex-grow',
	'flex-shrink',
	'order',
	'orphans',
	'widows',
	'z-index',
	'tab-size',
	'font-weight',
	'fill-opacity',
	'stroke-opacity',
	'stop-opacity',
	'flood-opacity',
	'shape-image-threshold',
	'font-size-adjust'
]);

export function generatePropertyTypeSets(ir: PropertyIR): string {
	let out = fileHeader();

	const emitSet = (exportName: string, items: Iterable<string>): void => {
		const arr = [...items];
		out += `/**\n * @see CSSStyleDeclarationPropertySetParser\n */\nexport const ${exportName} = new Set([\n`;
		for (let i = 0; i < arr.length; i++) {
			out += `\t${quote(arr[i])}${i < arr.length - 1 ? ',' : ''}\n`;
		}
		out += `]);\n\n`;
	};

	emitSet('CSS_COLOR_PROPERTIES', COLOR_PROPERTIES);
	emitSet('CSS_LENGTH_PROPERTIES', LENGTH_PROPERTIES);
	emitSet('CSS_NON_NEGATIVE_LENGTH_PROPERTIES', NON_NEGATIVE_LENGTH_PROPERTIES);
	emitSet('CSS_NUMBER_PROPERTIES', NUMBER_PROPERTIES);

	// Keyword-only properties: properties whose typedomTypes contain ONLY 'Keyword'
	const keywordOnlyProps: string[] = [];
	for (const prop of ir.longhands) {
		if (prop.name.startsWith('-internal-')) {
			continue;
		}
		if (prop.keywords && prop.keywords.length > 0) {
			if (
				!COLOR_PROPERTIES.has(prop.name) &&
				!LENGTH_PROPERTIES.has(prop.name) &&
				!NUMBER_PROPERTIES.has(prop.name)
			) {
				const types = prop.typedomTypes || [];
				const isKeywordOnly = types.length === 0 || types.every((t) => t === 'Keyword');
				if (isKeywordOnly) {
					keywordOnlyProps.push(prop.name);
				}
			}
		}
	}
	emitSet('CSS_KEYWORD_ONLY_PROPERTIES', keywordOnlyProps);

	return out;
}

export function generateSetParser(ir: PropertyIR): string {
	let out = fileHeader();

	out += `import CSSStyleDeclarationValueParser from './CSSStyleDeclarationValueParser.js';
import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';
import {
\tCSS_COLOR_PROPERTIES,
\tCSS_LENGTH_PROPERTIES,
\tCSS_NON_NEGATIVE_LENGTH_PROPERTIES,
\tCSS_NUMBER_PROPERTIES,
\tCSS_KEYWORD_ONLY_PROPERTIES
} from '../property-definitions/CSSPropertyTypeSets.js';
import { CSS_LONGHAND_PROPERTIES } from '../property-definitions/CSSPropertyDefinitions.js';

export interface IPropertyValueMap {
\t[propertyName: string]: ICSSStyleDeclarationPropertyValue | undefined;
}

// Background component keywords used to validate catch-all background values.
const BACKGROUND_KEYWORDS = new Set([
\t'center',
\t'top',
\t'bottom',
\t'left',
\t'right',
\t'repeat',
\t'repeat-x',
\t'repeat-y',
\t'no-repeat',
\t'round',
\t'space',
\t'fixed',
\t'local',
\t'scroll',
\t'border-box',
\t'padding-box',
\t'content-box',
\t'cover',
\t'contain',
\t'auto'
]);

// Border style keywords used by border shorthand parsing
const BORDER_STYLE_KEYWORDS = new Set([
\t'none',
\t'hidden',
\t'dotted',
\t'dashed',
\t'solid',
\t'double',
\t'groove',
\t'ridge',
\t'inset',
\t'outset'
]);

// Border width keywords
const BORDER_WIDTH_KEYWORDS = new Set(['thin', 'medium', 'thick']);

/**
 * Splits a CSS value string on whitespace while respecting parentheses, so that
 * functional values like rgba(135, 200, 150, 0.5) are kept as a single token.
 * @param value
 */
function splitCSSTokens(value: string): string[] {
\tconst tokens: string[] = [];
\tlet depth = 0;
\tlet current = '';
\tfor (const ch of value) {
\t\tif (ch === '(') {
\t\t\tdepth++;
\t\t\tcurrent += ch;
\t\t} else if (ch === ')') {
\t\t\tdepth--;
\t\t\tcurrent += ch;
\t\t} else if (/\\s/.test(ch) && depth === 0) {
\t\t\tif (current) {
\t\t\t\ttokens.push(current);
\t\t\t\tcurrent = '';
\t\t\t}
\t\t} else {
\t\t\tcurrent += ch;
\t\t}
\t}
\tif (current) {
\t\ttokens.push(current);
\t}
\treturn tokens;
}

/**
 * Splits a CSS value on commas at top-level (not inside parentheses).
 * Used for multi-URL, multi-gradient background-image values.
 * @param value
 */
function splitTopLevelCommas(value: string): string[] {
\tconst parts: string[] = [];
\tlet current = '';
\tlet depth = 0;
\tfor (const ch of value) {
\t\tif (ch === '(') {
\t\t\tdepth++;
\t\t\tcurrent += ch;
\t\t} else if (ch === ')') {
\t\t\tdepth--;
\t\t\tcurrent += ch;
\t\t} else if (ch === ',' && depth === 0) {
\t\t\tparts.push(current);
\t\t\tcurrent = '';
\t\t} else {
\t\t\tcurrent += ch;
\t\t}
\t}
\tparts.push(current);
\treturn parts;
}

/**
 * Parses a CSS aspect-ratio value.
 * Normalizes '2' → '2 / 1', '16/9' → '16 / 9', 'auto 16/9' → 'auto 16 / 9', etc.
 * Returns null for invalid values.
 * @param value
 */
function parseAspectRatio(value: string): string | null {
\tconst lower = value.toLowerCase().replace(/\\s+/g, ' ').trim();
\tif (lower === 'auto') {
\t\treturn 'auto';
\t}

\t// Split into space-separated tokens
\tconst tokens = lower.split(' ');

\tlet autoPrefix = false;
\tlet ratioStr = '';

\t// Handle 'auto <ratio>' or '<ratio> auto'
\tif (tokens[0] === 'auto' && tokens.length > 1) {
\t\tautoPrefix = true;
\t\tratioStr = tokens.slice(1).join(' ');
\t} else if (tokens[tokens.length - 1] === 'auto' && tokens.length > 1) {
\t\tautoPrefix = true;
\t\tratioStr = tokens.slice(0, -1).join(' ');
\t} else {
\t\tratioStr = lower;
\t}

\t// Parse the ratio: either 'N' or 'N/D' or 'N / D'
\tconst ratioParts = ratioStr.replace(/\\s*\\/\\s*/g, '/').split('/');
\tconst a = parseFloat(ratioParts[0]);
\tif (isNaN(a) || a < 0) {
\t\treturn null;
\t}
\tconst b = ratioParts.length === 2 ? parseFloat(ratioParts[1]) : 1;
\tif (isNaN(b) || b < 0) {
\t\treturn null;
\t}
\tconst ratioNorm = \`\${a} / \${b}\`;
\treturn autoPrefix ? \`auto \${ratioNorm}\` : ratioNorm;
}

/**
 * Normalizes a font-family value.
 * - Quote-aware comma split (don't split inside quoted strings)
 * - Quoted single-word → unquote; quoted multi-word → re-quote as double-quoted
 * - Unquoted multi-word → quote; generic keywords → lowercase; single-word → lowercase
 * - Returns null for invalid input (unmatched/unexpected quotes in unquoted names)
 * @param value
 */
function normalizeFontFamily(value: string): string | null {
\tconst generics = new Set([
\t\t'serif',
\t\t'sans-serif',
\t\t'monospace',
\t\t'cursive',
\t\t'fantasy',
\t\t'system-ui',
\t\t'ui-serif',
\t\t'ui-sans-serif',
\t\t'ui-monospace',
\t\t'ui-rounded',
\t\t'math',
\t\t'emoji',
\t\t'fangsong'
\t]);

\t// Split by commas that are NOT inside quoted strings
\tconst families: string[] = [];
\tlet current = '';
\tlet inQuote: string | null = null;
\tfor (let i = 0; i < value.length; i++) {
\t\tconst ch = value[i];
\t\tif (inQuote) {
\t\t\tif (ch === inQuote) {
\t\t\t\tcurrent += ch;
\t\t\t\tinQuote = null;
\t\t\t} else {
\t\t\t\tcurrent += ch;
\t\t\t}
\t\t} else if (ch === '"' || ch === "'") {
\t\t\tinQuote = ch;
\t\t\tcurrent += ch;
\t\t} else if (ch === ',') {
\t\t\tfamilies.push(current.trim());
\t\t\tcurrent = '';
\t\t} else {
\t\t\tcurrent += ch;
\t\t}
\t}
\tfamilies.push(current.trim());

\tconst normalized: string[] = [];
\tfor (const f of families) {
\t\tif (!f) {
\t\t\treturn null; // empty family (e.g. trailing comma) — invalid
\t\t}
\t\tif (f.startsWith('"') || f.startsWith("'")) {
\t\t\t// Quoted family name — extract content (handle unclosed quotes)
\t\t\tconst quoteChar = f[0];
\t\t\tconst closeIdx = f.indexOf(quoteChar, 1);
\t\t\tconst inner = closeIdx !== -1 ? f.slice(1, closeIdx) : f.slice(1);
\t\t\tconst words = inner.trim().split(/\\s+/);
\t\t\tif (words.length === 1) {
\t\t\t\t// Single word quoted → unquote
\t\t\t\tnormalized.push(words[0]);
\t\t\t} else {
\t\t\t\t// Multi-word quoted → double-quote
\t\t\t\tnormalized.push(\`"\${inner.trim()}"\`);
\t\t\t}
\t\t} else {
\t\t\t// Unquoted family name
\t\t\t// An unquoted name must not contain quote characters (invalid CSS)
\t\t\tif (f.includes('"') || f.includes("'")) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tconst lower = f.toLowerCase();
\t\t\tif (generics.has(lower)) {
\t\t\t\tnormalized.push(lower);
\t\t\t} else if (f.includes(' ')) {
\t\t\t\t// Multi-word unquoted → quote
\t\t\t\tnormalized.push(\`"\${f}"\`);
\t\t\t} else {
\t\t\t\tnormalized.push(f);
\t\t\t}
\t\t}
\t}
\treturn normalized.join(', ');
}

`;
	out += `
/**
 * Parses and validates CSS values, decomposing shorthands into longhands (B1).
 * Returns a map of longhand property → { value, important }, or null if invalid.
 */
export default class CSSStyleDeclarationPropertySetParser {
`;

	// Generate the main dispatch method
	out += `
\t/**
\t * Parse a property value and return the resulting longhand map.
\t * Returns null if the value is invalid (B6).
\t *
\t * @param name Property name (kebab-case).
\t * @param value Raw CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Map of longhand properties, or null if invalid.
\t */
\tpublic static parse(name: string, value: string, important: boolean): IPropertyValueMap | null {
\t\tconst trimmed = value.trim();
\t\tif (!trimmed) {
\t\t\treturn null;
\t\t}

\t\t// CSS custom properties: accept any value
\t\tif (name.startsWith('--')) {
\t\t\treturn { [name]: { value: trimmed, important } };
\t\t}

\t\t// Check for CSS variable reference — always accepted
\t\tconst variable = CSSStyleDeclarationValueParser.getVariable(trimmed);
\t\tif (variable) {
\t\t\treturn { [name]: { value: variable, important } };
\t\t}

\t\t// Check for CSS-wide global keyword — always accepted
\t\tconst global = CSSStyleDeclarationValueParser.getGlobal(trimmed);
\t\tif (global) {
\t\t\t// For the 'font' shorthand, only expand to the 7 standard longhands
\t\t\t// (not all 18+ from CSS_SHORTHAND_TO_LONGHANDS['font'])
\t\t\tif (name === 'font') {
\t\t\t\tconst result: IPropertyValueMap = {};
\t\t\t\tfor (const lh of [
\t\t\t\t\t'font-style',
\t\t\t\t\t'font-variant',
\t\t\t\t\t'font-weight',
\t\t\t\t\t'font-stretch',
\t\t\t\t\t'font-size',
\t\t\t\t\t'line-height',
\t\t\t\t\t'font-family'
\t\t\t\t]) {
\t\t\t\t\tresult[lh] = { value: global, important };
\t\t\t\t}
\t\t\t\treturn result;
\t\t\t}
\t\t\t// For shorthands, expand global to all longhands
\t\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
\t\t\tif (longhands) {
\t\t\t\tconst result: IPropertyValueMap = {};
\t\t\t\tfor (const lh of longhands) {
\t\t\t\t\tresult[lh] = { value: global, important };
\t\t\t\t}
\t\t\t\treturn result;
\t\t\t}
\t\t\treturn { [name]: { value: global, important } };
\t\t}

\t\t// Dispatch to shorthand parsers
\t\tswitch (name) {
${generateShorthandDispatch(ir)}
\t\t}

\t\t// Dispatch to longhand parsers
\t\treturn this.parseLonghand(name, trimmed, important);
\t}

`;

	// Generate longhand parser
	out += generateLonghandParser(ir);

	// Generate shorthand parsing methods
	out += generateBoxModelExpander(
		'margin',
		['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
		true,
		4,
		true
	);
	out += generateBoxModelExpander(
		'padding',
		['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
		false
	);
	out += generateBoxModelExpander('inset', ['top', 'right', 'bottom', 'left'], true, 4, true);
	out += generateBoxModelExpander(
		'scroll-margin',
		['scroll-margin-top', 'scroll-margin-right', 'scroll-margin-bottom', 'scroll-margin-left'],
		true
	);
	out += generateBoxModelExpander(
		'scroll-padding',
		['scroll-padding-top', 'scroll-padding-right', 'scroll-padding-bottom', 'scroll-padding-left'],
		false
	);
	out += generateBoxModelExpander(
		'margin-block',
		['margin-block-start', 'margin-block-end'],
		true,
		2,
		true
	);
	out += generateBoxModelExpander(
		'margin-inline',
		['margin-inline-start', 'margin-inline-end'],
		true,
		2,
		true
	);
	out += generateBoxModelExpander(
		'padding-block',
		['padding-block-start', 'padding-block-end'],
		false,
		2
	);
	out += generateBoxModelExpander(
		'padding-inline',
		['padding-inline-start', 'padding-inline-end'],
		false,
		2
	);
	out += generateBoxModelExpander(
		'inset-block',
		['inset-block-start', 'inset-block-end'],
		true,
		2,
		true
	);
	out += generateBoxModelExpander(
		'inset-inline',
		['inset-inline-start', 'inset-inline-end'],
		true,
		2,
		true
	);
	out += generateBoxModelExpander(
		'scroll-margin-block',
		['scroll-margin-block-start', 'scroll-margin-block-end'],
		true,
		2
	);
	out += generateBoxModelExpander(
		'scroll-margin-inline',
		['scroll-margin-inline-start', 'scroll-margin-inline-end'],
		true,
		2
	);
	out += generateBoxModelExpander(
		'scroll-padding-block',
		['scroll-padding-block-start', 'scroll-padding-block-end'],
		false,
		2
	);
	out += generateBoxModelExpander(
		'scroll-padding-inline',
		['scroll-padding-inline-start', 'scroll-padding-inline-end'],
		false,
		2
	);
	out += generateBorderRadiusExpander();
	out += generateBorderExpander();
	out += generateBorderSideExpander(
		'border-top',
		'border-top-width',
		'border-top-style',
		'border-top-color'
	);
	out += generateBorderSideExpander(
		'border-right',
		'border-right-width',
		'border-right-style',
		'border-right-color'
	);
	out += generateBorderSideExpander(
		'border-bottom',
		'border-bottom-width',
		'border-bottom-style',
		'border-bottom-color'
	);
	out += generateBorderSideExpander(
		'border-left',
		'border-left-width',
		'border-left-style',
		'border-left-color'
	);
	out += generateBorderSideExpander(
		'border-block-start',
		'border-block-start-width',
		'border-block-start-style',
		'border-block-start-color'
	);
	out += generateBorderSideExpander(
		'border-block-end',
		'border-block-end-width',
		'border-block-end-style',
		'border-block-end-color'
	);
	out += generateBorderSideExpander(
		'border-inline-start',
		'border-inline-start-width',
		'border-inline-start-style',
		'border-inline-start-color'
	);
	out += generateBorderSideExpander(
		'border-inline-end',
		'border-inline-end-width',
		'border-inline-end-style',
		'border-inline-end-color'
	);
	out += generateBorderWidthStyleColorExpander(
		'border-width',
		['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
		'width'
	);
	out += generateBorderWidthStyleColorExpander(
		'border-style',
		['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
		'style'
	);
	out += generateBorderWidthStyleColorExpander(
		'border-color',
		['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
		'color'
	);
	out += generateFlexExpander();
	out += generateFlexFlowExpander();
	out += generateOutlineExpander();
	out += generateOverflowExpander();
	out += generateGapExpander();
	out += generatePlaceExpander('place-content', 'align-content', 'justify-content');
	out += generatePlaceExpander('place-items', 'align-items', 'justify-items');
	out += generatePlaceExpander('place-self', 'align-self', 'justify-self');
	out += generateOverscrollBehaviorExpander();
	out += generateFontExpander();
	out += generateBackgroundPositionExpander();
	out += generateBackgroundExpander();
	out += generateIsGradientToken();
	out += generateBorderImageExpander();
	out += generateTextDecorationExpander();
	out += generateListStyleExpander();
	out += generateColumnsExpander();
	out += generateGenericShorthandFallback(ir);

	out += `}\n`;

	return out;
}

function generateShorthandDispatch(ir: PropertyIR): string {
	// Ordered list of shorthand names and their dispatch targets.
	// - null: use shorthandToMethodName() to derive the method name
	// - 'longhand': dispatch to parseLonghand(name, trimmed, important)
	// - string: use that string as the method name
	const handledShorthands: Array<[string, string | null | 'longhand']> = [
		['margin', null],
		['padding', null],
		['inset', null],
		['margin-block', null],
		['margin-inline', null],
		['padding-block', null],
		['padding-inline', null],
		['inset-block', null],
		['inset-inline', null],
		['scroll-margin', null],
		['scroll-margin-block', null],
		['scroll-margin-inline', null],
		['scroll-padding', null],
		['scroll-padding-block', null],
		['scroll-padding-inline', null],
		['border', null],
		['border-top', null],
		['border-right', null],
		['border-bottom', null],
		['border-left', null],
		['border-block-start', null],
		['border-block-end', null],
		['border-inline-start', null],
		['border-inline-end', null],
		['border-width', null],
		['border-style', null],
		['border-color', null],
		['border-radius', null],
		['flex', null],
		['flex-flow', null],
		['outline', null],
		['overflow', 'longhand'],
		['animation', 'longhand'],
		['gap', null],
		['place-content', null],
		['place-items', null],
		['place-self', null],
		['overscroll-behavior', null],
		['font', null],
		['background', null],
		['background-position', null],
		['border-image', null],
		['text-decoration', null],
		['list-style', null],
		['columns', null]
	];

	let out = '';
	for (const [name, override] of handledShorthands) {
		out += `\t\t\tcase ${quote(name)}:\n`;
		if (override === 'longhand') {
			out += `\t\t\t\treturn this.parseLonghand(name, trimmed, important);\n`;
		} else {
			const methodName = override ?? shorthandToMethodName(name);
			out += `\t\t\t\treturn this.${methodName}(trimmed, important);\n`;
		}
	}

	// All other shorthands get the generic fallback
	out += `\t\t\tdefault: {\n`;
	out += `\t\t\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[name];\n`;
	out += `\t\t\t\tif (longhands) {\n`;
	out += `\t\t\t\t\treturn this.parseGenericShorthand(name, trimmed, important);\n`;
	out += `\t\t\t\t}\n`;
	out += `\t\t\t\tbreak;\n`;
	out += `\t\t\t}\n`;

	return out;
}

function generateLonghandParser(ir: PropertyIR): string {
	let out = `\t/**
\t * Parse a longhand property value.
\t *
\t * @param name Property name (kebab-case).
\t * @param value Raw CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Map of longhand properties, or null if invalid.
\t */
\tprivate static parseLonghand(
\t\tname: string,
\t\tvalue: string,
\t\timportant: boolean
\t): IPropertyValueMap | null {
\t\tlet parsed: string | null = null;

`;

	// Keyword-only properties (Tier 1)
	out += `\t\t// Tier 1: Keyword validation from IR data
\t\tparsed = CSSStyleDeclarationValueParser.getKeyword(name, value);
\t\tif (parsed !== null) {
\t\t\treturn { [name]: { value: parsed, important } };
\t\t}

`;

	// Color properties (Tier 2)
	out += `\t\t// Tier 2: Color properties
\t\tif (CSS_COLOR_PROPERTIES.has(name)) {
\t\t\tparsed = CSSStyleDeclarationValueParser.getColor(value);
\t\t\tif (parsed !== null) {
\t\t\t\treturn { [name]: { value: parsed, important } };
\t\t\t}
\t\t}

`;

	// Length properties (Tier 2)
	out += `\t\t// Tier 2: Length/measurement properties
\t\tif (CSS_LENGTH_PROPERTIES.has(name)) {
\t\t\tconst acceptNegative = !CSS_NON_NEGATIVE_LENGTH_PROPERTIES.has(name);
\t\t\tparsed = CSSStyleDeclarationValueParser.getContentMeasurement(value, acceptNegative);
\t\t\tif (parsed !== null) {
\t\t\t\treturn { [name]: { value: parsed, important } };
\t\t\t}
\t\t}

`;

	// Special: line-height accepts unitless numbers
	out += `\t\t// Special case: line-height accepts unitless numbers
\t\tif (name === 'line-height') {
\t\t\tconst num = CSSStyleDeclarationValueParser.getNumber(value, false);
\t\t\tif (num !== null) {
\t\t\t\treturn { [name]: { value: num, important } };
\t\t\t}
\t\t}

`;

	// Number properties (Tier 2)
	out += `\t\t// Tier 2: Number properties
\t\tif (CSS_NUMBER_PROPERTIES.has(name)) {
\t\t\tconst acceptNeg =
\t\t\t\tname !== 'opacity' &&
\t\t\t\tname !== 'fill-opacity' &&
\t\t\t\tname !== 'stroke-opacity' &&
\t\t\t\tname !== 'stop-opacity' &&
\t\t\t\tname !== 'flood-opacity';
\t\t\tparsed = CSSStyleDeclarationValueParser.getNumber(value, acceptNeg);
\t\t\tif (parsed !== null) {
\t\t\t\treturn { [name]: { value: parsed, important } };
\t\t\t}
\t\t}

`;

	// Special: font-style oblique <angle>
	out += `\t\t// Special case: font-style accepts \`oblique <angle>\` in addition to plain keywords
\t\tif (name === 'font-style') {
\t\t\tconst lower = value.trim().toLowerCase();
\t\t\tif (/^oblique\\s+-?\\d*\\.?\\d+(deg|grad|rad|turn)$/.test(lower)) {
\t\t\t\treturn { [name]: { value: lower, important } };
\t\t\t}
\t\t}

`;

	// Special: font-family normalization
	out += `\t\t// Special case: font-family — normalize multi-word unquoted names to quoted form
\t\tif (name === 'font-family') {
\t\t\tconst normalized = normalizeFontFamily(value.trim());
\t\t\tif (normalized === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\treturn { [name]: { value: normalized, important } };
\t\t}

`;

	// Special: aspect-ratio
	out += `\t\t// Special case: aspect-ratio accepts <ratio> values like '2', '16/9', '16/9 auto', 'auto 16/9'
\t\tif (name === 'aspect-ratio') {
\t\t\tconst r = parseAspectRatio(value.trim());
\t\t\tif (r !== null) {
\t\t\t\treturn { [name]: { value: r, important } };
\t\t\t}
\t\t\treturn null;
\t\t}

`;

	// Keyword-only: allow multi-keyword/functional to fall through
	out += `\t\t// Reject invalid values for keyword-only properties, but allow multi-keyword or
\t\t// functional values (containing spaces or '(') to fall through to the typed checks.
\t\tif (CSS_KEYWORD_ONLY_PROPERTIES.has(name)) {
\t\t\tconst lower = value.trim().toLowerCase();
\t\t\tif (!lower.includes(' ') && !lower.includes('(')) {
\t\t\t\treturn null;
\t\t\t}
\t\t\t// Multi-keyword / functional value — fall through to fallback
\t\t}

`;

	// Reject typed properties that failed above
	out += `\t\t// Reject invalid values for typed properties (color/length/number) that failed validation above
\t\tif (
\t\t\tCSS_COLOR_PROPERTIES.has(name) ||
\t\t\tCSS_LENGTH_PROPERTIES.has(name) ||
\t\t\tCSS_NUMBER_PROPERTIES.has(name)
\t\t) {
\t\t\treturn null;
\t\t}

`;

	// Fallback with CSS_LONGHAND_PROPERTIES check
	out += `\t\t// Fallback: only accept values for known CSS longhand properties or vendor-prefixed properties.
\t\t// Rejecting unknown property names matches Chrome's behavior.
\t\tconst trimmed = value.trim();
\t\tif (
\t\t\ttrimmed &&
\t\t\t(CSS_LONGHAND_PROPERTIES[name] ||
\t\t\t\tname === 'src' ||
\t\t\t\tname === 'unicode-range' ||
\t\t\t\tname.startsWith('-webkit-') ||
\t\t\t\tname.startsWith('-moz-') ||
\t\t\t\tname.startsWith('-ms-') ||
\t\t\t\tname.startsWith('-o-'))
\t\t) {
\t\t\t// Handle multi-URL / multi-gradient values (comma-separated at top level)
\t\t\tconst parts = splitTopLevelCommas(trimmed);
\t\t\tif (parts.length > 1) {
\t\t\t\t// Normalize each part individually and rejoin
\t\t\t\tconst normalizedParts = parts.map((p) => {
\t\t\t\t\tconst pt = p.trim();
\t\t\t\t\tif (pt.toLowerCase().startsWith('url(')) {
\t\t\t\t\t\treturn CSSStyleDeclarationValueParser.getURL(pt) ?? pt;
\t\t\t\t\t}
\t\t\t\t\tconst gradient = CSSStyleDeclarationValueParser.getGradient(pt);
\t\t\t\t\tif (gradient !== null) {
\t\t\t\t\t\treturn gradient;
\t\t\t\t\t}
\t\t\t\t\treturn pt;
\t\t\t\t});
\t\t\t\treturn { [name]: { value: normalizedParts.join(', '), important } };
\t\t\t}
\t\t\t// Single value — normalize url() values or attempt length normalization
\t\t\tif (trimmed.toLowerCase().startsWith('url(')) {
\t\t\t\tconst normalized = CSSStyleDeclarationValueParser.getURL(trimmed);
\t\t\t\treturn { [name]: { value: normalized ?? trimmed, important } };
\t\t\t}
\t\t\tconst gradient = CSSStyleDeclarationValueParser.getGradient(trimmed);
\t\t\tif (gradient !== null) {
\t\t\t\treturn { [name]: { value: gradient, important } };
\t\t\t}
\t\t\t// Try to normalize whitespace-separated length tokens
\t\t\tconst tokens = splitCSSTokens(trimmed);
\t\t\tconst normalizedTokens = tokens.map((tok) => {
\t\t\t\tconst len = CSSStyleDeclarationValueParser.getLength(tok);
\t\t\t\treturn len !== null ? len : tok;
\t\t\t});
\t\t\treturn { [name]: { value: normalizedTokens.join(' '), important } };
\t\t}

\t\treturn null;
\t}

`;

	return out;
}


function generateBoxModelExpander(
	shorthand: string,
	longhands: string[],
	acceptNegative: boolean,
	maxValues = 4,
	acceptAuto = false
): string {
	const methodName = shorthandToMethodName(shorthand);
	const validator = acceptAuto
		? `CSSStyleDeclarationValueParser.getContentMeasurement(part, ${acceptNegative})`
		: `CSSStyleDeclarationValueParser.getLength(part, ${acceptNegative})`;
	let out = `
\t/**
\t * Parse ${shorthand} shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static ${methodName}(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
`;
	if (maxValues === 4) {
		out += `\t\tif (parts.length < 1 || parts.length > 4) {
\t\t\treturn null;
\t\t}

\t\tconst validated: string[] = [];
\t\tfor (const part of parts) {
\t\t\tconst v = ${validator};
\t\t\tif (v === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tvalidated.push(v);
\t\t}

\t\tconst [top, right = top, bottom = top, left = right] = validated;
\t\treturn {
\t\t\t${objectKey(longhands[0])}: { value: top, important },
\t\t\t${objectKey(longhands[1])}: { value: right, important },
\t\t\t${objectKey(longhands[2])}: { value: bottom, important },
\t\t\t${objectKey(longhands[3])}: { value: left, important }
\t\t};
\t}
`;
	} else {
		// 2-value (block/inline)
		out += `\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst validated: string[] = [];
\t\tfor (const part of parts) {
\t\t\tconst v = ${validator};
\t\t\tif (v === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tvalidated.push(v);
\t\t}

\t\tconst [start, end = start] = validated;
\t\treturn {
\t\t\t${objectKey(longhands[0])}: { value: start, important },
\t\t\t${objectKey(longhands[1])}: { value: end, important }
\t\t};
\t}
`;
	}
	return out;
}

function generateBorderRadiusExpander(): string {
	return `
\t/**
\t * Parse border-radius shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBorderRadius(value: string, important: boolean): IPropertyValueMap | null {
\t\t// border-radius: top-left top-right bottom-right bottom-left
\t\t// Can also have / for horizontal/vertical radii (e.g. 10px 20px / 5px 10px)
\t\tconst slashParts = value.split('/').map(s => s.trim());
\t\tif (slashParts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst hParts = slashParts[0].split(/\\s+/);
\t\tif (hParts.length < 1 || hParts.length > 4) {
\t\t\treturn null;
\t\t}

\t\tfor (const p of hParts) {
\t\t\tif (CSSStyleDeclarationValueParser.getLength(p, false) === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\tif (slashParts.length === 2) {
\t\t\tconst vParts = slashParts[1].split(/\\s+/);
\t\t\tif (vParts.length < 1 || vParts.length > 4) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tfor (const p of vParts) {
\t\t\t\tif (CSSStyleDeclarationValueParser.getLength(p, false) === null) {
\t\t\t\t\treturn null;
\t\t\t\t}
\t\t\t}
\t\t\t// Store as combined horizontal/vertical values per corner
\t\t\tconst [htl, htr = htl, hbr = htl, hbl = htr] = hParts;
\t\t\tconst [vtl, vtr = vtl, vbr = vtl, vbl = vtr] = vParts;
\t\t\treturn {
\t\t\t\t'border-top-left-radius': { value: htl + ' ' + vtl, important },
\t\t\t\t'border-top-right-radius': { value: htr + ' ' + vtr, important },
\t\t\t\t'border-bottom-right-radius': { value: hbr + ' ' + vbr, important },
\t\t\t\t'border-bottom-left-radius': { value: hbl + ' ' + vbl, important }
\t\t\t};
\t\t}

\t\tconst [tl, tr = tl, br = tl, bl = tr] = hParts;
\t\treturn {
\t\t\t'border-top-left-radius': { value: tl, important },
\t\t\t'border-top-right-radius': { value: tr, important },
\t\t\t'border-bottom-right-radius': { value: br, important },
\t\t\t'border-bottom-left-radius': { value: bl, important }
\t\t};
\t}
`;
}

function generateBorderExpander(): string {
	return `
\t/**
\t * Parse border shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBorder(value: string, important: boolean): IPropertyValueMap | null {
\t\treturn this.parseBorderSideToAll(value, important);
\t}
\t/**
\t * Parse a border value (width style color) and expand to all 4 sides.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBorderSideToAll(
\t\tvalue: string,
\t\timportant: boolean
\t): IPropertyValueMap | null {
\t\tconst parsed = this.parseBorderComponents(value);
\t\tif (!parsed) {
\t\t\treturn null;
\t\t}

\t\tconst { width, style, color } = parsed;
\t\tconst result: IPropertyValueMap = {};
\t\tconst sides = ['top', 'right', 'bottom', 'left'];
\t\tfor (const side of sides) {
\t\t\tresult[\`border-\${side}-width\`] = { value: width, important };
\t\t}
\t\tfor (const side of sides) {
\t\t\tresult[\`border-\${side}-style\`] = { value: style, important };
\t\t}
\t\tfor (const side of sides) {
\t\t\tresult[\`border-\${side}-color\`] = { value: color, important };
\t\t}
\t\t// Reset border-image
\t\tresult['border-image-source'] = { value: 'initial', important };
\t\tresult['border-image-slice'] = { value: 'initial', important };
\t\tresult['border-image-width'] = { value: 'initial', important };
\t\tresult['border-image-outset'] = { value: 'initial', important };
\t\tresult['border-image-repeat'] = { value: 'initial', important };
\t\treturn result;
\t}
\t/**
\t * Parse border components: width, style, color in any order.
\t *
\t * @param value CSS value string.
\t * @returns Parsed components or null.
\t */
\tprivate static parseBorderComponents(
\t\tvalue: string
\t): { width: string; style: string; color: string } | null {
\t\tconst parts = splitCSSTokens(value.trim());
\t\tif (parts.length < 1 || parts.length > 3) {
\t\t\treturn null;
\t\t}

\t\tlet width = 'medium';
\t\tlet style = 'none';
\t\tlet color = 'currentcolor';
\t\tconst used = new Set<string>();

\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (!used.has('style') && BORDER_STYLE_KEYWORDS.has(lower)) {
\t\t\t\tstyle = lower;
\t\t\t\tused.add('style');
\t\t\t} else if (!used.has('width') && (BORDER_WIDTH_KEYWORDS.has(lower) ||
\t\t\t\t\tCSSStyleDeclarationValueParser.getLength(part, false) !== null)) {
\t\t\t\twidth = lower === part.toLowerCase() ?
\t\t\t\t\t(CSSStyleDeclarationValueParser.getLength(part, false) ?? lower) : lower;
\t\t\t\tused.add('width');
\t\t\t} else if (!used.has('color')) {
\t\t\t\tconst c = CSSStyleDeclarationValueParser.getColor(part);
\t\t\t\tif (c === null) {
\t\t\t\t\treturn null;
\t\t\t\t}
\t\t\t\tcolor = c;
\t\t\t\tused.add('color');
\t\t\t} else {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\treturn { width, style, color };
\t}
`;
}

function generateBorderSideExpander(
	shorthand: string,
	widthProp: string,
	styleProp: string,
	colorProp: string
): string {
	const methodName = shorthandToMethodName(shorthand);
	return `
\t/**
\t * Parse ${shorthand} shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static ${methodName}(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parsed = this.parseBorderComponents(value);
\t\tif (!parsed) {
\t\t\treturn null;
\t\t}
\t\treturn {
\t\t\t${objectKey(widthProp)}: { value: parsed.width, important },
\t\t\t${objectKey(styleProp)}: { value: parsed.style, important },
\t\t\t${objectKey(colorProp)}: { value: parsed.color, important }
\t\t};
\t}
`;
}

function generateBorderWidthStyleColorExpander(
	shorthand: string,
	longhands: string[],
	type: 'width' | 'style' | 'color'
): string {
	const methodName = shorthandToMethodName(shorthand);
	let validator: string;
	if (type === 'width') {
		validator = `BORDER_WIDTH_KEYWORDS.has(lower) || CSSStyleDeclarationValueParser.getLength(part, false) !== null`;
	} else if (type === 'style') {
		validator = `BORDER_STYLE_KEYWORDS.has(lower)`;
	} else {
		validator = `CSSStyleDeclarationValueParser.getColor(part) !== null`;
	}

	const needsLower = type === 'width' || type === 'style';

	return `
\t/**
\t * Parse ${shorthand} shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static ${methodName}(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = ${type === 'color' ? 'splitCSSTokens(value.trim())' : 'value.trim().split(/\\s+/)'};
\t\tif (parts.length < 1 || parts.length > 4) {
\t\t\treturn null;
\t\t}

\t\tconst validated: string[] = [];
\t\tfor (const part of parts) {
${needsLower ? '\t\t\tconst lower = part.toLowerCase();\n' : ''}\t\t\tif (${validator}) {
\t\t\t\tvalidated.push(${type === 'style' ? 'lower' : type === 'color' ? 'CSSStyleDeclarationValueParser.getColor(part)!' : 'CSSStyleDeclarationValueParser.getLength(part, false) ?? lower'});
\t\t\t} else {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\tconst [a, b = a, c = a, d = b] = validated;
\t\treturn {
\t\t\t${objectKey(longhands[0])}: { value: a, important },
\t\t\t${objectKey(longhands[1])}: { value: b, important },
\t\t\t${objectKey(longhands[2])}: { value: c, important },
\t\t\t${objectKey(longhands[3])}: { value: d, important }
\t\t};
\t}
`;
}

function generateFlexExpander(): string {
	return `
\t/**
\t * Parse flex shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseFlex(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst trimmed = value.trim().toLowerCase();

\t\t// Special keywords
\t\tif (trimmed === 'none') {
\t\t\treturn {
\t\t\t\t'flex-grow': { value: '0', important },
\t\t\t\t'flex-shrink': { value: '0', important },
\t\t\t\t'flex-basis': { value: 'auto', important }
\t\t\t};
\t\t}
\t\tif (trimmed === 'auto') {
\t\t\treturn {
\t\t\t\t'flex-grow': { value: '1', important },
\t\t\t\t'flex-shrink': { value: '1', important },
\t\t\t\t'flex-basis': { value: 'auto', important }
\t\t\t};
\t\t}

\t\tconst parts = trimmed.split(/\\s+/);

\t\tif (parts.length === 1) {
\t\t\t// Single number: flex: <grow> (shrink=1, basis=0%)
\t\t\tconst grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
\t\t\tif (grow !== null) {
\t\t\t\treturn {
\t\t\t\t\t'flex-grow': { value: grow, important },
\t\t\t\t\t'flex-shrink': { value: '1', important },
\t\t\t\t\t'flex-basis': { value: '0%', important }
\t\t\t\t};
\t\t\t}
\t\t\t// Single basis value
\t\t\tconst basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[0], false);
\t\t\tif (basis !== null) {
\t\t\t\treturn {
\t\t\t\t\t'flex-grow': { value: '1', important },
\t\t\t\t\t'flex-shrink': { value: '1', important },
\t\t\t\t\t'flex-basis': { value: basis, important }
\t\t\t\t};
\t\t\t}
\t\t\treturn null;
\t\t}

\t\tif (parts.length === 2) {
\t\t\tconst grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
\t\t\tif (grow === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\t// Second is shrink or basis
\t\t\tconst shrink = CSSStyleDeclarationValueParser.getNumber(parts[1], false);
\t\t\tif (shrink !== null) {
\t\t\t\treturn {
\t\t\t\t\t'flex-grow': { value: grow, important },
\t\t\t\t\t'flex-shrink': { value: shrink, important },
\t\t\t\t\t'flex-basis': { value: '0%', important }
\t\t\t\t};
\t\t\t}
\t\t\tconst basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[1], false);
\t\t\tif (basis !== null) {
\t\t\t\treturn {
\t\t\t\t\t'flex-grow': { value: grow, important },
\t\t\t\t\t'flex-shrink': { value: '1', important },
\t\t\t\t\t'flex-basis': { value: basis, important }
\t\t\t\t};
\t\t\t}
\t\t\treturn null;
\t\t}

\t\tif (parts.length === 3) {
\t\t\tconst grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
\t\t\tconst shrink = CSSStyleDeclarationValueParser.getNumber(parts[1], false);
\t\t\tconst basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[2], false);
\t\t\tif (grow === null || shrink === null || basis === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\treturn {
\t\t\t\t'flex-grow': { value: grow, important },
\t\t\t\t'flex-shrink': { value: shrink, important },
\t\t\t\t'flex-basis': { value: basis, important }
\t\t\t};
\t\t}

\t\treturn null;
\t}
`;
}

function generateFlexFlowExpander(): string {
	return `
\t/**
\t * Parse flex-flow shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseFlexFlow(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst directions = new Set(['row', 'row-reverse', 'column', 'column-reverse']);
\t\tconst wraps = new Set(['nowrap', 'wrap', 'wrap-reverse']);

\t\tlet direction = 'row';
\t\tlet wrap = 'nowrap';

\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (directions.has(lower)) {
\t\t\t\tdirection = lower;
\t\t\t} else if (wraps.has(lower)) {
\t\t\t\twrap = lower;
\t\t\t} else {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\treturn {
\t\t\t'flex-direction': { value: direction, important },
\t\t\t'flex-wrap': { value: wrap, important }
\t\t};
\t}
`;
}

function generateOutlineExpander(): string {
	return `
\t/**
\t * Parse outline shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseOutline(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parsed = this.parseBorderComponents(value);
\t\tif (!parsed) {
\t\t\treturn null;
\t\t}
\t\treturn {
\t\t\t'outline-width': { value: parsed.width, important },
\t\t\t'outline-style': { value: parsed.style, important },
\t\t\t'outline-color': { value: parsed.color, important }
\t\t};
\t}
`;
}

function generateOverflowExpander(): string {
	return `
\t/**
\t * Parse overflow shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseOverflow(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst valid = new Set(['visible', 'hidden', 'clip', 'scroll', 'auto', 'overlay']);
\t\tfor (const p of parts) {
\t\t\tif (!valid.has(p.toLowerCase())) {\n\t\t\t\treturn null;\n\t\t\t}
\t\t}

\t\tconst [x, y = x] = parts.map(p => p.toLowerCase());
\t\treturn {
\t\t\t'overflow-x': { value: x, important },
\t\t\t'overflow-y': { value: y, important }
\t\t};
\t}
`;
}

function generateGapExpander(): string {
	return `
\t/**
\t * Parse gap shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseGap(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst validated: string[] = [];
\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (lower === 'normal') { validated.push(lower); continue; }
\t\t\tconst v = CSSStyleDeclarationValueParser.getLength(part, false);
\t\t\tif (v === null) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tvalidated.push(v);
\t\t}

\t\tconst [row, col = row] = validated;
\t\treturn {
\t\t\t'row-gap': { value: row, important },
\t\t\t'column-gap': { value: col, important }
\t\t};
\t}
`;
}

function generatePlaceExpander(shorthand: string, align: string, justify: string): string {
	const methodName = shorthandToMethodName(shorthand);
	return `
\t/**
\t * Parse ${shorthand} shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static ${methodName}(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}
\t\tconst [a, j = a] = parts;
\t\treturn {
\t\t\t${objectKey(align)}: { value: a.toLowerCase(), important },
\t\t\t${objectKey(justify)}: { value: j.toLowerCase(), important }
\t\t};
\t}
`;
}

function generateOverscrollBehaviorExpander(): string {
	return `
\t/**
\t * Parse overscroll-behavior shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseOverscrollBehavior(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tconst valid = new Set(['auto', 'contain', 'none']);
\t\tfor (const p of parts) {
\t\t\tif (!valid.has(p.toLowerCase())) {\n\t\t\t\treturn null;\n\t\t\t}
\t\t}

\t\tconst [x, y = x] = parts.map(p => p.toLowerCase());
\t\treturn {
\t\t\t'overscroll-behavior-x': { value: x, important },
\t\t\t'overscroll-behavior-y': { value: y, important }
\t\t};
\t}
`;
}

function generateFontExpander(): string {
	return `
\t/**
\t * Parse font shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseFont(value: string, important: boolean): IPropertyValueMap | null {
\t\t// System fonts
\t\tconst systemFonts = new Set(['caption', 'icon', 'menu', 'message-box', 'small-caption', 'status-bar']);
\t\tconst lower = value.trim().toLowerCase();
\t\tif (systemFonts.has(lower)) {
\t\t\treturn { 'font': { value: lower, important } };
\t\t}

\t\t// font: [style] [variant] [weight] [stretch] size[/line-height] family
\t\t// This is a simplified parser that handles common cases
\t\tconst fontStyles = new Set(['italic', 'oblique', 'normal']);
\t\tconst fontVariants = new Set(['small-caps', 'normal']);
\t\tconst fontWeights = new Set(['bold', 'bolder', 'lighter', 'normal',
\t\t\t'100', '200', '300', '400', '500', '600', '700', '800', '900']);
\t\tconst fontStretches = new Set(['ultra-condensed', 'extra-condensed', 'condensed',
\t\t\t'semi-condensed', 'normal', 'semi-expanded', 'expanded',
\t\t\t'extra-expanded', 'ultra-expanded']);

\t\t// Split by comma first to separate font family
\t\tconst commaIndex = value.indexOf(',');
\t\tlet beforeFamily: string;
\t\tlet extraFamilies: string;

\t\tif (commaIndex !== -1) {
\t\t\t// Find the font-size/line-height + first family before comma
\t\t\tbeforeFamily = value.slice(0, commaIndex).trim();
\t\t\textraFamilies = value.slice(commaIndex); // includes leading comma
\t\t} else {
\t\t\tbeforeFamily = value.trim();
\t\t\textraFamilies = '';
\t\t}

\t\tconst parts = beforeFamily.split(/\\s+/);
\t\tif (parts.length < 2) {\n\t\t\treturn null; // Need at least size and family\n\t\t}

\t\tlet fontStyle = 'normal';
\t\tlet fontVariant = 'normal';
\t\tlet fontWeight = 'normal';
\t\tlet fontStretch = 'normal';
\t\tlet fontSize = '';
\t\tlet lineHeight = 'normal';
\t\tlet fontFamily = '';

\t\tlet i = 0;

\t\t// Parse optional style/variant/weight/stretch
\t\twhile (i < parts.length - 2) {
\t\t\tconst p = parts[i].toLowerCase();
\t\t\tif (fontStyles.has(p) && fontStyle === 'normal') { fontStyle = p; i++; }
\t\t\telse if (fontVariants.has(p) && fontVariant === 'normal' && p !== 'normal') { fontVariant = p; i++; }
\t\t\telse if (fontWeights.has(p) && fontWeight === 'normal') { fontWeight = p; i++; }
\t\t\telse if (fontStretches.has(p) && fontStretch === 'normal' && p !== 'normal') { fontStretch = p; i++; }
\t\t\telse if (p === 'normal') { i++; } // 'normal' can appear for any of these
\t\t\telse {
\t\t\t\tbreak;
\t\t\t}
\t\t}

\t\t// Next must be font-size (possibly with /line-height)
\t\tif (i >= parts.length - 1) {
\t\t\treturn null;
\t\t}
\t\tconst sizepart = parts[i];
\t\tconst slashIndex = sizepart.indexOf('/');

\t\tif (slashIndex !== -1) {
\t\t\tfontSize = sizepart.slice(0, slashIndex);
\t\t\tlineHeight = sizepart.slice(slashIndex + 1);
\t\t} else {
\t\t\tfontSize = sizepart;
\t\t\t// Check if next part starts with /
\t\t\tif (i + 1 < parts.length && parts[i + 1].startsWith('/')) {
\t\t\t\tlineHeight = parts[i + 1].slice(1);
\t\t\t\ti++;
\t\t\t}
\t\t}
\t\ti++;

\t\t// Rest is font-family
\t\tfontFamily = parts.slice(i).join(' ') + extraFamilies;
\t\tif (!fontFamily) {
\t\t\treturn null;
\t\t}

\t\tconst normalizedFamily = normalizeFontFamily(fontFamily.trim());
\t\tif (normalizedFamily === null) {
\t\t\treturn null;
\t\t}

\t\treturn {
\t\t\t'font-style': { value: fontStyle, important },
\t\t\t'font-variant': { value: fontVariant, important },
\t\t\t'font-weight': { value: fontWeight, important },
\t\t\t'font-stretch': { value: fontStretch, important },
\t\t\t'font-size': { value: fontSize, important },
\t\t\t'line-height': { value: lineHeight, important },
\t\t\t'font-family': { value: normalizedFamily, important }
\t\t};
\t}
`;
}

function generateBackgroundPositionExpander(): string {
	return `
\t/**
\t * Parse background-position shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBackgroundPosition(
\t\tvalue: string,
\t\timportant: boolean
\t): IPropertyValueMap | null {
\t\t// Normalize a single position token: '0' → '0px', keywords stay as-is
\t\tconst normalize = (v: string): string => {
\t\t\tconst len = CSSStyleDeclarationValueParser.getLength(v);
\t\t\treturn len !== null ? len : v.toLowerCase();
\t\t};

\t\t// Parse a single layer into [posX, posY]
\t\tconst parseLayer = (layer: string): [string, string] => {
\t\t\tconst parts = layer.trim().split(/\\s+/);
\t\t\tif (parts.length === 1) {
\t\t\t\tconst lower = parts[0].toLowerCase();
\t\t\t\tif (lower === 'top' || lower === 'bottom') {
\t\t\t\t\treturn ['center', lower];
\t\t\t\t}
\t\t\t\treturn [normalize(parts[0]), 'center'];
\t\t\t}
\t\t\tif (parts.length === 2) {
\t\t\t\treturn [normalize(parts[0]), normalize(parts[1])];
\t\t\t}
\t\t\t// 4-value syntax: [axis-keyword] [offset] [axis-keyword] [offset]
\t\t\t// Determine which pair belongs to X vs Y axis by keyword
\t\t\tif (parts.length === 4) {
\t\t\t\tconst lower0 = parts[0].toLowerCase();
\t\t\t\tif (lower0 === 'left' || lower0 === 'right') {
\t\t\t\t\t// parts 0-1 = X axis, parts 2-3 = Y axis
\t\t\t\t\treturn [
\t\t\t\t\t\t\`\${lower0} \${normalize(parts[1])}\`,
\t\t\t\t\t\t\`\${parts[2].toLowerCase()} \${normalize(parts[3])}\`
\t\t\t\t\t];
\t\t\t\t}
\t\t\t\t// parts 0-1 = Y axis, parts 2-3 = X axis
\t\t\t\treturn [
\t\t\t\t\t\`\${parts[2].toLowerCase()} \${normalize(parts[3])}\`,
\t\t\t\t\t\`\${lower0} \${normalize(parts[1])}\`
\t\t\t\t];
\t\t\t}
\t\t\t// 3-value syntax: [kw1] [kw2] [offset] or [kw1] [offset] [kw2]
\t\t\tif (parts.length === 3) {
\t\t\t\tconst lower0 = parts[0].toLowerCase();
\t\t\t\tconst lower1 = parts[1].toLowerCase();
\t\t\t\tconst lower2 = parts[2].toLowerCase();
\t\t\t\tconst posKws = new Set(['top', 'bottom', 'left', 'right', 'center']);
\t\t\t\tif (posKws.has(lower1)) {
\t\t\t\t\t// Form: [kw1] [kw2] [offset] — kw2+offset is the axis pair, kw1 is alone
\t\t\t\t\tif (lower1 === 'left' || lower1 === 'right') {
\t\t\t\t\t\treturn [\`\${lower1} \${normalize(parts[2])}\`, lower0];
\t\t\t\t\t}
\t\t\t\t\treturn [lower0, \`\${lower1} \${normalize(parts[2])}\`];
\t\t\t\t}
\t\t\t\t// Form: [kw1] [offset] [kw2] — kw1+offset is the axis pair, kw2 is alone
\t\t\t\tif (lower0 === 'left' || lower0 === 'right') {
\t\t\t\t\treturn [\`\${lower0} \${normalize(parts[1])}\`, lower2];
\t\t\t\t}
\t\t\t\treturn [lower2, \`\${lower0} \${normalize(parts[1])}\`];
\t\t\t}
\t\t};

\t\t// Handle comma-separated multi-layer positions
\t\tconst layers = splitTopLevelCommas(value.trim());
\t\tconst xValues: string[] = [];
\t\tconst yValues: string[] = [];
\t\tfor (const layer of layers) {
\t\t\tconst [x, y] = parseLayer(layer.trim());
\t\t\txValues.push(x);
\t\t\tyValues.push(y);
\t\t}

\t\treturn {
\t\t\t'background-position-x': { value: xValues.join(', '), important },
\t\t\t'background-position-y': { value: yValues.join(', '), important }
\t\t};
\t}

`;
}

function generateBackgroundExpander(): string {
	return `
\t/**
\t * Parse background shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBackground(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst trimmedVal = value.trim();
\t\tconst lower = trimmedVal.toLowerCase();

\t\t// 'none' special case
\t\tif (lower === 'none') {
\t\t\treturn {
\t\t\t\t'background-image': { value: 'none', important },
\t\t\t\t'background-position-x': { value: 'initial', important },
\t\t\t\t'background-position-y': { value: 'initial', important },
\t\t\t\t'background-size': { value: 'initial', important },
\t\t\t\t'background-repeat': { value: 'initial', important },
\t\t\t\t'background-attachment': { value: 'initial', important },
\t\t\t\t'background-origin': { value: 'initial', important },
\t\t\t\t'background-clip': { value: 'initial', important },
\t\t\t\t'background-color': { value: 'initial', important }
\t\t\t};
\t\t}

\t\t// Single color shortcut: no spaces and no url() function
\t\tconst asColor = CSSStyleDeclarationValueParser.getColor(trimmedVal);
\t\tif (asColor && !lower.includes('url(') && !lower.includes(' ')) {
\t\t\treturn {
\t\t\t\t'background-image': { value: 'initial', important },
\t\t\t\t'background-position-x': { value: 'initial', important },
\t\t\t\t'background-position-y': { value: 'initial', important },
\t\t\t\t'background-size': { value: 'initial', important },
\t\t\t\t'background-repeat': { value: 'initial', important },
\t\t\t\t'background-attachment': { value: 'initial', important },
\t\t\t\t'background-origin': { value: 'initial', important },
\t\t\t\t'background-clip': { value: 'initial', important },
\t\t\t\t'background-color': { value: asColor, important }
\t\t\t};
\t\t}

\t\t// Tokenize the value respecting parentheses.
\t\t// First normalize '/' to ' / ' so that 'center/80%' becomes 'center / 80%'.
\t\tlet normalized = '';
\t\t{
\t\t\tlet depth = 0;
\t\t\tfor (const ch of trimmedVal) {
\t\t\t\tif (ch === '(') {
\t\t\t\t\tdepth++;
\t\t\t\t\tnormalized += ch;
\t\t\t\t} else if (ch === ')') {
\t\t\t\t\tdepth--;
\t\t\t\t\tnormalized += ch;
\t\t\t\t} else if (ch === '/' && depth === 0) {
\t\t\t\t\tnormalized += ' / ';
\t\t\t\t} else {
\t\t\t\t\tnormalized += ch;
\t\t\t\t}
\t\t\t}
\t\t}
\t\tconst tokens = splitCSSTokens(normalized);

\t\tconst REPEAT_KEYWORDS = new Set([
\t\t\t'no-repeat',
\t\t\t'repeat',
\t\t\t'repeat-x',
\t\t\t'repeat-y',
\t\t\t'round',
\t\t\t'space'
\t\t]);
\t\tconst ATTACHMENT_KEYWORDS = new Set(['scroll', 'fixed', 'local']);
\t\tconst BOX_KEYWORDS = new Set(['border-box', 'padding-box', 'content-box']);
\t\tconst POSITION_KEYWORDS = new Set(['top', 'bottom', 'left', 'right', 'center']);

\t\tlet image = 'initial';
\t\tlet posX = 'initial';
\t\tlet posY = 'initial';
\t\tlet size = 'initial';
\t\tlet repeat = 'initial';
\t\tlet attachment = 'initial';
\t\tlet origin = 'initial';
\t\tlet clip = 'initial';
\t\tlet color = 'initial';

\t\t// Track how many BOX_KEYWORD tokens we've seen (first sets origin+clip, second sets clip only)
\t\tlet boxCount = 0;

\t\tlet hasValidToken = false;

\t\tfor (let i = 0; i < tokens.length; i++) {
\t\t\tconst tok = tokens[i];
\t\t\tconst tokLower = tok.toLowerCase();

\t\t\tif (this.isGradientToken(tok)) {
\t\t\t\tconst gradient = CSSStyleDeclarationValueParser.getGradient(tok);
\t\t\t\timage = gradient ?? tok;
\t\t\t\thasValidToken = true;
\t\t\t} else if (tokLower.startsWith('url(')) {
\t\t\t\tconst url = CSSStyleDeclarationValueParser.getURL(tok);
\t\t\t\timage = url ?? tok;
\t\t\t\thasValidToken = true;
\t\t\t} else if (REPEAT_KEYWORDS.has(tokLower)) {
\t\t\t\trepeat = tokLower;
\t\t\t\thasValidToken = true;
\t\t\t} else if (ATTACHMENT_KEYWORDS.has(tokLower)) {
\t\t\t\tattachment = tokLower;
\t\t\t\thasValidToken = true;
\t\t\t} else if (BOX_KEYWORDS.has(tokLower)) {
\t\t\t\tif (boxCount === 0) {
\t\t\t\t\torigin = tokLower;
\t\t\t\t\tclip = tokLower;
\t\t\t\t} else {
\t\t\t\t\tclip = tokLower;
\t\t\t\t}
\t\t\t\tboxCount++;
\t\t\t\thasValidToken = true;
\t\t\t} else if (POSITION_KEYWORDS.has(tokLower)) {
\t\t\t\t// Collect consecutive position tokens (handles "top center", "left 50%", etc.)
\t\t\t\tconst posParts = [tok];
\t\t\t\twhile (i + 1 < tokens.length && tokens[i + 1] !== '/') {
\t\t\t\t\tconst next = tokens[i + 1].toLowerCase();
\t\t\t\t\tif (POSITION_KEYWORDS.has(next) || /^[\\d.]/.test(next) || next.endsWith('%')) {
\t\t\t\t\t\tposParts.push(tokens[++i]);
\t\t\t\t\t} else {
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t// Check for /size
\t\t\t\tif (i + 1 < tokens.length && tokens[i + 1] === '/') {
\t\t\t\t\ti++; // skip '/'
\t\t\t\t\tif (i + 1 < tokens.length) {
\t\t\t\t\t\tsize = tokens[++i];
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t// Now assign posX/posY
\t\t\t\tif (posParts.length === 1) {
\t\t\t\t\tconst pl = posParts[0].toLowerCase();
\t\t\t\t\tif (pl === 'top' || pl === 'bottom') {
\t\t\t\t\t\tposX = 'center';
\t\t\t\t\t\tposY = pl;
\t\t\t\t\t} else {
\t\t\t\t\t\tposX = pl;
\t\t\t\t\t\tposY = 'center';
\t\t\t\t\t}
\t\t\t\t} else if (posParts.length >= 2) {
\t\t\t\t\tconst p0 = posParts[0].toLowerCase();
\t\t\t\t\tconst p1 = posParts[1].toLowerCase();
\t\t\t\t\t// Y-axis keywords first: swap so X is always first in output
\t\t\t\t\tif (
\t\t\t\t\t\t(p0 === 'top' || p0 === 'bottom') &&
\t\t\t\t\t\t(p1 === 'left' ||
\t\t\t\t\t\t\tp1 === 'right' ||
\t\t\t\t\t\t\tp1 === 'center' ||
\t\t\t\t\t\t\t/^[\\d.]/.test(p1) ||
\t\t\t\t\t\t\tp1.endsWith('%'))
\t\t\t\t\t) {
\t\t\t\t\t\tposX = p1;
\t\t\t\t\t\tposY = p0;
\t\t\t\t\t} else {
\t\t\t\t\t\tposX = p0;
\t\t\t\t\t\tposY = p1;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\thasValidToken = true;
\t\t\t} else if (/^[\\d.]/.test(tokLower) || tokLower.endsWith('%')) {
\t\t\t\t// Numeric position value — look ahead for /size
\t\t\t\tconst posParts = [tok];
\t\t\t\twhile (i + 1 < tokens.length && tokens[i + 1] !== '/') {
\t\t\t\t\tconst next = tokens[i + 1].toLowerCase();
\t\t\t\t\tif (POSITION_KEYWORDS.has(next) || /^[\\d.]/.test(next) || next.endsWith('%')) {
\t\t\t\t\t\tposParts.push(tokens[++i]);
\t\t\t\t\t} else {
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\tif (i + 1 < tokens.length && tokens[i + 1] === '/') {
\t\t\t\t\ti++;
\t\t\t\t\tif (i + 1 < tokens.length) {
\t\t\t\t\t\tsize = tokens[++i];
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\tif (posParts.length === 1) {
\t\t\t\t\tposX = posParts[0];
\t\t\t\t\tposY = 'center';
\t\t\t\t} else {
\t\t\t\t\tposX = posParts[0];
\t\t\t\t\tposY = posParts[1];
\t\t\t\t}
\t\t\t\thasValidToken = true;
\t\t\t} else {
\t\t\t\t// Try as color
\t\t\t\tconst colorVal = CSSStyleDeclarationValueParser.getColor(tok);
\t\t\t\tif (colorVal !== null) {
\t\t\t\t\tcolor = colorVal;
\t\t\t\t\thasValidToken = true;
\t\t\t\t}
\t\t\t\t// Otherwise silently ignore unknown tokens (lenient parsing)
\t\t\t}
\t\t}

\t\tif (!hasValidToken) {
\t\t\treturn null;
\t\t}

\t\treturn {
\t\t\t'background-image': { value: image, important },
\t\t\t'background-position-x': { value: posX, important },
\t\t\t'background-position-y': { value: posY, important },
\t\t\t'background-size': { value: size, important },
\t\t\t'background-repeat': { value: repeat, important },
\t\t\t'background-attachment': { value: attachment, important },
\t\t\t'background-origin': { value: origin, important },
\t\t\t'background-clip': { value: clip, important },
\t\t\t'background-color': { value: color, important }
\t\t};
\t}
`;
}


function generateIsGradientToken(): string {
	return `
\t/**
\t * Returns true if the token is a CSS gradient function.
\t *
\t * @param token A single CSS token.
\t * @returns True if gradient.
\t */
\tprivate static isGradientToken(token: string): boolean {
\t\tconst lower = token.toLowerCase();
\t\treturn (
\t\t\tlower.startsWith('linear-gradient(') ||
\t\t\tlower.startsWith('radial-gradient(') ||
\t\t\tlower.startsWith('conic-gradient(') ||
\t\t\tlower.startsWith('repeating-linear-gradient(') ||
\t\t\tlower.startsWith('repeating-radial-gradient(') ||
\t\t\tlower.startsWith('repeating-conic-gradient(')
\t\t);
\t}
`;
}

function generateBorderImageExpander(): string {
	return `
\t/**
\t * Parse border-image shorthand.
\t * Syntax: source slice [/ width [/ outset]] repeat
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBorderImage(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst trimmedVal = value.trim();
\t\tconst tokens = splitCSSTokens(trimmedVal);

\t\tconst REPEAT_KEYWORDS = new Set(['stretch', 'repeat', 'round', 'space']);

\t\tlet sourceVal = 'none';
\t\tlet sliceVal = '100%';
\t\tlet widthVal = '1';
\t\tlet outsetVal = '0';
\t\tlet repeatVal = 'stretch';

\t\tlet i = 0;

\t\t// First token: source (url, gradient, or 'none')
\t\tif (i < tokens.length) {
\t\t\tconst tok = tokens[i];
\t\t\tconst tokLower = tok.toLowerCase();
\t\t\tif (tokLower === 'none' || tokLower.startsWith('url(') || this.isGradientToken(tok)) {
\t\t\t\tif (tokLower.startsWith('url(')) {
\t\t\t\t\tsourceVal = CSSStyleDeclarationValueParser.getURL(tok) ?? tok;
\t\t\t\t} else if (this.isGradientToken(tok)) {
\t\t\t\t\tsourceVal = CSSStyleDeclarationValueParser.getGradient(tok) ?? tok;
\t\t\t\t} else {
\t\t\t\t\tsourceVal = tokLower;
\t\t\t\t}
\t\t\t\ti++;
\t\t\t}
\t\t}

\t\t// Collect slice tokens up to first '/'
\t\tconst sliceTokens: string[] = [];
\t\tconst widthTokens: string[] = [];
\t\tconst outsetTokens: string[] = [];
\t\tconst repeatTokens: string[] = [];

\t\tlet section = 0; // 0=slice, 1=width, 2=outset
\t\twhile (i < tokens.length) {
\t\t\tconst tok = tokens[i];
\t\t\tconst tokLower = tok.toLowerCase();

\t\t\tif (tok === '/') {
\t\t\t\tsection++;
\t\t\t\ti++;
\t\t\t\tcontinue;
\t\t\t}
\t\t\tif (REPEAT_KEYWORDS.has(tokLower)) {
\t\t\t\trepeatTokens.push(tokLower);
\t\t\t\ti++;
\t\t\t\tcontinue;
\t\t\t}
\t\t\tif (section === 0) {
\t\t\t\tsliceTokens.push(tok);
\t\t\t} else if (section === 1) {
\t\t\t\twidthTokens.push(tok);
\t\t\t} else {
\t\t\t\toutsetTokens.push(tok);
\t\t\t}
\t\t\ti++;
\t\t}

\t\tif (sliceTokens.length > 0) {
\t\t\tsliceVal = sliceTokens.join(' ');
\t\t}
\t\tif (widthTokens.length > 0) {
\t\t\twidthVal = widthTokens.join(' ');
\t\t}
\t\tif (outsetTokens.length > 0) {
\t\t\toutsetVal = outsetTokens.join(' ');
\t\t}
\t\tif (repeatTokens.length > 0) {
\t\t\trepeatVal = repeatTokens.join(' ');
\t\t}

\t\treturn {
\t\t\t'border-image-source': { value: sourceVal, important },
\t\t\t'border-image-slice': { value: sliceVal, important },
\t\t\t'border-image-width': { value: widthVal, important },
\t\t\t'border-image-outset': { value: outsetVal, important },
\t\t\t'border-image-repeat': { value: repeatVal, important }
\t\t};
\t}
`;
}

function generateTextDecorationExpander(): string {
	return `
\t/**
\t * Parse text-decoration shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseTextDecoration(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tconst lines = new Set(['none', 'underline', 'overline', 'line-through', 'blink']);
\t\tconst styles = new Set(['solid', 'double', 'dotted', 'dashed', 'wavy']);

\t\tlet line = '';
\t\tlet style = 'initial';
\t\tlet color = 'initial';
\t\tconst lineValues: string[] = [];

\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (lines.has(lower)) {
\t\t\t\tlineValues.push(lower);
\t\t\t} else if (styles.has(lower) && style === 'initial') {
\t\t\t\tstyle = lower;
\t\t\t} else if (color === 'initial') {
\t\t\t\tconst c = CSSStyleDeclarationValueParser.getColor(part);
\t\t\t\tif (c) { color = c; }
\t\t\t\telse {
\t\t\t\t\treturn null;
\t\t\t\t}
\t\t\t} else {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\tline = lineValues.length > 0 ? lineValues.join(' ') : 'none';

\t\treturn {
\t\t\t'text-decoration-line': { value: line, important },
\t\t\t'text-decoration-style': { value: style, important },
\t\t\t'text-decoration-color': { value: color, important }
\t\t};
\t}
`;
}

function generateListStyleExpander(): string {
	return `
\t/**
\t * Parse list-style shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseListStyle(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tconst positions = new Set(['inside', 'outside']);

\t\tlet type = 'initial';
\t\tlet position = 'initial';
\t\tlet image = 'initial';

\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (lower === 'none') {
\t\t\t\tif (type === 'initial') {
\t\t\t\t\ttype = 'none';
\t\t\t\t} else if (image === 'initial') {
\t\t\t\t\timage = 'none';
\t\t\t\t}
\t\t\t} else if (positions.has(lower)) {
\t\t\t\tposition = lower;
\t\t\t} else if (lower.startsWith('url(')) {
\t\t\t\timage = part;
\t\t\t} else {
\t\t\t\ttype = lower;
\t\t\t}
\t\t}

\t\treturn {
\t\t\t'list-style-type': { value: type, important },
\t\t\t'list-style-position': { value: position, important },
\t\t\t'list-style-image': { value: image, important }
\t\t};
\t}
`;
}

function generateColumnsExpander(): string {
	return `
\t/**
\t * Parse columns shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseColumns(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length < 1 || parts.length > 2) {
\t\t\treturn null;
\t\t}

\t\tlet width = 'auto';
\t\tlet count = 'auto';

\t\tfor (const part of parts) {
\t\t\tconst lower = part.toLowerCase();
\t\t\tif (lower === 'auto') {
\t\t\t\tcontinue;
\t\t\t}
\t\t\tconst asInt = CSSStyleDeclarationValueParser.getInteger(part, false);
\t\t\tif (asInt !== null) {
\t\t\t\tcount = asInt;
\t\t\t\tcontinue;
\t\t\t}
\t\t\tconst asLen = CSSStyleDeclarationValueParser.getLength(part, false);
\t\t\tif (asLen !== null) {
\t\t\t\twidth = asLen;
\t\t\t\tcontinue;
\t\t\t}
\t\t\treturn null;
\t\t}

\t\treturn {
\t\t\t'column-width': { value: width, important },
\t\t\t'column-count': { value: count, important }
\t\t};
\t}
`;
}

function generateGenericShorthandFallback(ir: PropertyIR): string {
	return `
\t/**
\t * Generic shorthand fallback: for shorthands without specific parsers,
\t * accept the value and apply it to all longhands.
\t *
\t * @param name Shorthand property name.
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseGenericShorthand(
\t\tname: string,
\t\tvalue: string,
\t\timportant: boolean
\t): IPropertyValueMap | null {
\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
\t\tif (!longhands) {
\t\t\treturn null;
\t\t}

\t\tconst result: IPropertyValueMap = {};
\t\tfor (const lh of longhands) {
\t\t\tresult[lh] = { value, important };
\t\t}
\t\treturn result;
\t}
`;
}
