import Element from '../../nodes/element/Element.js';
import CSSRule from '../CSSRule.js';
import DOMExceptionNameEnum from '../../exception/DOMExceptionNameEnum.js';
import CSSStyleDeclarationPropertyManager from './property-manager/CSSStyleDeclarationPropertyManager.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import BrowserWindow from '../../window/BrowserWindow.js';
import CSSStyleDeclarationComputedStyle from './computed-style/CSSStyleDeclarationComputedStyle.js';

/**
 * CSS Style Declaration.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
 */
export default class CSSStyleDeclaration {
	[key: number]: string | undefined;

	// Public properties
	public readonly parentRule: CSSRule = null;

	// Internal properties
	public [PropertySymbol.window]: BrowserWindow;

	// Private properties
	#element: Element;
	#computed: boolean;
	#cache: {
		attributeValue: string | null;
		propertyManager: CSSStyleDeclarationPropertyManager | null;
	} = {
		attributeValue: null,
		propertyManager: null
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
		this.#element = options?.element;
		this.#computed = options?.element ? !!options?.computed : false;

		const definedMembers = Object.getOwnPropertyNames(CSSStyleDeclaration.prototype);

		return new Proxy(this, {
			get(target: CSSStyleDeclaration, key: string | symbol | number, receiver: unknown) {
				if (typeof key === 'number') {
					return target.item(key) || undefined;
				}
				if (typeof key === 'string' && !definedMembers.includes(key)) {
					target.getPropertyValue(target.#convertToCSSProperty(key));
				}

				const value = target[key];
				if (value instanceof Function) {
					return function (...args: unknown[]) {
						return value.apply(this === receiver ? target : this, args);
					};
				}

				return value;
			},
			set(target: CSSStyleDeclaration, key: string | symbol, value: string): boolean {
				if (typeof key === 'string' && !definedMembers.includes(key)) {
					target.setProperty(target.#convertToCSSProperty(key), value);
					return false;
				}
				target[key] = value;
				return true;
			}
		});
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

		if (this.#element) {
			this.#cache.propertyManager = new CSSStyleDeclarationPropertyManager({ cssText });
			this.#cache.attributeValue = cssText;
			this.#element.setAttribute('style', this.#cache.propertyManager.toString());
		} else {
			this.#cache.propertyManager = new CSSStyleDeclarationPropertyManager({ cssText });
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
	 * @param [priority] Can be "important", an empty string, null or undefined.
	 */
	public setProperty(
		name: string,
		value: string | null,
		priority?: string | '' | undefined | null
	): void {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'setProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`,
				DOMExceptionNameEnum.noModificationAllowedError
			);
		}

		priority = typeof priority === 'string' ? priority.toLowerCase() : priority;

		if (!['important', '', undefined, null].includes(priority)) {
			// There are only 4 valid values for priority, other values will usually result in an immediate exit.
			// The exception is in FireFox when the second argument value is an empty string or null.
			// In that particular the value of the priority is ignored.
			// This behavior does not exist in Chrome.
			return;
		}

		try {
			const stringValue = String(value === null ? '' : value).trim();

			const propertyManager = this.#getPropertyManager();

			if (stringValue) {
				propertyManager.set(name, stringValue, !!priority);
			} else {
				propertyManager.remove(name);
			}
			if (this.#element) {
				this.#cache.attributeValue = propertyManager.toString();
				if (this.#cache.attributeValue) {
					this.#element.setAttribute('style', this.#cache.attributeValue);
				} else {
					this.#element.removeAttribute('style');
				}
			}
		} catch (error) {
			if (error instanceof TypeError) {
				throw new TypeError(
					`Failed to execute 'setProperty' on 'CSSStyleDeclaration': ${error.message}`
				);
			}
		}
	}

	/**
	 * Removes a property.
	 *
	 * @param name Property name in kebab case.
	 */
	public removeProperty(name: string): void {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'removeProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`,
				DOMExceptionNameEnum.domException
			);
		}

		const propertyManager = this.#getPropertyManager();

		propertyManager.remove(name);

		if (this.#element) {
			this.#cache.attributeValue = propertyManager.toString();

			if (this.#cache.attributeValue) {
				this.#element.setAttribute('style', this.#cache.attributeValue);
			} else {
				this.#element.removeAttribute('style');
			}
		}
	}

	/**
	 * Returns a property.
	 *
	 * @param name Property name in kebab case.
	 * @returns Property value.
	 */
	public getPropertyValue(name: string): string {
		return this.#getPropertyManager().get(name)?.value || '';
	}

	/**
	 * Returns a property.
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
			if (!cache.propertyManager) {
				cache.propertyManager = new CSSStyleDeclarationPropertyManager();
			}
			return cache.propertyManager;
		}

		if (this.#computed) {
			return new CSSStyleDeclarationComputedStyle(element).getComputedStyle();
		}

		const attributeValue = element.getAttribute('style') || '';

		if (cache.attributeValue !== attributeValue) {
			cache.propertyManager = new CSSStyleDeclarationPropertyManager({ cssText: attributeValue });
		}

		return cache.propertyManager;
	}

	/**
	 * Converts JavaScript property to CSS property
	 * @param property
	 */
	#convertToCSSProperty(property: string): string {
		return property.replace(/([A-Z]|webkit|o|ms|moz)/g, '-$1').toLowerCase();
	}

	// +CSSProperties
	/* eslint-disable @typescript-eslint/member-ordering */
	public declare webkitLineClamp: string;
	public declare accentColor: string;
	public declare alignContent: string;
	public declare alignItems: string;
	public declare alignSelf: string;
	public declare alignmentBaseline: string;
	public declare all: string;
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
	public declare animationTriggerExitRange: string;
	public declare animationTriggerExitRangeEnd: string;
	public declare animationTriggerExitRangeStart: string;
	public declare animationTriggerRange: string;
	public declare animationTriggerRangeEnd: string;
	public declare animationTriggerRangeStart: string;
	public declare animationTriggerTimeline: string;
	public declare animationTriggerType: string;
	public declare appearance: string;
	public declare aspectRatio: string;
	public declare azimuth: string;
	public declare backfaceVisibility: string;
	public declare background: string;
	public declare backgroundAttachment: string;
	public declare backgroundBlendMode: string;
	public declare backgroundClip: string;
	public declare backgroundColor: string;
	public declare backgroundImage: string;
	public declare backgroundOrigin: string;
	public declare backgroundPosition: string;
	public declare backgroundRepeat: string;
	public declare backgroundSize: string;
	public declare baselineShift: string;
	public declare baselineSource: string;
	public declare blockEllipsis: string;
	public declare blockSize: string;
	public declare blockStep: string;
	public declare blockStepAlign: string;
	public declare blockStepInsert: string;
	public declare blockStepRound: string;
	public declare blockStepSize: string;
	public declare bookmarkLabel: string;
	public declare bookmarkLevel: string;
	public declare bookmarkState: string;
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
	public declare borderBoundary: string;
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
	public declare boxSnap: string;
	public declare breakAfter: string;
	public declare breakBefore: string;
	public declare breakInside: string;
	public declare captionSide: string;
	public declare caret: string;
	public declare caretAnimation: string;
	public declare caretColor: string;
	public declare caretShape: string;
	public declare chains: string;
	public declare clear: string;
	public declare clip: string;
	public declare clipPath: string;
	public declare clipRule: string;
	public declare color: string;
	public declare colorAdjust: string;
	public declare colorInterpolationFilters: string;
	public declare colorScheme: string;
	public declare columnCount: string;
	public declare columnFill: string;
	public declare columnGap: string;
	public declare columnRule: string;
	public declare columnRuleColor: string;
	public declare columnRuleStyle: string;
	public declare columnRuleWidth: string;
	public declare columnSpan: string;
	public declare columnWidth: string;
	public declare columns: string;
	public declare contain: string;
	public declare containIntrinsicBlockSize: string;
	public declare containIntrinsicHeight: string;
	public declare containIntrinsicInlineSize: string;
	public declare containIntrinsicSize: string;
	public declare containIntrinsicWidth: string;
	public declare container: string;
	public declare containerName: string;
	public declare containerType: string;
	public declare content: string;
	public declare contentVisibility: string;
	public declare continue: string;
	public declare counterIncrement: string;
	public declare counterReset: string;
	public declare counterSet: string;
	public declare cue: string;
	public declare cueAfter: string;
	public declare cueBefore: string;
	public declare cursor: string;
	public declare direction: string;
	public declare display: string;
	public declare dominantBaseline: string;
	public declare dynamicRangeLimit: string;
	public declare elevation: string;
	public declare emptyCells: string;
	public declare fieldSizing: string;
	public declare fill: string;
	public declare fillBreak: string;
	public declare fillColor: string;
	public declare fillImage: string;
	public declare fillOpacity: string;
	public declare fillOrigin: string;
	public declare fillPosition: string;
	public declare fillRepeat: string;
	public declare fillRule: string;
	public declare fillSize: string;
	public declare filter: string;
	public declare flex: string;
	public declare flexBasis: string;
	public declare flexDirection: string;
	public declare flexFlow: string;
	public declare flexGrow: string;
	public declare flexShrink: string;
	public declare flexWrap: string;
	public declare float: string;
	public declare floatDefer: string;
	public declare floatOffset: string;
	public declare floatReference: string;
	public declare floodColor: string;
	public declare floodOpacity: string;
	public declare flow: string;
	public declare flowFrom: string;
	public declare flowInto: string;
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
	public declare fontSynthesisPosition: string;
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
	public declare fontWidth: string;
	public declare footnoteDisplay: string;
	public declare footnotePolicy: string;
	public declare forcedColorAdjust: string;
	public declare gap: string;
	public declare glyphOrientationVertical: string;
	public declare grid: string;
	public declare gridArea: string;
	public declare gridAutoColumns: string;
	public declare gridAutoFlow: string;
	public declare gridAutoRows: string;
	public declare gridColumn: string;
	public declare gridColumnEnd: string;
	public declare gridColumnStart: string;
	public declare gridRow: string;
	public declare gridRowEnd: string;
	public declare gridRowStart: string;
	public declare gridTemplate: string;
	public declare gridTemplateAreas: string;
	public declare gridTemplateColumns: string;
	public declare gridTemplateRows: string;
	public declare hangingPunctuation: string;
	public declare height: string;
	public declare hyphenateCharacter: string;
	public declare hyphenateLimitChars: string;
	public declare hyphenateLimitLast: string;
	public declare hyphenateLimitLines: string;
	public declare hyphenateLimitZone: string;
	public declare hyphens: string;
	public declare imageOrientation: string;
	public declare imageRendering: string;
	public declare imageResolution: string;
	public declare initialLetter: string;
	public declare initialLetterAlign: string;
	public declare initialLetterWrap: string;
	public declare inlineSize: string;
	public declare inlineSizing: string;
	public declare inputSecurity: string;
	public declare inset: string;
	public declare insetBlock: string;
	public declare insetBlockEnd: string;
	public declare insetBlockStart: string;
	public declare insetInline: string;
	public declare insetInlineEnd: string;
	public declare insetInlineStart: string;
	public declare interactivity: string;
	public declare interpolateSize: string;
	public declare isolation: string;
	public declare itemCross: string;
	public declare itemDirection: string;
	public declare itemFlow: string;
	public declare itemPack: string;
	public declare itemSlack: string;
	public declare itemTrack: string;
	public declare itemWrap: string;
	public declare justifyContent: string;
	public declare justifyItems: string;
	public declare justifySelf: string;
	public declare left: string;
	public declare letterSpacing: string;
	public declare lightingColor: string;
	public declare lineBreak: string;
	public declare lineClamp: string;
	public declare lineFitEdge: string;
	public declare lineGrid: string;
	public declare lineHeight: string;
	public declare lineHeightStep: string;
	public declare linePadding: string;
	public declare lineSnap: string;
	public declare listStyle: string;
	public declare listStyleImage: string;
	public declare listStylePosition: string;
	public declare listStyleType: string;
	public declare margin: string;
	public declare marginBlock: string;
	public declare marginBlockEnd: string;
	public declare marginBlockStart: string;
	public declare marginBottom: string;
	public declare marginBreak: string;
	public declare marginInline: string;
	public declare marginInlineEnd: string;
	public declare marginInlineStart: string;
	public declare marginLeft: string;
	public declare marginRight: string;
	public declare marginTop: string;
	public declare marginTrim: string;
	public declare marker: string;
	public declare markerEnd: string;
	public declare markerKnockoutLeft: string;
	public declare markerKnockoutRight: string;
	public declare markerMid: string;
	public declare markerPattern: string;
	public declare markerSegment: string;
	public declare markerSide: string;
	public declare markerStart: string;
	public declare mask: string;
	public declare maskBorder: string;
	public declare maskBorderMode: string;
	public declare maskBorderOutset: string;
	public declare maskBorderRepeat: string;
	public declare maskBorderSlice: string;
	public declare maskBorderSource: string;
	public declare maskBorderWidth: string;
	public declare maskClip: string;
	public declare maskComposite: string;
	public declare maskImage: string;
	public declare maskMode: string;
	public declare maskOrigin: string;
	public declare maskPosition: string;
	public declare maskRepeat: string;
	public declare maskSize: string;
	public declare maskType: string;
	public declare maxBlockSize: string;
	public declare maxHeight: string;
	public declare maxInlineSize: string;
	public declare maxLines: string;
	public declare maxWidth: string;
	public declare minBlockSize: string;
	public declare minHeight: string;
	public declare minInlineSize: string;
	public declare minIntrinsicSizing: string;
	public declare minWidth: string;
	public declare mixBlendMode: string;
	public declare navDown: string;
	public declare navLeft: string;
	public declare navRight: string;
	public declare navUp: string;
	public declare objectFit: string;
	public declare objectPosition: string;
	public declare offset: string;
	public declare offsetAnchor: string;
	public declare offsetDistance: string;
	public declare offsetPath: string;
	public declare offsetPosition: string;
	public declare offsetRotate: string;
	public declare opacity: string;
	public declare order: string;
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
	public declare overflowClipMarginBlock: string;
	public declare overflowClipMarginBlockEnd: string;
	public declare overflowClipMarginBlockStart: string;
	public declare overflowClipMarginBottom: string;
	public declare overflowClipMarginInline: string;
	public declare overflowClipMarginInlineEnd: string;
	public declare overflowClipMarginInlineStart: string;
	public declare overflowClipMarginLeft: string;
	public declare overflowClipMarginRight: string;
	public declare overflowClipMarginTop: string;
	public declare overflowInline: string;
	public declare overflowWrap: string;
	public declare overflowX: string;
	public declare overflowY: string;
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
	public declare pause: string;
	public declare pauseAfter: string;
	public declare pauseBefore: string;
	public declare perspective: string;
	public declare perspectiveOrigin: string;
	public declare pitch: string;
	public declare pitchRange: string;
	public declare placeContent: string;
	public declare placeItems: string;
	public declare placeSelf: string;
	public declare playDuring: string;
	public declare pointerEvents: string;
	public declare position: string;
	public declare positionAnchor: string;
	public declare positionArea: string;
	public declare positionTry: string;
	public declare positionTryFallbacks: string;
	public declare positionTryOrder: string;
	public declare positionVisibility: string;
	public declare printColorAdjust: string;
	public declare propertyName: string;
	public declare quotes: string;
	public declare readingFlow: string;
	public declare regionFragment: string;
	public declare resize: string;
	public declare rest: string;
	public declare restAfter: string;
	public declare restBefore: string;
	public declare richness: string;
	public declare right: string;
	public declare rotate: string;
	public declare rowGap: string;
	public declare rubyAlign: string;
	public declare rubyMerge: string;
	public declare rubyOverhang: string;
	public declare rubyPosition: string;
	public declare running: string;
	public declare scale: string;
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
	public declare scrollStartTarget: string;
	public declare scrollTimeline: string;
	public declare scrollTimelineAxis: string;
	public declare scrollTimelineName: string;
	public declare scrollbarColor: string;
	public declare scrollbarGutter: string;
	public declare scrollbarWidth: string;
	public declare shapeImageThreshold: string;
	public declare shapeInside: string;
	public declare shapeMargin: string;
	public declare shapeOutside: string;
	public declare spatialNavigationAction: string;
	public declare spatialNavigationContain: string;
	public declare spatialNavigationFunction: string;
	public declare speak: string;
	public declare speakAs: string;
	public declare speakHeader: string;
	public declare speakNumeral: string;
	public declare speakPunctuation: string;
	public declare speechRate: string;
	public declare stress: string;
	public declare stringSet: string;
	public declare stroke: string;
	public declare strokeAlign: string;
	public declare strokeAlignment: string;
	public declare strokeBreak: string;
	public declare strokeColor: string;
	public declare strokeDashCorner: string;
	public declare strokeDashJustify: string;
	public declare strokeDashadjust: string;
	public declare strokeDasharray: string;
	public declare strokeDashcorner: string;
	public declare strokeDashoffset: string;
	public declare strokeImage: string;
	public declare strokeLinecap: string;
	public declare strokeLinejoin: string;
	public declare strokeMiterlimit: string;
	public declare strokeOpacity: string;
	public declare strokeOrigin: string;
	public declare strokePosition: string;
	public declare strokeRepeat: string;
	public declare strokeSize: string;
	public declare strokeWidth: string;
	public declare tabSize: string;
	public declare tableLayout: string;
	public declare textAlign: string;
	public declare textAlignAll: string;
	public declare textAlignLast: string;
	public declare textAutospace: string;
	public declare textBox: string;
	public declare textBoxEdge: string;
	public declare textBoxTrim: string;
	public declare textCombineUpright: string;
	public declare textDecoration: string;
	public declare textDecorationColor: string;
	public declare textDecorationLine: string;
	public declare textDecorationSkip: string;
	public declare textDecorationSkipBox: string;
	public declare textDecorationSkipInk: string;
	public declare textDecorationSkipInset: string;
	public declare textDecorationSkipSelf: string;
	public declare textDecorationSkipSpaces: string;
	public declare textDecorationStyle: string;
	public declare textDecorationThickness: string;
	public declare textDecorationTrim: string;
	public declare textEmphasis: string;
	public declare textEmphasisColor: string;
	public declare textEmphasisPosition: string;
	public declare textEmphasisSkip: string;
	public declare textEmphasisStyle: string;
	public declare textGroupAlign: string;
	public declare textIndent: string;
	public declare textJustify: string;
	public declare textOrientation: string;
	public declare textOverflow: string;
	public declare textShadow: string;
	public declare textSpacing: string;
	public declare textSpacingTrim: string;
	public declare textTransform: string;
	public declare textUnderlineOffset: string;
	public declare textUnderlinePosition: string;
	public declare textWrap: string;
	public declare textWrapMode: string;
	public declare textWrapStyle: string;
	public declare timelineScope: string;
	public declare top: string;
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
	public declare unicodeBidi: string;
	public declare userSelect: string;
	public declare verticalAlign: string;
	public declare viewTimeline: string;
	public declare viewTimelineAxis: string;
	public declare viewTimelineInset: string;
	public declare viewTimelineName: string;
	public declare viewTransitionClass: string;
	public declare viewTransitionGroup: string;
	public declare viewTransitionName: string;
	public declare visibility: string;
	public declare voiceBalance: string;
	public declare voiceDuration: string;
	public declare voiceFamily: string;
	public declare voicePitch: string;
	public declare voiceRange: string;
	public declare voiceRate: string;
	public declare voiceStress: string;
	public declare voiceVolume: string;
	public declare volume: string;
	public declare whiteSpace: string;
	public declare whiteSpaceCollapse: string;
	public declare whiteSpaceTrim: string;
	public declare widows: string;
	public declare width: string;
	public declare willChange: string;
	public declare wordBreak: string;
	public declare wordSpaceTransform: string;
	public declare wordSpacing: string;
	public declare wordWrap: string;
	public declare wrapAfter: string;
	public declare wrapBefore: string;
	public declare wrapFlow: string;
	public declare wrapInside: string;
	public declare wrapThrough: string;
	public declare writingMode: string;
	public declare zIndex: string;
	public declare zoom: string;
	/* eslint-enable @typescript-eslint/member-ordering */
	// -CSSProperties
}
