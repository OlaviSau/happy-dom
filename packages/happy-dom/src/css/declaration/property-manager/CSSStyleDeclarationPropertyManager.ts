/**
 * AUTO-GENERATED FILE — DO NOT EDIT
 *
 * Derived from Chromium Blink rendering engine property data.
 * Source: https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink
 */

import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import CSSStyleDeclarationPropertySetParser from './CSSStyleDeclarationPropertySetParser.js';
import CSSStyleDeclarationPropertyGetParser from './CSSStyleDeclarationPropertyGetParser.js';
import CSSStyleDeclarationCSSParser from '../css-parser/CSSStyleDeclarationCSSParser.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';
import { CSS_ALIAS_TO_CANONICAL } from '../property-definitions/CSSAliasDefinitions.js';

/**
 * Shorthands that toString() will attempt to collapse longhands into.
 */
const COLLAPSE_SHORTHANDS = [
	'margin',
	'padding',
	'border',
	'border-width',
	'border-style',
	'border-color',
	'border-image',
	'border-radius',
	'outline',
	'flex',
	'flex-flow',
	'overflow',
	'gap',
	'place-content',
	'place-items',
	'place-self',
	'background',
	'font',
	'text-decoration',
	'list-style',
	'columns',
	'overscroll-behavior',
	'inset',
	'margin-block',
	'margin-inline',
	'padding-block',
	'padding-inline',
	'inset-block',
	'inset-inline',
	'scroll-margin',
	'scroll-padding',
	'border-top',
	'border-right',
	'border-bottom',
	'border-left',
	'font-variant'
];

/**
 * Pre-built reverse map: longhand property name → list of collapsible shorthands
 * (in COLLAPSE_SHORTHANDS priority order) that include that longhand.
 * Built once at module load to avoid recomputing on every toString() call.
 */
const LONGHAND_TO_COLLAPSE_SHORTHANDS = new Map<string, string[]>();
for (const shorthand of COLLAPSE_SHORTHANDS) {
	const lhs = CSS_SHORTHAND_TO_LONGHANDS[shorthand];
	if (!lhs) {
		continue;
	}
	for (const lh of lhs) {
		if (!LONGHAND_TO_COLLAPSE_SHORTHANDS.has(lh)) {
			LONGHAND_TO_COLLAPSE_SHORTHANDS.set(lh, []);
		}
		LONGHAND_TO_COLLAPSE_SHORTHANDS.get(lh)!.push(shorthand);
	}
}

/**
 * Manages CSS property storage. Only longhands are stored internally.
 *
 * Orchestrates all behavioral contracts:
 * - B1: set() decomposes shorthands via SetParser
 * - B2: get() recomposes shorthands via GetParser
 * - B3: Longhand override naturally invalidates shorthands (consequence of B2)
 * - B4: remove() clears longhands (all for shorthand, one for longhand)
 * - B6: Invalid values are silently ignored (SetParser returns null)
 * - B7: Empty value removes property
 * - B8: Priority propagates through shorthand expansion
 * - B9: toString() collapses longhands into shorthands
 * - B10: length/item track stored longhands
 * - B12: Custom properties (--*) stored alongside standard properties
 * - B13: Aliases resolved to canonical names
 */
export default class CSSStyleDeclarationPropertyManager {
	#properties: Record<string, ICSSStyleDeclarationPropertyValue> = {};
	#propertyNames: string[] = [];

	/**
	 * Constructor.
	 *
	 * @param [options] Options.
	 * @param [options.cssText] CSS string.
	 */
	constructor(options?: { cssText?: string }) {
		if (options?.cssText) {
			const { rules } = CSSStyleDeclarationCSSParser.parse(options.cssText);
			for (const rule of rules) {
				if (rule.important || !this.get(rule.name)?.important) {
					this.set(rule.name, rule.value, rule.important);
				}
			}
		}
	}

	/**
	 * Returns the underlying property store (used by computed style).
	 */
	public get properties(): Record<string, ICSSStyleDeclarationPropertyValue> {
		return this.#properties;
	}

