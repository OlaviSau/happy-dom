/**
 * Generates CSSStyleDeclarationPropertySetParser.ts
 *
 * The SetParser is the core of B1 (shorthand → longhand expansion).
 * It validates incoming CSS values and returns a map of longhand properties.
 */
import type { PropertyIR } from '../ir/property-ir.js';
export declare function generatePropertyTypeSets(ir: PropertyIR): string;
export declare function generateSetParser(ir: PropertyIR): string;
