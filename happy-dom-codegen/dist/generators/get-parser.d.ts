/**
 * Generates CSSStyleDeclarationPropertyGetParser.ts
 *
 * The GetParser implements B2 (shorthand recomposition from longhands).
 */
import type { PropertyIR } from '../ir/property-ir.js';
export declare function generateGetParser(ir: PropertyIR): string;
