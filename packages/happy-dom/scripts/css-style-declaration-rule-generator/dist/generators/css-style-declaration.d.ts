/**
 * Generates the CSS property name map and CSS property declare stubs
 * for CSSStyleDeclaration.ts.
 */
import type { PropertyIR } from '../ir/property-ir.js';
/**
 * Generates the camelCase → kebab-case property map as a separate file.
 * @param ir
 */
export declare function generateCSSPropertyNameMap(ir: PropertyIR): string;
/**
 * Generates only the public declare stubs block — the content between
 * BEGIN_CSS_DECLARATIONS and END_CSS_DECLARATIONS markers.
 * @param ir
 */
export declare function generateCSSDeclarations(ir: PropertyIR): string;
