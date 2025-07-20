import ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';
import CSSStyleDeclarationPropertySetParser from './CSSStyleDeclarationPropertySetParser.js';
import CSSStyleDeclarationValueParser from './CSSStyleDeclarationValueParser.js';
import CSSStyleDeclarationPropertyGetParser from './CSSStyleDeclarationPropertyGetParser.js';
import CSSStyleDeclarationCSSParser from '../css-parser/CSSStyleDeclarationCSSParser.js';

const TO_STRING_SHORTHAND_PROPERTIES = [
	['margin'],
	['padding'],
	['border', ['border-width', 'border-style', 'border-color', 'border-image']],
	['border-radius'],
	['background', 'background-position'],
	['font']
];

/**
 * Computed this.properties property parser.
 */
export default class CSSStyleDeclarationPropertyManager {
	public properties = new Map<string, ICSSStyleDeclarationPropertyValue>();

	/**
	 * Class constructor.
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
	 * Returns property value.
	 *
	 * @param name Property name.
	 * @returns Property value.
	 */
	public get(name: string): ICSSStyleDeclarationPropertyValue | null {
		if (this.properties.has(name)) {
			return this.properties.get(name);
		}
		switch (name) {
			case 'padding':
			case 'margin':
				return CSSStyleDeclarationPropertyGetParser.getRectangleEdges(this.properties, name);
			case 'border':
				return CSSStyleDeclarationPropertyGetParser.getBorder(this.properties);
			case 'border-top':
			case 'border-right':
			case 'border-bottom':
			case 'border-left':
				return CSSStyleDeclarationPropertyGetParser.getBorderEdge(this.properties, name);
			case 'border-color':
				return CSSStyleDeclarationPropertyGetParser.getBorderColor(this.properties);
			case 'border-style':
				return CSSStyleDeclarationPropertyGetParser.getBorderStyle(this.properties);
			case 'border-width':
				return CSSStyleDeclarationPropertyGetParser.getBorderWidth(this.properties);
			case 'border-radius':
				return CSSStyleDeclarationPropertyGetParser.getBorderRadius(this.properties);
			case 'border-image':
				return CSSStyleDeclarationPropertyGetParser.getBorderImage(this.properties);
			case 'outline':
				return CSSStyleDeclarationPropertyGetParser.getOutline(this.properties);
			case 'background':
				return CSSStyleDeclarationPropertyGetParser.getBackground(this.properties);
			case 'background-position':
				return CSSStyleDeclarationPropertyGetParser.getBackgroundPosition(this.properties);
			case 'flex':
				return CSSStyleDeclarationPropertyGetParser.getFlex(this.properties);
			case 'font':
				return CSSStyleDeclarationPropertyGetParser.getFont(this.properties);
		}

		return this.properties.get(name) || null;
	}

