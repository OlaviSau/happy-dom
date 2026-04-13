/**
 * AUTO-GENERATED FILE — DO NOT EDIT
 *
 * Derived from Chromium Blink rendering engine property data.
 * Source: https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink
 */

import CSSStyleDeclarationValueParser from './CSSStyleDeclarationValueParser.js';
import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';
import {
	CSS_COLOR_PROPERTIES,
	CSS_LENGTH_PROPERTIES,
	CSS_NON_NEGATIVE_LENGTH_PROPERTIES,
	CSS_NUMBER_PROPERTIES,
	CSS_KEYWORD_ONLY_PROPERTIES
} from '../property-definitions/CSSPropertyTypeSets.js';
import { CSS_LONGHAND_PROPERTIES } from '../property-definitions/CSSPropertyDefinitions.js';

export interface IPropertyValueMap {
	[propertyName: string]: ICSSStyleDeclarationPropertyValue | undefined;
}

// Background component keywords used to validate catch-all background values.
const BACKGROUND_KEYWORDS = new Set([
	'center',
	'top',
	'bottom',
	'left',
	'right',
	'repeat',
	'repeat-x',
	'repeat-y',
	'no-repeat',
	'round',
	'space',
	'fixed',
	'local',
	'scroll',
	'border-box',
	'padding-box',
	'content-box',
	'cover',
	'contain',
	'auto'
]);

// Border style keywords used by border shorthand parsing
const BORDER_STYLE_KEYWORDS = new Set([
	'none',
	'hidden',
	'dotted',
	'dashed',
	'solid',
	'double',
	'groove',
	'ridge',
	'inset',
	'outset'
]);

// Border width keywords
const BORDER_WIDTH_KEYWORDS = new Set(['thin', 'medium', 'thick']);

/**
 * Splits a CSS value string on whitespace while respecting parentheses, so that
 * functional values like rgba(135, 200, 150, 0.5) are kept as a single token.
 * @param value
 */
function splitCSSTokens(value: string): string[] {
	const tokens: string[] = [];
	let depth = 0;
	let current = '';
	for (const ch of value) {
		if (ch === '(') {
			depth++;
			current += ch;
		} else if (ch === ')') {
			depth--;
			current += ch;
		} else if (/\s/.test(ch) && depth === 0) {
			if (current) {
				tokens.push(current);
				current = '';
			}
		} else {
			current += ch;
		}
	}
	if (current) {
		tokens.push(current);
	}
	return tokens;
}

/**
 * Splits a CSS value on commas at top-level (not inside parentheses).
 * Used for multi-URL, multi-gradient background-image values.
 * @param value
 */
function splitTopLevelCommas(value: string): string[] {
	const parts: string[] = [];
	let current = '';
	let depth = 0;
	for (const ch of value) {
		if (ch === '(') {
			depth++;
			current += ch;
		} else if (ch === ')') {
			depth--;
			current += ch;
		} else if (ch === ',' && depth === 0) {
			parts.push(current);
			current = '';
		} else {
			current += ch;
		}
	}
	parts.push(current);
	return parts;
}

/**
 * Parses a CSS aspect-ratio value.
 * Normalizes '2' → '2 / 1', '16/9' → '16 / 9', 'auto 16/9' → 'auto 16 / 9', etc.
 * Returns null for invalid values.
 * @param value
 */
function parseAspectRatio(value: string): string | null {
	const lower = value.toLowerCase().replace(/\s+/g, ' ').trim();
	if (lower === 'auto') {
		return 'auto';
	}

	// Split into space-separated tokens
	const tokens = lower.split(' ');

	let autoPrefix = false;
	let ratioStr = '';

	// Handle 'auto <ratio>' or '<ratio> auto'
	if (tokens[0] === 'auto' && tokens.length > 1) {
		autoPrefix = true;
		ratioStr = tokens.slice(1).join(' ');
	} else if (tokens[tokens.length - 1] === 'auto' && tokens.length > 1) {
		autoPrefix = true;
		ratioStr = tokens.slice(0, -1).join(' ');
	} else {
		ratioStr = lower;
	}

	// Parse the ratio: either 'N' or 'N/D' or 'N / D'
	const ratioParts = ratioStr.replace(/\s*\/\s*/g, '/').split('/');
	const a = parseFloat(ratioParts[0]);
	if (isNaN(a) || a < 0) {
		return null;
	}
	const b = ratioParts.length === 2 ? parseFloat(ratioParts[1]) : 1;
	if (isNaN(b) || b < 0) {
		return null;
	}
	const ratioNorm = `${a} / ${b}`;
	return autoPrefix ? `auto ${ratioNorm}` : ratioNorm;
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
	const generics = new Set([
		'serif',
		'sans-serif',
		'monospace',
		'cursive',
		'fantasy',
		'system-ui',
		'ui-serif',
		'ui-sans-serif',
		'ui-monospace',
		'ui-rounded',
		'math',
		'emoji',
		'fangsong'
	]);

	// Split by commas that are NOT inside quoted strings
	const families: string[] = [];
	let current = '';
	let inQuote: string | null = null;
	for (let i = 0; i < value.length; i++) {
		const ch = value[i];
		if (inQuote) {
			if (ch === inQuote) {
				current += ch;
				inQuote = null;
			} else {
				current += ch;
			}
		} else if (ch === '"' || ch === "'") {
			inQuote = ch;
			current += ch;
		} else if (ch === ',') {
			families.push(current.trim());
			current = '';
		} else {
			current += ch;
		}
	}
	families.push(current.trim());

	const normalized: string[] = [];
	for (const f of families) {
		if (!f) {
			return null; // empty family (e.g. trailing comma) — invalid
		}
		if (f.startsWith('"') || f.startsWith("'")) {
			// Quoted family name — extract content (handle unclosed quotes)
			const quoteChar = f[0];
			const closeIdx = f.indexOf(quoteChar, 1);
			const inner = closeIdx !== -1 ? f.slice(1, closeIdx) : f.slice(1);
			const words = inner.trim().split(/\s+/);
			if (words.length === 1) {
				// Single word quoted → unquote
				normalized.push(words[0]);
			} else {
				// Multi-word quoted → double-quote
				normalized.push(`"${inner.trim()}"`);
			}
		} else {
			// Unquoted family name
			// An unquoted name must not contain quote characters (invalid CSS)
			if (f.includes('"') || f.includes("'")) {
				return null;
			}
			const lower = f.toLowerCase();
			if (generics.has(lower)) {
				normalized.push(lower);
			} else if (f.includes(' ')) {
				// Multi-word unquoted → quote
				normalized.push(`"${f}"`);
			} else {
				normalized.push(f);
			}
		}
	}
	return normalized.join(', ');
}


