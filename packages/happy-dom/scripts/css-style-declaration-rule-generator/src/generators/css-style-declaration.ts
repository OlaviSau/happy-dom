/**
 * Generates the CSS property name map and CSS property declare stubs
 * for CSSStyleDeclaration.ts.
 */

import type { PropertyIR, PropertyDefinition } from '../ir/property-ir.js';
import { kebabToCamelCase } from '../utils/name-utils.js';
import { fileHeader } from '../utils/template-utils.js';

const VENDOR_PREFIXES = ['webkit', 'moz', 'ms'] as const;

/**
 * If a camelCase name starts with a lowercase vendor prefix,
 * returns the uppercase variant (e.g. webkitFoo → WebkitFoo).
 * Returns null if the name is not vendor-prefixed.
 * @param camel
 */
function upperVendorVariant(camel: string): string | null {
	for (const prefix of VENDOR_PREFIXES) {
		if (camel.startsWith(prefix)) {
			return camel[0].toUpperCase() + camel.slice(1);
		}
	}
	return null;
}

/**
 * Generates the camelCase → kebab-case property map as a separate file.
 * @param ir
 */
export function generateCSSPropertyNameMap(ir: PropertyIR): string {
	let out = fileHeader();

	// Collect all properties (longhands + shorthands) — no aliases (those are separate)
	const accessorProps: { kebab: string; camel: string }[] = [];
	const seen = new Set<string>();

	for (const prop of ir.properties) {
		if (prop.name.startsWith('-internal-')) {
			continue;
		}
		if (prop.type === 'alias') {
			continue;
		}
		const camel = kebabToCamelCase(prop.name);
		if (!seen.has(camel)) {
			seen.add(camel);
			accessorProps.push({ kebab: prop.name, camel });
		}
	}
	accessorProps.sort((a, b) => a.camel.localeCompare(b.camel));

	// Collect aliases
	const aliases: { kebab: string; camel: string; canonical: string }[] = [];
	for (const prop of ir.properties) {
		if (prop.type === 'alias' && prop.aliasFor) {
			const camel = kebabToCamelCase(prop.name);
			if (!seen.has(camel)) {
				seen.add(camel);
				aliases.push({ kebab: prop.name, camel, canonical: prop.aliasFor });
			}
		}
	}
	aliases.sort((a, b) => a.camel.localeCompare(b.camel));

	out += `/**
 * Maps camelCase CSS property names to their kebab-case equivalents.
 *
 * Includes standard properties, vendor-prefixed properties (both lower and
 * upper camelCase variants), and alias properties.
 *
 * Used by CSSStyleDeclaration's Proxy handler for O(1) property name resolution.
 */
const CSSStyleDeclarationPropertyNameMap: Record<string, string> = {
`;
	// Collect all entries so we can handle the last one without trailing comma
	const mapEntries: { key: string; value: string }[] = [];
	for (const { kebab, camel } of accessorProps) {
		mapEntries.push({ key: camel, value: kebab });
		const upper = upperVendorVariant(camel);
		if (upper) {
			mapEntries.push({ key: upper, value: kebab });
		}
	}
	for (const { kebab, camel } of aliases) {
		mapEntries.push({ key: camel, value: kebab });
		const upper = upperVendorVariant(camel);
		if (upper) {
			mapEntries.push({ key: upper, value: kebab });
		}
	}
	for (const e of mapEntries) {
		out += `\t${e.key}: '${e.value}',\n`;
	}
	// eslint-disable-next-line @typescript-eslint/dot-notation
	out += `\t// eslint-disable-next-line @typescript-eslint/dot-notation\n`;
	out += `\t'float': 'float'\n`;
	out += `};\n\n`;

	out += `export default CSSStyleDeclarationPropertyNameMap;\n`;

	return out;
}

/**
 * Generates only the public declare stubs block — the content between
 * BEGIN_CSS_DECLARATIONS and END_CSS_DECLARATIONS markers.
 * @param ir
 */
export function generateCSSDeclarations(ir: PropertyIR): string {
	const accessorProps: { camel: string }[] = [];
	const seen = new Set<string>();

	for (const prop of ir.properties) {
		if (prop.name.startsWith('-internal-')) {
			continue;
		}
		if (prop.type === 'alias') {
			continue;
		}
		const camel = kebabToCamelCase(prop.name);
		if (!seen.has(camel)) {
			seen.add(camel);
			accessorProps.push({ camel });
		}
	}
	accessorProps.sort((a, b) => a.camel.localeCompare(b.camel));

	const aliases: { camel: string }[] = [];
	for (const prop of ir.properties) {
		if (prop.type === 'alias' && prop.aliasFor) {
			const camel = kebabToCamelCase(prop.name);
			if (!seen.has(camel)) {
				seen.add(camel);
				aliases.push({ camel });
			}
		}
	}
	aliases.sort((a, b) => a.camel.localeCompare(b.camel));

	let out = '';

	for (const { camel } of accessorProps) {
		out += `\tpublic declare ${camel}: string;\n`;
		const upper = upperVendorVariant(camel);
		if (upper) {
			out += `\tpublic declare ${upper}: string;\n`;
		}
	}

	// 'float' is a reserved word but browsers support style.float
	out += `\n\tpublic declare float: string;\n`;

	out += `\n\t// Alias property type declarations\n\n`;
	for (const { camel } of aliases) {
		out += `\tpublic declare ${camel}: string;\n`;
		const upper = upperVendorVariant(camel);
		if (upper) {
			out += `\tpublic declare ${upper}: string;\n`;
		}
	}

	return out;
}
