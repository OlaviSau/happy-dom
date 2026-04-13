/**
 * Generates CSSMeasurementConverter.ts — CSS unit conversion utility.
 * Ported from happy-dom.
 */

import { fileHeader } from '../utils/template-utils.js';

export function generateMeasurementConverter(): string {
	let out = fileHeader();

	out += `/**
 * Converts CSS measurement values between units.
 * Used by computed style resolution to convert relative units to pixels.
 */
export default class CSSMeasurementConverter {
\t/**
\t * Absolute unit conversion factors to pixels.
\t */
\tprivate static readonly ABSOLUTE_UNITS: Record<string, number> = {
\t\t'px': 1,
\t\t'cm': 37.7952756,
\t\t'mm': 3.77952756,
\t\t'in': 96,
\t\t'pt': 1.3333333,
\t\t'pc': 16,
\t\t'Q': 0.94488189,
\t};

\t/**
\t * Regex to match a CSS measurement value.
\t */
\tprivate static readonly MEASUREMENT_REGEXP =
\t\t/^(-?\\d*\\.?\\d+)(px|em|rem|vw|vh|vmin|vmax|%|cm|mm|in|pt|pc|Q)$/;

\t/**
\t * Convert a CSS value to pixels.
\t *
\t * @param value CSS value string (e.g. "10px", "2em", "50%").
\t * @param options Context for relative unit conversion.
\t * @returns Pixel value, or null if the value cannot be converted.
\t */
\tpublic static toPixels(
\t\tvalue: string,
\t\toptions: {
\t\t\trootFontSize?: number;
\t\t\tparentFontSize?: number;
\t\t\tparentSize?: number;
\t\t\tviewportWidth?: number;
\t\t\tviewportHeight?: number;
\t\t} = {}
\t): number | null {
\t\tconst match = this.MEASUREMENT_REGEXP.exec(value);
\t\tif (!match) {
\t\t\tif (value === '0') return 0;
\t\t\treturn null;
\t\t}

\t\tconst num = parseFloat(match[1]);
\t\tconst unit = match[2];

\t\t// Absolute units
\t\tif (this.ABSOLUTE_UNITS[unit] !== undefined) {
\t\t\treturn num * this.ABSOLUTE_UNITS[unit];
\t\t}

\t\tconst {
\t\t\trootFontSize = 16,
\t\t\tparentFontSize = 16,
\t\t\tparentSize = 0,
\t\t\tviewportWidth = 1024,
\t\t\tviewportHeight = 768,
\t\t} = options;

\t\tswitch (unit) {
\t\t\tcase 'em':
\t\t\t\treturn num * parentFontSize;
\t\t\tcase 'rem':
\t\t\t\treturn num * rootFontSize;
\t\t\tcase 'vw':
\t\t\t\treturn num * viewportWidth / 100;
\t\t\tcase 'vh':
\t\t\t\treturn num * viewportHeight / 100;
\t\t\tcase 'vmin':
\t\t\t\treturn num * Math.min(viewportWidth, viewportHeight) / 100;
\t\t\tcase 'vmax':
\t\t\t\treturn num * Math.max(viewportWidth, viewportHeight) / 100;
\t\t\tcase '%':
\t\t\t\treturn num * parentSize / 100;
\t\t\tdefault:
\t\t\t\treturn null;
\t\t}
\t}

\t/**
\t * Round a pixel value to 4 decimal places.
\t */
\tpublic static round(value: number): number {
\t\treturn Math.round(value * 10000) / 10000;
\t}
}
`;

	return out;
}