	/**
	 * Removes a property.
	 *
	 * @param name Property name.
	 */
	public remove(name: string): void {
		this.properties.delete(name);

		switch (name) {
			case 'border':
				this.properties.delete('border-top-width');
				this.properties.delete('border-right-width');
				this.properties.delete('border-bottom-width');
				this.properties.delete('border-left-width');
				this.properties.delete('border-top-style');
				this.properties.delete('border-right-style');
				this.properties.delete('border-bottom-style');
				this.properties.delete('border-left-style');
				this.properties.delete('border-top-color');
				this.properties.delete('border-right-color');
				this.properties.delete('border-bottom-color');
				this.properties.delete('border-left-color');
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-top':
				this.properties.delete('border-top-width');
				this.properties.delete('border-top-style');
				this.properties.delete('border-top-color');
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-right':
				this.properties.delete('border-right-width');
				this.properties.delete('border-right-style');
				this.properties.delete('border-right-color');
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-bottom':
				this.properties.delete('border-bottom-width');
				this.properties.delete('border-bottom-style');
				this.properties.delete('border-bottom-color');
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-left':
				this.properties.delete('border-left-width');
				this.properties.delete('border-left-style');
				this.properties.delete('border-left-color');
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-width':
				this.properties.delete('border-top-width');
				this.properties.delete('border-right-width');
				this.properties.delete('border-bottom-width');
				this.properties.delete('border-left-width');
				break;
			case 'border-style':
				this.properties.delete('border-top-style');
				this.properties.delete('border-right-style');
				this.properties.delete('border-bottom-style');
				this.properties.delete('border-left-style');
				break;
			case 'border-color':
				this.properties.delete('border-top-color');
				this.properties.delete('border-right-color');
				this.properties.delete('border-bottom-color');
				this.properties.delete('border-left-color');
				break;
			case 'border-image':
				this.properties.delete('border-image-source');
				this.properties.delete('border-image-slice');
				this.properties.delete('border-image-width');
				this.properties.delete('border-image-outset');
				this.properties.delete('border-image-repeat');
				break;
			case 'border-radius':
				this.properties.delete('border-top-left-radius');
				this.properties.delete('border-top-right-radius');
				this.properties.delete('border-bottom-right-radius');
				this.properties.delete('border-bottom-left-radius');
				break;
			case 'outline':
				this.properties.delete('outline-color');
				this.properties.delete('outline-style');
				this.properties.delete('outline-width');
				break;
			case 'background':
				this.properties.delete('background-color');
				this.properties.delete('background-image');
				this.properties.delete('background-repeat');
				this.properties.delete('background-attachment');
				this.properties.delete('background-position-x');
				this.properties.delete('background-position-y');
				this.properties.delete('background-size');
				this.properties.delete('background-origin');
				this.properties.delete('background-clip');
				break;
			case 'background-position':
				this.properties.delete('background-position-x');
				this.properties.delete('background-position-y');
				break;
			case 'flex':
				this.properties.delete('flex-grow');
				this.properties.delete('flex-shrink');
				this.properties.delete('flex-basis');
				break;
			case 'font':
				this.properties.delete('font-style');
				this.properties.delete('font-variant');
				this.properties.delete('font-weight');
				this.properties.delete('font-stretch');
				this.properties.delete('font-size');
				this.properties.delete('line-height');
				this.properties.delete('font-family');
				break;
			case 'padding':
				this.properties.delete('padding-top');
				this.properties.delete('padding-right');
				this.properties.delete('padding-bottom');
				this.properties.delete('padding-left');
				break;
			case 'margin':
				this.properties.delete('margin-top');
				this.properties.delete('margin-right');
				this.properties.delete('margin-bottom');
				this.properties.delete('margin-left');
				break;
		}
	}