/**
 * Parses and validates CSS values, decomposing shorthands into longhands (B1).
 * Returns a map of longhand property → { value, important }, or null if invalid.
 */
export default class CSSStyleDeclarationPropertySetParser {

	/**
	 * Parse a property value and return the resulting longhand map.
	 * Returns null if the value is invalid (B6).
	 *
	 * @param name Property name (kebab-case).
	 * @param value Raw CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Map of longhand properties, or null if invalid.
	 */
	public static parse(name: string, value: string, important: boolean): IPropertyValueMap | null {
		const trimmed = value.trim();
		if (!trimmed) {
			return null;
		}

		// CSS custom properties: accept any value
		if (name.startsWith('--')) {
			return { [name]: { value: trimmed, important } };
		}

		// Check for CSS variable reference — always accepted
		const variable = CSSStyleDeclarationValueParser.getVariable(trimmed);
		if (variable) {
			return { [name]: { value: variable, important } };
		}

		// Check for CSS-wide global keyword — always accepted
		const global = CSSStyleDeclarationValueParser.getGlobal(trimmed);
		if (global) {
			// For the 'font' shorthand, only expand to the 7 standard longhands
			// (not all 18+ from CSS_SHORTHAND_TO_LONGHANDS['font'])
			if (name === 'font') {
				const result: IPropertyValueMap = {};
				for (const lh of [
					'font-style',
					'font-variant',
					'font-weight',
					'font-stretch',
					'font-size',
					'line-height',
					'font-family'
				]) {
					result[lh] = { value: global, important };
				}
				return result;
			}
			// For shorthands, expand global to all longhands
			const longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
			if (longhands) {
				const result: IPropertyValueMap = {};
				for (const lh of longhands) {
					result[lh] = { value: global, important };
				}
				return result;
			}
			return { [name]: { value: global, important } };
		}

		// Dispatch to shorthand parsers
		switch (name) {
			case 'margin':
				return this.parseMargin(trimmed, important);
			case 'padding':
				return this.parsePadding(trimmed, important);
			case 'inset':
				return this.parseInset(trimmed, important);
			case 'margin-block':
				return this.parseMarginBlock(trimmed, important);
			case 'margin-inline':
				return this.parseMarginInline(trimmed, important);
			case 'padding-block':
				return this.parsePaddingBlock(trimmed, important);
			case 'padding-inline':
				return this.parsePaddingInline(trimmed, important);
			case 'inset-block':
				return this.parseInsetBlock(trimmed, important);
			case 'inset-inline':
				return this.parseInsetInline(trimmed, important);
			case 'scroll-margin':
				return this.parseScrollMargin(trimmed, important);
			case 'scroll-margin-block':
				return this.parseScrollMarginBlock(trimmed, important);
			case 'scroll-margin-inline':
				return this.parseScrollMarginInline(trimmed, important);
			case 'scroll-padding':
				return this.parseScrollPadding(trimmed, important);
			case 'scroll-padding-block':
				return this.parseScrollPaddingBlock(trimmed, important);
			case 'scroll-padding-inline':
				return this.parseScrollPaddingInline(trimmed, important);
			case 'border':
				return this.parseBorder(trimmed, important);
			case 'border-top':
				return this.parseBorderTop(trimmed, important);
			case 'border-right':
				return this.parseBorderRight(trimmed, important);
			case 'border-bottom':
				return this.parseBorderBottom(trimmed, important);
			case 'border-left':
				return this.parseBorderLeft(trimmed, important);
			case 'border-block-start':
				return this.parseBorderBlockStart(trimmed, important);
			case 'border-block-end':
				return this.parseBorderBlockEnd(trimmed, important);
			case 'border-inline-start':
				return this.parseBorderInlineStart(trimmed, important);
			case 'border-inline-end':
				return this.parseBorderInlineEnd(trimmed, important);
			case 'border-width':
				return this.parseBorderWidth(trimmed, important);
			case 'border-style':
				return this.parseBorderStyle(trimmed, important);
			case 'border-color':
				return this.parseBorderColor(trimmed, important);
			case 'border-radius':
				return this.parseBorderRadius(trimmed, important);
			case 'flex':
				return this.parseFlex(trimmed, important);
			case 'flex-flow':
				return this.parseFlexFlow(trimmed, important);
			case 'outline':
				return this.parseOutline(trimmed, important);
			case 'overflow':
				return this.parseLonghand(name, trimmed, important);
			case 'animation':
				return this.parseLonghand(name, trimmed, important);
			case 'gap':
				return this.parseGap(trimmed, important);
			case 'place-content':
				return this.parsePlaceContent(trimmed, important);
			case 'place-items':
				return this.parsePlaceItems(trimmed, important);
			case 'place-self':
				return this.parsePlaceSelf(trimmed, important);
			case 'overscroll-behavior':
				return this.parseOverscrollBehavior(trimmed, important);
			case 'font':
				return this.parseFont(trimmed, important);
			case 'background':
				return this.parseBackground(trimmed, important);
			case 'background-position':
				return this.parseBackgroundPosition(trimmed, important);
			case 'border-image':
				return this.parseBorderImage(trimmed, important);
			case 'text-decoration':
				return this.parseTextDecoration(trimmed, important);
			case 'list-style':
				return this.parseListStyle(trimmed, important);
			case 'columns':
				return this.parseColumns(trimmed, important);
			default: {
				const longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
				if (longhands) {
					return this.parseGenericShorthand(name, trimmed, important);
				}
				break;
			}

		}

		// Dispatch to longhand parsers
		return this.parseLonghand(name, trimmed, important);
	}