	/**
	 * Returns property value.
	 *
	 * @param name Property name.
	 * @returns Property value.
	 */
	public get(name: string): ICSSStyleDeclarationPropertyValue | null {
		// Resolve alias (B13)
		const canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

		// Direct longhand lookup
		if (this.#properties[canonical]) {
			return this.#properties[canonical];
		}

		// Shorthand recomposition (B2)
		const longhands = CSS_SHORTHAND_TO_LONGHANDS[canonical];
		if (longhands) {
			return CSSStyleDeclarationPropertyGetParser.get(canonical, this.#properties);
		}

		return null;
	}

	/**
	 * Sets a property value.
	 *
	 * @param name Property name.
	 * @param value Property value.
	 * @param important Whether the value has !important.
	 */
	public set(name: string, value: string, important: boolean): void {
		// Resolve alias (B13)
		const canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

		// Empty value removes (B7)
		if (value === null || value === undefined || value.trim() === '') {
			this.remove(canonical);
			return;
		}

		// Parse and validate (B1, B6)
		const parsed = CSSStyleDeclarationPropertySetParser.parse(canonical, value, important);

		// Invalid value — silently ignore (B6)
		if (!parsed) {
			return;
		}

		// Store the resulting longhands
		for (const [propName, propValue] of Object.entries(parsed)) {
			if (propValue) {
				if (!this.#properties[propName]) {
					this.#propertyNames.push(propName);
				}
				this.#properties[propName] = propValue;
			}
		}
	}

	/**
	 * Removes a property.
	 *
	 * @param name Property name.
	 */
	public remove(name: string): void {
		// Resolve alias
		const canonical = CSS_ALIAS_TO_CANONICAL[name] ?? name;

		// Check if it's a shorthand — remove all longhands (B4)
		const longhands = CSS_SHORTHAND_TO_LONGHANDS[canonical];
		if (longhands) {
			for (const lh of longhands) {
				delete this.#properties[lh];
				const idx = this.#propertyNames.indexOf(lh);
				if (idx !== -1) {
					this.#propertyNames.splice(idx, 1);
				}
				// Also recursively remove if this longhand is itself a shorthand
				const subLonghands = CSS_SHORTHAND_TO_LONGHANDS[lh];
				if (subLonghands) {
					for (const sub of subLonghands) {
						delete this.#properties[sub];
						const subIdx = this.#propertyNames.indexOf(sub);
						if (subIdx !== -1) {
							this.#propertyNames.splice(subIdx, 1);
						}
					}
				}
			}
		}

		// Special case: parseFont() stores 'font-variant' as a direct property key,
		// but CSS_SHORTHAND_TO_LONGHANDS['font'] only lists font-variant-* sub-properties.
		// Explicitly remove font-variant when removing the font shorthand.
		if (canonical === 'font') {
			delete this.#properties['font-variant'];
			const fvIdx = this.#propertyNames.indexOf('font-variant');
			if (fvIdx !== -1) {
				this.#propertyNames.splice(fvIdx, 1);
			}
		}

		// Remove the property itself (longhand or custom property)
		delete this.#properties[canonical];
		const idx = this.#propertyNames.indexOf(canonical);
		if (idx !== -1) {
			this.#propertyNames.splice(idx, 1);
		}
	}

	/**
	 * Returns item.
	 *
	 * @param index Index.
	 * @returns Item.
	 */
	public item(index: number): string {
		return this.#propertyNames[index] || '';
	}

	/**
	 * Returns size.
	 *
	 * @returns Size.
	 */
	public size(): number {
		return this.#propertyNames.length;
	}

	/**
	 * Returns CSS text.
	 *
	 * @returns CSS text.
	 */
	public toString(): string {
		const used = new Set<string>();
		const parts: string[] = [];

		for (const name of this.#propertyNames) {
			if (used.has(name)) {
				continue;
			}

			// Try to collapse this longhand into a shorthand, checking candidates in
			// COLLAPSE_SHORTHANDS priority order (most-general first).
			const candidateShorthands = LONGHAND_TO_COLLAPSE_SHORTHANDS.get(name);
			let collapsed = false;

			if (candidateShorthands) {
				for (const shorthand of candidateShorthands) {
					const longhands = CSS_SHORTHAND_TO_LONGHANDS[shorthand];
					if (!longhands) {
						continue;
					}
					if (!longhands.every((lh) => this.#properties[lh] && !used.has(lh))) {
						continue;
					}
					const composed = CSSStyleDeclarationPropertyGetParser.get(shorthand, this.#properties);
					if (composed) {
						for (const lh of longhands) {
							used.add(lh);
						}
						const imp = composed.important ? ' !important' : '';
						parts.push(`${shorthand}: ${composed.value}${imp};`);
						collapsed = true;
						break;
					}
				}
			}

			if (!collapsed) {
				used.add(name);
				const prop = this.#properties[name];
				if (!prop) {
					continue;
				}
				const imp = prop.important ? ' !important' : '';
				parts.push(`${name}: ${prop.value}${imp};`);
			}
		}

		return parts.join(' ');
	}
}
