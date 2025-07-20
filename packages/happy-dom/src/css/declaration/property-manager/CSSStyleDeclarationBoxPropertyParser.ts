import CSSStyleDeclarationValueParser from './CSSStyleDeclarationValueParser.js';
import ICSSStyleDeclarationPropertyValue from './ICSSStyleDeclarationPropertyValue.js';

/**
 * Parser for box type css properties like border, outline.
 */
export default class CSSStyleDeclarationBoxPropertyParser {
	/**
	 *
	 * @param properties
	 * @param property
	 * @param edge
	 */
	public getEdge(
		properties: Map<string, ICSSStyleDeclarationPropertyValue>,
		property: string,
		edge: 'top' | 'right' | 'bottom' | 'left'
	): ICSSStyleDeclarationPropertyValue {}
}