	/**
	 * Parse a longhand property value.
	 *
	 * @param name Property name (kebab-case).
	 * @param value Raw CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Map of longhand properties, or null if invalid.
	 */
	private static parseLonghand(
		name: string,
		value: string,
		important: boolean
	): IPropertyValueMap | null {
		let parsed: string | null = null;

		// Tier 1: Keyword validation from IR data
		parsed = CSSStyleDeclarationValueParser.getKeyword(name, value);
		if (parsed !== null) {
			return { [name]: { value: parsed, important } };
		}

		// Tier 2: Color properties
		if (CSS_COLOR_PROPERTIES.has(name)) {
			parsed = CSSStyleDeclarationValueParser.getColor(value);
			if (parsed !== null) {
				return { [name]: { value: parsed, important } };
			}
		}

		// Tier 2: Length/measurement properties
		if (CSS_LENGTH_PROPERTIES.has(name)) {
			const acceptNegative = !CSS_NON_NEGATIVE_LENGTH_PROPERTIES.has(name);
			parsed = CSSStyleDeclarationValueParser.getContentMeasurement(value, acceptNegative);
			if (parsed !== null) {
				return { [name]: { value: parsed, important } };
			}
		}

		// Special case: line-height accepts unitless numbers
		if (name === 'line-height') {
			const num = CSSStyleDeclarationValueParser.getNumber(value, false);
			if (num !== null) {
				return { [name]: { value: num, important } };
			}
		}

		// Tier 2: Number properties
		if (CSS_NUMBER_PROPERTIES.has(name)) {
			const acceptNeg =
				name !== 'opacity' &&
				name !== 'fill-opacity' &&
				name !== 'stroke-opacity' &&
				name !== 'stop-opacity' &&
				name !== 'flood-opacity';
			parsed = CSSStyleDeclarationValueParser.getNumber(value, acceptNeg);
			if (parsed !== null) {
				return { [name]: { value: parsed, important } };
			}
		}

		// Special case: font-style accepts `oblique <angle>` in addition to plain keywords
		if (name === 'font-style') {
			const lower = value.trim().toLowerCase();
			if (/^oblique\s+-?\d*\.?\d+(deg|grad|rad|turn)$/.test(lower)) {
				return { [name]: { value: lower, important } };
			}
		}

		// Special case: font-family — normalize multi-word unquoted names to quoted form
		if (name === 'font-family') {
			const normalized = normalizeFontFamily(value.trim());
			if (normalized === null) {
				return null;
			}
			return { [name]: { value: normalized, important } };
		}

		// Special case: aspect-ratio accepts <ratio> values like '2', '16/9', '16/9 auto', 'auto 16/9'
		if (name === 'aspect-ratio') {
			const r = parseAspectRatio(value.trim());
			if (r !== null) {
				return { [name]: { value: r, important } };
			}
			return null;
		}

		// Reject invalid values for keyword-only properties, but allow multi-keyword or
		// functional values (containing spaces or '(') to fall through to the typed checks.
		if (CSS_KEYWORD_ONLY_PROPERTIES.has(name)) {
			const lower = value.trim().toLowerCase();
			if (!lower.includes(' ') && !lower.includes('(')) {
				return null;
			}
			// Multi-keyword / functional value — fall through to fallback
		}

		// Reject invalid values for typed properties (color/length/number) that failed validation above
		if (
			CSS_COLOR_PROPERTIES.has(name) ||
			CSS_LENGTH_PROPERTIES.has(name) ||
			CSS_NUMBER_PROPERTIES.has(name)
		) {
			return null;
		}

		// Fallback: only accept values for known CSS longhand properties or vendor-prefixed properties.
		// Rejecting unknown property names matches Chrome's behavior.
		const trimmed = value.trim();
		if (
			trimmed &&
			(CSS_LONGHAND_PROPERTIES[name] ||
				name === 'src' ||
				name === 'unicode-range' ||
				name.startsWith('-webkit-') ||
				name.startsWith('-moz-') ||
				name.startsWith('-ms-') ||
				name.startsWith('-o-'))
		) {
			// Handle multi-URL / multi-gradient values (comma-separated at top level)
			const parts = splitTopLevelCommas(trimmed);
			if (parts.length > 1) {
				// Normalize each part individually and rejoin
				const normalizedParts = parts.map((p) => {
					const pt = p.trim();
					if (pt.toLowerCase().startsWith('url(')) {
						return CSSStyleDeclarationValueParser.getURL(pt) ?? pt;
					}
					const gradient = CSSStyleDeclarationValueParser.getGradient(pt);
					if (gradient !== null) {
						return gradient;
					}
					return pt;
				});
				return { [name]: { value: normalizedParts.join(', '), important } };
			}
			// Single value — normalize url() values or attempt length normalization
			if (trimmed.toLowerCase().startsWith('url(')) {
				const normalized = CSSStyleDeclarationValueParser.getURL(trimmed);
				return { [name]: { value: normalized ?? trimmed, important } };
			}
			const gradient = CSSStyleDeclarationValueParser.getGradient(trimmed);
			if (gradient !== null) {
				return { [name]: { value: gradient, important } };
			}
			// Try to normalize whitespace-separated length tokens
			const tokens = splitCSSTokens(trimmed);
			const normalizedTokens = tokens.map((tok) => {
				const len = CSSStyleDeclarationValueParser.getLength(tok);
				return len !== null ? len : tok;
			});
			return { [name]: { value: normalizedTokens.join(' '), important } };
		}

		return null;
	}


