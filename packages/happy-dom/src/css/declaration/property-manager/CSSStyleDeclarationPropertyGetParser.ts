import CSSStyleDeclarationValueParser from './CSSStyleDeclarationValueParser.js';
import ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';

/**
 * Computed style property parser.
 */
export default class CSSStyleDeclarationPropertyGetParser {
	/**
	 * Returns outline.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getOutline(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		const propertyNames = ['outline-color', 'outline-style', 'outline-width'];
		if (!propertyNames.every((name) => properties.has(name))) {
			return null;
		}

		const important = propertyNames.every((name) => properties.get(name).important);

		if (
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('outline-width').value
			) &&
			properties.get('outline-width').value === properties.get('outline-style').value &&
			properties.get('outline-width').value === properties.get('outline-color').value
		) {
			return {
				important,
				value: properties.get('outline-width').value
			};
		}

		const values = [];

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('outline-color')?.value)) {
			values.push(properties.get('outline-color').value);
		}
		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('outline-style')?.value)) {
			values.push(properties.get('outline-style').value);
		}
		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('outline-width').value)) {
			values.push(properties.get('outline-width').value);
		}

		return {
			important,
			value: values.join(' ')
		};
	}

	/**
	 * Returns border.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorder(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		if (
			!properties.get('border-top-width')?.value ||
			properties.get('border-top-width')?.value !== properties.get('border-right-width')?.value ||
			properties.get('border-top-width')?.value !== properties.get('border-bottom-width')?.value ||
			properties.get('border-top-width')?.value !== properties.get('border-left-width')?.value ||
			!properties.get('border-top-style')?.value ||
			properties.get('border-top-style')?.value !== properties.get('border-right-style')?.value ||
			properties.get('border-top-style')?.value !== properties.get('border-bottom-style')?.value ||
			properties.get('border-top-style')?.value !== properties.get('border-left-style')?.value ||
			!properties.get('border-top-color')?.value ||
			properties.get('border-top-color')?.value !== properties.get('border-right-color')?.value ||
			properties.get('border-top-color')?.value !== properties.get('border-bottom-color')?.value ||
			properties.get('border-top-color')?.value !== properties.get('border-left-color')?.value ||
			!properties.get('border-image-source')?.value ||
			!properties.get('border-image-slice')?.value ||
			!properties.get('border-image-width')?.value ||
			!properties.get('border-image-outset')?.value ||
			!properties.get('border-image-repeat')?.value
		) {
			return null;
		}

		const important =
			properties.get('border-top-width').important &&
			properties.get('border-right-width').important &&
			properties.get('border-bottom-width').important &&
			properties.get('border-left-width').important &&
			properties.get('border-top-style').important &&
			properties.get('border-right-style').important &&
			properties.get('border-bottom-style').important &&
			properties.get('border-left-style').important &&
			properties.get('border-top-color').important &&
			properties.get('border-right-color').important &&
			properties.get('border-bottom-color').important &&
			properties.get('border-left-color').important &&
			properties.get('border-image-source').important &&
			properties.get('border-image-slice').important &&
			properties.get('border-image-width').important &&
			properties.get('border-image-outset').important &&
			properties.get('border-image-repeat').important;

		if (
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-top-width').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-top-style').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-top-color').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-image-source').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-image-slice').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-image-width').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-image-outset').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('border-image-repeat').value
			)
		) {
			if (
				properties.get('border-top-width').value !== properties.get('border-top-style').value ||
				properties.get('border-top-width').value !== properties.get('border-top-color').value ||
				properties.get('border-top-width').value !== properties.get('border-image-source').value ||
				properties.get('border-top-width').value !== properties.get('border-image-slice').value ||
				properties.get('border-top-width').value !== properties.get('border-image-width').value ||
				properties.get('border-top-width').value !== properties.get('border-image-outset').value ||
				properties.get('border-top-width').value !== properties.get('border-image-repeat').value
			) {
				return null;
			}

			return {
				important,
				value: properties.get('border-top-width').value
			};
		}

		const values = [];

		if (!CSSStyleDeclarationValueParser.isInitial(properties.get('border-top-width').value)) {
			values.push(properties.get('border-top-width').value);
		}

		if (!CSSStyleDeclarationValueParser.isInitial(properties.get('border-top-style').value)) {
			values.push(properties.get('border-top-style').value);
		}

		if (!CSSStyleDeclarationValueParser.isInitial(properties.get('border-top-color').value)) {
			values.push(properties.get('border-top-color').value);
		}

		return {
			important,
			value: values.join(' ')
		};
	}

	/**
	 * Returns border.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderColor(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		return this.getBoxPropertyValue(properties, [
			'border-top-color',
			'border-right-color',
			'border-bottom-color',
			'border-left-color'
		]);
	}

	/**
	 * Returns border.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderWidth(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		return this.getBoxPropertyValue(properties, [
			'border-top-width',
			'border-right-width',
			'border-bottom-width',
			'border-left-width'
		]);
	}

	/**
	 * Returns border.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderStyle(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		return this.getBoxPropertyValue(properties, [
			'border-top-style',
			'border-right-style',
			'border-bottom-style',
			'border-left-style'
		]);
	}

	/**
	 * Returns border radius.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderRadius(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		return this.getBoxPropertyValue(properties, [
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius'
		]);
	}

	/**
	 * Returns border image.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderImage(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		const propertyNames = [
			'border-image-source',
			'border-image-slice',
			'border-image-width',
			'border-image-outset',
			'border-image-repeat'
		];
		if (!propertyNames.every((name) => properties.has(name))) {
			return null;
		}

		const important = propertyNames.every((name) => properties.get(name).important);

		if (
			propertyNames.some((name) =>
				CSSStyleDeclarationValueParser.isGlobal(properties.get(name).value)
			)
		) {
			if (
				properties.get('border-image-source').value !==
					properties.get('border-image-slice').value ||
				properties.get('border-image-source').value !==
					properties.get('border-image-width').value ||
				properties.get('border-image-source').value !==
					properties.get('border-image-outset').value ||
				properties.get('border-image-source').value !== properties.get('border-image-repeat').value
			) {
				return null;
			}
			return {
				important,
				value: properties.get('border-image-source').value
			};
		}

		return {
			important,
			value: `${properties.get('border-image-source').value} ${properties.get('border-image-slice').value} / ${properties.get('border-image-width').value} / ${properties.get('border-image-outset').value} ${properties.get('border-image-repeat').value}`
		};
	}

	/**
	 * Returns background.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBackground(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		if (
			!properties.get('background-image')?.value ||
			!properties.get('background-repeat')?.value ||
			!properties.get('background-attachment')?.value ||
			!properties.get('background-position-x')?.value ||
			!properties.get('background-position-y')?.value ||
			!properties.get('background-color')?.value ||
			!properties.get('background-size')?.value ||
			!properties.get('background-origin')?.value ||
			!properties.get('background-clip')?.value
		) {
			return null;
		}

		const important =
			properties.get('background-image').important &&
			properties.get('background-repeat').important &&
			properties.get('background-attachment').important &&
			properties.get('background-position-x').important &&
			properties.get('background-position-y').important &&
			properties.get('background-color').important &&
			properties.get('background-size').important &&
			properties.get('background-origin').important &&
			properties.get('background-clip').important;

		if (
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-image').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-repeat').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-attachment').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-position-x').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-position-y').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-color').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-size').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get('background-origin').value
			) ||
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(properties.get('background-clip').value)
		) {
			if (
				properties.get('background-image').value !== properties.get('background-repeat').value ||
				properties.get('background-image').value !==
					properties.get('background-attachment').value ||
				properties.get('background-image').value !==
					properties.get('background-position-x').value ||
				properties.get('background-image').value !==
					properties.get('background-position-y').value ||
				properties.get('background-image').value !== properties.get('background-color').value ||
				properties.get('background-image').value !== properties.get('background-size').value ||
				properties.get('background-image').value !== properties.get('background-origin').value ||
				properties.get('background-image').value !== properties.get('background-clip').value
			) {
				return null;
			}

			return {
				important,
				value: properties.get('background-image').value
			};
		}

		const values = [];

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-image').value)) {
			values.push(properties.get('background-image').value);
		}

		if (
			!CSSStyleDeclarationValueParser.getInitial(properties.get('background-position-x').value) &&
			!CSSStyleDeclarationValueParser.getInitial(properties.get('background-position-y').value) &&
			!CSSStyleDeclarationValueParser.getInitial(properties.get('background-size').value)
		) {
			values.push(
				`${properties.get('background-position-x').value} ${properties.get('background-position-y').value} / ${properties.get('background-size').value}`
			);
		} else if (
			!CSSStyleDeclarationValueParser.getInitial(properties.get('background-position-x').value) &&
			!CSSStyleDeclarationValueParser.getInitial(properties.get('background-position-y').value)
		) {
			values.push(
				`${properties.get('background-position-x').value} ${properties.get('background-position-y').value}`
			);
		}

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-repeat').value)) {
			values.push(properties.get('background-repeat').value);
		}

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-attachment').value)) {
			values.push(properties.get('background-attachment').value);
		}

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-origin').value)) {
			values.push(properties.get('background-origin').value);
		}

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-clip').value)) {
			values.push(properties.get('background-clip').value);
		}

		if (!CSSStyleDeclarationValueParser.getInitial(properties.get('background-color').value)) {
			values.push(properties.get('background-color').value);
		}

		return {
			important,
			value: values.join(' ')
		};
	}

	/**
	 * Returns background position.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBackgroundPosition(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		if (
			!properties.get('background-position-x')?.value ||
			!properties.get('background-position-y')?.value
		) {
			return null;
		}

		const important =
			properties.get('background-position-x').important &&
			properties.get('background-position-y').important;
		if (
			CSSStyleDeclarationValueParser.getGlobal(properties.get('background-position-x').value) ||
			CSSStyleDeclarationValueParser.getGlobal(properties.get('background-position-y').value)
		) {
			if (
				properties.get('background-position-x').value !==
				properties.get('background-position-y').value
			) {
				return null;
			}

			return {
				important,
				value: properties.get('background-position-x').value
			};
		}

		const positionX = properties
			.get('background-position-x')
			.value.replace(/ *, */g, ',')
			.split(',');
		const positionY = properties
			.get('background-position-y')
			.value.replace(/ *, */g, ',')
			.split(',');
		const parts = [];

		for (let i = 0; i < positionX.length; i++) {
			parts.push(`${positionX[i]} ${positionY[i]}`);
		}

		return {
			important,
			value: parts.join(', ')
		};
	}

	/**
	 * Returns flex.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getFlex(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		if (
			!properties.get('flex-grow')?.value ||
			!properties.get('flex-shrink')?.value ||
			!properties.get('flex-basis')?.value
		) {
			return null;
		}

		const important =
			properties.get('flex-grow').important &&
			properties.get('flex-shrink').important &&
			properties.get('flex-basis').important;

		if (
			CSSStyleDeclarationValueParser.getGlobal(properties.get('flex-grow').value) ||
			CSSStyleDeclarationValueParser.getGlobal(properties.get('flex-shrink').value) ||
			CSSStyleDeclarationValueParser.getGlobal(properties.get('flex-basis').value)
		) {
			if (
				properties.get('flex-grow').value !== properties.get('flex-shrink').value ||
				properties.get('flex-grow').value !== properties.get('flex-basis').value
			) {
				return null;
			}

			return {
				important,
				value: properties.get('flex-grow').value
			};
		}

		return {
			important,
			value: `${properties.get('flex-grow').value} ${properties.get('flex-shrink').value} ${properties.get('flex-basis').value}`
		};
	}

	/**
	 * Returns flex.
	 *
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getFont(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>
	): ICSSStyleDeclarationPropertyValue | null {
		const propertyNames = [
			'font-size',
			'font-family',
			'font-weight',
			'font-style',
			'font-variant',
			'font-stretch',
			'line-height'
		];
		if (!propertyNames.every((name) => properties.has(name))) {
			return null;
		}

		const important = propertyNames.every((name) => properties.get(name).important);

		if (
			propertyNames.some((property) =>
				CSSStyleDeclarationValueParser.getGlobal(properties.get(property).value)
			)
		) {
			if (
				properties.get('font-size').value !== properties.get('font-family').value ||
				properties.get('font-size').value !== properties.get('font-weight').value ||
				properties.get('font-size').value !== properties.get('font-style').value ||
				properties.get('font-size').value !== properties.get('font-variant').value ||
				properties.get('font-size').value !== properties.get('font-stretch').value ||
				properties.get('font-size').value !== properties.get('line-height').value
			) {
				return null;
			}

			return {
				important,
				value: properties.get('font-size').value
			};
		}

		const values = [];

		if (properties.get('font-style').value !== 'normal') {
			values.push(properties.get('font-style').value);
		}
		if (properties.get('font-variant').value !== 'normal') {
			values.push(properties.get('font-variant').value);
		}
		if (properties.get('font-weight').value !== 'normal') {
			values.push(properties.get('font-weight').value);
		}
		if (properties.get('font-stretch').value !== 'normal') {
			values.push(properties.get('font-stretch').value);
		}

		if (properties.get('line-height').value !== 'normal') {
			values.push(`${properties.get('font-size').value} / ${properties.get('line-height').value}`);
		} else {
			values.push(properties.get('font-size').value);
		}

		values.push(properties.get('font-family').value);

		return {
			important,
			value: values.join(' ')
		};
	}

	/**
	 * Returns border.
	 *
	 * @param border
	 * @param properties Properties.
	 * @returns Property value
	 */
	public static getBorderEdge(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>,
		border: 'border-top' | 'border-right' | 'border-bottom' | 'border-left'
	): ICSSStyleDeclarationPropertyValue | null {
		const propertyNames = [`${border}-width`, `${border}-style`, `${border}-color`];
		if (!propertyNames.every((name) => properties.has(name))) {
			return null;
		}

		const important = propertyNames.every((name) => properties.get(name).important);

		if (
			CSSStyleDeclarationValueParser.getGlobalExceptInitial(
				properties.get(`${border}-width`).value
			) &&
			properties.get(`${border}-width`).value === properties.get(`${border}-style`).value &&
			properties.get(`${border}-width`).value === properties.get(`${border}-color`).value
		) {
			return {
				important,
				value: properties.get(`${border}-width`).value
			};
		}

		return {
			important,
			value: propertyNames
				.map((name) => properties.get(name).value)
				.filter((value) => !CSSStyleDeclarationValueParser.isInitial(value))
				.join(' ')
		};
	}

	/**
	 * Returns edges of a rectangle
	 *
	 * @param base
	 * @param properties
	 * @returns Property value
	 */
	public static getRectangleEdges(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>,
		base: string
	): ICSSStyleDeclarationPropertyValue | null {
		return this.getBoxPropertyValue(properties, [
			`${base}-top`,
			`${base}-right`,
			`${base}-bottom`,
			`${base}-left`
		]);
	}

	/**
	 * Returns a box like property shorthand
	 *
	 * @param propertyNames
	 * @param properties
	 * @returns Property value
	 */
	public static getBoxPropertyValue(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>,
		propertyNames: [string, string, string, string]
	): ICSSStyleDeclarationPropertyValue | null {
		if (!propertyNames.every((name) => properties.has(name))) {
			return null;
		}

		const important = propertyNames.every((name) => properties.get(name).important);

		if (
			propertyNames.some((name) =>
				CSSStyleDeclarationValueParser.isGlobal(properties.get(name).value)
			)
		) {
			if (
				properties.get(propertyNames[0]).value !== properties.get(propertyNames[1]).value ||
				properties.get(propertyNames[0]).value !== properties.get(propertyNames[2]).value ||
				properties.get(propertyNames[0]).value !== properties.get(propertyNames[3]).value
			) {
				return null;
			}
			return {
				important,
				value: properties.get(propertyNames[0]).value
			};
		}

		const values = [properties.get(propertyNames[0]).value];

		if (
			properties.get(propertyNames[1]).value !== properties.get(propertyNames[0]).value ||
			properties.get(propertyNames[2]).value !== properties.get(propertyNames[0]).value ||
			properties.get(propertyNames[3]).value !== properties.get(propertyNames[1]).value
		) {
			values.push(properties.get(propertyNames[1]).value);
		}

		if (
			properties.get(propertyNames[2]).value !== properties.get(propertyNames[0]).value ||
			properties.get(propertyNames[3]).value !== properties.get(propertyNames[1]).value
		) {
			values.push(properties.get(propertyNames[2]).value);
		}

		if (properties.get(propertyNames[3]).value !== properties.get(propertyNames[1]).value) {
			values.push(properties.get(propertyNames[3]).value);
		}

		return {
			important,
			value: values.join(' ')
		};
	}
}