	/**
	 * Sets a property
	 *
	 * @param name Name.
	 * @param value Value.
	 * @param important Important.
	 */
	public set(name: string, value: string, important: boolean): void {
		let properties = {};

		switch (name) {
			case 'border':
				properties = CSSStyleDeclarationPropertySetParser.getBorder(value, important);
				break;
			case 'border-top':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTop(value, important);
				break;
			case 'border-right':
				properties = CSSStyleDeclarationPropertySetParser.getBorderRight(value, important);
				break;
			case 'border-bottom':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottom(value, important);
				break;
			case 'border-left':
				properties = CSSStyleDeclarationPropertySetParser.getBorderLeft(value, important);
				break;
			case 'border-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderWidth(value, important);
				break;
			case 'border-style':
				properties = CSSStyleDeclarationPropertySetParser.getBorderStyle(value, important);
				break;
			case 'border-color':
				properties = CSSStyleDeclarationPropertySetParser.getBorderColor(value, important);
				break;
			case 'border-image':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImage(value, important);
				break;
			case 'border-image-source':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImageSource(value, important);
				break;
			case 'border-image-slice':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImageSlice(value, important);
				break;
			case 'border-image-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImageWidth(value, important);
				break;
			case 'border-image-outset':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImageOutset(value, important);
				break;
			case 'border-image-repeat':
				properties = CSSStyleDeclarationPropertySetParser.getBorderImageRepeat(value, important);
				break;
			case 'border-top-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTopWidth(value, important);
				break;
			case 'border-right-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderRightWidth(value, important);
				break;
			case 'border-bottom-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottomWidth(value, important);
				break;
			case 'border-left-width':
				properties = CSSStyleDeclarationPropertySetParser.getBorderLeftWidth(value, important);
				break;
			case 'border-top-color':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTopColor(value, important);
				break;
			case 'border-right-color':
				properties = CSSStyleDeclarationPropertySetParser.getBorderRightColor(value, important);
				break;
			case 'border-bottom-color':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottomColor(value, important);
				break;
			case 'border-left-color':
				properties = CSSStyleDeclarationPropertySetParser.getBorderLeftColor(value, important);
				break;
			case 'border-top-style':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTopStyle(value, important);
				break;
			case 'border-right-style':
				properties = CSSStyleDeclarationPropertySetParser.getBorderRightStyle(value, important);
				break;
			case 'border-bottom-style':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottomStyle(value, important);
				break;
			case 'border-left-style':
				properties = CSSStyleDeclarationPropertySetParser.getBorderLeftStyle(value, important);
				break;
			case 'border-radius':
				properties = CSSStyleDeclarationPropertySetParser.getBorderRadius(value, important);
				break;
			case 'border-top-left-radius':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTopLeftRadius(value, important);
				break;
			case 'border-top-right-radius':
				properties = CSSStyleDeclarationPropertySetParser.getBorderTopRightRadius(value, important);
				break;
			case 'border-bottom-right-radius':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottomRightRadius(
					value,
					important
				);
				break;
			case 'border-bottom-left-radius':
				properties = CSSStyleDeclarationPropertySetParser.getBorderBottomLeftRadius(
					value,
					important
				);
				break;
			case 'border-collapse':
				properties = CSSStyleDeclarationPropertySetParser.getBorderCollapse(value, important);
				break;
			case 'outline':
				properties = CSSStyleDeclarationPropertySetParser.getOutline(value, important);
				break;
			case 'outline-width':
				properties = CSSStyleDeclarationPropertySetParser.getOutlineWidth(value, important);
				break;
			case 'outline-style':
				properties = CSSStyleDeclarationPropertySetParser.getOutlineStyle(value, important);
				break;
			case 'outline-color':
				properties = CSSStyleDeclarationPropertySetParser.getOutlineColor(value, important);
				break;
			case 'letter-spacing':
				properties = CSSStyleDeclarationPropertySetParser.getLetterSpacing(value, important);
				break;
			case 'word-spacing':
				properties = CSSStyleDeclarationPropertySetParser.getWordSpacing(value, important);
				break;
			case 'clear':
				properties = CSSStyleDeclarationPropertySetParser.getClear(value, important);
				break;
			case 'clip':
				properties = CSSStyleDeclarationPropertySetParser.getClip(value, important);
				break;
			case 'css-float':
				properties = CSSStyleDeclarationPropertySetParser.getCSSFloat(value, important);
				break;
			case 'float':
				properties = CSSStyleDeclarationPropertySetParser.getFloat(value, important);
				break;
			case 'display':
				properties = CSSStyleDeclarationPropertySetParser.getDisplay(value, important);
				break;
			case 'direction':
				properties = CSSStyleDeclarationPropertySetParser.getDirection(value, important);
				break;
			case 'flex':
				properties = CSSStyleDeclarationPropertySetParser.getFlex(value, important);
				break;
			case 'flex-shrink':
				properties = CSSStyleDeclarationPropertySetParser.getFlexShrink(value, important);
				break;
			case 'flex-grow':
				properties = CSSStyleDeclarationPropertySetParser.getFlexGrow(value, important);
				break;
			case 'flex-basis':
				properties = CSSStyleDeclarationPropertySetParser.getFlexBasis(value, important);
				break;
			case 'margin':
			case 'padding':
				properties = CSSStyleDeclarationPropertySetParser.getBox(value, important, name);
				break;
			case 'padding-top':
			case 'padding-right':
			case 'padding-bottom':
			case 'padding-left':
			case 'margin-top':
			case 'margin-right':
			case 'margin-bottom':
			case 'margin-left':
				properties = CSSStyleDeclarationPropertySetParser.getBoxEdge(value, important, name);
				break;
			case 'background':
				properties = CSSStyleDeclarationPropertySetParser.getBackground(value, important);
				break;
			case 'background-image':
				properties = CSSStyleDeclarationPropertySetParser.getBackgroundImage(value, important);
				break;
			case 'background-color':
				properties = CSSStyleDeclarationPropertySetParser.getBackgroundColor(value, important);
				break;
			case 'background-repeat':
				properties = CSSStyleDeclarationPropertySetParser.getBackgroundRepeat(value, important);
				break;
			case 'background-attachment':
				properties = CSSStyleDeclarationPropertySetParser.getBackgroundAttachment(value, important);
				break;
			case 'background-position':
				properties = CSSStyleDeclarationPropertySetParser.getBackgroundPosition(value, important);
				break;
			case 'width':
				properties = CSSStyleDeclarationPropertySetParser.getWidth(value, important);
				break;
			case 'height':
				properties = CSSStyleDeclarationPropertySetParser.getHeight(value, important);
				break;
			case 'top':
				properties = CSSStyleDeclarationPropertySetParser.getTop(value, important);
				break;
			case 'right':
				properties = CSSStyleDeclarationPropertySetParser.getRight(value, important);
				break;
			case 'bottom':
				properties = CSSStyleDeclarationPropertySetParser.getBottom(value, important);
				break;
			case 'left':
				properties = CSSStyleDeclarationPropertySetParser.getLeft(value, important);
				break;
			case 'font':
				properties = CSSStyleDeclarationPropertySetParser.getFont(value, important);
				break;
			case 'font-style':
				properties = CSSStyleDeclarationPropertySetParser.getFontStyle(value, important);
				break;
			case 'font-variant':
				properties = CSSStyleDeclarationPropertySetParser.getFontVariant(value, important);
				break;
			case 'font-weight':
				properties = CSSStyleDeclarationPropertySetParser.getFontWeight(value, important);
				break;
			case 'font-stretch':
				properties = CSSStyleDeclarationPropertySetParser.getFontStretch(value, important);
				break;
			case 'font-size':
				properties = CSSStyleDeclarationPropertySetParser.getFontSize(value, important);
				break;
			case 'line-height':
				properties = CSSStyleDeclarationPropertySetParser.getLineHeight(value, important);
				break;
			case 'text-indent':
				properties = CSSStyleDeclarationPropertySetParser.getTextIndent(value, important);
				break;
			case 'font-family':
				properties = CSSStyleDeclarationPropertySetParser.getFontFamily(value, important);
				break;
			case 'color':
				properties = CSSStyleDeclarationPropertySetParser.getColor(value, important);
				break;
			case 'flood-color':
				properties = CSSStyleDeclarationPropertySetParser.getFloodColor(value, important);
				break;
			case 'text-transform':
				properties = CSSStyleDeclarationPropertySetParser.getTextTransform(value, important);
				break;
			case 'visibility':
				properties = CSSStyleDeclarationPropertySetParser.getVisibility(value, important);
				break;
			case 'aspect-ratio':
				properties = CSSStyleDeclarationPropertySetParser.getAspectRatio(value, important);
				break;

			default:
				const trimmedValue = value.trim();
				if (trimmedValue) {
					properties = {
						[name]: {
							value: CSSStyleDeclarationValueParser.isGlobal(trimmedValue)
								? trimmedValue.toLowerCase()
								: trimmedValue,
							important
						}
					};
				}
				break;
		}

		for (const [key, value] of Object.entries(properties ?? {})) {
			this.properties.set(key, <ICSSStyleDeclarationPropertyValue>value);
		}
	}

