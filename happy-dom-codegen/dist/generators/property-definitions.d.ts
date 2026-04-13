/**
 * Generates property definition data files from the IR.
 * These are data-only TypeScript files (exported const objects/maps).
 */
import type { PropertyIR } from '../ir/property-ir.js';
/**
 * Generate CSSPropertyDefinitions.ts — registry of all property metadata.
 * @param ir
 */
export declare function generatePropertyDefinitions(ir: PropertyIR): string;
/**
 * Generate CSSShorthandDefinitions.ts — shorthand → longhand mappings.
 * @param ir
 */
export declare function generateShorthandDefinitions(ir: PropertyIR): string;
/**
 * Generate CSSAliasDefinitions.ts — alias → canonical property mappings.
 * @param ir
 */
export declare function generateAliasDefinitions(ir: PropertyIR): string;
