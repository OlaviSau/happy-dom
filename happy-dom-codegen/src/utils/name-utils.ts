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
export function kebabToCamelCase(name: string): string {
	// Special cases
	if (name === 'float') {
		return 'cssFloat';
	}

	// Strip leading dash for vendor prefixes, but handle -webkit- etc.
	let result = name;

	// Handle vendor prefixes: -webkit-foo → webkitFoo
	if (result.startsWith('-')) {
		result = result.slice(1);
	}

	return result.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Convert camelCase to kebab-case.
 * "backgroundColor" → "background-color"
 * "cssFloat" → "float"
 * "webkitTransform" → "-webkit-transform"
 * @param name
 */
export function camelToKebabCase(name: string): string {
	if (name === 'cssFloat') {
		return 'float';
	}

	let result = name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

	// Re-add vendor prefix dash
	if (result.startsWith('webkit-') || result.startsWith('moz-') || result.startsWith('ms-')) {
		result = '-' + result;
	}

	return result;
}

/**
 * Convert kebab-case to UpperCamelCase (PascalCase).
 * "background-color" → "BackgroundColor"
 * @param name
 */
export function kebabToPascalCase(name: string): string {
	const camel = kebabToCamelCase(name);
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}