	/**
	 * Returns a clone.
	 *
	 * @returns Clone.
	 */
	public clone(): CSSStyleDeclarationPropertyManager {
		const clone: CSSStyleDeclarationPropertyManager = new (<
			typeof CSSStyleDeclarationPropertyManager
		>this.constructor)();

		clone.properties = new Map<string, ICSSStyleDeclarationPropertyValue>();
		for (const [propertyName, property] of this.properties.entries()) {
			clone.properties.set(propertyName, { value: property.value, important: property.important });
		}

		return clone;
	}

	/**
	 * Returns size.
	 *
	 * @returns Size.
	 */
	public size(): number {
		return this.properties.size;
	}

	/**
	 * Returns property name.
	 *
	 * @param index Index.
	 * @returns Property name.
	 */
	public item(index: number): string {
		return this.properties.keys()[index] || '';
	}

	/**
	 * Converts properties to string.
	 *
	 * @returns String.
	 */
	public toString(): string {
		const result = [];
		const clone = this.clone();
		const properties = {};

		for (const shorthandPropertyGroup of TO_STRING_SHORTHAND_PROPERTIES) {
			for (const shorthandProperty of shorthandPropertyGroup) {
				if (Array.isArray(shorthandProperty)) {
					let isMatch = false;
					for (const childShorthandProperty of shorthandProperty) {
						const property = clone.get(childShorthandProperty);
						if (property) {
							properties[childShorthandProperty] = property;
							clone.remove(childShorthandProperty);
							isMatch = true;
						}
					}
					if (isMatch) {
						break;
					}
				} else {
					const property = clone.get(shorthandProperty);
					if (property) {
						properties[shorthandProperty] = property;
						clone.remove(shorthandProperty);
						break;
					}
				}
			}
		}

		for (const [propertyName, property] of clone.properties.entries()) {
			result.push(`${propertyName}: ${property.value}${property.important ? ' !important' : ''};`);
		}

		return result.join(' ');
	}
}
