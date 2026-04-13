/**
 * Generates CSSStyleDeclarationValueParser.ts — value validation utilities.
 */

import type { PropertyIR } from '../ir/property-ir.js';
import { fileHeader } from '../utils/template-utils.js';

const NAMED_COLORS = [
	'transparent',
	'currentcolor',
	'aliceblue',
	'antiquewhite',
	'aqua',
	'aquamarine',
	'azure',
	'beige',
	'bisque',
	'black',
	'blanchedalmond',
	'blue',
	'blueviolet',
	'brown',
	'burlywood',
	'cadetblue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflowerblue',
	'cornsilk',
	'crimson',
	'cyan',
	'darkblue',
	'darkcyan',
	'darkgoldenrod',
	'darkgray',
	'darkgreen',
	'darkgrey',
	'darkkhaki',
	'darkmagenta',
	'darkolivegreen',
	'darkorange',
	'darkorchid',
	'darkred',
	'darksalmon',
	'darkseagreen',
	'darkslateblue',
	'darkslategray',
	'darkslategrey',
	'darkturquoise',
	'darkviolet',
	'deeppink',
	'deepskyblue',
	'dimgray',
	'dimgrey',
	'dodgerblue',
	'firebrick',
	'floralwhite',
	'forestgreen',
	'fuchsia',
	'gainsboro',
	'ghostwhite',
	'gold',
	'goldenrod',
	'gray',
	'green',
	'greenyellow',
	'grey',
	'honeydew',
	'hotpink',
	'indianred',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lavenderblush',
	'lawngreen',
	'lemonchiffon',
	'lightblue',
	'lightcoral',
	'lightcyan',
	'lightgoldenrodyellow',
	'lightgray',
	'lightgreen',
	'lightgrey',
	'lightpink',
	'lightsalmon',
	'lightseagreen',
	'lightskyblue',
	'lightslategray',
	'lightslategrey',
	'lightsteelblue',
	'lightyellow',
	'lime',
	'limegreen',
	'linen',
	'magenta',
	'maroon',
	'mediumaquamarine',
	'mediumblue',
	'mediumorchid',
	'mediumpurple',
	'mediumseagreen',
	'mediumslateblue',
	'mediumspringgreen',
	'mediumturquoise',
	'mediumvioletred',
	'midnightblue',
	'mintcream',
	'mistyrose',
	'moccasin',
	'navajowhite',
	'navy',
	'oldlace',
	'olive',
	'olivedrab',
	'orange',
	'orangered',
	'orchid',
	'palegoldenrod',
	'palegreen',
	'paleturquoise',
	'palevioletred',
	'papayawhip',
	'peachpuff',
	'peru',
	'pink',
	'plum',
	'powderblue',
	'purple',
	'rebeccapurple',
	'red',
	'rosybrown',
	'royalblue',
	'saddlebrown',
	'salmon',
	'sandybrown',
	'seagreen',
	'seashell',
	'sienna',
	'silver',
	'skyblue',
	'slateblue',
	'slategray',
	'slategrey',
	'snow',
	'springgreen',
	'steelblue',
	'tan',
	'teal',
	'thistle',
	'tomato',
	'turquoise',
	'violet',
	'wheat',
	'white',
	'whitesmoke',
	'yellow',
	'yellowgreen'
];

export function generateNamedColors(): string {
	let out = fileHeader();
	const items = NAMED_COLORS.map(
		(c, i) => `\t'${c}'${i < NAMED_COLORS.length - 1 ? ',' : ''}`
	).join('\n');
	out += `/**\n * All valid CSS named colors (including 'transparent' and 'currentcolor').\n */\nexport const CSS_NAMED_COLORS = new Set([\n${items}\n]);\n`;
	return out;
}

