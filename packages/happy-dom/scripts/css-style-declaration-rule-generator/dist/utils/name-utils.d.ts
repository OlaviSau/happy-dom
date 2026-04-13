/**
 * Utility functions for converting between CSS property name formats.
 */
/**
 * Convert kebab-case to camelCase.
 * "background-color" → "backgroundColor"
 * "cssFloat" is special-cased for the "float" property.
 * "-webkit-transform" → "webkitTransform"
 * @param name
 */
export declare function kebabToCamelCase(name: string): string;
/**
 * Convert camelCase to kebab-case.
 * "backgroundColor" → "background-color"
 * "cssFloat" → "float"
 * "webkitTransform" → "-webkit-transform"
 * @param name
 */
export declare function camelToKebabCase(name: string): string;
/**
 * Convert kebab-case to UpperCamelCase (PascalCase).
 * "background-color" → "BackgroundColor"
 * @param name
 */
export declare function kebabToPascalCase(name: string): string;
