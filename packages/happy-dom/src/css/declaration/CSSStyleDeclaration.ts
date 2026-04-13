import type Element from '../../nodes/element/Element.js';
import type CSSRule from '../CSSRule.js';
import DOMExceptionNameEnum from '../../exception/DOMExceptionNameEnum.js';
import CSSStyleDeclarationPropertyManager from './property-manager/CSSStyleDeclarationPropertyManager.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import type BrowserWindow from '../../window/BrowserWindow.js';
import CSSStyleDeclarationComputedStyle from './computed-style/CSSStyleDeclarationComputedStyle.js';
import CSSStyleDeclarationPropertyNameMap from './property-definitions/CSSStyleDeclarationPropertyNameMap.js';

const CSS_KEBAB_PROPERTIES = new Set(Object.values(CSSStyleDeclarationPropertyNameMap));

/**
 * CSS Style Declaration.
 *
 * Implements the CSSOM CSSStyleDeclaration interface using a Proxy.
 * All 735 CSS properties are accessible via camelCase, kebab-case,
 * and numeric index notation. Type declarations provide full IDE support.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
 */
export default class CSSStyleDeclaration {
	// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/item#return_value
	readonly [index: number]: string;

	// Public properties
	public readonly parentRule: CSSRule | null = null;

	// Internal properties
	public [PropertySymbol.window]: BrowserWindow;

