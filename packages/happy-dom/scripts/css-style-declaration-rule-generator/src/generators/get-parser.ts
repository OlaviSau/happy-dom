/**
 * Generates CSSStyleDeclarationPropertyGetParser.ts
 *
 * The GetParser implements B2 (shorthand recomposition from longhands).
 */

import type { PropertyIR } from '../ir/property-ir.js';
import { fileHeader, quote } from '../utils/template-utils.js';

export function generateGetParser(ir: PropertyIR): string {
	let out = fileHeader();

	out += `import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';

type PropertyStore = Record<string, ICSSStyleDeclarationPropertyValue | undefined>;

/**
 * Recomposes shorthand CSS values from their constituent longhands (B2).
 *
 * Rules:
 * - ALL longhands must be set for the shorthand to return a value
 * - If any longhand is missing, return null
 * - Collapse to shortest valid form where possible
 * - B3 (invalidation) is a natural consequence: if longhands diverge,
 * the shorthand returns null
 */
export default class CSSStyleDeclarationPropertyGetParser {
\t/**
\t * CSS-wide keywords that should collapse to a single value in shorthands.
\t */
\tprivate static readonly globalKeywords = new Set([
\t\t'inherit',
\t\t'initial',
\t\t'unset',
\t\t'revert',
\t\t'revert-layer'
\t]);

\t/**
\t * Get a shorthand property value from its longhands.
\t *
\t * @param name Shorthand property name.
\t * @param properties The property store (longhand values).
\t * @returns The composed shorthand value, or null if incomplete.
\t */
\tpublic static get(
\t\tname: string,
\t\tproperties: PropertyStore
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tswitch (name) {
\t\t\tcase 'margin':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'margin-top',
\t\t\t\t\t'margin-right',
\t\t\t\t\t'margin-bottom',
\t\t\t\t\t'margin-left'
\t\t\t\t);
\t\t\tcase 'padding':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'padding-top',
\t\t\t\t\t'padding-right',
\t\t\t\t\t'padding-bottom',
\t\t\t\t\t'padding-left'
\t\t\t\t);
\t\t\tcase 'inset':
\t\t\t\treturn this.getBoxModel(properties, 'top', 'right', 'bottom', 'left');
\t\t\tcase 'scroll-margin':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'scroll-margin-top',
\t\t\t\t\t'scroll-margin-right',
\t\t\t\t\t'scroll-margin-bottom',
\t\t\t\t\t'scroll-margin-left'
\t\t\t\t);
\t\t\tcase 'scroll-padding':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'scroll-padding-top',
\t\t\t\t\t'scroll-padding-right',
\t\t\t\t\t'scroll-padding-bottom',
\t\t\t\t\t'scroll-padding-left'
\t\t\t\t);

\t\t\tcase 'margin-block':
\t\t\t\treturn this.getTwoValue(properties, 'margin-block-start', 'margin-block-end');
\t\t\tcase 'margin-inline':
\t\t\t\treturn this.getTwoValue(properties, 'margin-inline-start', 'margin-inline-end');
\t\t\tcase 'padding-block':
\t\t\t\treturn this.getTwoValue(properties, 'padding-block-start', 'padding-block-end');
\t\t\tcase 'padding-inline':
\t\t\t\treturn this.getTwoValue(properties, 'padding-inline-start', 'padding-inline-end');
\t\t\tcase 'inset-block':
\t\t\t\treturn this.getTwoValue(properties, 'inset-block-start', 'inset-block-end');
\t\t\tcase 'inset-inline':
\t\t\t\treturn this.getTwoValue(properties, 'inset-inline-start', 'inset-inline-end');
\t\t\tcase 'scroll-margin-block':
\t\t\t\treturn this.getTwoValue(properties, 'scroll-margin-block-start', 'scroll-margin-block-end');
\t\t\tcase 'scroll-margin-inline':
\t\t\t\treturn this.getTwoValue(
\t\t\t\t\tproperties,
\t\t\t\t\t'scroll-margin-inline-start',
\t\t\t\t\t'scroll-margin-inline-end'
\t\t\t\t);
\t\t\tcase 'scroll-padding-block':
\t\t\t\treturn this.getTwoValue(
\t\t\t\t\tproperties,
\t\t\t\t\t'scroll-padding-block-start',
\t\t\t\t\t'scroll-padding-block-end'
\t\t\t\t);
\t\t\tcase 'scroll-padding-inline':
\t\t\t\treturn this.getTwoValue(
\t\t\t\t\tproperties,
\t\t\t\t\t'scroll-padding-inline-start',
\t\t\t\t\t'scroll-padding-inline-end'
\t\t\t\t);

\t\t\tcase 'border':
\t\t\t\treturn this.getBorder(properties);
\t\t\tcase 'border-top':
\t\t\t\treturn this.getBorderSide(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-top-width',
\t\t\t\t\t'border-top-style',
\t\t\t\t\t'border-top-color'
\t\t\t\t);
\t\t\tcase 'border-right':
\t\t\t\treturn this.getBorderSide(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-right-width',
\t\t\t\t\t'border-right-style',
\t\t\t\t\t'border-right-color'
\t\t\t\t);
\t\t\tcase 'border-bottom':
\t\t\t\treturn this.getBorderSide(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-bottom-width',
\t\t\t\t\t'border-bottom-style',
\t\t\t\t\t'border-bottom-color'
\t\t\t\t);
\t\t\tcase 'border-left':
\t\t\t\treturn this.getBorderSide(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-left-width',
\t\t\t\t\t'border-left-style',
\t\t\t\t\t'border-left-color'
\t\t\t\t);
\t\t\tcase 'border-width':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-top-width',
\t\t\t\t\t'border-right-width',
\t\t\t\t\t'border-bottom-width',
\t\t\t\t\t'border-left-width'
\t\t\t\t);
\t\t\tcase 'border-style':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-top-style',
\t\t\t\t\t'border-right-style',
\t\t\t\t\t'border-bottom-style',
\t\t\t\t\t'border-left-style'
\t\t\t\t);
\t\t\tcase 'border-color':
\t\t\t\treturn this.getBoxModel(
\t\t\t\t\tproperties,
\t\t\t\t\t'border-top-color',
\t\t\t\t\t'border-right-color',
\t\t\t\t\t'border-bottom-color',
\t\t\t\t\t'border-left-color'
\t\t\t\t);
\t\t\tcase 'border-image':
\t\t\t\treturn this.getBorderImage(properties);
\t\t\tcase 'border-radius':
\t\t\t\treturn this.getBorderRadius(properties);

\t\t\tcase 'flex':
\t\t\t\treturn this.getFlex(properties);
\t\t\tcase 'flex-flow':
\t\t\t\treturn this.getTwoValue(properties, 'flex-direction', 'flex-wrap');
\t\t\tcase 'outline':
\t\t\t\treturn this.getBorderSide(properties, 'outline-width', 'outline-style', 'outline-color');
\t\t\tcase 'overflow':
\t\t\t\treturn this.getTwoValue(properties, 'overflow-x', 'overflow-y');
\t\t\tcase 'overscroll-behavior':
\t\t\t\treturn this.getTwoValue(properties, 'overscroll-behavior-x', 'overscroll-behavior-y');
\t\t\tcase 'gap':
\t\t\t\treturn this.getTwoValue(properties, 'row-gap', 'column-gap');
\t\t\tcase 'place-content':
\t\t\t\treturn this.getTwoValue(properties, 'align-content', 'justify-content');
\t\t\tcase 'place-items':
\t\t\t\treturn this.getTwoValue(properties, 'align-items', 'justify-items');
\t\t\tcase 'place-self':
\t\t\t\treturn this.getTwoValue(properties, 'align-self', 'justify-self');
\t\t\tcase 'columns':
\t\t\t\treturn this.getColumns(properties);
\t\t\tcase 'list-style':
\t\t\t\treturn this.getListStyle(properties);
\t\t\tcase 'text-decoration':
\t\t\t\treturn this.getTextDecoration(properties);
\t\t\tcase 'font':
\t\t\t\treturn this.getFont(properties);
\t\t\tcase 'background':
\t\t\t\treturn this.getBackground(properties);
\t\t\tcase 'background-position':
\t\t\t\treturn this.getBackgroundPositionValue(
\t\t\t\t\tproperties,
\t\t\t\t\t'background-position-x',
\t\t\t\t\t'background-position-y'
\t\t\t\t);

\t\t\tdefault:
\t\t\t\treturn this.getGeneric(name, properties);
\t\t}
\t}

\t/**
\t * If all values are the same CSS-wide keyword, return that keyword.
\t * Otherwise return null (no collapse).
\t *
\t * @param values Array of CSS values.
\t * @param important Whether values are !important.
\t * @returns Collapsed value or null.
\t */
\tprivate static collapseGlobal(
\t\tvalues: string[],
\t\timportant: boolean
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tif (values.length === 0) {
\t\t\treturn null;
\t\t}
\t\tconst first = values[0];
\t\tif (!this.globalKeywords.has(first)) {
\t\t\treturn null;
\t\t}
\t\tif (values.every((v) => v === first)) {
\t\t\treturn { value: first, important };
\t\t}
\t\treturn null;
\t}

\t/**
\t * Box model: 4 values collapsing to 1/2/3/4 form.
\t *
\t * @param props The property store.
\t * @param topProp Top property name.
\t * @param rightProp Right property name.
\t * @param bottomProp Bottom property name.
\t * @param leftProp Left property name.
\t * @returns Collapsed value or null.
\t */
\tprivate static getBoxModel(
\t\tprops: PropertyStore,
\t\ttopProp: string,
\t\trightProp: string,
\t\tbottomProp: string,
\t\tleftProp: string
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tconst top = props[topProp];
\t\tconst right = props[rightProp];
\t\tconst bottom = props[bottomProp];
\t\tconst left = props[leftProp];
\t\tif (!top || !right || !bottom || !left) {
\t\t\treturn null;
\t\t}

\t\t// Check importance is consistent
\t\tconst imp = top.important;
\t\tif (right.important !== imp || bottom.important !== imp || left.important !== imp) {
\t\t\treturn null;
\t\t}

\t\t// Collapse
\t\tif (top.value === right.value && right.value === bottom.value && bottom.value === left.value) {
\t\t\treturn { value: top.value, important: imp };
\t\t}
\t\tif (top.value === bottom.value && right.value === left.value) {
\t\t\treturn { value: \`\${top.value} \${right.value}\`, important: imp };
\t\t}
\t\tif (right.value === left.value) {
\t\t\treturn { value: \`\${top.value} \${right.value} \${bottom.value}\`, important: imp };
\t\t}
\t\treturn { value: \`\${top.value} \${right.value} \${bottom.value} \${left.value}\`, important: imp };
\t}

\t/**
\t * Two-value shorthand collapsing.
\t *
\t * @param props The property store.
\t * @param prop1 First property name.
\t * @param prop2 Second property name.
\t * @returns Collapsed value or null.
\t */
\t/**
\t * Background position: always outputs both X and Y even if identical.
\t *
\t * @param props The property store.
\t * @param xProp X property name.
\t * @param yProp Y property name.
\t * @returns Composed value or null.
\t */
\tprivate static getBackgroundPositionValue(
\t\tprops: PropertyStore,
\t\txProp: string,
\t\tyProp: string
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tconst v1 = props[xProp];
\t\tconst v2 = props[yProp];
\t\tif (!v1 || !v2) {
\t\t\treturn null;
\t\t}
\t\tif (v1.important !== v2.important) {
\t\t\treturn null;
\t\t}
\t\t// Collapse equal global keywords (inherit/initial/etc.) to single value
\t\tconst globalKeywords = new Set(['inherit', 'initial', 'unset', 'revert', 'revert-layer']);
\t\tif (v1.value === v2.value && globalKeywords.has(v1.value.toLowerCase())) {
\t\t\treturn { value: v1.value, important: v1.important };
\t\t}
\t\t// Handle multi-layer (comma-separated) positions: interleave x and y per layer
\t\tconst xLayers = v1.value.split(', ');
\t\tconst yLayers = v2.value.split(', ');
\t\tif (xLayers.length > 1 && xLayers.length === yLayers.length) {
\t\t\tconst layers = xLayers.map((x, i) => {
\t\t\t\tconst y = yLayers[i];
\t\t\t\tif (x === y && globalKeywords.has(x.toLowerCase())) {
\t\t\t\t\treturn x;
\t\t\t\t}
\t\t\t\treturn \`\${x} \${y}\`;
\t\t\t});
\t\t\treturn { value: layers.join(', '), important: v1.important };
\t\t}
\t\treturn { value: \`\${v1.value} \${v2.value}\`, important: v1.important };
\t}

\t/**
\t *
\t * @param props
\t * @param prop1
\t * @param prop2
\t */
\tprivate static getTwoValue(
\t\tprops: PropertyStore,
\t\tprop1: string,
\t\tprop2: string
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tconst v1 = props[prop1];
\t\tconst v2 = props[prop2];
\t\tif (!v1 || !v2) {
\t\t\treturn null;
\t\t}
\t\tif (v1.important !== v2.important) {
\t\t\treturn null;
\t\t}

\t\tif (v1.value === v2.value) {
\t\t\treturn { value: v1.value, important: v1.important };
\t\t}
\t\treturn { value: \`\${v1.value} \${v2.value}\`, important: v1.important };
\t}

\t/**
\t * Border shorthand: all 4 sides must have identical width/style/color.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getBorder(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst sides = ['top', 'right', 'bottom', 'left'];
\t\tconst widths = sides.map((s) => props[\`border-\${s}-width\`]);
\t\tconst styles = sides.map((s) => props[\`border-\${s}-style\`]);
\t\tconst colors = sides.map((s) => props[\`border-\${s}-color\`]);

\t\t// All must be set
\t\tif (widths.some((w) => !w) || styles.some((s) => !s) || colors.some((c) => !c)) {
\t\t\treturn null;
\t\t}

\t\t// All sides must match
\t\tconst w0 = widths[0]!.value;
\t\tconst s0 = styles[0]!.value;
\t\tconst c0 = colors[0]!.value;
\t\tconst imp = widths[0]!.important;

\t\tfor (let i = 1; i < 4; i++) {
\t\t\tif (widths[i]!.value !== w0 || styles[i]!.value !== s0 || colors[i]!.value !== c0) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tif (
\t\t\t\twidths[i]!.important !== imp ||
\t\t\t\tstyles[i]!.important !== imp ||
\t\t\t\tcolors[i]!.important !== imp
\t\t\t) {
\t\t\t\treturn null;
\t\t\t}
\t\t}

\t\tconst allValues = [...widths, ...styles, ...colors].map((v) => v!.value);
\t\tconst globalCollapse = this.collapseGlobal(allValues, imp);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\tconst parts: string[] = [];
\t\tif (w0 !== 'medium') {
\t\t\tparts.push(w0);
\t\t}
\t\tparts.push(s0);
\t\tif (c0 !== 'currentcolor') {
\t\t\tparts.push(c0);
\t\t}
\t\treturn { value: parts.join(' '), important: imp };
\t}

\t/**
\t * Border side: width style color.
\t *
\t * @param props The property store.
\t * @param widthProp Width property name.
\t * @param styleProp Style property name.
\t * @param colorProp Color property name.
\t * @returns Composed value or null.
\t */
\tprivate static getBorderSide(
\t\tprops: PropertyStore,
\t\twidthProp: string,
\t\tstyleProp: string,
\t\tcolorProp: string
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tconst w = props[widthProp];
\t\tconst s = props[styleProp];
\t\tconst c = props[colorProp];
\t\tif (!w || !s || !c) {
\t\t\treturn null;
\t\t}
\t\tif (w.important !== s.important || s.important !== c.important) {
\t\t\treturn null;
\t\t}
\t\tconst globalCollapse = this.collapseGlobal([w.value, s.value, c.value], w.important);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}
\t\treturn { value: \`\${w.value} \${s.value} \${c.value}\`, important: w.important };
\t}

\t/**
\t * Border radius: 4 corners, optionally with / for vertical radii.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getBorderRadius(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst tl = props['border-top-left-radius'];
\t\tconst tr = props['border-top-right-radius'];
\t\tconst br = props['border-bottom-right-radius'];
\t\tconst bl = props['border-bottom-left-radius'];
\t\tif (!tl || !tr || !br || !bl) {
\t\t\treturn null;
\t\t}
\t\tif (
\t\t\ttl.important !== tr.important ||
\t\t\ttr.important !== br.important ||
\t\t\tbr.important !== bl.important
\t\t) {
\t\t\treturn null;
\t\t}

\t\t// Check if all are single values (no vertical component)
\t\tconst values = [tl.value, tr.value, br.value, bl.value];

\t\tif (values.every((v) => !v.includes(' '))) {
\t\t\t// All single — collapse
\t\t\tif (values[0] === values[1] && values[1] === values[2] && values[2] === values[3]) {
\t\t\t\treturn { value: values[0], important: tl.important };
\t\t\t}
\t\t\tif (values[0] === values[2] && values[1] === values[3]) {
\t\t\t\treturn { value: \`\${values[0]} \${values[1]}\`, important: tl.important };
\t\t\t}
\t\t\tif (values[1] === values[3]) {
\t\t\t\treturn { value: \`\${values[0]} \${values[1]} \${values[2]}\`, important: tl.important };
\t\t\t}
\t\t\treturn { value: values.join(' '), important: tl.important };
\t\t}

\t\t// Has vertical components
\t\treturn { value: values.join(' '), important: tl.important };
\t}

\t/**
\t * Flex shorthand.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getFlex(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst grow = props['flex-grow'];
\t\tconst shrink = props['flex-shrink'];
\t\tconst basis = props['flex-basis'];
\t\tif (!grow || !shrink || !basis) {
\t\t\treturn null;
\t\t}
\t\tif (grow.important !== shrink.important || shrink.important !== basis.important) {
\t\t\treturn null;
\t\t}

\t\t// Check global keyword collapse
\t\tconst globalCollapse = this.collapseGlobal(
\t\t\t[grow.value, shrink.value, basis.value],
\t\t\tgrow.important
\t\t);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\treturn { value: \`\${grow.value} \${shrink.value} \${basis.value}\`, important: grow.important };
\t}

\t/**
\t * Columns shorthand.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getColumns(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst width = props['column-width'];
\t\tconst count = props['column-count'];
\t\tif (!width || !count) {
\t\t\treturn null;
\t\t}
\t\tif (width.important !== count.important) {
\t\t\treturn null;
\t\t}
\t\treturn { value: \`\${width.value} \${count.value}\`, important: width.important };
\t}

\t/**
\t * List style shorthand.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getListStyle(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst type = props['list-style-type'];
\t\tconst position = props['list-style-position'];
\t\tconst image = props['list-style-image'];
\t\tif (!type || !position || !image) {
\t\t\treturn null;
\t\t}
\t\tif (type.important !== position.important || position.important !== image.important) {
\t\t\treturn null;
\t\t}
\t\tconst globalCollapse = this.collapseGlobal(
\t\t\t[type.value, position.value, image.value],
\t\t\ttype.important
\t\t);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\tconst parts = [type.value, position.value, image.value].filter((v) => v !== 'initial');
\t\treturn { value: parts.join(' ') || 'none', important: type.important };
\t}

\t/**
\t * Text decoration shorthand.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getTextDecoration(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst line = props['text-decoration-line'];
\t\tconst style = props['text-decoration-style'];
\t\tconst color = props['text-decoration-color'];
\t\tif (!line || !style || !color) {
\t\t\treturn null;
\t\t}
\t\tif (line.important !== style.important || style.important !== color.important) {
\t\t\treturn null;
\t\t}
\t\tconst globalCollapse = this.collapseGlobal(
\t\t\t[line.value, style.value, color.value],
\t\t\tline.important
\t\t);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\tconst parts = [line.value];
\t\tif (style.value !== 'initial' && style.value !== 'solid') {
\t\t\tparts.push(style.value);
\t\t}
\t\tif (color.value !== 'initial' && color.value !== 'currentcolor') {
\t\t\tparts.push(color.value);
\t\t}
\t\treturn { value: parts.join(' '), important: line.important };
\t}

\t/**
\t * Font shorthand.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getFont(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst fontStyle = props['font-style'];
\t\tconst fontVariant = props['font-variant'];
\t\tconst fontWeight = props['font-weight'];
\t\tconst fontSize = props['font-size'];
\t\tconst lineHeight = props['line-height'];
\t\tconst fontFamily = props['font-family'];
\t\tif (!fontStyle || !fontWeight || !fontSize || !fontFamily) {
\t\t\treturn null;
\t\t}

\t\tconst imp = fontStyle.important;

\t\t// Collapse to a single global keyword (inherit, initial, unset, etc.) when all sub-properties match
\t\tconst globalKeywords = new Set(['inherit', 'initial', 'unset', 'revert', 'revert-layer']);
\t\tconst candidate = fontStyle.value.toLowerCase();
\t\tif (globalKeywords.has(candidate)) {
\t\t\tconst allSame =
\t\t\t\tfontWeight.value === candidate &&
\t\t\t\tfontSize.value === candidate &&
\t\t\t\tfontFamily.value === candidate &&
\t\t\t\t(!fontVariant || fontVariant.value === candidate) &&
\t\t\t\t(!lineHeight || lineHeight.value === candidate);
\t\t\tif (allSame) {
\t\t\t\treturn { value: candidate, important: imp };
\t\t\t}
\t\t}

\t\tconst parts: string[] = [];
\t\tif (fontStyle.value !== 'normal') {
\t\t\tparts.push(fontStyle.value);
\t\t}
\t\tif (fontVariant && fontVariant.value !== 'normal') {
\t\t\tparts.push(fontVariant.value);
\t\t}
\t\tif (fontWeight.value !== 'normal' && fontWeight.value !== '400') {
\t\t\tparts.push(fontWeight.value);
\t\t}

\t\tlet sizeStr = fontSize.value;
\t\tif (lineHeight && lineHeight.value !== 'normal') {
\t\t\tsizeStr += ' / ' + lineHeight.value;
\t\t}
\t\tparts.push(sizeStr);
\t\tparts.push(fontFamily.value);

\t\treturn { value: parts.join(' '), important: imp };
\t}

\t/**
\t * Background shorthand — simplified.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getBackground(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst image = props['background-image'];
\t\tconst color = props['background-color'];
\t\tconst repeat = props['background-repeat'];
\t\tconst posX = props['background-position-x'];
\t\tconst posY = props['background-position-y'];
\t\tconst size = props['background-size'];
\t\tconst attachment = props['background-attachment'];
\t\tconst origin = props['background-origin'];
\t\tconst clip = props['background-clip'];

\t\tif (!image || !color || !repeat || !posX || !posY || !size || !attachment || !origin || !clip) {
\t\t\treturn null;
\t\t}

\t\tconst imp = color.important;

\t\t// Check global keyword collapse
\t\tconst allValues = [image, color, repeat, posX, posY, size, attachment, origin, clip].map(
\t\t\t(v) => v!.value
\t\t);
\t\tconst globalCollapse = this.collapseGlobal(allValues, imp);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\t// If all are initial except color, return just the color
\t\tif (
\t\t\timage.value === 'initial' &&
\t\t\trepeat.value === 'initial' &&
\t\t\tposX.value === 'initial' &&
\t\t\tposY.value === 'initial' &&
\t\t\tsize.value === 'initial' &&
\t\t\tattachment.value === 'initial' &&
\t\t\torigin.value === 'initial' &&
\t\t\tclip.value === 'initial' &&
\t\t\tcolor.value !== 'initial'
\t\t) {
\t\t\treturn { value: color.value, important: imp };
\t\t}

\t\t// Build full background value
\t\tconst parts: string[] = [];
\t\tif (image.value !== 'initial' && image.value !== 'none') {
\t\t\tparts.push(image.value);
\t\t}
\t\tif (posX.value !== 'initial' || posY.value !== 'initial') {
\t\t\tconst pos = \`\${posX.value === 'initial' ? '0%' : posX.value} \${posY.value === 'initial' ? '0%' : posY.value}\`;
\t\t\tif (size.value !== 'initial') {
\t\t\t\tparts.push(pos + ' / ' + size.value);
\t\t\t} else {
\t\t\t\tparts.push(pos);
\t\t\t}
\t\t}
\t\tif (repeat.value !== 'initial' && repeat.value !== 'repeat') {
\t\t\tparts.push(repeat.value);
\t\t}
\t\tif (attachment.value !== 'initial') {
\t\t\tparts.push(attachment.value);
\t\t}
\t\tif (origin.value !== 'initial') {
\t\t\tparts.push(origin.value);
\t\t}
\t\tif (clip.value !== 'initial') {
\t\t\tparts.push(clip.value);
\t\t}
\t\tif (color.value !== 'initial') {
\t\t\tparts.push(color.value);
\t\t}

\t\treturn { value: parts.join(' ') || 'none', important: imp };
\t}

\t/**
\t * Border image shorthand: source slice / width / outset repeat.
\t *
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getBorderImage(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
\t\tconst source = props['border-image-source'];
\t\tconst slice = props['border-image-slice'];
\t\tconst width = props['border-image-width'];
\t\tconst outset = props['border-image-outset'];
\t\tconst repeat = props['border-image-repeat'];
\t\tif (!source || !slice || !width || !outset || !repeat) {
\t\t\treturn null;
\t\t}
\t\tif (
\t\t\tsource.important !== slice.important ||
\t\t\tslice.important !== width.important ||
\t\t\twidth.important !== outset.important ||
\t\t\toutset.important !== repeat.important
\t\t) {
\t\t\treturn null;
\t\t}

\t\tconst allValues = [source.value, slice.value, width.value, outset.value, repeat.value];
\t\tconst globalCollapse = this.collapseGlobal(allValues, source.important);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\t// Always output: source slice / width / outset repeat
\t\tconst parts: string[] = [];
\t\tconst sourceVal = source.value === 'initial' ? 'none' : source.value;
\t\tconst sliceVal = slice.value === 'initial' ? '100%' : slice.value;
\t\tconst widthVal = width.value === 'initial' ? '1' : width.value;
\t\tconst outsetVal = outset.value === 'initial' ? '0' : outset.value;
\t\tconst repeatVal = repeat.value === 'initial' ? 'stretch' : repeat.value;

\t\tif (sourceVal !== 'none') {
\t\t\tparts.push(sourceVal);
\t\t}
\t\tparts.push(sliceVal);
\t\tparts.push('/');
\t\tparts.push(widthVal);
\t\tparts.push('/');
\t\tparts.push(outsetVal);
\t\tparts.push(repeatVal);

\t\treturn { value: parts.join(' '), important: source.important };
\t}

\t/**
\t * Generic fallback: concatenate all longhand values.
\t *
\t * @param name Shorthand name.
\t * @param props The property store.
\t * @returns Composed value or null.
\t */
\tprivate static getGeneric(
\t\tname: string,
\t\tprops: PropertyStore
\t): ICSSStyleDeclarationPropertyValue | null {
\t\tconst longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
\t\tif (!longhands) {
\t\t\treturn null;
\t\t}

\t\tconst values: string[] = [];
\t\tlet imp: boolean | null = null;

\t\tfor (const lh of longhands) {
\t\t\tconst v = props[lh];
\t\t\tif (!v) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tif (imp === null) {
\t\t\t\timp = v.important;
\t\t\t} else if (v.important !== imp) {
\t\t\t\treturn null;
\t\t\t}
\t\t\tvalues.push(v.value);
\t\t}

\t\tconst globalCollapse = this.collapseGlobal(values, imp ?? false);
\t\tif (globalCollapse) {
\t\t\treturn globalCollapse;
\t\t}

\t\t// If all values are the same, collapse to a single value
\t\tif (values.every((v) => v === values[0])) {
\t\t\treturn { value: values[0], important: imp ?? false };
\t\t}

\t\treturn { value: values.join(' '), important: imp ?? false };
\t}
}
`;

	return out;
}
