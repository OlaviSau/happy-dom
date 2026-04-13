/**
 * Parses Chromium's css_properties.json5 into a typed PropertyIR.
 */
import type { PropertyIR } from '../ir/property-ir.js';
/**
 * Parse the JSON5 file and return a PropertyIR.
 * @param filePath
 */
export declare function parseJSON5(filePath: string): PropertyIR;
