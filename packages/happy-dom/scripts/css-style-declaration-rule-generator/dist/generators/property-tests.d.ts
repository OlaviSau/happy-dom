/**
 * Generates a comprehensive per-property test suite.
 *
 * For every exposed CSS property, emits:
 *   - set/get round-trip with a valid value
 *   - keyword validation (first keyword accepted)
 *   - invalid value rejection (for keyword-only properties)
 *   - shorthand expansion (all longhands populated)
 *   - alias delegation (canonical receives value)
 *   - removeProperty works
 *
 * Output is a standalone ESM (.mjs) file that imports the compiled
 * CSSStyleDeclaration and runs all assertions.
 */
import type { PropertyIR } from '../ir/property-ir.js';
export declare function generatePropertyTests(ir: PropertyIR): string;
