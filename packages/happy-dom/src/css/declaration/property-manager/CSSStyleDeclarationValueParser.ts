/**
 * AUTO-GENERATED FILE — DO NOT EDIT
 *
 * Derived from Chromium Blink rendering engine property data.
 * Source: https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink
 */

import { CSS_PROPERTY_KEYWORDS } from '../property-definitions/CSSPropertyDefinitions.js';
import { CSS_NAMED_COLORS } from '../property-definitions/CSSNamedColors.js';

/**
 * Validates and normalizes CSS values.
 * Enforces B5 (normalization), B6 (invalid values silently ignored).
 */
export default class CSSStyleDeclarationValueParser {
	/** CSS-wide (global) values accepted by all properties. */
	private static readonly globalValues = new Set([
		'inherit',
		'initial',
		'unset',
		'revert',
		'revert-layer'
	]);

	/** Regex for CSS variable references: var(--name) or var(--name, fallback). */
	private static readonly varRegexp = /^var\(\s*--[a-zA-Z0-9_-]+/;

	/** Regex for a valid CSS length value. */
	private static readonly lengthRegexp =
		/^(-?\d*\.?\d+)(px|em|rem|%|vw|vh|vmin|vmax|cm|mm|in|pt|pc|Q|ex|ch|cap|ic|lh|rlh|vi|vb|svw|svh|lvw|lvh|dvw|dvh|cqw|cqh|cqi|cqb|cqmin|cqmax)$/i;

	/** Regex for a valid number. */
	private static readonly numberRegexp = /^-?\d*\.?\d+$/;

	/** Regex for a valid integer. */
	private static readonly integerRegexp = /^-?\d+$/;

	/** Regex for calc() expression. */
	private static readonly calcRegexp = /^calc\(.+\)$/i;

	/** Regex for a valid URL value. */
	private static readonly urlRegexp = /^url\(\s*(['"]?).*?\1\s*\)$/i;

	/** Regex for hex color. */
	private static readonly hexColorRegexp = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

	/** Regex for functional color values: rgb(), rgba(), hsl(), hsla(), etc. */
	private static readonly colorFunctionRegexp =
		/^(rgb|rgba|hsl|hsla|hwb|lab|lch|oklch|oklab|color|color-mix|light-dark)\(/i;

	/**
	 * Check if a value is a CSS-wide global keyword.
	 *
	 * @param value CSS value to check.
	 * @returns Normalized keyword or null.
	 */
	public static getGlobal(value: string): string | null {
		const lower = value.trim().toLowerCase();
		return this.globalValues.has(lower) ? lower : null;
	}

	/**
	 * Check if a value is a CSS variable reference.
	 *
	 * @param value CSS value to check.
	 * @returns Trimmed variable reference or null.
	 */
	public static getVariable(value: string): string | null {
		const trimmed = value.trim();
		return this.varRegexp.test(trimmed) ? trimmed : null;
	}

	/**
	 * Parse a value as a valid CSS length, percentage, or 'auto', or 0.
	 * Returns the normalized value or null if invalid.
	 *
	 * @param value CSS value to parse.
	 * @param acceptNegative Whether negative values are accepted.
	 * @returns Normalized length or null.
	 */
	public static getLength(value: string, acceptNegative = true): string | null {
		const trimmed = value.trim().toLowerCase();
		if (trimmed === '0') {
			return '0px';
		}
		if (this.calcRegexp.test(trimmed)) {
			return trimmed;
		}
		const match = this.lengthRegexp.exec(trimmed);
		if (!match) {
			return null;
		}
		const num = parseFloat(match[1]);
		if (!acceptNegative && num < 0) {
			return null;
		}
		if (num === 0) {
			return '0px';
		}
		return parseFloat(parseFloat(match[1]).toFixed(6)).toString() + match[2].toLowerCase();
	}

	/**
	 * Parse a value as length, percentage, auto, or content keywords.
	 *
	 * @param value CSS value to parse.
	 * @param acceptNegative Whether negative values are accepted.
	 * @returns Normalized value or null.
	 */
	public static getContentMeasurement(value: string, acceptNegative = true): string | null {
		const trimmed = value.trim().toLowerCase();
		if (
			trimmed === 'auto' ||
			trimmed === 'min-content' ||
			trimmed === 'max-content' ||
			trimmed === 'fit-content' ||
			trimmed === 'none'
		) {
			return trimmed;
		}
		if (trimmed.startsWith('fit-content(')) {
			return trimmed;
		}
		return this.getLength(trimmed, acceptNegative);
	}

	/**
	 * Parse a number value.
	 *
	 * @param value CSS value to parse.
	 * @param acceptNegative Whether negative values are accepted.
	 * @returns Normalized number or null.
	 */
	public static getNumber(value: string, acceptNegative = true): string | null {
		const trimmed = value.trim();
		if (!this.numberRegexp.test(trimmed)) {
			return null;
		}
		const num = parseFloat(trimmed);
		if (!acceptNegative && num < 0) {
			return null;
		}
		return String(num);
	}

	/**
	 * Parse an integer value.
	 *
	 * @param value CSS value to parse.
	 * @param acceptNegative Whether negative values are accepted.
	 * @returns Normalized integer or null.
	 */
	public static getInteger(value: string, acceptNegative = true): string | null {
		const trimmed = value.trim();
		if (!this.integerRegexp.test(trimmed)) {
			return null;
		}
		const num = parseInt(trimmed, 10);
		if (!acceptNegative && num < 0) {
			return null;
		}
		return String(num);
	}

	/**
	 * Parse a CSS color value.
	 *
	 * @param value CSS value to parse.
	 * @returns Normalized color or null.
	 */
	public static getColor(value: string): string | null {
		const trimmed = value.trim();
		const lower = trimmed.toLowerCase();
		// Named colors
		if (CSS_NAMED_COLORS.has(lower)) {
			return lower;
		}
		// CSS color keyword 'none' (used in contexts like background-color)
		if (lower === 'none') {
			return 'none';
		}
		// Hex colors
		if (this.hexColorRegexp.test(lower)) {
			return lower;
		}
		// Functional colors (rgb, hsl, etc.)
		if (this.colorFunctionRegexp.test(trimmed)) {
			// Basic validation: has matching parens
			let depth = 0;
			for (const ch of trimmed) {
				if (ch === '(') {
					depth++;
				}
				if (ch === ')') {
					depth--;
				}
			}
			if (depth === 0) {
				// Normalize spacing after commas
				return trimmed.replace(/,\s*/g, ', ');
			}
		}
		return null;
	}

	/**
	 * Parse a URL value.
	 *
	 * @param value CSS value to parse.
	 * @returns Normalized URL or null.
	 */
	public static getURL(value: string): string | null {
		const trimmed = value.trim();
		if (!this.urlRegexp.test(trimmed)) {
			return null;
		}
		// Normalize URL quotes
		const inner = trimmed.slice(4, -1).trim();
		if (inner.startsWith('"') || inner.startsWith("'")) {
			// Already quoted — normalize to double quotes
			const unquoted = inner.slice(1, -1);
			return `url("${unquoted}")`;
		}
		return `url("${inner}")`;
	}

	/**
	 * Validate a value against a property's keyword list.
	 * Returns the normalized (lowercased) keyword or null.
	 *
	 * @param propertyName CSS property name.
	 * @param value CSS value to validate.
	 * @returns Normalized keyword or null.
	 */
	public static getKeyword(propertyName: string, value: string): string | null {
		const keywords = CSS_PROPERTY_KEYWORDS[propertyName];
		if (!keywords) {
			return null;
		}
		const lower = value.trim().toLowerCase();
		return keywords.has(lower) ? lower : null;
	}

	/**
	 * Parse a CSS gradient value.
	 * Validates the gradient function prefix, checks balanced parens,
	 * and normalizes inner args (top-level comma-split, trim whitespace).
	 *
	 * @param value CSS value to parse.
	 * @returns Normalized gradient or null.
	 */
	public static getGradient(value: string): string | null {
		const trimmed = value.trim();
		const lower = trimmed.toLowerCase();
		const validPrefixes = [
			'linear-gradient(',
			'radial-gradient(',
			'conic-gradient(',
			'repeating-linear-gradient(',
			'repeating-radial-gradient(',
			'repeating-conic-gradient('
		];
		if (!validPrefixes.some((prefix) => lower.startsWith(prefix))) {
			return null;
		}
		// Validate balanced parentheses
		let depth = 0;
		for (const ch of trimmed) {
			if (ch === '(') {
				depth++;
			} else if (ch === ')') {
				depth--;
				if (depth < 0) {
					return null;
				}
			}
		}
		if (depth !== 0) {
			return null;
		}
		const openIdx = trimmed.indexOf('(');
		const typePart = trimmed.slice(0, openIdx);
		const inner = trimmed.slice(openIdx + 1, -1);
		// Split by top-level commas and trim each part
		const args: string[] = [];
		let current = '';
		let d = 0;
		for (const ch of inner) {
			if (ch === '(') {
				d++;
				current += ch;
			} else if (ch === ')') {
				d--;
				current += ch;
			} else if (ch === ',' && d === 0) {
				args.push(current.trim());
				current = '';
			} else {
				current += ch;
			}
		}
		args.push(current.trim());
		return `${typePart}(${args.join(', ')})`;
	}

	/**
	 * Validate a value for a generic property (tries global, variable, keyword).
	 *
	 * @param propertyName CSS property name.
	 * @param value CSS value to validate.
	 * @returns Normalized value or null.
	 */
	public static validate(propertyName: string, value: string): string | null {
		const trimmed = value.trim();
		if (!trimmed) {
			return null;
		}
		return (
			this.getVariable(trimmed) ??
			this.getGlobal(trimmed) ??
			this.getKeyword(propertyName, trimmed) ??
			null
		);
	}
}