	/**
	 * Parse margin shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseMargin(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [top, right = top, bottom = top, left = right] = validated;
		return {
			'margin-top': { value: top, important },
			'margin-right': { value: right, important },
			'margin-bottom': { value: bottom, important },
			'margin-left': { value: left, important }
		};
	}

	/**
	 * Parse padding shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePadding(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [top, right = top, bottom = top, left = right] = validated;
		return {
			'padding-top': { value: top, important },
			'padding-right': { value: right, important },
			'padding-bottom': { value: bottom, important },
			'padding-left': { value: left, important }
		};
	}

	/**
	 * Parse inset shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseInset(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [top, right = top, bottom = top, left = right] = validated;
		return {
			top: { value: top, important },
			right: { value: right, important },
			bottom: { value: bottom, important },
			left: { value: left, important }
		};
	}

	/**
	 * Parse scroll-margin shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollMargin(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [top, right = top, bottom = top, left = right] = validated;
		return {
			'scroll-margin-top': { value: top, important },
			'scroll-margin-right': { value: right, important },
			'scroll-margin-bottom': { value: bottom, important },
			'scroll-margin-left': { value: left, important }
		};
	}

	/**
	 * Parse scroll-padding shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollPadding(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [top, right = top, bottom = top, left = right] = validated;
		return {
			'scroll-padding-top': { value: top, important },
			'scroll-padding-right': { value: right, important },
			'scroll-padding-bottom': { value: bottom, important },
			'scroll-padding-left': { value: left, important }
		};
	}

	/**
	 * Parse margin-block shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseMarginBlock(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'margin-block-start': { value: start, important },
			'margin-block-end': { value: end, important }
		};
	}

	/**
	 * Parse margin-inline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseMarginInline(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'margin-inline-start': { value: start, important },
			'margin-inline-end': { value: end, important }
		};
	}

	/**
	 * Parse padding-block shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePaddingBlock(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'padding-block-start': { value: start, important },
			'padding-block-end': { value: end, important }
		};
	}

	/**
	 * Parse padding-inline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePaddingInline(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'padding-inline-start': { value: start, important },
			'padding-inline-end': { value: end, important }
		};
	}

	/**
	 * Parse inset-block shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseInsetBlock(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'inset-block-start': { value: start, important },
			'inset-block-end': { value: end, important }
		};
	}

	/**
	 * Parse inset-inline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseInsetInline(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getContentMeasurement(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'inset-inline-start': { value: start, important },
			'inset-inline-end': { value: end, important }
		};
	}

	/**
	 * Parse scroll-margin-block shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollMarginBlock(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'scroll-margin-block-start': { value: start, important },
			'scroll-margin-block-end': { value: end, important }
		};
	}

	/**
	 * Parse scroll-margin-inline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollMarginInline(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, true);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'scroll-margin-inline-start': { value: start, important },
			'scroll-margin-inline-end': { value: end, important }
		};
	}

	/**
	 * Parse scroll-padding-block shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollPaddingBlock(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'scroll-padding-block-start': { value: start, important },
			'scroll-padding-block-end': { value: end, important }
		};
	}

	/**
	 * Parse scroll-padding-inline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseScrollPaddingInline(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [start, end = start] = validated;
		return {
			'scroll-padding-inline-start': { value: start, important },
			'scroll-padding-inline-end': { value: end, important }
		};
	}

	/**
	 * Parse border-radius shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderRadius(value: string, important: boolean): IPropertyValueMap | null {
		// border-radius: top-left top-right bottom-right bottom-left
		// Can also have / for horizontal/vertical radii (e.g. 10px 20px / 5px 10px)
		const slashParts = value.split('/').map(s => s.trim());
		if (slashParts.length > 2) {
			return null;
		}

		const hParts = slashParts[0].split(/\s+/);
		if (hParts.length < 1 || hParts.length > 4) {
			return null;
		}

		for (const p of hParts) {
			if (CSSStyleDeclarationValueParser.getLength(p, false) === null) {
				return null;
			}
		}

		if (slashParts.length === 2) {
			const vParts = slashParts[1].split(/\s+/);
			if (vParts.length < 1 || vParts.length > 4) {
				return null;
			}
			for (const p of vParts) {
				if (CSSStyleDeclarationValueParser.getLength(p, false) === null) {
					return null;
				}
			}
			// Store as combined horizontal/vertical values per corner
			const [htl, htr = htl, hbr = htl, hbl = htr] = hParts;
			const [vtl, vtr = vtl, vbr = vtl, vbl = vtr] = vParts;
			return {
				'border-top-left-radius': { value: htl + ' ' + vtl, important },
				'border-top-right-radius': { value: htr + ' ' + vtr, important },
				'border-bottom-right-radius': { value: hbr + ' ' + vbr, important },
				'border-bottom-left-radius': { value: hbl + ' ' + vbl, important }
			};
		}

		const [tl, tr = tl, br = tl, bl = tr] = hParts;
		return {
			'border-top-left-radius': { value: tl, important },
			'border-top-right-radius': { value: tr, important },
			'border-bottom-right-radius': { value: br, important },
			'border-bottom-left-radius': { value: bl, important }
		};
	}

	/**
	 * Parse border shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorder(value: string, important: boolean): IPropertyValueMap | null {
		return this.parseBorderSideToAll(value, important);
	}
	/**
	 * Parse a border value (width style color) and expand to all 4 sides.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderSideToAll(
		value: string,
		important: boolean
	): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}

		const { width, style, color } = parsed;
		const result: IPropertyValueMap = {};
		const sides = ['top', 'right', 'bottom', 'left'];
		for (const side of sides) {
			result[`border-${side}-width`] = { value: width, important };
		}
		for (const side of sides) {
			result[`border-${side}-style`] = { value: style, important };
		}
		for (const side of sides) {
			result[`border-${side}-color`] = { value: color, important };
		}
		// Reset border-image
		result['border-image-source'] = { value: 'initial', important };
		result['border-image-slice'] = { value: 'initial', important };
		result['border-image-width'] = { value: 'initial', important };
		result['border-image-outset'] = { value: 'initial', important };
		result['border-image-repeat'] = { value: 'initial', important };
		return result;
	}
	/**
	 * Parse border components: width, style, color in any order.
	 *
	 * @param value CSS value string.
	 * @returns Parsed components or null.
	 */
	private static parseBorderComponents(
		value: string
	): { width: string; style: string; color: string } | null {
		const parts = splitCSSTokens(value.trim());
		if (parts.length < 1 || parts.length > 3) {
			return null;
		}

		let width = 'medium';
		let style = 'none';
		let color = 'currentcolor';
		const used = new Set<string>();

		for (const part of parts) {
			const lower = part.toLowerCase();
			if (!used.has('style') && BORDER_STYLE_KEYWORDS.has(lower)) {
				style = lower;
				used.add('style');
			} else if (!used.has('width') && (BORDER_WIDTH_KEYWORDS.has(lower) ||
					CSSStyleDeclarationValueParser.getLength(part, false) !== null)) {
				width = lower === part.toLowerCase() ?
					(CSSStyleDeclarationValueParser.getLength(part, false) ?? lower) : lower;
				used.add('width');
			} else if (!used.has('color')) {
				const c = CSSStyleDeclarationValueParser.getColor(part);
				if (c === null) {
					return null;
				}
				color = c;
				used.add('color');
			} else {
				return null;
			}
		}

		return { width, style, color };
	}

