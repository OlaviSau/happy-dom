/**
 * AUTO-GENERATED FILE — DO NOT EDIT
 *
 * Derived from Chromium Blink rendering engine property data.
 * Source: https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink
 */

import type ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import { CSS_SHORTHAND_TO_LONGHANDS } from '../property-definitions/CSSShorthandDefinitions.js';

type PropertyStore = Record<string, ICSSStyleDeclarationPropertyValue | undefined>;

/**
 * Recomposes shorthand CSS values from their constituent longhands (B2).
 *
 * Rules:
 * - ALL longhands must be set for the shorthand to return a value
 * - If any longhand is missing, return null
 * - Collapse to shortest valid form where possible
 * - B3 (invalidation) is a natural consequence: if longhands diverge,
 * the shorthand returns null
 */
export default class CSSStyleDeclarationPropertyGetParser {
	/**
	 * CSS-wide keywords that should collapse to a single value in shorthands.
	 */
	private static readonly globalKeywords = new Set([
		'inherit',
		'initial',
		'unset',
		'revert',
		'revert-layer'
	]);

	/**
	 * Get a shorthand property value from its longhands.
	 *
	 * @param name Shorthand property name.
	 * @param properties The property store (longhand values).
	 * @returns The composed shorthand value, or null if incomplete.
	 */
	public static get(
		name: string,
		properties: PropertyStore
	): ICSSStyleDeclarationPropertyValue | null {
		switch (name) {
			case 'margin':
				return this.getBoxModel(
					properties,
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left'
				);
			case 'padding':
				return this.getBoxModel(
					properties,
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left'
				);
			case 'inset':
				return this.getBoxModel(properties, 'top', 'right', 'bottom', 'left');
			case 'scroll-margin':
				return this.getBoxModel(
					properties,
					'scroll-margin-top',
					'scroll-margin-right',
					'scroll-margin-bottom',
					'scroll-margin-left'
				);
			case 'scroll-padding':
				return this.getBoxModel(
					properties,
					'scroll-padding-top',
					'scroll-padding-right',
					'scroll-padding-bottom',
					'scroll-padding-left'
				);

			case 'margin-block':
				return this.getTwoValue(properties, 'margin-block-start', 'margin-block-end');
			case 'margin-inline':
				return this.getTwoValue(properties, 'margin-inline-start', 'margin-inline-end');
			case 'padding-block':
				return this.getTwoValue(properties, 'padding-block-start', 'padding-block-end');
			case 'padding-inline':
				return this.getTwoValue(properties, 'padding-inline-start', 'padding-inline-end');
			case 'inset-block':
				return this.getTwoValue(properties, 'inset-block-start', 'inset-block-end');
			case 'inset-inline':
				return this.getTwoValue(properties, 'inset-inline-start', 'inset-inline-end');
			case 'scroll-margin-block':
				return this.getTwoValue(properties, 'scroll-margin-block-start', 'scroll-margin-block-end');
			case 'scroll-margin-inline':
				return this.getTwoValue(
					properties,
					'scroll-margin-inline-start',
					'scroll-margin-inline-end'
				);
			case 'scroll-padding-block':
				return this.getTwoValue(
					properties,
					'scroll-padding-block-start',
					'scroll-padding-block-end'
				);
			case 'scroll-padding-inline':
				return this.getTwoValue(
					properties,
					'scroll-padding-inline-start',
					'scroll-padding-inline-end'
				);

			case 'border':
				return this.getBorder(properties);
			case 'border-top':
				return this.getBorderSide(
					properties,
					'border-top-width',
					'border-top-style',
					'border-top-color'
				);
			case 'border-right':
				return this.getBorderSide(
					properties,
					'border-right-width',
					'border-right-style',
					'border-right-color'
				);
			case 'border-bottom':
				return this.getBorderSide(
					properties,
					'border-bottom-width',
					'border-bottom-style',
					'border-bottom-color'
				);
			case 'border-left':
				return this.getBorderSide(
					properties,
					'border-left-width',
					'border-left-style',
					'border-left-color'
				);
			case 'border-width':
				return this.getBoxModel(
					properties,
					'border-top-width',
					'border-right-width',
					'border-bottom-width',
					'border-left-width'
				);
			case 'border-style':
				return this.getBoxModel(
					properties,
					'border-top-style',
					'border-right-style',
					'border-bottom-style',
					'border-left-style'
				);
			case 'border-color':
				return this.getBoxModel(
					properties,
					'border-top-color',
					'border-right-color',
					'border-bottom-color',
					'border-left-color'
				);
			case 'border-image':
				return this.getBorderImage(properties);
			case 'border-radius':
				return this.getBorderRadius(properties);

			case 'flex':
				return this.getFlex(properties);
			case 'flex-flow':
				return this.getTwoValue(properties, 'flex-direction', 'flex-wrap');
			case 'outline':
				return this.getBorderSide(properties, 'outline-width', 'outline-style', 'outline-color');
			case 'overflow':
				return this.getTwoValue(properties, 'overflow-x', 'overflow-y');
			case 'overscroll-behavior':
				return this.getTwoValue(properties, 'overscroll-behavior-x', 'overscroll-behavior-y');
			case 'gap':
				return this.getTwoValue(properties, 'row-gap', 'column-gap');
			case 'place-content':
				return this.getTwoValue(properties, 'align-content', 'justify-content');
			case 'place-items':
				return this.getTwoValue(properties, 'align-items', 'justify-items');
			case 'place-self':
				return this.getTwoValue(properties, 'align-self', 'justify-self');
			case 'columns':
				return this.getColumns(properties);
			case 'list-style':
				return this.getListStyle(properties);
			case 'text-decoration':
				return this.getTextDecoration(properties);
			case 'font':
				return this.getFont(properties);
			case 'background':
				return this.getBackground(properties);
			case 'background-position':
				return this.getTwoValue(properties, 'background-position-x', 'background-position-y');

			default:
				return this.getGeneric(name, properties);
		}
	}