export function generateValueParser(ir: PropertyIR): string {
	let out = fileHeader();

	out += `import { CSS_PROPERTY_KEYWORDS } from '../property-definitions/CSSPropertyDefinitions.js';
import { CSS_NAMED_COLORS } from '../property-definitions/CSSNamedColors.js';

/**
 * Validates and normalizes CSS values.
 * Enforces B5 (normalization), B6 (invalid values silently ignored).
 */
export default class CSSStyleDeclarationValueParser {
\t/** CSS-wide (global) values accepted by all properties. */
\tprivate static readonly globalValues = new Set([
\t\t'inherit',
\t\t'initial',
\t\t'unset',
\t\t'revert',
\t\t'revert-layer'
\t]);

\t/** Regex for CSS variable references: var(--name) or var(--name, fallback). */
\tprivate static readonly varRegexp = /^var\\(\\s*--[a-zA-Z0-9_-]+/;

\t/** Regex for a valid CSS length value. */
\tprivate static readonly lengthRegexp =
\t\t/^(-?\\d*\\.?\\d+)(px|em|rem|%|vw|vh|vmin|vmax|cm|mm|in|pt|pc|Q|ex|ch|cap|ic|lh|rlh|vi|vb|svw|svh|lvw|lvh|dvw|dvh|cqw|cqh|cqi|cqb|cqmin|cqmax)$/i;

\t/** Regex for a valid number. */
\tprivate static readonly numberRegexp = /^-?\\d*\\.?\\d+$/;

\t/** Regex for a valid integer. */
\tprivate static readonly integerRegexp = /^-?\\d+$/;

\t/** Regex for calc() expression. */
\tprivate static readonly calcRegexp = /^calc\\(.+\\)$/i;

\t/** Regex for a valid URL value. */
\tprivate static readonly urlRegexp = /^url\\(\\s*(['"]?).*?\\1\\s*\\)$/i;

\t/** Regex for hex color. */
\tprivate static readonly hexColorRegexp = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

\t/** Regex for functional color values: rgb(), rgba(), hsl(), hsla(), etc. */
\tprivate static readonly colorFunctionRegexp =
\t\t/^(rgb|rgba|hsl|hsla|hwb|lab|lch|oklch|oklab|color|color-mix|light-dark)\\(/i;

\t/**
\t * Check if a value is a CSS-wide global keyword.
\t *
\t * @param value CSS value to check.
\t * @returns Normalized keyword or null.
\t */
\tpublic static getGlobal(value: string): string | null {
\t\tconst lower = value.trim().toLowerCase();
\t\treturn this.globalValues.has(lower) ? lower : null;
\t}

\t/**
\t * Check if a value is a CSS variable reference.
\t *
\t * @param value CSS value to check.
\t * @returns Trimmed variable reference or null.
\t */
\tpublic static getVariable(value: string): string | null {
\t\tconst trimmed = value.trim();
\t\treturn this.varRegexp.test(trimmed) ? trimmed : null;
\t}

\t/**
\t * Parse a value as a valid CSS length, percentage, or 'auto', or 0.
\t * Returns the normalized value or null if invalid.
\t *
\t * @param value CSS value to parse.
\t * @param acceptNegative Whether negative values are accepted.
\t * @returns Normalized length or null.
\t */
\tpublic static getLength(value: string, acceptNegative = true): string | null {
\t\tconst trimmed = value.trim().toLowerCase();
\t\tif (trimmed === '0') {
\t\t\treturn '0px';
\t\t}
\t\tif (this.calcRegexp.test(trimmed)) {
\t\t\treturn trimmed;
\t\t}
\t\tconst match = this.lengthRegexp.exec(trimmed);
\t\tif (!match) {
\t\t\treturn null;
\t\t}
\t\tconst num = parseFloat(match[1]);
\t\tif (!acceptNegative && num < 0) {
\t\t\treturn null;
\t\t}
\t\tif (num === 0) {
\t\t\treturn '0px';
\t\t}
\t\treturn parseFloat(parseFloat(match[1]).toFixed(6)).toString() + match[2].toLowerCase();
\t}

\t/**
\t * Parse a value as length, percentage, auto, or content keywords.
\t *
\t * @param value CSS value to parse.
\t * @param acceptNegative Whether negative values are accepted.
\t * @returns Normalized value or null.
\t */
\tpublic static getContentMeasurement(value: string, acceptNegative = true): string | null {
\t\tconst trimmed = value.trim().toLowerCase();
\t\tif (
\t\t\ttrimmed === 'auto' ||
\t\t\ttrimmed === 'min-content' ||
\t\t\ttrimmed === 'max-content' ||
\t\t\ttrimmed === 'fit-content' ||
\t\t\ttrimmed === 'none'
\t\t) {
\t\t\treturn trimmed;
\t\t}
\t\tif (trimmed.startsWith('fit-content(')) {
\t\t\treturn trimmed;
\t\t}
\t\treturn this.getLength(trimmed, acceptNegative);
\t}

\t/**
\t * Parse a number value.
\t *
\t * @param value CSS value to parse.
\t * @param acceptNegative Whether negative values are accepted.
\t * @returns Normalized number or null.
\t */
\tpublic static getNumber(value: string, acceptNegative = true): string | null {
\t\tconst trimmed = value.trim();
\t\tif (!this.numberRegexp.test(trimmed)) {
\t\t\treturn null;
\t\t}
\t\tconst num = parseFloat(trimmed);
\t\tif (!acceptNegative && num < 0) {
\t\t\treturn null;
\t\t}
\t\treturn String(num);
\t}

\t/**
\t * Parse an integer value.
\t *
\t * @param value CSS value to parse.
\t * @param acceptNegative Whether negative values are accepted.
\t * @returns Normalized integer or null.
\t */
\tpublic static getInteger(value: string, acceptNegative = true): string | null {
\t\tconst trimmed = value.trim();
\t\tif (!this.integerRegexp.test(trimmed)) {
\t\t\treturn null;
\t\t}
\t\tconst num = parseInt(trimmed, 10);
\t\tif (!acceptNegative && num < 0) {
\t\t\treturn null;
\t\t}
\t\treturn String(num);
\t}

\t/**
\t * Parse a CSS color value.
\t *
\t * @param value CSS value to parse.
\t * @returns Normalized color or null.
\t */
\tpublic static getColor(value: string): string | null {
\t\tconst trimmed = value.trim();
\t\tconst lower = trimmed.toLowerCase();
\t\t// Named colors
\t\tif (CSS_NAMED_COLORS.has(lower)) {
\t\t\treturn lower;
\t\t}
\t\t// CSS color keyword 'none' (used in contexts like background-color)
\t\tif (lower === 'none') {
\t\t\treturn 'none';
\t\t}
\t\t// Hex colors
\t\tif (this.hexColorRegexp.test(lower)) {
\t\t\treturn lower;
\t\t}
\t\t// Functional colors (rgb, hsl, etc.)
\t\tif (this.colorFunctionRegexp.test(trimmed)) {
\t\t\t// Basic validation: has matching parens
\t\t\tlet depth = 0;
\t\t\tfor (const ch of trimmed) {
\t\t\t\tif (ch === '(') {
\t\t\t\t\tdepth++;
\t\t\t\t}
\t\t\t\tif (ch === ')') {
\t\t\t\t\tdepth--;
\t\t\t\t}
\t\t\t}
\t\t\tif (depth === 0) {
\t\t\t\t// Normalize spacing after commas
\t\t\t\treturn trimmed.replace(/,\\s*/g, ', ');
\t\t\t}
\t\t}
\t\treturn null;
\t}

\t/**
\t * Parse a URL value.
\t *
\t * @param value CSS value to parse.
\t * @returns Normalized URL or null.
\t */
\tpublic static getURL(value: string): string | null {
\t\tconst trimmed = value.trim();
\t\tif (!this.urlRegexp.test(trimmed)) {
\t\t\treturn null;
\t\t}
\t\t// Normalize URL quotes
\t\tconst inner = trimmed.slice(4, -1).trim();
\t\tif (inner.startsWith('"') || inner.startsWith("'")) {
\t\t\t// Already quoted — normalize to double quotes
\t\t\tconst unquoted = inner.slice(1, -1);
\t\t\treturn \`url("\${unquoted}")\`;
\t\t}
\t\treturn \`url("\${inner}")\`;
\t}

\t/**
\t * Validate a value against a property's keyword list.
\t * Returns the normalized (lowercased) keyword or null.
\t *
\t * @param propertyName CSS property name.
\t * @param value CSS value to validate.
\t * @returns Normalized keyword or null.
\t */
\tpublic static getKeyword(propertyName: string, value: string): string | null {
\t\tconst keywords = CSS_PROPERTY_KEYWORDS[propertyName];
\t\tif (!keywords) {
\t\t\treturn null;
\t\t}
\t\tconst lower = value.trim().toLowerCase();
\t\treturn keywords.has(lower) ? lower : null;
\t}

\t/**
\t * Parse a CSS gradient value.
\t * Validates the gradient function prefix, checks balanced parens,
\t * and normalizes inner args (top-level comma-split, trim whitespace).
\t *
\t * @param value CSS value to parse.
\t * @returns Normalized gradient or null.
\t */
\tpublic static getGradient(value: string): string | null {
\t\tconst trimmed = value.trim();
\t\tconst lower = trimmed.toLowerCase();
\t\tconst validPrefixes = [
\t\t\t'linear-gradient(',
\t\t\t'radial-gradient(',
\t\t\t'conic-gradient(',
\t\t\t'repeating-linear-gradient(',
\t\t\t'repeating-radial-gradient(',
\t\t\t'repeating-conic-gradient('
\t\t];
\t\tif (!validPrefixes.some((prefix) => lower.startsWith(prefix))) {
\t\t\treturn null;
\t\t}
\t\t// Validate balanced parentheses
\t\tlet depth = 0;
\t\tfor (const ch of trimmed) {
\t\t\tif (ch === '(') {
\t\t\t\tdepth++;
\t\t\t} else if (ch === ')') {
\t\t\t\tdepth--;
\t\t\t\tif (depth < 0) {
\t\t\t\t\treturn null;
\t\t\t\t}
\t\t\t}
\t\t}
\t\tif (depth !== 0) {
\t\t\treturn null;
\t\t}
\t\tconst openIdx = trimmed.indexOf('(');
\t\tconst typePart = trimmed.slice(0, openIdx);
\t\tconst inner = trimmed.slice(openIdx + 1, -1);
\t\t// Split by top-level commas and trim each part
\t\tconst args: string[] = [];
\t\tlet current = '';
\t\tlet d = 0;
\t\tfor (const ch of inner) {
\t\t\tif (ch === '(') {
\t\t\t\td++;
\t\t\t\tcurrent += ch;
\t\t\t} else if (ch === ')') {
\t\t\t\td--;
\t\t\t\tcurrent += ch;
\t\t\t} else if (ch === ',' && d === 0) {
\t\t\t\targs.push(current.trim());
\t\t\t\tcurrent = '';
\t\t\t} else {
\t\t\t\tcurrent += ch;
\t\t\t}
\t\t}
\t\targs.push(current.trim());
\t\treturn \`\${typePart}(\${args.join(', ')})\`;
\t}

\t/**
\t * Validate a value for a generic property (tries global, variable, keyword).
\t *
\t * @param propertyName CSS property name.
\t * @param value CSS value to validate.
\t * @returns Normalized value or null.
\t */
\tpublic static validate(propertyName: string, value: string): string | null {
\t\tconst trimmed = value.trim();
\t\tif (!trimmed) {
\t\t\treturn null;
\t\t}
\t\treturn (
\t\t\tthis.getVariable(trimmed) ??
\t\t\tthis.getGlobal(trimmed) ??
\t\t\tthis.getKeyword(propertyName, trimmed) ??
\t\t\tnull
\t\t);
\t}
}
`;

	return out;
}
