/**
 * Generates CSSStyleDeclarationPropertySetParser.ts
 *
 * The SetParser is the core of B1 (shorthand → longhand expansion).
 * It validates incoming CSS values and returns a map of longhand properties.
 */
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
export function generatePropertyTypeSets(ir) {
	let out = fileHeader();
	const emitSet = (exportName, items) => {
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
	const keywordOnlyProps = [];
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
export function generateSetParser(ir) {
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

export interface IPropertyValueMap {
\t[propertyName: string]: ICSSStyleDeclarationPropertyValue | undefined;
}

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
	out += generateTextDecorationExpander();
	out += generateListStyleExpander();
	out += generateColumnsExpander();
	out += generateGenericShorthandFallback(ir);
	out += `}\n`;
	return out;
}
function generateShorthandDispatch(ir) {
	// Map of shorthand names to their parser method names
	const handledShorthands = new Set([
		'margin',
		'padding',
		'inset',
		'margin-block',
		'margin-inline',
		'padding-block',
		'padding-inline',
		'inset-block',
		'inset-inline',
		'scroll-margin',
		'scroll-margin-block',
		'scroll-margin-inline',
		'scroll-padding',
		'scroll-padding-block',
		'scroll-padding-inline',
		'border',
		'border-top',
		'border-right',
		'border-bottom',
		'border-left',
		'border-block-start',
		'border-block-end',
		'border-inline-start',
		'border-inline-end',
		'border-width',
		'border-style',
		'border-color',
		'border-radius',
		'flex',
		'flex-flow',
		'outline',
		'overflow',
		'gap',
		'place-content',
		'place-items',
		'place-self',
		'overscroll-behavior',
		'font',
		'background',
		'background-position',
		'text-decoration',
		'list-style',
		'columns'
	]);
	let out = '';
	for (const name of handledShorthands) {
		const methodName = shorthandToMethodName(name);
		out += `\t\t\tcase ${quote(name)}:\n`;
		out += `\t\t\t\treturn this.${methodName}(trimmed, important);\n`;
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
function generateLonghandParser(ir) {
	let out = `\t/**
\t * Parse a longhand property value.
\t *
\t * @param name Property name (kebab-case).
\t * @param value Raw CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Map of longhand properties, or null if invalid.
\t */
\tprivate static parseLonghand(name: string, value: string, important: boolean): IPropertyValueMap | null {
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
	// Number properties (Tier 2)
	out += `\t\t// Tier 2: Number properties
\t\tif (CSS_NUMBER_PROPERTIES.has(name)) {
\t\t\tconst acceptNeg = name !== 'opacity' && name !== 'fill-opacity' &&
\t\t\t\tname !== 'stroke-opacity' && name !== 'stop-opacity' && name !== 'flood-opacity';
\t\t\tparsed = CSSStyleDeclarationValueParser.getNumber(value, acceptNeg);
\t\t\tif (parsed !== null) {
\t\t\t\treturn { [name]: { value: parsed, important } };
\t\t\t}
\t\t}

`;
	// Fallback: reject values for keyword-only properties, and for typed properties that failed above
	out += `\t\t// Reject invalid values for keyword-only properties\n`;
	out += `\t\tif (CSS_KEYWORD_ONLY_PROPERTIES.has(name)) {\n`;
	out += `\t\t\treturn null;\n`;
	out += `\t\t}\n\n`;
	out += `\t\t// Reject invalid values for typed properties (color/length/number) that failed validation above
\t\tif (CSS_COLOR_PROPERTIES.has(name) || CSS_LENGTH_PROPERTIES.has(name) || CSS_NUMBER_PROPERTIES.has(name)) {
\t\t\treturn null;
\t\t}

\t\t// Fallback: accept the value as-is for properties without specific validation
\t\t// This ensures forward-compatibility with new CSS properties
\t\tconst trimmedLower = value.trim();
\t\tif (trimmedLower) {
\t\t\treturn { [name]: { value: trimmedLower, important } };
\t\t}

\t\treturn null;
\t}

`;
	return out;
}
function generateBoxModelExpander(
	shorthand,
	longhands,
	acceptNegative,
	maxValues = 4,
	acceptAuto = false
) {
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
function generateBorderRadiusExpander() {
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
function generateBorderExpander() {
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
\t\tconst parts = value.trim().split(/\\s+/);
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
function generateBorderSideExpander(shorthand, widthProp, styleProp, colorProp) {
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
function generateBorderWidthStyleColorExpander(shorthand, longhands, type) {
	const methodName = shorthandToMethodName(shorthand);
	let validator;
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
\t\tconst parts = value.trim().split(/\\s+/);
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
function generateFlexExpander() {
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
function generateFlexFlowExpander() {
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
function generateOutlineExpander() {
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
function generateOverflowExpander() {
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
function generateGapExpander() {
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
function generatePlaceExpander(shorthand, align, justify) {
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
function generateOverscrollBehaviorExpander() {
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
function generateFontExpander() {
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

\t\treturn {
\t\t\t'font-style': { value: fontStyle, important },
\t\t\t'font-variant': { value: fontVariant, important },
\t\t\t'font-weight': { value: fontWeight, important },
\t\t\t'font-stretch': { value: fontStretch, important },
\t\t\t'font-size': { value: fontSize, important },
\t\t\t'line-height': { value: lineHeight, important },
\t\t\t'font-family': { value: fontFamily.trim(), important }
\t\t};
\t}
`;
}
function generateBackgroundPositionExpander() {
	return `
\t/**
\t * Parse background-position shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBackgroundPosition(value: string, important: boolean): IPropertyValueMap | null {
\t\tconst parts = value.trim().split(/\\s+/);
\t\tif (parts.length === 1) {
\t\t\t// Single value: x = value, y = center (50%)
\t\t\treturn {
\t\t\t\t'background-position-x': { value: parts[0], important },
\t\t\t\t'background-position-y': { value: 'center', important }
\t\t\t};
\t\t}
\t\tif (parts.length === 2) {
\t\t\treturn {
\t\t\t\t'background-position-x': { value: parts[0], important },
\t\t\t\t'background-position-y': { value: parts[1], important }
\t\t\t};
\t\t}
\t\t// 3-4 value syntax is complex; accept as-is for each axis
\t\treturn {
\t\t\t'background-position-x': { value: parts.slice(0, Math.ceil(parts.length / 2)).join(' '), important },
\t\t\t'background-position-y': { value: parts.slice(Math.ceil(parts.length / 2)).join(' '), important }
\t\t};
\t}

`;
}
function generateBackgroundExpander() {
	return `
\t/**
\t * Parse background shorthand.
\t *
\t * @param value CSS value string.
\t * @param important Whether the value has !important.
\t * @returns Longhand property map or null.
\t */
\tprivate static parseBackground(value: string, important: boolean): IPropertyValueMap | null {
\t\t// Simplified background parser — handles common cases
\t\t// background: [color] [image] [position] [/ size] [repeat] [attachment] [origin] [clip]
\t\tconst lower = value.trim().toLowerCase();

\t\t// If it's a single color
\t\tconst asColor = CSSStyleDeclarationValueParser.getColor(lower);
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

\t\t// For complex background values, store as-is on longhands
\t\t// This is a simplified approach — full background parsing is very complex
\t\t// (multi-layer, multiple backgrounds, etc.)
\t\t// Accept the value and let the browser-compat layer handle nuances
\t\treturn {
\t\t\t'background-image': { value: 'initial', important },
\t\t\t'background-position-x': { value: 'initial', important },
\t\t\t'background-position-y': { value: 'initial', important },
\t\t\t'background-size': { value: 'initial', important },
\t\t\t'background-repeat': { value: 'initial', important },
\t\t\t'background-attachment': { value: 'initial', important },
\t\t\t'background-origin': { value: 'initial', important },
\t\t\t'background-clip': { value: 'initial', important },
\t\t\t'background-color': { value: value.trim(), important }
\t\t};
\t}
`;
}
function generateTextDecorationExpander() {
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
function generateListStyleExpander() {
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
function generateColumnsExpander() {
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
function generateGenericShorthandFallback(ir) {
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
// # sourceMappingURL=set-parser.js.map