	/**
	 * If all values are the same CSS-wide keyword, return that keyword.
	 * Otherwise return null (no collapse).
	 *
	 * @param values Array of CSS values.
	 * @param important Whether values are !important.
	 * @returns Collapsed value or null.
	 */
	private static collapseGlobal(
		values: string[],
		important: boolean
	): ICSSStyleDeclarationPropertyValue | null {
		if (values.length === 0) {
			return null;
		}
		const first = values[0];
		if (!this.globalKeywords.has(first)) {
			return null;
		}
		if (values.every((v) => v === first)) {
			return { value: first, important };
		}
		return null;
	}

	/**
	 * Box model: 4 values collapsing to 1/2/3/4 form.
	 *
	 * @param props The property store.
	 * @param topProp Top property name.
	 * @param rightProp Right property name.
	 * @param bottomProp Bottom property name.
	 * @param leftProp Left property name.
	 * @returns Collapsed value or null.
	 */
	private static getBoxModel(
		props: PropertyStore,
		topProp: string,
		rightProp: string,
		bottomProp: string,
		leftProp: string
	): ICSSStyleDeclarationPropertyValue | null {
		const top = props[topProp];
		const right = props[rightProp];
		const bottom = props[bottomProp];
		const left = props[leftProp];
		if (!top || !right || !bottom || !left) {
			return null;
		}

		// Check importance is consistent
		const imp = top.important;
		if (right.important !== imp || bottom.important !== imp || left.important !== imp) {
			return null;
		}

		// Collapse
		if (top.value === right.value && right.value === bottom.value && bottom.value === left.value) {
			return { value: top.value, important: imp };
		}
		if (top.value === bottom.value && right.value === left.value) {
			return { value: `${top.value} ${right.value}`, important: imp };
		}
		if (right.value === left.value) {
			return { value: `${top.value} ${right.value} ${bottom.value}`, important: imp };
		}
		return { value: `${top.value} ${right.value} ${bottom.value} ${left.value}`, important: imp };
	}

	/**
	 * Two-value shorthand collapsing.
	 *
	 * @param props The property store.
	 * @param prop1 First property name.
	 * @param prop2 Second property name.
	 * @returns Collapsed value or null.
	 */
	private static getTwoValue(
		props: PropertyStore,
		prop1: string,
		prop2: string
	): ICSSStyleDeclarationPropertyValue | null {
		const v1 = props[prop1];
		const v2 = props[prop2];
		if (!v1 || !v2) {
			return null;
		}
		if (v1.important !== v2.important) {
			return null;
		}

		if (v1.value === v2.value) {
			return { value: v1.value, important: v1.important };
		}
		return { value: `${v1.value} ${v2.value}`, important: v1.important };
	}