	/**
	 * Parse border-top shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderTop(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-top-width': { value: parsed.width, important },
			'border-top-style': { value: parsed.style, important },
			'border-top-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-right shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderRight(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-right-width': { value: parsed.width, important },
			'border-right-style': { value: parsed.style, important },
			'border-right-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-bottom shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderBottom(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-bottom-width': { value: parsed.width, important },
			'border-bottom-style': { value: parsed.style, important },
			'border-bottom-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-left shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderLeft(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-left-width': { value: parsed.width, important },
			'border-left-style': { value: parsed.style, important },
			'border-left-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-block-start shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderBlockStart(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-block-start-width': { value: parsed.width, important },
			'border-block-start-style': { value: parsed.style, important },
			'border-block-start-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-block-end shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderBlockEnd(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-block-end-width': { value: parsed.width, important },
			'border-block-end-style': { value: parsed.style, important },
			'border-block-end-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-inline-start shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderInlineStart(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-inline-start-width': { value: parsed.width, important },
			'border-inline-start-style': { value: parsed.style, important },
			'border-inline-start-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-inline-end shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderInlineEnd(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'border-inline-end-width': { value: parsed.width, important },
			'border-inline-end-style': { value: parsed.style, important },
			'border-inline-end-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse border-width shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderWidth(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const lower = part.toLowerCase();
			if (BORDER_WIDTH_KEYWORDS.has(lower) || CSSStyleDeclarationValueParser.getLength(part, false) !== null) {
				validated.push(CSSStyleDeclarationValueParser.getLength(part, false) ?? lower);
			} else {
				return null;
			}
		}

		const [a, b = a, c = a, d = b] = validated;
		return {
			'border-top-width': { value: a, important },
			'border-right-width': { value: b, important },
			'border-bottom-width': { value: c, important },
			'border-left-width': { value: d, important }
		};
	}

	/**
	 * Parse border-style shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderStyle(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const lower = part.toLowerCase();
			if (BORDER_STYLE_KEYWORDS.has(lower)) {
				validated.push(lower);
			} else {
				return null;
			}
		}

		const [a, b = a, c = a, d = b] = validated;
		return {
			'border-top-style': { value: a, important },
			'border-right-style': { value: b, important },
			'border-bottom-style': { value: c, important },
			'border-left-style': { value: d, important }
		};
	}

	/**
	 * Parse border-color shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderColor(value: string, important: boolean): IPropertyValueMap | null {
		const parts = splitCSSTokens(value.trim());
		if (parts.length < 1 || parts.length > 4) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			if (CSSStyleDeclarationValueParser.getColor(part) !== null) {
				validated.push(CSSStyleDeclarationValueParser.getColor(part)!);
			} else {
				return null;
			}
		}

		const [a, b = a, c = a, d = b] = validated;
		return {
			'border-top-color': { value: a, important },
			'border-right-color': { value: b, important },
			'border-bottom-color': { value: c, important },
			'border-left-color': { value: d, important }
		};
	}

	/**
	 * Parse flex shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseFlex(value: string, important: boolean): IPropertyValueMap | null {
		const trimmed = value.trim().toLowerCase();

		// Special keywords
		if (trimmed === 'none') {
			return {
				'flex-grow': { value: '0', important },
				'flex-shrink': { value: '0', important },
				'flex-basis': { value: 'auto', important }
			};
		}
		if (trimmed === 'auto') {
			return {
				'flex-grow': { value: '1', important },
				'flex-shrink': { value: '1', important },
				'flex-basis': { value: 'auto', important }
			};
		}

		const parts = trimmed.split(/\s+/);

		if (parts.length === 1) {
			// Single number: flex: <grow> (shrink=1, basis=0%)
			const grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
			if (grow !== null) {
				return {
					'flex-grow': { value: grow, important },
					'flex-shrink': { value: '1', important },
					'flex-basis': { value: '0%', important }
				};
			}
			// Single basis value
			const basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[0], false);
			if (basis !== null) {
				return {
					'flex-grow': { value: '1', important },
					'flex-shrink': { value: '1', important },
					'flex-basis': { value: basis, important }
				};
			}
			return null;
		}

		if (parts.length === 2) {
			const grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
			if (grow === null) {
				return null;
			}
			// Second is shrink or basis
			const shrink = CSSStyleDeclarationValueParser.getNumber(parts[1], false);
			if (shrink !== null) {
				return {
					'flex-grow': { value: grow, important },
					'flex-shrink': { value: shrink, important },
					'flex-basis': { value: '0%', important }
				};
			}
			const basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[1], false);
			if (basis !== null) {
				return {
					'flex-grow': { value: grow, important },
					'flex-shrink': { value: '1', important },
					'flex-basis': { value: basis, important }
				};
			}
			return null;
		}

		if (parts.length === 3) {
			const grow = CSSStyleDeclarationValueParser.getNumber(parts[0], false);
			const shrink = CSSStyleDeclarationValueParser.getNumber(parts[1], false);
			const basis = CSSStyleDeclarationValueParser.getContentMeasurement(parts[2], false);
			if (grow === null || shrink === null || basis === null) {
				return null;
			}
			return {
				'flex-grow': { value: grow, important },
				'flex-shrink': { value: shrink, important },
				'flex-basis': { value: basis, important }
			};
		}

		return null;
	}

	/**
	 * Parse flex-flow shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseFlexFlow(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const directions = new Set(['row', 'row-reverse', 'column', 'column-reverse']);
		const wraps = new Set(['nowrap', 'wrap', 'wrap-reverse']);

		let direction = 'row';
		let wrap = 'nowrap';

		for (const part of parts) {
			const lower = part.toLowerCase();
			if (directions.has(lower)) {
				direction = lower;
			} else if (wraps.has(lower)) {
				wrap = lower;
			} else {
				return null;
			}
		}

		return {
			'flex-direction': { value: direction, important },
			'flex-wrap': { value: wrap, important }
		};
	}

	/**
	 * Parse outline shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseOutline(value: string, important: boolean): IPropertyValueMap | null {
		const parsed = this.parseBorderComponents(value);
		if (!parsed) {
			return null;
		}
		return {
			'outline-width': { value: parsed.width, important },
			'outline-style': { value: parsed.style, important },
			'outline-color': { value: parsed.color, important }
		};
	}

	/**
	 * Parse overflow shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseOverflow(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const valid = new Set(['visible', 'hidden', 'clip', 'scroll', 'auto', 'overlay']);
		for (const p of parts) {
			if (!valid.has(p.toLowerCase())) {
				return null;
			}
		}

		const [x, y = x] = parts.map(p => p.toLowerCase());
		return {
			'overflow-x': { value: x, important },
			'overflow-y': { value: y, important }
		};
	}

	/**
	 * Parse gap shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseGap(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const validated: string[] = [];
		for (const part of parts) {
			const lower = part.toLowerCase();
			if (lower === 'normal') { validated.push(lower); continue; }
			const v = CSSStyleDeclarationValueParser.getLength(part, false);
			if (v === null) {
				return null;
			}
			validated.push(v);
		}

		const [row, col = row] = validated;
		return {
			'row-gap': { value: row, important },
			'column-gap': { value: col, important }
		};
	}

	/**
	 * Parse place-content shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePlaceContent(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}
		const [a, j = a] = parts;
		return {
			'align-content': { value: a.toLowerCase(), important },
			'justify-content': { value: j.toLowerCase(), important }
		};
	}

	/**
	 * Parse place-items shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePlaceItems(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}
		const [a, j = a] = parts;
		return {
			'align-items': { value: a.toLowerCase(), important },
			'justify-items': { value: j.toLowerCase(), important }
		};
	}

	/**
	 * Parse place-self shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parsePlaceSelf(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}
		const [a, j = a] = parts;
		return {
			'align-self': { value: a.toLowerCase(), important },
			'justify-self': { value: j.toLowerCase(), important }
		};
	}

	/**
	 * Parse overscroll-behavior shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseOverscrollBehavior(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		const valid = new Set(['auto', 'contain', 'none']);
		for (const p of parts) {
			if (!valid.has(p.toLowerCase())) {
				return null;
			}
		}

		const [x, y = x] = parts.map(p => p.toLowerCase());
		return {
			'overscroll-behavior-x': { value: x, important },
			'overscroll-behavior-y': { value: y, important }
		};
	}

	/**
	 * Parse font shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseFont(value: string, important: boolean): IPropertyValueMap | null {
		// System fonts
		const systemFonts = new Set(['caption', 'icon', 'menu', 'message-box', 'small-caption', 'status-bar']);
		const lower = value.trim().toLowerCase();
		if (systemFonts.has(lower)) {
			return { 'font': { value: lower, important } };
		}

		// font: [style] [variant] [weight] [stretch] size[/line-height] family
		// This is a simplified parser that handles common cases
		const fontStyles = new Set(['italic', 'oblique', 'normal']);
		const fontVariants = new Set(['small-caps', 'normal']);
		const fontWeights = new Set(['bold', 'bolder', 'lighter', 'normal',
			'100', '200', '300', '400', '500', '600', '700', '800', '900']);
		const fontStretches = new Set(['ultra-condensed', 'extra-condensed', 'condensed',
			'semi-condensed', 'normal', 'semi-expanded', 'expanded',
			'extra-expanded', 'ultra-expanded']);

		// Split by comma first to separate font family
		const commaIndex = value.indexOf(',');
		let beforeFamily: string;
		let extraFamilies: string;

		if (commaIndex !== -1) {
			// Find the font-size/line-height + first family before comma
			beforeFamily = value.slice(0, commaIndex).trim();
			extraFamilies = value.slice(commaIndex); // includes leading comma
		} else {
			beforeFamily = value.trim();
			extraFamilies = '';
		}

		const parts = beforeFamily.split(/\s+/);
		if (parts.length < 2) {
			return null; // Need at least size and family
		}

		let fontStyle = 'normal';
		let fontVariant = 'normal';
		let fontWeight = 'normal';
		let fontStretch = 'normal';
		let fontSize = '';
		let lineHeight = 'normal';
		let fontFamily = '';

		let i = 0;

		// Parse optional style/variant/weight/stretch
		while (i < parts.length - 2) {
			const p = parts[i].toLowerCase();
			if (fontStyles.has(p) && fontStyle === 'normal') { fontStyle = p; i++; }
			else if (fontVariants.has(p) && fontVariant === 'normal' && p !== 'normal') { fontVariant = p; i++; }
			else if (fontWeights.has(p) && fontWeight === 'normal') { fontWeight = p; i++; }
			else if (fontStretches.has(p) && fontStretch === 'normal' && p !== 'normal') { fontStretch = p; i++; }
			else if (p === 'normal') { i++; } // 'normal' can appear for any of these
			else {
				break;
			}
		}

		// Next must be font-size (possibly with /line-height)
		if (i >= parts.length - 1) {
			return null;
		}
		const sizepart = parts[i];
		const slashIndex = sizepart.indexOf('/');

		if (slashIndex !== -1) {
			fontSize = sizepart.slice(0, slashIndex);
			lineHeight = sizepart.slice(slashIndex + 1);
		} else {
			fontSize = sizepart;
			// Check if next part starts with /
			if (i + 1 < parts.length && parts[i + 1].startsWith('/')) {
				lineHeight = parts[i + 1].slice(1);
				i++;
			}
		}
		i++;

		// Rest is font-family
		fontFamily = parts.slice(i).join(' ') + extraFamilies;
		if (!fontFamily) {
			return null;
		}

		const normalizedFamily = normalizeFontFamily(fontFamily.trim());
		if (normalizedFamily === null) {
			return null;
		}

		return {
			'font-style': { value: fontStyle, important },
			'font-variant': { value: fontVariant, important },
			'font-weight': { value: fontWeight, important },
			'font-stretch': { value: fontStretch, important },
			'font-size': { value: fontSize, important },
			'line-height': { value: lineHeight, important },
			'font-family': { value: normalizedFamily, important }
		};
	}

	/**
	 * Parse background-position shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBackgroundPosition(
		value: string,
		important: boolean
	): IPropertyValueMap | null {
		// Normalize a single position token: '0' → '0px', keywords stay as-is
		const normalize = (v: string): string => {
			const len = CSSStyleDeclarationValueParser.getLength(v);
			return len !== null ? len : v.toLowerCase();
		};

		// Parse a single layer into [posX, posY]
		const parseLayer = (layer: string): [string, string] => {
			const parts = layer.trim().split(/\s+/);
			if (parts.length === 1) {
				const lower = parts[0].toLowerCase();
				if (lower === 'top' || lower === 'bottom') {
					return ['center', lower];
				}
				return [normalize(parts[0]), 'center'];
			}
			if (parts.length === 2) {
				return [normalize(parts[0]), normalize(parts[1])];
			}
			// 4-value syntax: [axis-keyword] [offset] [axis-keyword] [offset]
			// Determine which pair belongs to X vs Y axis by keyword
			if (parts.length === 4) {
				const lower0 = parts[0].toLowerCase();
				if (lower0 === 'left' || lower0 === 'right') {
					// parts 0-1 = X axis, parts 2-3 = Y axis
					return [
						`${lower0} ${normalize(parts[1])}`,
						`${parts[2].toLowerCase()} ${normalize(parts[3])}`
					];
				}
				// parts 0-1 = Y axis, parts 2-3 = X axis
				return [
					`${parts[2].toLowerCase()} ${normalize(parts[3])}`,
					`${lower0} ${normalize(parts[1])}`
				];
			}
			// 3-value syntax: [kw1] [kw2] [offset] or [kw1] [offset] [kw2]
			if (parts.length === 3) {
				const lower0 = parts[0].toLowerCase();
				const lower1 = parts[1].toLowerCase();
				const lower2 = parts[2].toLowerCase();
				const posKws = new Set(['top', 'bottom', 'left', 'right', 'center']);
				if (posKws.has(lower1)) {
					// Form: [kw1] [kw2] [offset] — kw2+offset is the axis pair, kw1 is alone
					if (lower1 === 'left' || lower1 === 'right') {
						return [`${lower1} ${normalize(parts[2])}`, lower0];
					}
					return [lower0, `${lower1} ${normalize(parts[2])}`];
				}
				// Form: [kw1] [offset] [kw2] — kw1+offset is the axis pair, kw2 is alone
				if (lower0 === 'left' || lower0 === 'right') {
					return [`${lower0} ${normalize(parts[1])}`, lower2];
				}
				return [lower2, `${lower0} ${normalize(parts[1])}`];
			}
		};

		// Handle comma-separated multi-layer positions
		const layers = splitTopLevelCommas(value.trim());
		const xValues: string[] = [];
		const yValues: string[] = [];
		for (const layer of layers) {
			const [x, y] = parseLayer(layer.trim());
			xValues.push(x);
			yValues.push(y);
		}

		return {
			'background-position-x': { value: xValues.join(', '), important },
			'background-position-y': { value: yValues.join(', '), important }
		};
	}


	/**
	 * Parse background shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBackground(value: string, important: boolean): IPropertyValueMap | null {
		const trimmedVal = value.trim();
		const lower = trimmedVal.toLowerCase();

		// 'none' special case
		if (lower === 'none') {
			return {
				'background-image': { value: 'none', important },
				'background-position-x': { value: 'initial', important },
				'background-position-y': { value: 'initial', important },
				'background-size': { value: 'initial', important },
				'background-repeat': { value: 'initial', important },
				'background-attachment': { value: 'initial', important },
				'background-origin': { value: 'initial', important },
				'background-clip': { value: 'initial', important },
				'background-color': { value: 'initial', important }
			};
		}

		// Single color shortcut: no spaces and no url() function
		const asColor = CSSStyleDeclarationValueParser.getColor(trimmedVal);
		if (asColor && !lower.includes('url(') && !lower.includes(' ')) {
			return {
				'background-image': { value: 'initial', important },
				'background-position-x': { value: 'initial', important },
				'background-position-y': { value: 'initial', important },
				'background-size': { value: 'initial', important },
				'background-repeat': { value: 'initial', important },
				'background-attachment': { value: 'initial', important },
				'background-origin': { value: 'initial', important },
				'background-clip': { value: 'initial', important },
				'background-color': { value: asColor, important }
			};
		}

		// Tokenize the value respecting parentheses.
		// First normalize '/' to ' / ' so that 'center/80%' becomes 'center / 80%'.
		let normalized = '';
		{
			let depth = 0;
			for (const ch of trimmedVal) {
				if (ch === '(') {
					depth++;
					normalized += ch;
				} else if (ch === ')') {
					depth--;
					normalized += ch;
				} else if (ch === '/' && depth === 0) {
					normalized += ' / ';
				} else {
					normalized += ch;
				}
			}
		}
		const tokens = splitCSSTokens(normalized);

		const REPEAT_KEYWORDS = new Set([
			'no-repeat',
			'repeat',
			'repeat-x',
			'repeat-y',
			'round',
			'space'
		]);
		const ATTACHMENT_KEYWORDS = new Set(['scroll', 'fixed', 'local']);
		const BOX_KEYWORDS = new Set(['border-box', 'padding-box', 'content-box']);
		const POSITION_KEYWORDS = new Set(['top', 'bottom', 'left', 'right', 'center']);

		let image = 'initial';
		let posX = 'initial';
		let posY = 'initial';
		let size = 'initial';
		let repeat = 'initial';
		let attachment = 'initial';
		let origin = 'initial';
		let clip = 'initial';
		let color = 'initial';

		// Track how many BOX_KEYWORD tokens we've seen (first sets origin+clip, second sets clip only)
		let boxCount = 0;

		let hasValidToken = false;

		for (let i = 0; i < tokens.length; i++) {
			const tok = tokens[i];
			const tokLower = tok.toLowerCase();

			if (this.isGradientToken(tok)) {
				const gradient = CSSStyleDeclarationValueParser.getGradient(tok);
				image = gradient ?? tok;
				hasValidToken = true;
			} else if (tokLower.startsWith('url(')) {
				const url = CSSStyleDeclarationValueParser.getURL(tok);
				image = url ?? tok;
				hasValidToken = true;
			} else if (REPEAT_KEYWORDS.has(tokLower)) {
				repeat = tokLower;
				hasValidToken = true;
			} else if (ATTACHMENT_KEYWORDS.has(tokLower)) {
				attachment = tokLower;
				hasValidToken = true;
			} else if (BOX_KEYWORDS.has(tokLower)) {
				if (boxCount === 0) {
					origin = tokLower;
					clip = tokLower;
				} else {
					clip = tokLower;
				}
				boxCount++;
				hasValidToken = true;
			} else if (POSITION_KEYWORDS.has(tokLower)) {
				// Collect consecutive position tokens (handles "top center", "left 50%", etc.)
				const posParts = [tok];
				while (i + 1 < tokens.length && tokens[i + 1] !== '/') {
					const next = tokens[i + 1].toLowerCase();
					if (POSITION_KEYWORDS.has(next) || /^[\d.]/.test(next) || next.endsWith('%')) {
						posParts.push(tokens[++i]);
					} else {
						break;
					}
				}
				// Check for /size
				if (i + 1 < tokens.length && tokens[i + 1] === '/') {
					i++; // skip '/'
					if (i + 1 < tokens.length) {
						size = tokens[++i];
					}
				}
				// Now assign posX/posY
				if (posParts.length === 1) {
					const pl = posParts[0].toLowerCase();
					if (pl === 'top' || pl === 'bottom') {
						posX = 'center';
						posY = pl;
					} else {
						posX = pl;
						posY = 'center';
					}
				} else if (posParts.length >= 2) {
					const p0 = posParts[0].toLowerCase();
					const p1 = posParts[1].toLowerCase();
					// Y-axis keywords first: swap so X is always first in output
					if (
						(p0 === 'top' || p0 === 'bottom') &&
						(p1 === 'left' ||
							p1 === 'right' ||
							p1 === 'center' ||
							/^[\d.]/.test(p1) ||
							p1.endsWith('%'))
					) {
						posX = p1;
						posY = p0;
					} else {
						posX = p0;
						posY = p1;
					}
				}
				hasValidToken = true;
			} else if (/^[\d.]/.test(tokLower) || tokLower.endsWith('%')) {
				// Numeric position value — look ahead for /size
				const posParts = [tok];
				while (i + 1 < tokens.length && tokens[i + 1] !== '/') {
					const next = tokens[i + 1].toLowerCase();
					if (POSITION_KEYWORDS.has(next) || /^[\d.]/.test(next) || next.endsWith('%')) {
						posParts.push(tokens[++i]);
					} else {
						break;
					}
				}
				if (i + 1 < tokens.length && tokens[i + 1] === '/') {
					i++;
					if (i + 1 < tokens.length) {
						size = tokens[++i];
					}
				}
				if (posParts.length === 1) {
					posX = posParts[0];
					posY = 'center';
				} else {
					posX = posParts[0];
					posY = posParts[1];
				}
				hasValidToken = true;
			} else {
				// Try as color
				const colorVal = CSSStyleDeclarationValueParser.getColor(tok);
				if (colorVal !== null) {
					color = colorVal;
					hasValidToken = true;
				}
				// Otherwise silently ignore unknown tokens (lenient parsing)
			}
		}

		if (!hasValidToken) {
			return null;
		}

		return {
			'background-image': { value: image, important },
			'background-position-x': { value: posX, important },
			'background-position-y': { value: posY, important },
			'background-size': { value: size, important },
			'background-repeat': { value: repeat, important },
			'background-attachment': { value: attachment, important },
			'background-origin': { value: origin, important },
			'background-clip': { value: clip, important },
			'background-color': { value: color, important }
		};
	}

	/**
	 * Returns true if the token is a CSS gradient function.
	 *
	 * @param token A single CSS token.
	 * @returns True if gradient.
	 */
	private static isGradientToken(token: string): boolean {
		const lower = token.toLowerCase();
		return (
			lower.startsWith('linear-gradient(') ||
			lower.startsWith('radial-gradient(') ||
			lower.startsWith('conic-gradient(') ||
			lower.startsWith('repeating-linear-gradient(') ||
			lower.startsWith('repeating-radial-gradient(') ||
			lower.startsWith('repeating-conic-gradient(')
		);
	}