	// Private properties
	readonly #element: Element | null;
	readonly #computed: boolean;
	// This does not so much act as cache,
	// but more as a check against if the style attribute has been modified externally
	#cache: {
		attributeValue: string | null;
		propertyManager: CSSStyleDeclarationPropertyManager | null;
	} = {
		attributeValue: null,
		propertyManager: null
	};

	/**
	 * Proxy handler for CSS property access.
	 */
	static #proxyHandler: ProxyHandler<CSSStyleDeclaration> = {
		get(target: CSSStyleDeclaration, prop: string | symbol): unknown {
			if (typeof prop === 'symbol') {
				return Reflect.get(target, prop, target);
			}

			// Class members (methods, getters, instance fields) pass through directly.
			if (prop in target) {
				const value = Reflect.get(target, prop, target);
				// Bind methods so `this` refers to the real target, required for private field access.
				return typeof value === 'function'
					? (...args: unknown[]) => Reflect.apply(value, target, args)
					: value;
			}

			// Known camelCase CSS property: style.marginTop → getPropertyValue('margin-top')
			const kebab = CSSStyleDeclarationPropertyNameMap[prop];
			if (kebab !== undefined) {
				return target.getPropertyValue(kebab);
			}

			// Numeric index access: style[0] → item(0)
			const index = +prop;
			if (prop !== '' && Number.isInteger(index) && index >= 0) {
				return index < target.length ? target.item(index) : undefined;
			}

			// Known kebab-case CSS property access: style['margin-top']
			if (CSS_KEBAB_PROPERTIES.has(prop)) {
				return target.getPropertyValue(prop);
			}

			// Non-standard CSS properties (e.g., @font-face 'src', 'unicode-range') stored
			// in the property manager but not in the standard property name sets.
			if (/^[a-z][a-z0-9-]*$/.test(prop)) {
				const val = target.getPropertyValue(prop);
				if (val !== '') {
					return val;
				}
			}

			return Reflect.get(target, prop, target);
		},

		set(target: CSSStyleDeclaration, prop: string | symbol, value: unknown): boolean {
			if (typeof prop === 'symbol') {
				return Reflect.set(target, prop, value, target);
			}

			// e2e/chrome/css/css-style-declaration/numeric-index-write-element-style.html
			if (prop !== '' && Number.isInteger(+prop) && +prop >= 0) {
				return true;
			}

			// cssText pass through (uses setter with private fields)
			if (prop === 'cssText') {
				target.cssText = String(value ?? '');
				return true;
			}

			// Known CSS property (camelCase or kebab-case)
			const kebab =
				CSSStyleDeclarationPropertyNameMap[prop] ??
				(CSS_KEBAB_PROPERTIES.has(prop) ? prop : undefined);
			if (kebab !== undefined) {
				target.setProperty(kebab, String(value ?? ''));
				return true;
			}

			// Unknown property — store on the object (matches browser behaviour)
			return Reflect.set(target, prop, value, target);
		},

		has(target: CSSStyleDeclaration, prop: string | symbol): boolean {
			if (typeof prop === 'symbol') {
				return prop in target;
			}
			return (
				CSSStyleDeclarationPropertyNameMap[prop] !== undefined ||
				CSS_KEBAB_PROPERTIES.has(prop) ||
				prop in target
			);
		},

		ownKeys(target: CSSStyleDeclaration): ArrayLike<string | symbol> {
			const size = target.#getPropertyManager().size();
			const keys = new Set<string>(Object.keys(CSSStyleDeclarationPropertyNameMap));
			for (let i = 0; i < size; i++) {
				keys.add(String(i));
			}
			for (const key of Reflect.ownKeys(target)) {
				if (typeof key !== 'symbol') {
					keys.add(key);
				}
			}
			return Array.from(keys);
		},

		getOwnPropertyDescriptor(
			target: CSSStyleDeclaration,
			prop: string | symbol
		): PropertyDescriptor | undefined {
			if (typeof prop === 'string') {
				const index = +prop;
				if (prop !== '' && Number.isInteger(index) && index >= 0) {
					return index < target.length
						? { value: target.item(index), writable: false, enumerable: true, configurable: true }
						: undefined;
				}
				const kebab =
					CSSStyleDeclarationPropertyNameMap[prop] ??
					(CSS_KEBAB_PROPERTIES.has(prop) ? prop : null);
				if (kebab !== null) {
					const value = target.getPropertyValue(kebab);
					return value !== ''
						? { value, writable: true, enumerable: true, configurable: true }
						: undefined;
				}
			}
			return Reflect.getOwnPropertyDescriptor(target, prop);
		},

		deleteProperty(target: CSSStyleDeclaration, prop: string | symbol): boolean {
			if (typeof prop === 'symbol') {
				return Reflect.deleteProperty(target, prop);
			}
			const kebab =
				CSSStyleDeclarationPropertyNameMap[prop] ??
				(CSS_KEBAB_PROPERTIES.has(prop) ? prop : undefined);
			if (kebab !== undefined) {
				target.removeProperty(kebab);
				return true;
			}
			return Reflect.deleteProperty(target, prop);
		}
	};

	/**
	 * Constructor.
	 *
	 * @param illegalConstructorSymbol Illegal constructor symbol.
	 * @param window Window.
	 * @param [options] Options.
	 * @param [options.element] Element.
	 * @param [options.computed] Computed.
	 */
	constructor(
		illegalConstructorSymbol: Symbol,
		window: BrowserWindow,
		options?: {
			element?: Element;
			computed?: boolean;
		}
	) {
		if (illegalConstructorSymbol !== PropertySymbol.illegalConstructor) {
			throw new TypeError('Illegal constructor');
		}
		this[PropertySymbol.window] = window;
		this.#element = options?.element || null;
		this.#computed = options?.element ? !!options?.computed : false;
		return new Proxy(this, CSSStyleDeclaration.#proxyHandler);
	}

	/**
	 * Returns length.
	 *
	 * @returns Length.
	 */
	public get length(): number {
		return this.#getPropertyManager().size();
	}

	/**
	 * Returns the style declaration as a CSS text.
	 *
	 * @returns CSS text.
	 */
	public get cssText(): string {
		if (this.#element && this.#computed) {
			return '';
		}

		return this.#getPropertyManager().toString();
	}

	/**
	 * Sets CSS text.
	 *
	 * @param cssText CSS text.
	 */
	public set cssText(cssText: string) {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'cssText' on 'CSSStyleDeclaration': These styles are computed, and the properties are therefore read-only.`,
				DOMExceptionNameEnum.domException
			);
		}

		this.#cache.propertyManager = new CSSStyleDeclarationPropertyManager({ cssText });
		if (this.#element) {
			this.#cache.attributeValue = cssText;
			this.#element.setAttribute('style', this.#cache.propertyManager.toString());
		}
	}

	/**
	 * Returns item.
	 *
	 * @param index Index.
	 * @returns Item.
	 */
	public item(index: number): string {
		return this.#getPropertyManager().item(index);
	}

	/**
	 * Set a property.
	 *
	 * @param name Property name.
	 * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
	 * @param [priority] Can be "important", an empty string, undefined or null.
	 */
	public setProperty(
		name: string,
		value: string,
		priority?: 'important' | '' | undefined | null
	): void {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'setProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`,
				DOMExceptionNameEnum.domException
			);
		}

		if (![null, undefined, '', 'important'].includes(priority)) {
			return;
		}

		const stringValue = value !== null ? String(value).trim() : '';
		const propertyManager = this.#getPropertyManager();

		if (stringValue) {
			propertyManager.set(name, stringValue, !!priority);
		} else {
			propertyManager.remove(name);
		}

		if (this.#element) {
			// e2e/chrome/css/css-style-declaration/setProperty-element-style-attribute.html
			this.#cache.attributeValue = propertyManager.toString();
			if (this.#cache.attributeValue) {
				this.#element.setAttribute('style', this.#cache.attributeValue);
			} else if (this.#element.hasAttribute('style')) {
				// Chrome keeps the style attribute as "" rather than removing it.
				this.#element.setAttribute('style', '');
			}
		}
	}

	/**
	 * Removes a property.
	 *
	 * @param name Property name in kebab case.
	 * @returns The value of the property before removal.
	 */
	public removeProperty(name: string): string {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'removeProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`,
				DOMExceptionNameEnum.domException
			);
		}

		const propertyManager = this.#getPropertyManager();
		const oldValue = propertyManager.get(name)?.value || '';

		propertyManager.remove(name);

		if (this.#element) {
			this.#cache.attributeValue = propertyManager.toString();
			if (this.#cache.attributeValue) {
				this.#element.setAttribute('style', this.#cache.attributeValue);
			} else if (this.#element.hasAttribute('style')) {
				// Chrome keeps the style attribute as "" rather than removing it.
				this.#element.setAttribute('style', '');
			}
		}

		return oldValue;
	}

	/**
	 * Returns a property value.
	 *
	 * @param name Property name in kebab case.
	 * @returns Property value.
	 */
	public getPropertyValue(name: string): string {
		return this.#getPropertyManager().get(name)?.value || '';
	}

	/**
	 * Returns a property priority.
	 *
	 * @param name Property name in kebab case.
	 * @returns "important" if set to be important.
	 */
	public getPropertyPriority(name: string): string {
		return this.#getPropertyManager().get(name)?.important ? 'important' : '';
	}

	/**
	 * Returns property manager.
	 *
	 * @returns Property manager.
	 */
	#getPropertyManager(): CSSStyleDeclarationPropertyManager {
		const element = this.#element;
		const cache = this.#cache;

		if (!element) {
			return (cache.propertyManager ??= new CSSStyleDeclarationPropertyManager());
		}

		if (this.#computed) {
			return new CSSStyleDeclarationComputedStyle(element).getComputedStyle();
		}

		const attributeValue = element.getAttribute('style') || '';

		if (cache.attributeValue !== attributeValue) {
			cache.propertyManager = new CSSStyleDeclarationPropertyManager({ cssText: attributeValue });
		}

		return (cache.propertyManager ??= new CSSStyleDeclarationPropertyManager());
	}

	/**
	 * Auto-generated `declare` stubs for all CSS properties.
	 *
	 * These emit no JavaScript — they exist solely to give TypeScript and IDEs
	 * visibility of the ~730 CSS properties that are handled at runtime by the
	 * Proxy (which intercepts get/set via CSSStyleDeclarationPropertyNameMap).
	 */
	/* eslint-disable @typescript-eslint/member-ordering */
	// BEGIN_CSS_DECLARATIONS
	public declare accentColor: string;
	public declare alignContent: string;
	public declare alignItems: string;
	public declare alignmentBaseline: string;
	public declare alignSelf: string;
	public declare all: string;
	public declare alternativeWebkitLineClamp: string;
	public declare anchorName: string;
	public declare anchorScope: string;
	public declare animation: string;
	public declare animationComposition: string;
	public declare animationDelay: string;
	public declare animationDirection: string;
	public declare animationDuration: string;
	public declare animationFillMode: string;
	public declare animationIterationCount: string;
	public declare animationName: string;
	public declare animationPlayState: string;
	public declare animationRange: string;
	public declare animationRangeEnd: string;
	public declare animationRangeStart: string;
	public declare animationTimeline: string;
	public declare animationTimingFunction: string;
	public declare animationTrigger: string;
	public declare appearance: string;
	public declare appRegion: string;
	public declare aspectRatio: string;
	public declare backdropFilter: string;
	public declare backfaceVisibility: string;
	public declare background: string;
	public declare backgroundAttachment: string;
	public declare backgroundBlendMode: string;
	public declare backgroundClip: string;
	public declare backgroundColor: string;
	public declare backgroundImage: string;
	public declare backgroundOrigin: string;
	public declare backgroundPosition: string;
	public declare backgroundPositionX: string;
	public declare backgroundPositionY: string;
	public declare backgroundRepeat: string;
	public declare backgroundSize: string;
	public declare baselineShift: string;
	public declare baselineSource: string;
	public declare blockEllipsis: string;
	public declare blockSize: string;
	public declare border: string;
	public declare borderBlock: string;
	public declare borderBlockColor: string;
	public declare borderBlockEnd: string;
	public declare borderBlockEndColor: string;
	public declare borderBlockEndStyle: string;
	public declare borderBlockEndWidth: string;
	public declare borderBlockStart: string;
	public declare borderBlockStartColor: string;
	public declare borderBlockStartStyle: string;
	public declare borderBlockStartWidth: string;
	public declare borderBlockStyle: string;
	public declare borderBlockWidth: string;
	public declare borderBottom: string;
	public declare borderBottomColor: string;
	public declare borderBottomLeftRadius: string;
	public declare borderBottomRightRadius: string;
	public declare borderBottomStyle: string;
	public declare borderBottomWidth: string;
	public declare borderCollapse: string;
	public declare borderColor: string;
	public declare borderEndEndRadius: string;
	public declare borderEndStartRadius: string;
	public declare borderImage: string;
	public declare borderImageOutset: string;
	public declare borderImageRepeat: string;
	public declare borderImageSlice: string;
	public declare borderImageSource: string;
	public declare borderImageWidth: string;
	public declare borderInline: string;
	public declare borderInlineColor: string;
	public declare borderInlineEnd: string;
	public declare borderInlineEndColor: string;
	public declare borderInlineEndStyle: string;
	public declare borderInlineEndWidth: string;
	public declare borderInlineStart: string;
	public declare borderInlineStartColor: string;
	public declare borderInlineStartStyle: string;
	public declare borderInlineStartWidth: string;
	public declare borderInlineStyle: string;
	public declare borderInlineWidth: string;
	public declare borderLeft: string;
	public declare borderLeftColor: string;
	public declare borderLeftStyle: string;
	public declare borderLeftWidth: string;
	public declare borderRadius: string;
	public declare borderRight: string;
	public declare borderRightColor: string;
	public declare borderRightStyle: string;
	public declare borderRightWidth: string;
	public declare borderShape: string;
	public declare borderSpacing: string;
	public declare borderStartEndRadius: string;
	public declare borderStartStartRadius: string;
	public declare borderStyle: string;
	public declare borderTop: string;
	public declare borderTopColor: string;
	public declare borderTopLeftRadius: string;
	public declare borderTopRightRadius: string;
	public declare borderTopStyle: string;
	public declare borderTopWidth: string;
	public declare borderWidth: string;
	public declare bottom: string;
	public declare boxDecorationBreak: string;
	public declare boxShadow: string;
	public declare boxSizing: string;
	public declare breakAfter: string;
	public declare breakBefore: string;
	public declare breakInside: string;
	public declare bufferedRendering: string;
	public declare captionSide: string;
	public declare caretAnimation: string;
	public declare caretColor: string;
	public declare caretShape: string;
	public declare clear: string;
	public declare clip: string;
	public declare clipPath: string;
	public declare clipRule: string;
	public declare color: string;
	public declare colorInterpolation: string;
	public declare colorInterpolationFilters: string;
	public declare colorRendering: string;
	public declare colorScheme: string;
	public declare columnCount: string;
	public declare columnFill: string;
	public declare columnGap: string;
	public declare columnHeight: string;
	public declare columnRule: string;
	public declare columnRuleBreak: string;
	public declare columnRuleColor: string;
	public declare columnRuleEdgeInset: string;
	public declare columnRuleEdgeInsetEnd: string;
	public declare columnRuleEdgeInsetStart: string;
	public declare columnRuleInset: string;
	public declare columnRuleInsetEnd: string;
	public declare columnRuleInsetStart: string;
	public declare columnRuleInteriorInset: string;
	public declare columnRuleInteriorInsetEnd: string;
	public declare columnRuleInteriorInsetStart: string;
	public declare columnRuleStyle: string;
	public declare columnRuleVisibilityItems: string;
	public declare columnRuleWidth: string;
	public declare columns: string;
	public declare columnSpan: string;
	public declare columnWidth: string;
	public declare columnWrap: string;
	public declare contain: string;
	public declare container: string;
	public declare containerName: string;
	public declare containerType: string;
	public declare containIntrinsicBlockSize: string;
	public declare containIntrinsicHeight: string;
	public declare containIntrinsicInlineSize: string;
	public declare containIntrinsicSize: string;
	public declare containIntrinsicWidth: string;
	public declare content: string;
	public declare contentVisibility: string;
	public declare continue: string;
	public declare cornerBlockEndShape: string;
	public declare cornerBlockStartShape: string;
	public declare cornerBottomLeftShape: string;
	public declare cornerBottomRightShape: string;
	public declare cornerBottomShape: string;
	public declare cornerEndEndShape: string;
	public declare cornerEndStartShape: string;
	public declare cornerInlineEndShape: string;
	public declare cornerInlineStartShape: string;
	public declare cornerLeftShape: string;
	public declare cornerRightShape: string;
	public declare corners: string;
	public declare cornerShape: string;
	public declare cornerStartEndShape: string;
	public declare cornerStartStartShape: string;
	public declare cornerTopLeftShape: string;
	public declare cornerTopRightShape: string;
	public declare cornerTopShape: string;
	public declare counterIncrement: string;
	public declare counterReset: string;
	public declare counterSet: string;
	public declare cssFloat: string;
	public declare cursor: string;
	public declare cx: string;
	public declare cy: string;
	public declare d: string;
	public declare direction: string;
	public declare display: string;
	public declare dominantBaseline: string;
	public declare dynamicRangeLimit: string;
	public declare emptyCells: string;
	public declare fieldSizing: string;
	public declare fill: string;
	public declare fillOpacity: string;
	public declare fillRule: string;
	public declare filter: string;
	public declare flex: string;
	public declare flexBasis: string;
	public declare flexDirection: string;
	public declare flexFlow: string;
	public declare flexGrow: string;
	public declare flexShrink: string;
	public declare flexWrap: string;
	public declare floodColor: string;
	public declare floodOpacity: string;
	public declare flowTolerance: string;
	public declare font: string;
	public declare fontFamily: string;
	public declare fontFeatureSettings: string;
	public declare fontKerning: string;
	public declare fontLanguageOverride: string;
	public declare fontOpticalSizing: string;
	public declare fontPalette: string;
	public declare fontSize: string;
	public declare fontSizeAdjust: string;
	public declare fontStretch: string;
	public declare fontStyle: string;
	public declare fontSynthesis: string;
	public declare fontSynthesisSmallCaps: string;
	public declare fontSynthesisStyle: string;
	public declare fontSynthesisWeight: string;
	public declare fontVariant: string;
	public declare fontVariantAlternates: string;
	public declare fontVariantCaps: string;
	public declare fontVariantEastAsian: string;
	public declare fontVariantEmoji: string;
	public declare fontVariantLigatures: string;
	public declare fontVariantNumeric: string;
	public declare fontVariantPosition: string;
	public declare fontVariationSettings: string;
	public declare fontWeight: string;
	public declare forcedColorAdjust: string;
	public declare frameSizing: string;
	public declare gap: string;
	public declare grid: string;
	public declare gridArea: string;
	public declare gridAutoColumns: string;
	public declare gridAutoFlow: string;
	public declare gridAutoRows: string;
	public declare gridColumn: string;
	public declare gridColumnEnd: string;
	public declare gridColumnStart: string;
	public declare gridLanes: string;
	public declare gridLanesDirection: string;
	public declare gridLanesPack: string;
	public declare gridRow: string;
	public declare gridRowEnd: string;
	public declare gridRowStart: string;
	public declare gridTemplate: string;
	public declare gridTemplateAreas: string;
	public declare gridTemplateColumns: string;
	public declare gridTemplateRows: string;
	public declare height: string;
	public declare hyphenateCharacter: string;
	public declare hyphenateLimitChars: string;
	public declare hyphens: string;
	public declare imageAnimation: string;
	public declare imageOrientation: string;
	public declare imageRendering: string;
	public declare initialLetter: string;
	public declare inlineSize: string;
	public declare inset: string;
	public declare insetBlock: string;
	public declare insetBlockEnd: string;
	public declare insetBlockStart: string;
	public declare insetInline: string;
	public declare insetInlineEnd: string;
	public declare insetInlineStart: string;
	public declare interactivity: string;
	public declare interestDelay: string;
	public declare interestDelayEnd: string;
	public declare interestDelayStart: string;
	public declare interpolateSize: string;
	public declare isolation: string;
	public declare justifyContent: string;
	public declare justifyItems: string;
	public declare justifySelf: string;
	public declare left: string;
	public declare letterSpacing: string;
	public declare lightingColor: string;
	public declare lineBreak: string;
	public declare lineClamp: string;
	public declare lineHeight: string;
	public declare listStyle: string;
	public declare listStyleImage: string;
	public declare listStylePosition: string;
	public declare listStyleType: string;
	public declare margin: string;
	public declare marginBlock: string;
	public declare marginBlockEnd: string;
	public declare marginBlockStart: string;
	public declare marginBottom: string;
	public declare marginInline: string;
	public declare marginInlineEnd: string;
	public declare marginInlineStart: string;
	public declare marginLeft: string;
	public declare marginRight: string;
	public declare marginTop: string;
	public declare marginTrim: string;
	public declare marker: string;
	public declare markerEnd: string;
	public declare markerMid: string;
	public declare markerStart: string;
	public declare mask: string;
	public declare maskClip: string;
	public declare maskComposite: string;
	public declare maskImage: string;
	public declare maskMode: string;
	public declare maskOrigin: string;
	public declare maskPosition: string;
	public declare maskRepeat: string;
	public declare maskSize: string;
	public declare maskType: string;
	public declare mathDepth: string;
	public declare mathShift: string;
	public declare mathStyle: string;
	public declare maxBlockSize: string;
	public declare maxHeight: string;
	public declare maxInlineSize: string;
	public declare maxLines: string;
	public declare maxWidth: string;
	public declare minBlockSize: string;
	public declare minHeight: string;
	public declare minInlineSize: string;
	public declare minWidth: string;
	public declare mixBlendMode: string;
	public declare objectFit: string;
	public declare objectPosition: string;
	public declare objectViewBox: string;
	public declare offset: string;
	public declare offsetAnchor: string;
	public declare offsetDistance: string;
	public declare offsetPath: string;
	public declare offsetPosition: string;
	public declare offsetRotate: string;
	public declare opacity: string;
	public declare order: string;
	public declare originTrialTestProperty: string;
	public declare orphans: string;
	public declare outline: string;
	public declare outlineColor: string;
	public declare outlineOffset: string;
	public declare outlineStyle: string;
	public declare outlineWidth: string;
	public declare overflow: string;
	public declare overflowAnchor: string;
	public declare overflowBlock: string;
	public declare overflowClipMargin: string;
	public declare overflowInline: string;
	public declare overflowWrap: string;
	public declare overflowX: string;
	public declare overflowY: string;
	public declare overlay: string;
	public declare overscrollBehavior: string;
	public declare overscrollBehaviorBlock: string;
	public declare overscrollBehaviorInline: string;
	public declare overscrollBehaviorX: string;
	public declare overscrollBehaviorY: string;
	public declare padding: string;
	public declare paddingBlock: string;
	public declare paddingBlockEnd: string;
	public declare paddingBlockStart: string;
	public declare paddingBottom: string;
	public declare paddingInline: string;
	public declare paddingInlineEnd: string;
	public declare paddingInlineStart: string;
	public declare paddingLeft: string;
	public declare paddingRight: string;
	public declare paddingTop: string;
	public declare page: string;
	public declare pageBreakAfter: string;
	public declare pageBreakBefore: string;
	public declare pageBreakInside: string;
	public declare pageMarginSafety: string;
	public declare pageOrientation: string;
	public declare paintOrder: string;
	public declare pathLength: string;
	public declare perspective: string;
	public declare perspectiveOrigin: string;
	public declare placeContent: string;
	public declare placeItems: string;
	public declare placeSelf: string;
	public declare pointerEvents: string;
	public declare position: string;
	public declare positionAnchor: string;
	public declare positionArea: string;
	public declare positionTry: string;
	public declare positionTryFallbacks: string;
	public declare positionTryOrder: string;
	public declare positionVisibility: string;
	public declare printColorAdjust: string;
	public declare quotes: string;
	public declare r: string;
	public declare readingFlow: string;
	public declare readingOrder: string;
	public declare resize: string;
	public declare right: string;
	public declare rotate: string;
	public declare rowGap: string;
	public declare rowRule: string;
	public declare rowRuleBreak: string;
	public declare rowRuleColor: string;
	public declare rowRuleEdgeInset: string;
	public declare rowRuleEdgeInsetEnd: string;
	public declare rowRuleEdgeInsetStart: string;
	public declare rowRuleInset: string;
	public declare rowRuleInsetEnd: string;
	public declare rowRuleInsetStart: string;
	public declare rowRuleInteriorInset: string;
	public declare rowRuleInteriorInsetEnd: string;
	public declare rowRuleInteriorInsetStart: string;
	public declare rowRuleStyle: string;
	public declare rowRuleVisibilityItems: string;
	public declare rowRuleWidth: string;
	public declare rubyAlign: string;
	public declare rubyOverhang: string;
	public declare rubyPosition: string;
	public declare rule: string;
	public declare ruleBreak: string;
	public declare ruleColor: string;
	public declare ruleEdgeInset: string;
	public declare ruleInset: string;
	public declare ruleInsetEnd: string;
	public declare ruleInsetStart: string;
	public declare ruleInteriorInset: string;
	public declare ruleOverlap: string;
	public declare ruleStyle: string;
	public declare ruleVisibilityItems: string;
	public declare ruleWidth: string;
	public declare rx: string;
	public declare ry: string;
	public declare scale: string;
	public declare scrollbarColor: string;
	public declare scrollbarGutter: string;
	public declare scrollbarWidth: string;
	public declare scrollBehavior: string;
	public declare scrollInitialTarget: string;
	public declare scrollMargin: string;
	public declare scrollMarginBlock: string;
	public declare scrollMarginBlockEnd: string;
	public declare scrollMarginBlockStart: string;
	public declare scrollMarginBottom: string;
	public declare scrollMarginInline: string;
	public declare scrollMarginInlineEnd: string;
	public declare scrollMarginInlineStart: string;
	public declare scrollMarginLeft: string;
	public declare scrollMarginRight: string;
	public declare scrollMarginTop: string;
	public declare scrollMarkerGroup: string;
	public declare scrollPadding: string;
	public declare scrollPaddingBlock: string;
	public declare scrollPaddingBlockEnd: string;
	public declare scrollPaddingBlockStart: string;
	public declare scrollPaddingBottom: string;
	public declare scrollPaddingInline: string;
	public declare scrollPaddingInlineEnd: string;
	public declare scrollPaddingInlineStart: string;
	public declare scrollPaddingLeft: string;
	public declare scrollPaddingRight: string;
	public declare scrollPaddingTop: string;
	public declare scrollSnapAlign: string;
	public declare scrollSnapStop: string;
	public declare scrollSnapType: string;
	public declare scrollTargetGroup: string;
	public declare scrollTimeline: string;
	public declare scrollTimelineAxis: string;
	public declare scrollTimelineName: string;
	public declare shapeImageThreshold: string;
	public declare shapeMargin: string;
	public declare shapeOutside: string;
	public declare shapeRendering: string;
	public declare size: string;
	public declare speak: string;
	public declare stopColor: string;
	public declare stopOpacity: string;
	public declare stroke: string;
	public declare strokeDasharray: string;
	public declare strokeDashoffset: string;
	public declare strokeLinecap: string;
	public declare strokeLinejoin: string;
	public declare strokeMiterlimit: string;
	public declare strokeOpacity: string;
	public declare strokeWidth: string;
	public declare tableLayout: string;
	public declare tabSize: string;
	public declare textAlign: string;
	public declare textAlignLast: string;
	public declare textAnchor: string;
	public declare textAutospace: string;
	public declare textBox: string;
	public declare textBoxEdge: string;
	public declare textBoxTrim: string;
	public declare textCombineUpright: string;
	public declare textDecoration: string;
	public declare textDecorationColor: string;
	public declare textDecorationLine: string;
	public declare textDecorationSkipInk: string;
	public declare textDecorationStyle: string;
	public declare textDecorationThickness: string;
	public declare textEmphasis: string;
	public declare textEmphasisColor: string;
	public declare textEmphasisPosition: string;
	public declare textEmphasisStyle: string;
	public declare textFit: string;
	public declare textIndent: string;
	public declare textJustify: string;
	public declare textOrientation: string;
	public declare textOverflow: string;
	public declare textRendering: string;
	public declare textShadow: string;
	public declare textSizeAdjust: string;
	public declare textSpacing: string;
	public declare textSpacingTrim: string;
	public declare textTransform: string;
	public declare textUnderlineOffset: string;
	public declare textUnderlinePosition: string;
	public declare textWrap: string;
	public declare textWrapMode: string;
	public declare textWrapStyle: string;
	public declare timelineScope: string;
	public declare timelineTrigger: string;
	public declare timelineTriggerActivationRange: string;
	public declare timelineTriggerActivationRangeEnd: string;
	public declare timelineTriggerActivationRangeStart: string;
	public declare timelineTriggerActiveRange: string;
	public declare timelineTriggerActiveRangeEnd: string;
	public declare timelineTriggerActiveRangeStart: string;
	public declare timelineTriggerName: string;
	public declare timelineTriggerSource: string;
	public declare top: string;
	public declare touchAction: string;
	public declare transform: string;
	public declare transformBox: string;
	public declare transformOrigin: string;
	public declare transformStyle: string;
	public declare transition: string;
	public declare transitionBehavior: string;
	public declare transitionDelay: string;
	public declare transitionDuration: string;
	public declare transitionProperty: string;
	public declare transitionTimingFunction: string;
	public declare translate: string;
	public declare triggerScope: string;
	public declare unicodeBidi: string;
	public declare userSelect: string;
	public declare vectorEffect: string;
	public declare verticalAlign: string;
	public declare viewTimeline: string;
	public declare viewTimelineAxis: string;
	public declare viewTimelineInset: string;
	public declare viewTimelineName: string;
	public declare viewTransitionClass: string;
	public declare viewTransitionGroup: string;
	public declare viewTransitionName: string;
	public declare viewTransitionScope: string;
	public declare visibility: string;
	public declare webkitBorderHorizontalSpacing: string;
	public declare WebkitBorderHorizontalSpacing: string;
	public declare webkitBorderImage: string;
	public declare WebkitBorderImage: string;
	public declare webkitBorderVerticalSpacing: string;
	public declare WebkitBorderVerticalSpacing: string;
	public declare webkitBoxAlign: string;
	public declare WebkitBoxAlign: string;
	public declare webkitBoxDecorationBreak: string;
	public declare WebkitBoxDecorationBreak: string;
	public declare webkitBoxDirection: string;
	public declare WebkitBoxDirection: string;
	public declare webkitBoxFlex: string;
	public declare WebkitBoxFlex: string;
	public declare webkitBoxOrdinalGroup: string;
	public declare WebkitBoxOrdinalGroup: string;
	public declare webkitBoxOrient: string;
	public declare WebkitBoxOrient: string;
	public declare webkitBoxPack: string;
	public declare WebkitBoxPack: string;
	public declare webkitBoxReflect: string;
	public declare WebkitBoxReflect: string;
	public declare webkitColumnBreakAfter: string;
	public declare WebkitColumnBreakAfter: string;
	public declare webkitColumnBreakBefore: string;
	public declare WebkitColumnBreakBefore: string;
	public declare webkitColumnBreakInside: string;
	public declare WebkitColumnBreakInside: string;
	public declare webkitFontSmoothing: string;
	public declare WebkitFontSmoothing: string;
	public declare webkitLineBreak: string;
	public declare WebkitLineBreak: string;
	public declare webkitLineClamp: string;
	public declare WebkitLineClamp: string;
	public declare webkitLocale: string;
	public declare WebkitLocale: string;
	public declare webkitMaskBoxImage: string;
	public declare WebkitMaskBoxImage: string;
	public declare webkitMaskBoxImageOutset: string;
	public declare WebkitMaskBoxImageOutset: string;
	public declare webkitMaskBoxImageRepeat: string;
	public declare WebkitMaskBoxImageRepeat: string;
	public declare webkitMaskBoxImageSlice: string;
	public declare WebkitMaskBoxImageSlice: string;
	public declare webkitMaskBoxImageSource: string;
	public declare WebkitMaskBoxImageSource: string;
	public declare webkitMaskBoxImageWidth: string;
	public declare WebkitMaskBoxImageWidth: string;
	public declare webkitMaskPositionX: string;
	public declare WebkitMaskPositionX: string;
	public declare webkitMaskPositionY: string;
	public declare WebkitMaskPositionY: string;
	public declare webkitPerspectiveOriginX: string;
	public declare WebkitPerspectiveOriginX: string;
	public declare webkitPerspectiveOriginY: string;
	public declare WebkitPerspectiveOriginY: string;
	public declare webkitRtlOrdering: string;
	public declare WebkitRtlOrdering: string;
	public declare webkitRubyPosition: string;
	public declare WebkitRubyPosition: string;
	public declare webkitTapHighlightColor: string;
	public declare WebkitTapHighlightColor: string;
	public declare webkitTextCombine: string;
	public declare WebkitTextCombine: string;
	public declare webkitTextDecorationsInEffect: string;
	public declare WebkitTextDecorationsInEffect: string;
	public declare webkitTextFillColor: string;
	public declare WebkitTextFillColor: string;
	public declare webkitTextOrientation: string;
	public declare WebkitTextOrientation: string;
	public declare webkitTextSecurity: string;
	public declare WebkitTextSecurity: string;
	public declare webkitTextStroke: string;
	public declare WebkitTextStroke: string;
	public declare webkitTextStrokeColor: string;
	public declare WebkitTextStrokeColor: string;
	public declare webkitTextStrokeWidth: string;
	public declare WebkitTextStrokeWidth: string;
	public declare webkitTransformOriginX: string;
	public declare WebkitTransformOriginX: string;
	public declare webkitTransformOriginY: string;
	public declare WebkitTransformOriginY: string;
	public declare webkitTransformOriginZ: string;
	public declare WebkitTransformOriginZ: string;
	public declare webkitUserDrag: string;
	public declare WebkitUserDrag: string;
	public declare webkitUserModify: string;
	public declare WebkitUserModify: string;
	public declare webkitWritingMode: string;
	public declare WebkitWritingMode: string;
	public declare whiteSpace: string;
	public declare whiteSpaceCollapse: string;
	public declare widows: string;
	public declare width: string;
	public declare willChange: string;
	public declare wordBreak: string;
	public declare wordSpacing: string;
	public declare writingMode: string;
	public declare x: string;
	public declare y: string;
	public declare zIndex: string;
	public declare zoom: string;

	public declare float: string;

	// Alias property type declarations

	public declare epubCaptionSide: string;
	public declare epubTextCombine: string;
	public declare epubTextEmphasis: string;
	public declare epubTextEmphasisColor: string;
	public declare epubTextEmphasisStyle: string;
	public declare epubTextOrientation: string;
	public declare epubTextTransform: string;
	public declare epubWordBreak: string;
	public declare epubWritingMode: string;
	public declare gridColumnGap: string;
	public declare gridGap: string;
	public declare gridRowGap: string;
	public declare webkitAlignContent: string;
	public declare WebkitAlignContent: string;
	public declare webkitAlignItems: string;
	public declare WebkitAlignItems: string;
	public declare webkitAlignSelf: string;
	public declare WebkitAlignSelf: string;
	public declare webkitAnimation: string;
	public declare WebkitAnimation: string;
	public declare webkitAnimationDelay: string;
	public declare WebkitAnimationDelay: string;
	public declare webkitAnimationDirection: string;
	public declare WebkitAnimationDirection: string;
	public declare webkitAnimationDuration: string;
	public declare WebkitAnimationDuration: string;
	public declare webkitAnimationFillMode: string;
	public declare WebkitAnimationFillMode: string;
	public declare webkitAnimationIterationCount: string;
	public declare WebkitAnimationIterationCount: string;
	public declare webkitAnimationName: string;
	public declare WebkitAnimationName: string;
	public declare webkitAnimationPlayState: string;
	public declare WebkitAnimationPlayState: string;
	public declare webkitAnimationTimingFunction: string;
	public declare WebkitAnimationTimingFunction: string;
	public declare webkitAppearance: string;
	public declare WebkitAppearance: string;
	public declare webkitAppRegion: string;
	public declare WebkitAppRegion: string;
	public declare webkitBackfaceVisibility: string;
	public declare WebkitBackfaceVisibility: string;
	public declare webkitBackgroundClip: string;
	public declare WebkitBackgroundClip: string;
	public declare webkitBackgroundOrigin: string;
	public declare WebkitBackgroundOrigin: string;
	public declare webkitBackgroundSize: string;
	public declare WebkitBackgroundSize: string;
	public declare webkitBorderAfter: string;
	public declare WebkitBorderAfter: string;
	public declare webkitBorderAfterColor: string;
	public declare WebkitBorderAfterColor: string;
	public declare webkitBorderAfterStyle: string;
	public declare WebkitBorderAfterStyle: string;
	public declare webkitBorderAfterWidth: string;
	public declare WebkitBorderAfterWidth: string;
	public declare webkitBorderBefore: string;
	public declare WebkitBorderBefore: string;
	public declare webkitBorderBeforeColor: string;
	public declare WebkitBorderBeforeColor: string;
	public declare webkitBorderBeforeStyle: string;
	public declare WebkitBorderBeforeStyle: string;
	public declare webkitBorderBeforeWidth: string;
	public declare WebkitBorderBeforeWidth: string;
	public declare webkitBorderBottomLeftRadius: string;
	public declare WebkitBorderBottomLeftRadius: string;
	public declare webkitBorderBottomRightRadius: string;
	public declare WebkitBorderBottomRightRadius: string;
	public declare webkitBorderEnd: string;
	public declare WebkitBorderEnd: string;
	public declare webkitBorderEndColor: string;
	public declare WebkitBorderEndColor: string;
	public declare webkitBorderEndStyle: string;
	public declare WebkitBorderEndStyle: string;
	public declare webkitBorderEndWidth: string;
	public declare WebkitBorderEndWidth: string;
	public declare webkitBorderRadius: string;
	public declare WebkitBorderRadius: string;
	public declare webkitBorderStart: string;
	public declare WebkitBorderStart: string;
	public declare webkitBorderStartColor: string;
	public declare WebkitBorderStartColor: string;
	public declare webkitBorderStartStyle: string;
	public declare WebkitBorderStartStyle: string;
	public declare webkitBorderStartWidth: string;
	public declare WebkitBorderStartWidth: string;
	public declare webkitBorderTopLeftRadius: string;
	public declare WebkitBorderTopLeftRadius: string;
	public declare webkitBorderTopRightRadius: string;
	public declare WebkitBorderTopRightRadius: string;
	public declare webkitBoxShadow: string;
	public declare WebkitBoxShadow: string;
	public declare webkitBoxSizing: string;
	public declare WebkitBoxSizing: string;
	public declare webkitClipPath: string;
	public declare WebkitClipPath: string;
	public declare webkitColumnCount: string;
	public declare WebkitColumnCount: string;
	public declare webkitColumnGap: string;
	public declare WebkitColumnGap: string;
	public declare webkitColumnRule: string;
	public declare WebkitColumnRule: string;
	public declare webkitColumnRuleColor: string;
	public declare WebkitColumnRuleColor: string;
	public declare webkitColumnRuleStyle: string;
	public declare WebkitColumnRuleStyle: string;
	public declare webkitColumnRuleWidth: string;
	public declare WebkitColumnRuleWidth: string;
	public declare webkitColumns: string;
	public declare WebkitColumns: string;
	public declare webkitColumnSpan: string;
	public declare WebkitColumnSpan: string;
	public declare webkitColumnWidth: string;
	public declare WebkitColumnWidth: string;
	public declare webkitFilter: string;
	public declare WebkitFilter: string;
	public declare webkitFlex: string;
	public declare WebkitFlex: string;
	public declare webkitFlexBasis: string;
	public declare WebkitFlexBasis: string;
	public declare webkitFlexDirection: string;
	public declare WebkitFlexDirection: string;
	public declare webkitFlexFlow: string;
	public declare WebkitFlexFlow: string;
	public declare webkitFlexGrow: string;
	public declare WebkitFlexGrow: string;
	public declare webkitFlexShrink: string;
	public declare WebkitFlexShrink: string;
	public declare webkitFlexWrap: string;
	public declare WebkitFlexWrap: string;
	public declare webkitFontFeatureSettings: string;
	public declare WebkitFontFeatureSettings: string;
	public declare webkitHyphenateCharacter: string;
	public declare WebkitHyphenateCharacter: string;
	public declare webkitJustifyContent: string;
	public declare WebkitJustifyContent: string;
	public declare webkitLogicalHeight: string;
	public declare WebkitLogicalHeight: string;
	public declare webkitLogicalWidth: string;
	public declare WebkitLogicalWidth: string;
	public declare webkitMarginAfter: string;
	public declare WebkitMarginAfter: string;
	public declare webkitMarginBefore: string;
	public declare WebkitMarginBefore: string;
	public declare webkitMarginEnd: string;
	public declare WebkitMarginEnd: string;
	public declare webkitMarginStart: string;
	public declare WebkitMarginStart: string;
	public declare webkitMask: string;
	public declare WebkitMask: string;
	public declare webkitMaskClip: string;
	public declare WebkitMaskClip: string;
	public declare webkitMaskComposite: string;
	public declare WebkitMaskComposite: string;
	public declare webkitMaskImage: string;
	public declare WebkitMaskImage: string;
	public declare webkitMaskOrigin: string;
	public declare WebkitMaskOrigin: string;
	public declare webkitMaskPosition: string;
	public declare WebkitMaskPosition: string;
	public declare webkitMaskRepeat: string;
	public declare WebkitMaskRepeat: string;
	public declare webkitMaskSize: string;
	public declare WebkitMaskSize: string;
	public declare webkitMaxLogicalHeight: string;
	public declare WebkitMaxLogicalHeight: string;
	public declare webkitMaxLogicalWidth: string;
	public declare WebkitMaxLogicalWidth: string;
	public declare webkitMinLogicalHeight: string;
	public declare WebkitMinLogicalHeight: string;
	public declare webkitMinLogicalWidth: string;
	public declare WebkitMinLogicalWidth: string;
	public declare webkitOpacity: string;
	public declare WebkitOpacity: string;
	public declare webkitOrder: string;
	public declare WebkitOrder: string;
	public declare webkitPaddingAfter: string;
	public declare WebkitPaddingAfter: string;
	public declare webkitPaddingBefore: string;
	public declare WebkitPaddingBefore: string;
	public declare webkitPaddingEnd: string;
	public declare WebkitPaddingEnd: string;
	public declare webkitPaddingStart: string;
	public declare WebkitPaddingStart: string;
	public declare webkitPerspective: string;
	public declare WebkitPerspective: string;
	public declare webkitPerspectiveOrigin: string;
	public declare WebkitPerspectiveOrigin: string;
	public declare webkitPrintColorAdjust: string;
	public declare WebkitPrintColorAdjust: string;
	public declare webkitShapeImageThreshold: string;
	public declare WebkitShapeImageThreshold: string;
	public declare webkitShapeMargin: string;
	public declare WebkitShapeMargin: string;
	public declare webkitShapeOutside: string;
	public declare WebkitShapeOutside: string;
	public declare webkitTextEmphasis: string;
	public declare WebkitTextEmphasis: string;
	public declare webkitTextEmphasisColor: string;
	public declare WebkitTextEmphasisColor: string;
	public declare webkitTextEmphasisPosition: string;
	public declare WebkitTextEmphasisPosition: string;
	public declare webkitTextEmphasisStyle: string;
	public declare WebkitTextEmphasisStyle: string;
	public declare webkitTextSizeAdjust: string;
	public declare WebkitTextSizeAdjust: string;
	public declare webkitTransform: string;
	public declare WebkitTransform: string;
	public declare webkitTransformOrigin: string;
	public declare WebkitTransformOrigin: string;
	public declare webkitTransformStyle: string;
	public declare WebkitTransformStyle: string;
	public declare webkitTransition: string;
	public declare WebkitTransition: string;
	public declare webkitTransitionDelay: string;
	public declare WebkitTransitionDelay: string;
	public declare webkitTransitionDuration: string;
	public declare WebkitTransitionDuration: string;
	public declare webkitTransitionProperty: string;
	public declare WebkitTransitionProperty: string;
	public declare webkitTransitionTimingFunction: string;
	public declare WebkitTransitionTimingFunction: string;
	public declare webkitUserSelect: string;
	public declare WebkitUserSelect: string;
	public declare wordWrap: string;
	// END_CSS_DECLARATIONS
	/* eslint-enable @typescript-eslint/member-ordering */
}