	/**
	 * Border shorthand: all 4 sides must have identical width/style/color.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getBorder(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const sides = ['top', 'right', 'bottom', 'left'];
		const widths = sides.map((s) => props[`border-${s}-width`]);
		const styles = sides.map((s) => props[`border-${s}-style`]);
		const colors = sides.map((s) => props[`border-${s}-color`]);

		// All must be set
		if (widths.some((w) => !w) || styles.some((s) => !s) || colors.some((c) => !c)) {
			return null;
		}

		// All sides must match
		const w0 = widths[0]!.value;
		const s0 = styles[0]!.value;
		const c0 = colors[0]!.value;
		const imp = widths[0]!.important;

		for (let i = 1; i < 4; i++) {
			if (widths[i]!.value !== w0 || styles[i]!.value !== s0 || colors[i]!.value !== c0) {
				return null;
			}
			if (
				widths[i]!.important !== imp ||
				styles[i]!.important !== imp ||
				colors[i]!.important !== imp
			) {
				return null;
			}
		}

		const allValues = [...widths, ...styles, ...colors].map((v) => v!.value);
		const globalCollapse = this.collapseGlobal(allValues, imp);
		if (globalCollapse) {
			return globalCollapse;
		}

		return { value: `${w0} ${s0} ${c0}`, important: imp };
	}

	/**
	 * Border side: width style color.
	 *
	 * @param props The property store.
	 * @param widthProp Width property name.
	 * @param styleProp Style property name.
	 * @param colorProp Color property name.
	 * @returns Composed value or null.
	 */
	private static getBorderSide(
		props: PropertyStore,
		widthProp: string,
		styleProp: string,
		colorProp: string
	): ICSSStyleDeclarationPropertyValue | null {
		const w = props[widthProp];
		const s = props[styleProp];
		const c = props[colorProp];
		if (!w || !s || !c) {
			return null;
		}
		if (w.important !== s.important || s.important !== c.important) {
			return null;
		}
		const globalCollapse = this.collapseGlobal([w.value, s.value, c.value], w.important);
		if (globalCollapse) {
			return globalCollapse;
		}
		return { value: `${w.value} ${s.value} ${c.value}`, important: w.important };
	}

