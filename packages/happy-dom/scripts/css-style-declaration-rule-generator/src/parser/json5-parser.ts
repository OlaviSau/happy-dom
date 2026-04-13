/**
 * Parses Chromium's css_properties.json5 into a typed IPropertyIR.
 */

import JSON5 from 'json5';
import { readFileSync } from 'node:fs';
import type { IPropertyDefinition, IPropertyIR } from '../ir/property-ir.js';
import { kebabToCamelCase } from '../utils/name-utils.js';

/** Represents a raw entry from the JSON5 data array. */
interface IRawProperty {
	[key: string]: unknown;
	name: string;
	longhands?: string[];
	alias_for?: string;
	alternative_of?: string;
	inherited?: boolean;
	keywords?: string[];
	computable?: boolean;
	interpolable?: boolean;
	typedom_types?: string[];
	runtime_flag?: string;
	is_property?: boolean;
	is_descriptor?: boolean;
	is_internal?: boolean;
	field_template?: string;
	default_value?: string;
	affected_by_all?: boolean;
	property_methods?: string[];
	style_builder_template?: string;
	type_name?: string;
}

/**
 * Properties that accept negative values.
 * Derived from CSS spec: margins, offsets, z-index, etc. can be negative.
 * Paddings, widths, heights, border-widths, etc. cannot.
 */
const ACCEPTS_NEGATIVE = new Set([
	'margin-top',
	'margin-right',
	'margin-bottom',
	'margin-left',
	'margin-block-start',
	'margin-block-end',
	'margin-inline-start',
	'margin-inline-end',
	'top',
	'right',
	'bottom',
	'left',
	'inset-block-start',
	'inset-block-end',
	'inset-inline-start',
	'inset-inline-end',
	'z-index',
	'order',
	'tab-size',
	'flex-grow',
	'flex-shrink',
	'word-spacing',
	'letter-spacing',
	'text-indent',
	'outline-offset',
	'column-gap',
	'row-gap',
	'grid-column-start',
	'grid-column-end',
	'grid-row-start',
	'grid-row-end'
]);

/**
 * Initial CSS values for properties based on their type/keywords.
 * @param raw
 */
function deriveInitialValue(raw: IRawProperty): string {
	// Properties with explicit default_value in C++ — we map known patterns
	// to CSS-level initial values
	if (raw.keywords && raw.keywords.length > 0) {
		// Many keyword properties default to their first keyword
		// but this is not always true. Common CSS defaults:
		const defaults: Record<string, string> = {
			display: 'inline',
			visibility: 'visible',
			position: 'static',
			float: 'none',
			clear: 'none',
			'overflow-x': 'visible',
			'overflow-y': 'visible',
			'box-sizing': 'content-box',
			direction: 'ltr',
			'unicode-bidi': 'normal',
			'text-align': 'start',
			'vertical-align': 'baseline',
			'white-space-collapse': 'collapse',
			'text-wrap-mode': 'wrap',
			'word-break': 'normal',
			'overflow-wrap': 'normal',
			'text-transform': 'none',
			'text-decoration-style': 'solid',
			'text-decoration-line': 'none',
			'font-style': 'normal',
			'font-weight': 'normal',
			'font-stretch': 'normal',
			'font-variant-caps': 'normal',
			'list-style-type': 'disc',
			'list-style-position': 'outside',
			cursor: 'auto',
			resize: 'none',
			appearance: 'none',
			'border-top-style': 'none',
			'border-right-style': 'none',
			'border-bottom-style': 'none',
			'border-left-style': 'none',
			'border-collapse': 'separate',
			'table-layout': 'auto',
			'caption-side': 'top',
			'empty-cells': 'show',
			'outline-style': 'none',
			'backface-visibility': 'visible',
			'animation-direction': 'normal',
			'animation-fill-mode': 'none',
			'animation-play-state': 'running',
			'transition-property': 'all'
		};
		if (defaults[raw.name]) {
			return defaults[raw.name];
		}
	}

	// For length/size properties
	const typedomTypes = raw.typedom_types || [];
	if (typedomTypes.includes('Length') || typedomTypes.includes('Percentage')) {
		// Most length properties default to various values
		const zeroDefaults = new Set([
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'border-top-width',
			'border-right-width',
			'border-bottom-width',
			'border-left-width',
			'top',
			'right',
			'bottom',
			'left',
			'outline-width',
			'outline-offset',
			'text-indent',
			'word-spacing',
			'letter-spacing'
		]);
		if (zeroDefaults.has(raw.name)) {
			return '0px';
		}
	}

	return '';
}