	/**
	 * Parse border-image shorthand.
	 * Syntax: source slice [/ width [/ outset]] repeat
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseBorderImage(value: string, important: boolean): IPropertyValueMap | null {
		const trimmedVal = value.trim();
		const tokens = splitCSSTokens(trimmedVal);

		const REPEAT_KEYWORDS = new Set(['stretch', 'repeat', 'round', 'space']);

		let sourceVal = 'none';
		let sliceVal = '100%';
		let widthVal = '1';
		let outsetVal = '0';
		let repeatVal = 'stretch';

		let i = 0;

		// First token: source (url, gradient, or 'none')
		if (i < tokens.length) {
			const tok = tokens[i];
			const tokLower = tok.toLowerCase();
			if (tokLower === 'none' || tokLower.startsWith('url(') || this.isGradientToken(tok)) {
				if (tokLower.startsWith('url(')) {
					sourceVal = CSSStyleDeclarationValueParser.getURL(tok) ?? tok;
				} else if (this.isGradientToken(tok)) {
					sourceVal = CSSStyleDeclarationValueParser.getGradient(tok) ?? tok;
				} else {
					sourceVal = tokLower;
				}
				i++;
			}
		}

		// Collect slice tokens up to first '/'
		const sliceTokens: string[] = [];
		const widthTokens: string[] = [];
		const outsetTokens: string[] = [];
		const repeatTokens: string[] = [];

		let section = 0; // 0=slice, 1=width, 2=outset
		while (i < tokens.length) {
			const tok = tokens[i];
			const tokLower = tok.toLowerCase();

			if (tok === '/') {
				section++;
				i++;
				continue;
			}
			if (REPEAT_KEYWORDS.has(tokLower)) {
				repeatTokens.push(tokLower);
				i++;
				continue;
			}
			if (section === 0) {
				sliceTokens.push(tok);
			} else if (section === 1) {
				widthTokens.push(tok);
			} else {
				outsetTokens.push(tok);
			}
			i++;
		}

		if (sliceTokens.length > 0) {
			sliceVal = sliceTokens.join(' ');
		}
		if (widthTokens.length > 0) {
			widthVal = widthTokens.join(' ');
		}
		if (outsetTokens.length > 0) {
			outsetVal = outsetTokens.join(' ');
		}
		if (repeatTokens.length > 0) {
			repeatVal = repeatTokens.join(' ');
		}

		return {
			'border-image-source': { value: sourceVal, important },
			'border-image-slice': { value: sliceVal, important },
			'border-image-width': { value: widthVal, important },
			'border-image-outset': { value: outsetVal, important },
			'border-image-repeat': { value: repeatVal, important }
		};
	}

	/**
	 * Parse text-decoration shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseTextDecoration(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		const lines = new Set(['none', 'underline', 'overline', 'line-through', 'blink']);
		const styles = new Set(['solid', 'double', 'dotted', 'dashed', 'wavy']);

		let line = '';
		let style = 'initial';
		let color = 'initial';
		const lineValues: string[] = [];

		for (const part of parts) {
			const lower = part.toLowerCase();
			if (lines.has(lower)) {
				lineValues.push(lower);
			} else if (styles.has(lower) && style === 'initial') {
				style = lower;
			} else if (color === 'initial') {
				const c = CSSStyleDeclarationValueParser.getColor(part);
				if (c) { color = c; }
				else {
					return null;
				}
			} else {
				return null;
			}
		}

		line = lineValues.length > 0 ? lineValues.join(' ') : 'none';

		return {
			'text-decoration-line': { value: line, important },
			'text-decoration-style': { value: style, important },
			'text-decoration-color': { value: color, important }
		};
	}

	/**
	 * Parse list-style shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseListStyle(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		const positions = new Set(['inside', 'outside']);

		let type = 'initial';
		let position = 'initial';
		let image = 'initial';

		for (const part of parts) {
			const lower = part.toLowerCase();
			if (lower === 'none') {
				if (type === 'initial') {
					type = 'none';
				} else if (image === 'initial') {
					image = 'none';
				}
			} else if (positions.has(lower)) {
				position = lower;
			} else if (lower.startsWith('url(')) {
				image = part;
			} else {
				type = lower;
			}
		}

		return {
			'list-style-type': { value: type, important },
			'list-style-position': { value: position, important },
			'list-style-image': { value: image, important }
		};
	}

	/**
	 * Parse columns shorthand.
	 *
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseColumns(value: string, important: boolean): IPropertyValueMap | null {
		const parts = value.trim().split(/\s+/);
		if (parts.length < 1 || parts.length > 2) {
			return null;
		}

		let width = 'auto';
		let count = 'auto';

		for (const part of parts) {
			const lower = part.toLowerCase();
			if (lower === 'auto') {
				continue;
			}
			const asInt = CSSStyleDeclarationValueParser.getInteger(part, false);
			if (asInt !== null) {
				count = asInt;
				continue;
			}
			const asLen = CSSStyleDeclarationValueParser.getLength(part, false);
			if (asLen !== null) {
				width = asLen;
				continue;
			}
			return null;
		}

		return {
			'column-width': { value: width, important },
			'column-count': { value: count, important }
		};
	}

	/**
	 * Generic shorthand fallback: for shorthands without specific parsers,
	 * accept the value and apply it to all longhands.
	 *
	 * @param name Shorthand property name.
	 * @param value CSS value string.
	 * @param important Whether the value has !important.
	 * @returns Longhand property map or null.
	 */
	private static parseGenericShorthand(
		name: string,
		value: string,
		important: boolean
	): IPropertyValueMap | null {
		const longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
		if (!longhands) {
			return null;
		}

		const result: IPropertyValueMap = {};
		for (const lh of longhands) {
			result[lh] = { value, important };
		}
		return result;
	}
}