	/**
	 * Border radius: 4 corners, optionally with / for vertical radii.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getBorderRadius(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const tl = props['border-top-left-radius'];
		const tr = props['border-top-right-radius'];
		const br = props['border-bottom-right-radius'];
		const bl = props['border-bottom-left-radius'];
		if (!tl || !tr || !br || !bl) {
			return null;
		}
		if (
			tl.important !== tr.important ||
			tr.important !== br.important ||
			br.important !== bl.important
		) {
			return null;
		}

		// Check if all are single values (no vertical component)
		const values = [tl.value, tr.value, br.value, bl.value];

		if (values.every((v) => !v.includes(' '))) {
			// All single — collapse
			if (values[0] === values[1] && values[1] === values[2] && values[2] === values[3]) {
				return { value: values[0], important: tl.important };
			}
			if (values[0] === values[2] && values[1] === values[3]) {
				return { value: `${values[0]} ${values[1]}`, important: tl.important };
			}
			if (values[1] === values[3]) {
				return { value: `${values[0]} ${values[1]} ${values[2]}`, important: tl.important };
			}
			return { value: values.join(' '), important: tl.important };
		}

		// Has vertical components
		return { value: values.join(' '), important: tl.important };
	}

	/**
	 * Flex shorthand.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getFlex(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const grow = props['flex-grow'];
		const shrink = props['flex-shrink'];
		const basis = props['flex-basis'];
		if (!grow || !shrink || !basis) {
			return null;
		}
		if (grow.important !== shrink.important || shrink.important !== basis.important) {
			return null;
		}

		// Check global keyword collapse
		const globalCollapse = this.collapseGlobal(
			[grow.value, shrink.value, basis.value],
			grow.important
		);
		if (globalCollapse) {
			return globalCollapse;
		}

		// Special forms
		if (grow.value === '0' && shrink.value === '0' && basis.value === 'auto') {
			return { value: 'none', important: grow.important };
		}

		return { value: `${grow.value} ${shrink.value} ${basis.value}`, important: grow.important };
	}

	/**
	 * Columns shorthand.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getColumns(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const width = props['column-width'];
		const count = props['column-count'];
		if (!width || !count) {
			return null;
		}
		if (width.important !== count.important) {
			return null;
		}
		return { value: `${width.value} ${count.value}`, important: width.important };
	}

	/**
	 * List style shorthand.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getListStyle(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const type = props['list-style-type'];
		const position = props['list-style-position'];
		const image = props['list-style-image'];
		if (!type || !position || !image) {
			return null;
		}
		if (type.important !== position.important || position.important !== image.important) {
			return null;
		}
		const globalCollapse = this.collapseGlobal(
			[type.value, position.value, image.value],
			type.important
		);
		if (globalCollapse) {
			return globalCollapse;
		}

		const parts = [type.value, position.value, image.value].filter((v) => v !== 'initial');
		return { value: parts.join(' ') || 'none', important: type.important };
	}

	/**
	 * Text decoration shorthand.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getTextDecoration(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const line = props['text-decoration-line'];
		const style = props['text-decoration-style'];
		const color = props['text-decoration-color'];
		if (!line || !style || !color) {
			return null;
		}
		if (line.important !== style.important || style.important !== color.important) {
			return null;
		}
		const globalCollapse = this.collapseGlobal(
			[line.value, style.value, color.value],
			line.important
		);
		if (globalCollapse) {
			return globalCollapse;
		}

		const parts = [line.value];
		if (style.value !== 'initial' && style.value !== 'solid') {
			parts.push(style.value);
		}
		if (color.value !== 'initial' && color.value !== 'currentcolor') {
			parts.push(color.value);
		}
		return { value: parts.join(' '), important: line.important };
	}

	/**
	 * Font shorthand.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getFont(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const fontStyle = props['font-style'];
		const fontVariant = props['font-variant'];
		const fontWeight = props['font-weight'];
		const fontSize = props['font-size'];
		const lineHeight = props['line-height'];
		const fontFamily = props['font-family'];
		if (!fontStyle || !fontWeight || !fontSize || !fontFamily) {
			return null;
		}

		const imp = fontStyle.important;
		const parts: string[] = [];
		if (fontStyle.value !== 'normal') {
			parts.push(fontStyle.value);
		}
		if (fontVariant && fontVariant.value !== 'normal') {
			parts.push(fontVariant.value);
		}
		if (fontWeight.value !== 'normal' && fontWeight.value !== '400') {
			parts.push(fontWeight.value);
		}

		let sizeStr = fontSize.value;
		if (lineHeight && lineHeight.value !== 'normal') {
			sizeStr += '/' + lineHeight.value;
		}
		parts.push(sizeStr);
		parts.push(fontFamily.value);

		return { value: parts.join(' '), important: imp };
	}

	/**
	 * Background shorthand — simplified.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getBackground(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const image = props['background-image'];
		const color = props['background-color'];
		const repeat = props['background-repeat'];
		const posX = props['background-position-x'];
		const posY = props['background-position-y'];
		const size = props['background-size'];
		const attachment = props['background-attachment'];
		const origin = props['background-origin'];
		const clip = props['background-clip'];

		if (!image || !color || !repeat || !posX || !posY || !size || !attachment || !origin || !clip) {
			return null;
		}

		const imp = color.important;

		// Check global keyword collapse
		const allValues = [image, color, repeat, posX, posY, size, attachment, origin, clip].map(
			(v) => v!.value
		);
		const globalCollapse = this.collapseGlobal(allValues, imp);
		if (globalCollapse) {
			return globalCollapse;
		}

		// If all are initial except color, return just the color
		if (
			image.value === 'initial' &&
			repeat.value === 'initial' &&
			posX.value === 'initial' &&
			posY.value === 'initial' &&
			size.value === 'initial' &&
			attachment.value === 'initial' &&
			origin.value === 'initial' &&
			clip.value === 'initial' &&
			color.value !== 'initial'
		) {
			return { value: color.value, important: imp };
		}

		// Build full background value
		const parts: string[] = [];
		if (image.value !== 'initial' && image.value !== 'none') {
			parts.push(image.value);
		}
		if (posX.value !== 'initial' || posY.value !== 'initial') {
			const pos = `${posX.value === 'initial' ? '0%' : posX.value} ${posY.value === 'initial' ? '0%' : posY.value}`;
			if (size.value !== 'initial') {
				parts.push(pos + ' / ' + size.value);
			} else {
				parts.push(pos);
			}
		}
		if (repeat.value !== 'initial' && repeat.value !== 'repeat') {
			parts.push(repeat.value);
		}
		if (attachment.value !== 'initial' && attachment.value !== 'scroll') {
			parts.push(attachment.value);
		}
		if (origin.value !== 'initial' && origin.value !== 'padding-box') {
			parts.push(origin.value);
		}
		if (clip.value !== 'initial' && clip.value !== 'border-box') {
			parts.push(clip.value);
		}
		if (color.value !== 'initial') {
			parts.push(color.value);
		}

		return { value: parts.join(' ') || 'none', important: imp };
	}

	/**
	 * Border image shorthand: source slice / width / outset repeat.
	 *
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getBorderImage(props: PropertyStore): ICSSStyleDeclarationPropertyValue | null {
		const source = props['border-image-source'];
		const slice = props['border-image-slice'];
		const width = props['border-image-width'];
		const outset = props['border-image-outset'];
		const repeat = props['border-image-repeat'];
		if (!source || !slice || !width || !outset || !repeat) {
			return null;
		}
		if (
			source.important !== slice.important ||
			slice.important !== width.important ||
			width.important !== outset.important ||
			outset.important !== repeat.important
		) {
			return null;
		}

		const allValues = [source.value, slice.value, width.value, outset.value, repeat.value];
		const globalCollapse = this.collapseGlobal(allValues, source.important);
		if (globalCollapse) {
			return globalCollapse;
		}

		const parts: string[] = [];
		if (source.value !== 'initial' && source.value !== 'none') {
			parts.push(source.value);
		}
		if (slice.value !== 'initial' && slice.value !== '100%') {
			let slicePart = slice.value;
			if (
				(width.value !== 'initial' && width.value !== '1') ||
				(outset.value !== 'initial' && outset.value !== '0')
			) {
				slicePart += ' / ' + (width.value === 'initial' ? '1' : width.value);
				if (outset.value !== 'initial' && outset.value !== '0') {
					slicePart += ' / ' + outset.value;
				}
			}
			parts.push(slicePart);
		} else if (
			(width.value !== 'initial' && width.value !== '1') ||
			(outset.value !== 'initial' && outset.value !== '0')
		) {
			let slicePart = slice.value === 'initial' ? '100%' : slice.value;
			slicePart += ' / ' + (width.value === 'initial' ? '1' : width.value);
			if (outset.value !== 'initial' && outset.value !== '0') {
				slicePart += ' / ' + outset.value;
			}
			parts.push(slicePart);
		}
		if (repeat.value !== 'initial' && repeat.value !== 'stretch') {
			parts.push(repeat.value);
		}

		return { value: parts.join(' ') || 'initial', important: source.important };
	}

	/**
	 * Generic fallback: concatenate all longhand values.
	 *
	 * @param name Shorthand name.
	 * @param props The property store.
	 * @returns Composed value or null.
	 */
	private static getGeneric(
		name: string,
		props: PropertyStore
	): ICSSStyleDeclarationPropertyValue | null {
		const longhands = CSS_SHORTHAND_TO_LONGHANDS[name];
		if (!longhands) {
			return null;
		}

		const values: string[] = [];
		let imp: boolean | null = null;

		for (const lh of longhands) {
			const v = props[lh];
			if (!v) {
				return null;
			}
			if (imp === null) {
				imp = v.important;
			} else if (v.important !== imp) {
				return null;
			}
			values.push(v.value);
		}

		const globalCollapse = this.collapseGlobal(values, imp ?? false);
		if (globalCollapse) {
			return globalCollapse;
		}

		// If all values are the same, collapse to a single value
		if (values.every((v) => v === values[0])) {
			return { value: values[0], important: imp ?? false };
		}

		return { value: values.join(' '), important: imp ?? false };
	}
}
