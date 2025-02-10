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
			get(target: CSSStyleDeclaration, key: string | symbol | number) {
				if (typeof key === 'number') {
					return target.item(key) || undefined;
				}
				if (typeof key === 'string' && !definedMembers.includes(key)) {
					this.getPropertyValue(target.#convertToCSSProperty(key));
				}
				return target[key];
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
	 * @param [priority] Can be "important", or an empty string.
	 */
	public setProperty(name: string, value: string, priority?: 'important' | '' | undefined): void {
		if (this.#computed) {
			throw new this[PropertySymbol.window].DOMException(
				`Failed to execute 'setProperty' on 'CSSStyleDeclaration': These styles are computed, and therefore the '${name}' property is read-only.`,
				DOMExceptionNameEnum.domException
			);
		}

		if (priority !== '' && priority !== undefined && priority !== 'important') {
			return;
		}

		const stringValue = String(value).trim();
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
	}

	/**
	 * Removes a property.
	 *
	 * @param name Property name in kebab case.
	 * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
	 * @param [priority] Can be "important", or an empty string.
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
	public declare backgroundColor: string;
	/* eslint-enable @typescript-eslint/member-ordering */
	// -CSSProperties
}
