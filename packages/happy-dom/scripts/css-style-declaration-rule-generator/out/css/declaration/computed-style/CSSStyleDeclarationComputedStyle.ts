import CSSStyleDeclarationPropertyManager from '../property-manager/CSSStyleDeclarationPropertyManager.js';
/**
 *
 */
export default class CSSStyleDeclarationComputedStyle {
	/**
	 *
	 * @param _element
	 */
	constructor(_element: any) {}
	/**
	 *
	 */
	public getComputedStyle(): CSSStyleDeclarationPropertyManager {
		return new CSSStyleDeclarationPropertyManager();
	}
}