/**
 * Parse the JSON5 file and return a IPropertyIR.
 * @param filePath
 */
export function parseJSON5(filePath: string): IPropertyIR {
	const raw = readFileSync(filePath, 'utf-8');

	// The JSON5 file has a top-level { parameters: {...}, data: [...] } structure.
	// We strip single-line comments that use // since json5 supports them.
	const parsed = JSON5.parse(raw);

	const entries: IRawProperty[] = parsed.data || [];

	const properties: IPropertyDefinition[] = [];
	const byName = new Map<string, IPropertyDefinition>();

	for (const entry of entries) {
		if (!entry.name) {
			continue;
		}

		const name = entry.name;

		// Skip internal properties
		const isInternal = name.startsWith('-internal-') || entry.is_internal === true;
		if (isInternal) {
			continue;
		}

		// Skip descriptor-only entries (not CSS properties)
		if (entry.is_property === false && entry.is_descriptor === true) {
			continue;
		}

		// Skip entries that are part of descriptor-only schemas
		if (entry.is_property === false) {
			continue;
		}

		// Determine type
		const hasLonghands = Array.isArray(entry.longhands) && entry.longhands.length > 0;
		const isAlias = typeof entry.alias_for === 'string';
		const type: IPropertyDefinition['type'] = isAlias
			? 'alias'
			: hasLonghands
				? 'shorthand'
				: 'longhand';

		// Determine computability
		let computable: boolean;
		if (typeof entry.computable === 'boolean') {
			computable = entry.computable;
		} else {
			// Default: computable if longhand, not alias, is_property
			computable = type === 'longhand';
		}

		const def: IPropertyDefinition = {
			name,
			camelCaseName: kebabToCamelCase(name),
			type,
			longhands: entry.longhands || [],
			aliasFor: entry.alias_for || null,
			inherited: entry.inherited === true,
			keywords: (entry.keywords || []).map((k: string) => k.toLowerCase()),
			computable,
			interpolable: entry.interpolable === true,
			typedomTypes: entry.typedom_types || [],
			isInternal,
			runtimeFlag: entry.runtime_flag || null,
			initialValue: deriveInitialValue(entry),
			acceptsNegative: ACCEPTS_NEGATIVE.has(name)
		};

		properties.push(def);
		byName.set(name, def);
	}

	// Resolve alias chains
	for (const prop of properties) {
		if (prop.aliasFor) {
			let canonical = prop.aliasFor;
			const seen = new Set<string>([prop.name]);
			while (true) {
				const target = byName.get(canonical);
				if (!target || !target.aliasFor || seen.has(target.aliasFor)) {
					break;
				}
				seen.add(canonical);
				canonical = target.aliasFor;
			}
			prop.aliasFor = canonical;
		}
	}

	const longhands = properties.filter((p) => p.type === 'longhand');
	const shorthands = properties.filter((p) => p.type === 'shorthand');
	const aliases = properties.filter((p) => p.type === 'alias');

	const shorthandToLonghands = new Map<string, string[]>();
	for (const s of shorthands) {
		shorthandToLonghands.set(s.name, s.longhands);
	}

	const aliasToCanonical = new Map<string, string>();
	for (const a of aliases) {
		if (a.aliasFor) {
			aliasToCanonical.set(a.name, a.aliasFor);
		}
	}

	const inheritedProperties = new Set<string>();
	for (const p of properties) {
		if (p.inherited) {
			inheritedProperties.add(p.name);
		}
	}

	return {
		properties,
		longhands,
		shorthands,
		aliases,
		byName,
		shorthandToLonghands,
		aliasToCanonical,
		inheritedProperties
	};
}
