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
	public readonly parentRule: CSSRule | null = null;

	// Internal properties
	public [PropertySymbol.window]: BrowserWindow;

	// Private properties
	#element: Element | null;
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
		this.#element = options?.element || null;
		this.#computed = options?.element ? !!options?.computed : false;
	}

	/**
	 * Index properties
	 */

	/* eslint-disable jsdoc/require-jsdoc */

	public get 0(): string | undefined {
		return this.item(0) || undefined;
	}

	public get 1(): string | undefined {
		return this.item(1) || undefined;
	}

	public get 2(): string | undefined {
		return this.item(2) || undefined;
	}

	public get 3(): string | undefined {
		return this.item(3) || undefined;
	}

	public get 4(): string | undefined {
		return this.item(4) || undefined;
	}

	public get 5(): string | undefined {
		return this.item(5) || undefined;
	}

	public get 6(): string | undefined {
		return this.item(6) || undefined;
	}

	public get 7(): string | undefined {
		return this.item(7) || undefined;
	}

	public get 8(): string | undefined {
		return this.item(8) || undefined;
	}

	public get 9(): string | undefined {
		return this.item(9) || undefined;
	}

	public get 10(): string | undefined {
		return this.item(10) || undefined;
	}

	public get 11(): string | undefined {
		return this.item(11) || undefined;
	}

	public get 12(): string | undefined {
		return this.item(12) || undefined;
	}

	public get 13(): string | undefined {
		return this.item(13) || undefined;
	}

	public get 14(): string | undefined {
		return this.item(14) || undefined;
	}

	public get 15(): string | undefined {
		return this.item(15) || undefined;
	}

	public get 16(): string | undefined {
		return this.item(16) || undefined;
	}

	public get 17(): string | undefined {
		return this.item(17) || undefined;
	}

	public get 18(): string | undefined {
		return this.item(18) || undefined;
	}

	public get 19(): string | undefined {
		return this.item(19) || undefined;
	}

	public get 20(): string | undefined {
		return this.item(20) || undefined;
	}

	public get 21(): string | undefined {
		return this.item(21) || undefined;
	}

	public get 22(): string | undefined {
		return this.item(22) || undefined;
	}

	public get 23(): string | undefined {
		return this.item(23) || undefined;
	}

	public get 24(): string | undefined {
		return this.item(24) || undefined;
	}

	public get 25(): string | undefined {
		return this.item(25) || undefined;
	}

	public get 26(): string | undefined {
		return this.item(26) || undefined;
	}

	public get 27(): string | undefined {
		return this.item(27) || undefined;
	}

	public get 28(): string | undefined {
		return this.item(28) || undefined;
	}

	public get 29(): string | undefined {
		return this.item(29) || undefined;
	}

	public get 30(): string | undefined {
		return this.item(30) || undefined;
	}

	public get 31(): string | undefined {
		return this.item(31) || undefined;
	}

	public get 32(): string | undefined {
		return this.item(32) || undefined;
	}

	public get 33(): string | undefined {
		return this.item(33) || undefined;
	}

	public get 34(): string | undefined {
		return this.item(34) || undefined;
	}

	public get 35(): string | undefined {
		return this.item(35) || undefined;
	}

	public get 36(): string | undefined {
		return this.item(36) || undefined;
	}

	public get 37(): string | undefined {
		return this.item(37) || undefined;
	}

	public get 38(): string | undefined {
		return this.item(38) || undefined;
	}

	public get 39(): string | undefined {
		return this.item(39) || undefined;
	}

	public get 40(): string | undefined {
		return this.item(40) || undefined;
	}

	public get 41(): string | undefined {
		return this.item(41) || undefined;
	}

	public get 42(): string | undefined {
		return this.item(42) || undefined;
	}

	public get 43(): string | undefined {
		return this.item(43) || undefined;
	}

	public get 44(): string | undefined {
		return this.item(44) || undefined;
	}

	public get 45(): string | undefined {
		return this.item(45) || undefined;
	}

	public get 46(): string | undefined {
		return this.item(46) || undefined;
	}

	public get 47(): string | undefined {
		return this.item(47) || undefined;
	}

	public get 48(): string | undefined {
		return this.item(48) || undefined;
	}

	public get 49(): string | undefined {
		return this.item(49) || undefined;
	}

	public get 50(): string | undefined {
		return this.item(50) || undefined;
	}

	public get 51(): string | undefined {
		return this.item(51) || undefined;
	}

	public get 52(): string | undefined {
		return this.item(52) || undefined;
	}

	public get 53(): string | undefined {
		return this.item(53) || undefined;
	}

	public get 54(): string | undefined {
		return this.item(54) || undefined;
	}

	public get 55(): string | undefined {
		return this.item(55) || undefined;
	}

	public get 56(): string | undefined {
		return this.item(56) || undefined;
	}

	public get 57(): string | undefined {
		return this.item(57) || undefined;
	}

	public get 58(): string | undefined {
		return this.item(58) || undefined;
	}

	public get 59(): string | undefined {
		return this.item(59) || undefined;
	}

	public get 60(): string | undefined {
		return this.item(60) || undefined;
	}

	public get 61(): string | undefined {
		return this.item(61) || undefined;
	}

	public get 62(): string | undefined {
		return this.item(62) || undefined;
	}

	public get 63(): string | undefined {
		return this.item(63) || undefined;
	}

	public get 64(): string | undefined {
		return this.item(64) || undefined;
	}

	public get 65(): string | undefined {
		return this.item(65) || undefined;
	}

	public get 66(): string | undefined {
		return this.item(66) || undefined;
	}

	public get 67(): string | undefined {
		return this.item(67) || undefined;
	}

	public get 68(): string | undefined {
		return this.item(68) || undefined;
	}

	public get 69(): string | undefined {
		return this.item(69) || undefined;
	}

	public get 70(): string | undefined {
		return this.item(70) || undefined;
	}

	public get 71(): string | undefined {
		return this.item(71) || undefined;
	}

	public get 72(): string | undefined {
		return this.item(72) || undefined;
	}

	public get 73(): string | undefined {
		return this.item(73) || undefined;
	}

	public get 74(): string | undefined {
		return this.item(74) || undefined;
	}

	public get 75(): string | undefined {
		return this.item(75) || undefined;
	}

	public get 76(): string | undefined {
		return this.item(76) || undefined;
	}

	public get 77(): string | undefined {
		return this.item(77) || undefined;
	}

	public get 78(): string | undefined {
		return this.item(78) || undefined;
	}

	public get 79(): string | undefined {
		return this.item(79) || undefined;
	}

	public get 80(): string | undefined {
		return this.item(80) || undefined;
	}

	public get 81(): string | undefined {
		return this.item(81) || undefined;
	}

	public get 82(): string | undefined {
		return this.item(82) || undefined;
	}

	public get 83(): string | undefined {
		return this.item(83) || undefined;
	}

	public get 84(): string | undefined {
		return this.item(84) || undefined;
	}

	public get 85(): string | undefined {
		return this.item(85) || undefined;
	}

	public get 86(): string | undefined {
		return this.item(86) || undefined;
	}

	public get 87(): string | undefined {
		return this.item(87) || undefined;
	}

	public get 88(): string | undefined {
		return this.item(88) || undefined;
	}

	public get 89(): string | undefined {
		return this.item(89) || undefined;
	}

	public get 90(): string | undefined {
		return this.item(90) || undefined;
	}

	public get 91(): string | undefined {
		return this.item(91) || undefined;
	}

	public get 92(): string | undefined {
		return this.item(92) || undefined;
	}

	public get 93(): string | undefined {
		return this.item(93) || undefined;
	}

	public get 94(): string | undefined {
		return this.item(94) || undefined;
	}

	public get 95(): string | undefined {
		return this.item(95) || undefined;
	}

	public get 96(): string | undefined {
		return this.item(96) || undefined;
	}

	public get 97(): string | undefined {
		return this.item(97) || undefined;
	}

	public get 98(): string | undefined {
		return this.item(98) || undefined;
	}

	public get 99(): string | undefined {
		return this.item(99) || undefined;
	}

	public get 100(): string | undefined {
		return this.item(100) || undefined;
	}

	public get 101(): string | undefined {
		return this.item(101) || undefined;
	}

	public get 102(): string | undefined {
		return this.item(102) || undefined;
	}

	public get 103(): string | undefined {
		return this.item(103) || undefined;
	}

	public get 104(): string | undefined {
		return this.item(104) || undefined;
	}

	public get 105(): string | undefined {
		return this.item(105) || undefined;
	}

	public get 106(): string | undefined {
		return this.item(106) || undefined;
	}

	public get 107(): string | undefined {
		return this.item(107) || undefined;
	}

	public get 108(): string | undefined {
		return this.item(108) || undefined;
	}

	public get 109(): string | undefined {
		return this.item(109) || undefined;
	}

	public get 110(): string | undefined {
		return this.item(110) || undefined;
	}

	public get 111(): string | undefined {
		return this.item(111) || undefined;
	}

	public get 112(): string | undefined {
		return this.item(112) || undefined;
	}

	public get 113(): string | undefined {
		return this.item(113) || undefined;
	}

	public get 114(): string | undefined {
		return this.item(114) || undefined;
	}

	public get 115(): string | undefined {
		return this.item(115) || undefined;
	}

	public get 116(): string | undefined {
		return this.item(116) || undefined;
	}

	public get 117(): string | undefined {
		return this.item(117) || undefined;
	}

	public get 118(): string | undefined {
		return this.item(118) || undefined;
	}

	public get 119(): string | undefined {
		return this.item(119) || undefined;
	}

	public get 120(): string | undefined {
		return this.item(120) || undefined;
	}

	public get 121(): string | undefined {
		return this.item(121) || undefined;
	}

	public get 122(): string | undefined {
		return this.item(122) || undefined;
	}

	public get 123(): string | undefined {
		return this.item(123) || undefined;
	}

	public get 124(): string | undefined {
		return this.item(124) || undefined;
	}

	public get 125(): string | undefined {
		return this.item(125) || undefined;
	}

	public get 126(): string | undefined {
		return this.item(126) || undefined;
	}

	public get 127(): string | undefined {
		return this.item(127) || undefined;
	}

	public get 128(): string | undefined {
		return this.item(128) || undefined;
	}

	public get 129(): string | undefined {
		return this.item(129) || undefined;
	}

	public get 130(): string | undefined {
		return this.item(130) || undefined;
	}

	public get 131(): string | undefined {
		return this.item(131) || undefined;
	}

	public get 132(): string | undefined {
		return this.item(132) || undefined;
	}

	public get 133(): string | undefined {
		return this.item(133) || undefined;
	}

	public get 134(): string | undefined {
		return this.item(134) || undefined;
	}

	public get 135(): string | undefined {
		return this.item(135) || undefined;
	}

	public get 136(): string | undefined {
		return this.item(136) || undefined;
	}

	public get 137(): string | undefined {
		return this.item(137) || undefined;
	}

	public get 138(): string | undefined {
		return this.item(138) || undefined;
	}

	public get 139(): string | undefined {
		return this.item(139) || undefined;
	}

	public get 140(): string | undefined {
		return this.item(140) || undefined;
	}

	public get 141(): string | undefined {
		return this.item(141) || undefined;
	}

	public get 142(): string | undefined {
		return this.item(142) || undefined;
	}

	public get 143(): string | undefined {
		return this.item(143) || undefined;
	}

	public get 144(): string | undefined {
		return this.item(144) || undefined;
	}

	public get 145(): string | undefined {
		return this.item(145) || undefined;
	}

	public get 146(): string | undefined {
		return this.item(146) || undefined;
	}

	public get 147(): string | undefined {
		return this.item(147) || undefined;
	}

	public get 148(): string | undefined {
		return this.item(148) || undefined;
	}

	public get 149(): string | undefined {
		return this.item(149) || undefined;
	}

	public get 150(): string | undefined {
		return this.item(150) || undefined;
	}

	public get 151(): string | undefined {
		return this.item(151) || undefined;
	}

	public get 152(): string | undefined {
		return this.item(152) || undefined;
	}

	public get 153(): string | undefined {
		return this.item(153) || undefined;
	}

	public get 154(): string | undefined {
		return this.item(154) || undefined;
	}

	public get 155(): string | undefined {
		return this.item(155) || undefined;
	}

	public get 156(): string | undefined {
		return this.item(156) || undefined;
	}

	public get 157(): string | undefined {
		return this.item(157) || undefined;
	}

	public get 158(): string | undefined {
		return this.item(158) || undefined;
	}

	public get 159(): string | undefined {
		return this.item(159) || undefined;
	}

	public get 160(): string | undefined {
		return this.item(160) || undefined;
	}

	public get 161(): string | undefined {
		return this.item(161) || undefined;
	}

	public get 162(): string | undefined {
		return this.item(162) || undefined;
	}

	public get 163(): string | undefined {
		return this.item(163) || undefined;
	}

	public get 164(): string | undefined {
		return this.item(164) || undefined;
	}

	public get 165(): string | undefined {
		return this.item(165) || undefined;
	}

	public get 166(): string | undefined {
		return this.item(166) || undefined;
	}

	public get 167(): string | undefined {
		return this.item(167) || undefined;
	}

	public get 168(): string | undefined {
		return this.item(168) || undefined;
	}

	public get 169(): string | undefined {
		return this.item(169) || undefined;
	}

	public get 170(): string | undefined {
		return this.item(170) || undefined;
	}

	public get 171(): string | undefined {
		return this.item(171) || undefined;
	}

	public get 172(): string | undefined {
		return this.item(172) || undefined;
	}

	public get 173(): string | undefined {
		return this.item(173) || undefined;
	}

	public get 174(): string | undefined {
		return this.item(174) || undefined;
	}

	public get 175(): string | undefined {
		return this.item(175) || undefined;
	}

	public get 176(): string | undefined {
		return this.item(176) || undefined;
	}

	public get 177(): string | undefined {
		return this.item(177) || undefined;
	}

	public get 178(): string | undefined {
		return this.item(178) || undefined;
	}

	public get 179(): string | undefined {
		return this.item(179) || undefined;
	}

	public get 180(): string | undefined {
		return this.item(180) || undefined;
	}

	public get 181(): string | undefined {
		return this.item(181) || undefined;
	}

	public get 182(): string | undefined {
		return this.item(182) || undefined;
	}

	public get 183(): string | undefined {
		return this.item(183) || undefined;
	}

	public get 184(): string | undefined {
		return this.item(184) || undefined;
	}

	public get 185(): string | undefined {
		return this.item(185) || undefined;
	}

	public get 186(): string | undefined {
		return this.item(186) || undefined;
	}

	public get 187(): string | undefined {
		return this.item(187) || undefined;
	}

	public get 188(): string | undefined {
		return this.item(188) || undefined;
	}

	public get 189(): string | undefined {
		return this.item(189) || undefined;
	}

	public get 190(): string | undefined {
		return this.item(190) || undefined;
	}

	public get 191(): string | undefined {
		return this.item(191) || undefined;
	}

	public get 192(): string | undefined {
		return this.item(192) || undefined;
	}

	public get 193(): string | undefined {
		return this.item(193) || undefined;
	}

	public get 194(): string | undefined {
		return this.item(194) || undefined;
	}

	public get 195(): string | undefined {
		return this.item(195) || undefined;
	}

	public get 196(): string | undefined {
		return this.item(196) || undefined;
	}

	public get 197(): string | undefined {
		return this.item(197) || undefined;
	}

	public get 198(): string | undefined {
		return this.item(198) || undefined;
	}

	public get 199(): string | undefined {
		return this.item(199) || undefined;
	}

	public get 200(): string | undefined {
		return this.item(200) || undefined;
	}

	public get 201(): string | undefined {
		return this.item(201) || undefined;
	}

	public get 202(): string | undefined {
		return this.item(202) || undefined;
	}

	public get 203(): string | undefined {
		return this.item(203) || undefined;
	}

	public get 204(): string | undefined {
		return this.item(204) || undefined;
	}

	public get 205(): string | undefined {
		return this.item(205) || undefined;
	}

	public get 206(): string | undefined {
		return this.item(206) || undefined;
	}

	public get 207(): string | undefined {
		return this.item(207) || undefined;
	}

	public get 208(): string | undefined {
		return this.item(208) || undefined;
	}

	public get 209(): string | undefined {
		return this.item(209) || undefined;
	}

	public get 210(): string | undefined {
		return this.item(210) || undefined;
	}

	public get 211(): string | undefined {
		return this.item(211) || undefined;
	}

	public get 212(): string | undefined {
		return this.item(212) || undefined;
	}

	public get 213(): string | undefined {
		return this.item(213) || undefined;
	}

	public get 214(): string | undefined {
		return this.item(214) || undefined;
	}

	public get 215(): string | undefined {
		return this.item(215) || undefined;
	}

	public get 216(): string | undefined {
		return this.item(216) || undefined;
	}

	public get 217(): string | undefined {
		return this.item(217) || undefined;
	}

	public get 218(): string | undefined {
		return this.item(218) || undefined;
	}

	public get 219(): string | undefined {
		return this.item(219) || undefined;
	}

	public get 220(): string | undefined {
		return this.item(220) || undefined;
	}

	public get 221(): string | undefined {
		return this.item(221) || undefined;
	}

	public get 222(): string | undefined {
		return this.item(222) || undefined;
	}

	public get 223(): string | undefined {
		return this.item(223) || undefined;
	}

	public get 224(): string | undefined {
		return this.item(224) || undefined;
	}

	public get 225(): string | undefined {
		return this.item(225) || undefined;
	}

	public get 226(): string | undefined {
		return this.item(226) || undefined;
	}

	public get 227(): string | undefined {
		return this.item(227) || undefined;
	}

	public get 228(): string | undefined {
		return this.item(228) || undefined;
	}

	public get 229(): string | undefined {
		return this.item(229) || undefined;
	}

	public get 230(): string | undefined {
		return this.item(230) || undefined;
	}

	public get 231(): string | undefined {
		return this.item(231) || undefined;
	}

	public get 232(): string | undefined {
		return this.item(232) || undefined;
	}

	public get 233(): string | undefined {
		return this.item(233) || undefined;
	}

	public get 234(): string | undefined {
		return this.item(234) || undefined;
	}

	public get 235(): string | undefined {
		return this.item(235) || undefined;
	}

	public get 236(): string | undefined {
		return this.item(236) || undefined;
	}

	public get 237(): string | undefined {
		return this.item(237) || undefined;
	}

	public get 238(): string | undefined {
		return this.item(238) || undefined;
	}

	public get 239(): string | undefined {
		return this.item(239) || undefined;
	}

	public get 240(): string | undefined {
		return this.item(240) || undefined;
	}

	public get 241(): string | undefined {
		return this.item(241) || undefined;
	}

	public get 242(): string | undefined {
		return this.item(242) || undefined;
	}

	public get 243(): string | undefined {
		return this.item(243) || undefined;
	}

	public get 244(): string | undefined {
		return this.item(244) || undefined;
	}

	public get 245(): string | undefined {
		return this.item(245) || undefined;
	}

	public get 246(): string | undefined {
		return this.item(246) || undefined;
	}

	public get 247(): string | undefined {
		return this.item(247) || undefined;
	}

	public get 248(): string | undefined {
		return this.item(248) || undefined;
	}

	public get 249(): string | undefined {
		return this.item(249) || undefined;
	}

	public get 250(): string | undefined {
		return this.item(250) || undefined;
	}

	public get 251(): string | undefined {
		return this.item(251) || undefined;
	}

	public get 252(): string | undefined {
		return this.item(252) || undefined;
	}

	public get 253(): string | undefined {
		return this.item(253) || undefined;
	}

	public get 254(): string | undefined {
		return this.item(254) || undefined;
	}

	public get 255(): string | undefined {
		return this.item(255) || undefined;
	}

	public get 256(): string | undefined {
		return this.item(256) || undefined;
	}

	public get 257(): string | undefined {
		return this.item(257) || undefined;
	}

	public get 258(): string | undefined {
		return this.item(258) || undefined;
	}

	public get 259(): string | undefined {
		return this.item(259) || undefined;
	}

	public get 260(): string | undefined {
		return this.item(260) || undefined;
	}

	public get 261(): string | undefined {
		return this.item(261) || undefined;
	}

	public get 262(): string | undefined {
		return this.item(262) || undefined;
	}

	public get 263(): string | undefined {
		return this.item(263) || undefined;
	}

	public get 264(): string | undefined {
		return this.item(264) || undefined;
	}

	public get 265(): string | undefined {
		return this.item(265) || undefined;
	}

	public get 266(): string | undefined {
		return this.item(266) || undefined;
	}

	public get 267(): string | undefined {
		return this.item(267) || undefined;
	}

	public get 268(): string | undefined {
		return this.item(268) || undefined;
	}

	public get 269(): string | undefined {
		return this.item(269) || undefined;
	}

	public get 270(): string | undefined {
		return this.item(270) || undefined;
	}

	public get 271(): string | undefined {
		return this.item(271) || undefined;
	}

	public get 272(): string | undefined {
		return this.item(272) || undefined;
	}

	public get 273(): string | undefined {
		return this.item(273) || undefined;
	}

	public get 274(): string | undefined {
		return this.item(274) || undefined;
	}

	public get 275(): string | undefined {
		return this.item(275) || undefined;
	}

	public get 276(): string | undefined {
		return this.item(276) || undefined;
	}

	public get 277(): string | undefined {
		return this.item(277) || undefined;
	}

	public get 278(): string | undefined {
		return this.item(278) || undefined;
	}

	public get 279(): string | undefined {
		return this.item(279) || undefined;
	}

	public get 280(): string | undefined {
		return this.item(280) || undefined;
	}

	public get 281(): string | undefined {
		return this.item(281) || undefined;
	}

	public get 282(): string | undefined {
		return this.item(282) || undefined;
	}

	public get 283(): string | undefined {
		return this.item(283) || undefined;
	}

	public get 284(): string | undefined {
		return this.item(284) || undefined;
	}

	public get 285(): string | undefined {
		return this.item(285) || undefined;
	}

	public get 286(): string | undefined {
		return this.item(286) || undefined;
	}

	public get 287(): string | undefined {
		return this.item(287) || undefined;
	}

	public get 288(): string | undefined {
		return this.item(288) || undefined;
	}

	public get 289(): string | undefined {
		return this.item(289) || undefined;
	}

	public get 290(): string | undefined {
		return this.item(290) || undefined;
	}

	public get 291(): string | undefined {
		return this.item(291) || undefined;
	}

	public get 292(): string | undefined {
		return this.item(292) || undefined;
	}

	public get 293(): string | undefined {
		return this.item(293) || undefined;
	}

	public get 294(): string | undefined {
		return this.item(294) || undefined;
	}

	public get 295(): string | undefined {
		return this.item(295) || undefined;
	}

	public get 296(): string | undefined {
		return this.item(296) || undefined;
	}

	public get 297(): string | undefined {
		return this.item(297) || undefined;
	}

	public get 298(): string | undefined {
		return this.item(298) || undefined;
	}

	public get 299(): string | undefined {
		return this.item(299) || undefined;
	}

	public get 300(): string | undefined {
		return this.item(300) || undefined;
	}

	public get 301(): string | undefined {
		return this.item(301) || undefined;
	}

	public get 302(): string | undefined {
		return this.item(302) || undefined;
	}

	public get 303(): string | undefined {
		return this.item(303) || undefined;
	}

	public get 304(): string | undefined {
		return this.item(304) || undefined;
	}

	public get 305(): string | undefined {
		return this.item(305) || undefined;
	}

	public get 306(): string | undefined {
		return this.item(306) || undefined;
	}

	public get 307(): string | undefined {
		return this.item(307) || undefined;
	}

	public get 308(): string | undefined {
		return this.item(308) || undefined;
	}

	public get 309(): string | undefined {
		return this.item(309) || undefined;
	}

	public get 310(): string | undefined {
		return this.item(310) || undefined;
	}

	public get 311(): string | undefined {
		return this.item(311) || undefined;
	}

	public get 312(): string | undefined {
		return this.item(312) || undefined;
	}

	public get 313(): string | undefined {
		return this.item(313) || undefined;
	}

	public get 314(): string | undefined {
		return this.item(314) || undefined;
	}

	public get 315(): string | undefined {
		return this.item(315) || undefined;
	}

	public get 316(): string | undefined {
		return this.item(316) || undefined;
	}

	public get 317(): string | undefined {
		return this.item(317) || undefined;
	}

	public get 318(): string | undefined {
		return this.item(318) || undefined;
	}

	public get 319(): string | undefined {
		return this.item(319) || undefined;
	}

	public get 320(): string | undefined {
		return this.item(320) || undefined;
	}

	public get 321(): string | undefined {
		return this.item(321) || undefined;
	}

	public get 322(): string | undefined {
		return this.item(322) || undefined;
	}

	public get 323(): string | undefined {
		return this.item(323) || undefined;
	}

	public get 324(): string | undefined {
		return this.item(324) || undefined;
	}

	public get 325(): string | undefined {
		return this.item(325) || undefined;
	}

	public get 326(): string | undefined {
		return this.item(326) || undefined;
	}

	public get 327(): string | undefined {
		return this.item(327) || undefined;
	}

	public get 328(): string | undefined {
		return this.item(328) || undefined;
	}

	public get 329(): string | undefined {
		return this.item(329) || undefined;
	}

	public get 330(): string | undefined {
		return this.item(330) || undefined;
	}

	public get 331(): string | undefined {
		return this.item(331) || undefined;
	}

	public get 332(): string | undefined {
		return this.item(332) || undefined;
	}

	public get 333(): string | undefined {
		return this.item(333) || undefined;
	}

	public get 334(): string | undefined {
		return this.item(334) || undefined;
	}

	public get 335(): string | undefined {
		return this.item(335) || undefined;
	}

	public get 336(): string | undefined {
		return this.item(336) || undefined;
	}

	public get 337(): string | undefined {
		return this.item(337) || undefined;
	}

	public get 338(): string | undefined {
		return this.item(338) || undefined;
	}

	public get 339(): string | undefined {
		return this.item(339) || undefined;
	}

	public get 340(): string | undefined {
		return this.item(340) || undefined;
	}

	public get 341(): string | undefined {
		return this.item(341) || undefined;
	}

	public get 342(): string | undefined {
		return this.item(342) || undefined;
	}

	public get 343(): string | undefined {
		return this.item(343) || undefined;
	}

	public get 344(): string | undefined {
		return this.item(344) || undefined;
	}

	public get 345(): string | undefined {
		return this.item(345) || undefined;
	}

	public get 346(): string | undefined {
		return this.item(346) || undefined;
	}

	public get 347(): string | undefined {
		return this.item(347) || undefined;
	}

	public get 348(): string | undefined {
		return this.item(348) || undefined;
	}

	public get 349(): string | undefined {
		return this.item(349) || undefined;
	}

	public get 350(): string | undefined {
		return this.item(350) || undefined;
	}

	public get 351(): string | undefined {
		return this.item(351) || undefined;
	}

	public get 352(): string | undefined {
		return this.item(352) || undefined;
	}

	public get 353(): string | undefined {
		return this.item(353) || undefined;
	}

	public get 354(): string | undefined {
		return this.item(354) || undefined;
	}

	public get 355(): string | undefined {
		return this.item(355) || undefined;
	}

	public get 356(): string | undefined {
		return this.item(356) || undefined;
	}

	public get 357(): string | undefined {
		return this.item(357) || undefined;
	}

	public get 358(): string | undefined {
		return this.item(358) || undefined;
	}

	public get 359(): string | undefined {
		return this.item(359) || undefined;
	}

	public get 360(): string | undefined {
		return this.item(360) || undefined;
	}

	public get 361(): string | undefined {
		return this.item(361) || undefined;
	}

	public get 362(): string | undefined {
		return this.item(362) || undefined;
	}

	public get 363(): string | undefined {
		return this.item(363) || undefined;
	}

	public get 364(): string | undefined {
		return this.item(364) || undefined;
	}

	public get 365(): string | undefined {
		return this.item(365) || undefined;
	}

	public get 366(): string | undefined {
		return this.item(366) || undefined;
	}

	public get 367(): string | undefined {
		return this.item(367) || undefined;
	}

	public get 368(): string | undefined {
		return this.item(368) || undefined;
	}
	public get 369(): string | undefined {
		return this.item(369) || undefined;
	}

	public get 370(): string | undefined {
		return this.item(370) || undefined;
	}

	public get 371(): string | undefined {
		return this.item(371) || undefined;
	}

	public get 372(): string | undefined {
		return this.item(372) || undefined;
	}

	public get 373(): string | undefined {
		return this.item(373) || undefined;
	}

	public get 374(): string | undefined {
		return this.item(374) || undefined;
	}

	public get 375(): string | undefined {
		return this.item(375) || undefined;
	}

	public get 376(): string | undefined {
		return this.item(376) || undefined;
	}

	public get 377(): string | undefined {
		return this.item(377) || undefined;
	}

	public get 378(): string | undefined {
		return this.item(378) || undefined;
	}

	public get 379(): string | undefined {
		return this.item(379) || undefined;
	}

	public get 380(): string | undefined {
		return this.item(380) || undefined;
	}

	public get 381(): string | undefined {
		return this.item(381) || undefined;
	}

	public get 382(): string | undefined {
		return this.item(382) || undefined;
	}

	public get 383(): string | undefined {
		return this.item(383) || undefined;
	}

	public get 384(): string | undefined {
		return this.item(384) || undefined;
	}

	public get 385(): string | undefined {
		return this.item(385) || undefined;
	}

	public get 386(): string | undefined {
		return this.item(386) || undefined;
	}

	public get 387(): string | undefined {
		return this.item(387) || undefined;
	}

	public get 388(): string | undefined {
		return this.item(388) || undefined;
	}

	public get 389(): string | undefined {
		return this.item(389) || undefined;
	}

	public get 390(): string | undefined {
		return this.item(390) || undefined;
	}

	public get 391(): string | undefined {
		return this.item(391) || undefined;
	}

	public get 392(): string | undefined {
		return this.item(392) || undefined;
	}

	public get 393(): string | undefined {
		return this.item(393) || undefined;
	}

	/**
	 * CSS properties
	 */

	public get accentColor(): string {
		return this.getPropertyValue('accent-color');
	}

	public set accentColor(value: string) {
		this.setProperty('accent-color', value);
	}

	public get appRegion(): string {
		return this.getPropertyValue('app-region');
	}

	public set appRegion(value: string) {
		this.setProperty('app-region', value);
	}

	public get alignContent(): string {
		return this.getPropertyValue('align-content');
	}

	public set alignContent(value: string) {
		this.setProperty('align-content', value);
	}

	public get alignItems(): string {
		return this.getPropertyValue('align-items');
	}

	public set alignItems(value: string) {
		this.setProperty('align-items', value);
	}

	public get alignSelf(): string {
		return this.getPropertyValue('align-self');
	}

	public set alignSelf(value: string) {
		this.setProperty('align-self', value);
	}

	public get alignmentBaseline(): string {
		return this.getPropertyValue('alignment-baseline');
	}

	public set alignmentBaseline(value: string) {
		this.setProperty('alignment-baseline', value);
	}

	public get all(): string {
		return this.getPropertyValue('all');
	}

	public set all(value: string) {
		this.setProperty('all', value);
	}

	public get animation(): string {
		return this.getPropertyValue('animation');
	}

	public set animation(value: string) {
		this.setProperty('animation', value);
	}

	public get animationDelay(): string {
		return this.getPropertyValue('animation-delay');
	}

	public set animationDelay(value: string) {
		this.setProperty('animation-delay', value);
	}

	public get animationDirection(): string {
		return this.getPropertyValue('animation-direction');
	}

	public set animationDirection(value: string) {
		this.setProperty('animation-direction', value);
	}

	public get animationDuration(): string {
		return this.getPropertyValue('animation-duration');
	}

	public set animationDuration(value: string) {
		this.setProperty('animation-duration', value);
	}

	public get animationFillMode(): string {
		return this.getPropertyValue('animation-fill-mode');
	}

	public set animationFillMode(value: string) {
		this.setProperty('animation-fill-mode', value);
	}

	public get animationIterationCount(): string {
		return this.getPropertyValue('animation-iteration-count');
	}

	public set animationIterationCount(value: string) {
		this.setProperty('animation-iteration-count', value);
	}

	public get animationName(): string {
		return this.getPropertyValue('animation-name');
	}

	public set animationName(value: string) {
		this.setProperty('animation-name', value);
	}

	public get animationPlayState(): string {
		return this.getPropertyValue('animation-play-state');
	}

	public set animationPlayState(value: string) {
		this.setProperty('animation-play-state', value);
	}

	public get animationTimingFunction(): string {
		return this.getPropertyValue('animation-timing-function');
	}

	public set animationTimingFunction(value: string) {
		this.setProperty('animation-timing-function', value);
	}

	public get appearance(): string {
		return this.getPropertyValue('appearance');
	}

	public set appearance(value: string) {
		this.setProperty('appearance', value);
	}

	public get backdropFilter(): string {
		return this.getPropertyValue('backdrop-filter');
	}

	public set backdropFilter(value: string) {
		this.setProperty('backdrop-filter', value);
	}

	public get backfaceVisibility(): string {
		return this.getPropertyValue('backface-visibility');
	}

	public set backfaceVisibility(value: string) {
		this.setProperty('backface-visibility', value);
	}

	public get background(): string {
		return this.getPropertyValue('background');
	}

	public set background(value: string) {
		this.setProperty('background', value);
	}

	public get backgroundAttachment(): string {
		return this.getPropertyValue('background-attachment');
	}

	public set backgroundAttachment(value: string) {
		this.setProperty('background-attachment', value);
	}

	public get backgroundBlendMode(): string {
		return this.getPropertyValue('background-blend-mode');
	}

	public set backgroundBlendMode(value: string) {
		this.setProperty('background-blend-mode', value);
	}

	public get backgroundClip(): string {
		return this.getPropertyValue('background-clip');
	}

	public set backgroundClip(value: string) {
		this.setProperty('background-clip', value);
	}

	public get backgroundColor(): string {
		return this.getPropertyValue('background-color');
	}

	public set backgroundColor(value: string) {
		this.setProperty('background-color', value);
	}

	public get backgroundImage(): string {
		return this.getPropertyValue('background-image');
	}

	public set backgroundImage(value: string) {
		this.setProperty('background-image', value);
	}

	public get backgroundOrigin(): string {
		return this.getPropertyValue('background-origin');
	}

	public set backgroundOrigin(value: string) {
		this.setProperty('background-origin', value);
	}

	public get backgroundPosition(): string {
		return this.getPropertyValue('background-position');
	}

	public set backgroundPosition(value: string) {
		this.setProperty('background-position', value);
	}

	public get backgroundPositionX(): string {
		return this.getPropertyValue('background-position-x');
	}

	public set backgroundPositionX(value: string) {
		this.setProperty('background-position-x', value);
	}

	public get backgroundPositionY(): string {
		return this.getPropertyValue('background-position-y');
	}

	public set backgroundPositionY(value: string) {
		this.setProperty('background-position-y', value);
	}

	public get backgroundRepeat(): string {
		return this.getPropertyValue('background-repeat');
	}

	public set backgroundRepeat(value: string) {
		this.setProperty('background-repeat', value);
	}

	public get backgroundRepeatX(): string {
		return this.getPropertyValue('background-repeat-x');
	}

	public set backgroundRepeatX(value: string) {
		this.setProperty('background-repeat-x', value);
	}

	public get backgroundRepeatY(): string {
		return this.getPropertyValue('background-repeat-y');
	}

	public set backgroundRepeatY(value: string) {
		this.setProperty('background-repeat-y', value);
	}

	public get backgroundSize(): string {
		return this.getPropertyValue('background-size');
	}

	public set backgroundSize(value: string) {
		this.setProperty('background-size', value);
	}

	public get baselineShift(): string {
		return this.getPropertyValue('baseline-shift');
	}

	public set baselineShift(value: string) {
		this.setProperty('baseline-shift', value);
	}

	public get blockSize(): string {
		return this.getPropertyValue('block-size');
	}

	public set blockSize(value: string) {
		this.setProperty('block-size', value);
	}

	public get border(): string {
		return this.getPropertyValue('border');
	}

	public set border(value: string) {
		this.setProperty('border', value);
	}

	public get borderBlockEnd(): string {
		return this.getPropertyValue('border-block-end');
	}

	public set borderBlockEnd(value: string) {
		this.setProperty('border-block-end', value);
	}

	public get borderBlockEndColor(): string {
		return this.getPropertyValue('border-block-end-color');
	}

	public set borderBlockEndColor(value: string) {
		this.setProperty('border-block-end-color', value);
	}

	public get borderBlockEndStyle(): string {
		return this.getPropertyValue('border-block-end-style');
	}

	public set borderBlockEndStyle(value: string) {
		this.setProperty('border-block-end-style', value);
	}

	public get borderBlockEndWidth(): string {
		return this.getPropertyValue('border-block-end-width');
	}

	public set borderBlockEndWidth(value: string) {
		this.setProperty('border-block-end-width', value);
	}

	public get borderBlockStart(): string {
		return this.getPropertyValue('border-block-start');
	}

	public set borderBlockStart(value: string) {
		this.setProperty('border-block-start', value);
	}

	public get borderBlockStartColor(): string {
		return this.getPropertyValue('border-block-start-color');
	}

	public set borderBlockStartColor(value: string) {
		this.setProperty('border-block-start-color', value);
	}

	public get borderBlockStartStyle(): string {
		return this.getPropertyValue('border-block-start-style');
	}

	public set borderBlockStartStyle(value: string) {
		this.setProperty('border-block-start-style', value);
	}

	public get borderBlockStartWidth(): string {
		return this.getPropertyValue('border-block-start-width');
	}

	public set borderBlockStartWidth(value: string) {
		this.setProperty('border-block-start-width', value);
	}

	public get borderBottom(): string {
		return this.getPropertyValue('border-bottom');
	}

	public set borderBottom(value: string) {
		this.setProperty('border-bottom', value);
	}

	public get borderBottomColor(): string {
		return this.getPropertyValue('border-bottom-color');
	}

	public set borderBottomColor(value: string) {
		this.setProperty('border-bottom-color', value);
	}

	public get borderBottomLeftRadius(): string {
		return this.getPropertyValue('border-bottom-left-radius');
	}

	public set borderBottomLeftRadius(value: string) {
		this.setProperty('border-bottom-left-radius', value);
	}

	public get borderBottomRightRadius(): string {
		return this.getPropertyValue('border-bottom-right-radius');
	}

	public set borderBottomRightRadius(value: string) {
		this.setProperty('border-bottom-right-radius', value);
	}

	public get borderBottomStyle(): string {
		return this.getPropertyValue('border-bottom-style');
	}

	public set borderBottomStyle(value: string) {
		this.setProperty('border-bottom-style', value);
	}

	public get borderBottomWidth(): string {
		return this.getPropertyValue('border-bottom-width');
	}

	public set borderBottomWidth(value: string) {
		this.setProperty('border-bottom-width', value);
	}

	public get borderCollapse(): string {
		return this.getPropertyValue('border-collapse');
	}

	public set borderCollapse(value: string) {
		this.setProperty('border-collapse', value);
	}

	public get borderColor(): string {
		return this.getPropertyValue('border-color');
	}

	public set borderColor(value: string) {
		this.setProperty('border-color', value);
	}

	public get borderImage(): string {
		return this.getPropertyValue('border-image');
	}

	public set borderImage(value: string) {
		this.setProperty('border-image', value);
	}

	public get borderImageOutset(): string {
		return this.getPropertyValue('border-image-outset');
	}

	public set borderImageOutset(value: string) {
		this.setProperty('border-image-outset', value);
	}

	public get borderImageRepeat(): string {
		return this.getPropertyValue('border-image-repeat');
	}

	public set borderImageRepeat(value: string) {
		this.setProperty('border-image-repeat', value);
	}

	public get borderImageSlice(): string {
		return this.getPropertyValue('border-image-slice');
	}

	public set borderImageSlice(value: string) {
		this.setProperty('border-image-slice', value);
	}

	public get borderImageSource(): string {
		return this.getPropertyValue('border-image-source');
	}

	public set borderImageSource(value: string) {
		this.setProperty('border-image-source', value);
	}

	public get borderImageWidth(): string {
		return this.getPropertyValue('border-image-width');
	}

	public set borderImageWidth(value: string) {
		this.setProperty('border-image-width', value);
	}

	public get borderInlineEnd(): string {
		return this.getPropertyValue('border-inline-end');
	}

	public set borderInlineEnd(value: string) {
		this.setProperty('border-inline-end', value);
	}

	public get borderInlineEndColor(): string {
		return this.getPropertyValue('border-inline-end-color');
	}

	public set borderInlineEndColor(value: string) {
		this.setProperty('border-inline-end-color', value);
	}

	public get borderInlineEndStyle(): string {
		return this.getPropertyValue('border-inline-end-style');
	}

	public set borderInlineEndStyle(value: string) {
		this.setProperty('border-inline-end-style', value);
	}

	public get borderInlineEndWidth(): string {
		return this.getPropertyValue('border-inline-end-width');
	}

	public set borderInlineEndWidth(value: string) {
		this.setProperty('border-inline-end-width', value);
	}

	public get borderInlineStart(): string {
		return this.getPropertyValue('border-inline-start');
	}

	public set borderInlineStart(value: string) {
		this.setProperty('border-inline-start', value);
	}

	public get borderInlineStartColor(): string {
		return this.getPropertyValue('border-inline-start-color');
	}

	public set borderInlineStartColor(value: string) {
		this.setProperty('border-inline-start-color', value);
	}

	public get borderInlineStartStyle(): string {
		return this.getPropertyValue('border-inline-start-style');
	}

	public set borderInlineStartStyle(value: string) {
		this.setProperty('border-inline-start-style', value);
	}

	public get borderInlineStartWidth(): string {
		return this.getPropertyValue('border-inline-start-width');
	}

	public set borderInlineStartWidth(value: string) {
		this.setProperty('border-inline-start-width', value);
	}

	public get borderLeft(): string {
		return this.getPropertyValue('border-left');
	}

	public set borderLeft(value: string) {
		this.setProperty('border-left', value);
	}

	public get borderLeftColor(): string {
		return this.getPropertyValue('border-left-color');
	}

	public set borderLeftColor(value: string) {
		this.setProperty('border-left-color', value);
	}

	public get borderLeftStyle(): string {
		return this.getPropertyValue('border-left-style');
	}

	public set borderLeftStyle(value: string) {
		this.setProperty('border-left-style', value);
	}

	public get borderLeftWidth(): string {
		return this.getPropertyValue('border-left-width');
	}

	public set borderLeftWidth(value: string) {
		this.setProperty('border-left-width', value);
	}

	public get borderRadius(): string {
		return this.getPropertyValue('border-radius');
	}

	public set borderRadius(value: string) {
		this.setProperty('border-radius', value);
	}

	public get borderRight(): string {
		return this.getPropertyValue('border-right');
	}

	public set borderRight(value: string) {
		this.setProperty('border-right', value);
	}

	public get borderRightColor(): string {
		return this.getPropertyValue('border-right-color');
	}

	public set borderRightColor(value: string) {
		this.setProperty('border-right-color', value);
	}

	public get borderRightStyle(): string {
		return this.getPropertyValue('border-right-style');
	}

	public set borderRightStyle(value: string) {
		this.setProperty('border-right-style', value);
	}

	public get borderRightWidth(): string {
		return this.getPropertyValue('border-right-width');
	}

	public set borderRightWidth(value: string) {
		this.setProperty('border-right-width', value);
	}

	public get borderSpacing(): string {
		return this.getPropertyValue('border-spacing');
	}

	public set borderSpacing(value: string) {
		this.setProperty('border-spacing', value);
	}

	public get borderStyle(): string {
		return this.getPropertyValue('border-style');
	}

	public set borderStyle(value: string) {
		this.setProperty('border-style', value);
	}

	public get borderTop(): string {
		return this.getPropertyValue('border-top');
	}

	public set borderTop(value: string) {
		this.setProperty('border-top', value);
	}

	public get borderTopColor(): string {
		return this.getPropertyValue('border-top-color');
	}

	public set borderTopColor(value: string) {
		this.setProperty('border-top-color', value);
	}

	public get borderTopLeftRadius(): string {
		return this.getPropertyValue('border-top-left-radius');
	}

	public set borderTopLeftRadius(value: string) {
		this.setProperty('border-top-left-radius', value);
	}

	public get borderTopRightRadius(): string {
		return this.getPropertyValue('border-top-right-radius');
	}

	public set borderTopRightRadius(value: string) {
		this.setProperty('border-top-right-radius', value);
	}

	public get borderTopStyle(): string {
		return this.getPropertyValue('border-top-style');
	}

	public set borderTopStyle(value: string) {
		this.setProperty('border-top-style', value);
	}

	public get borderTopWidth(): string {
		return this.getPropertyValue('border-top-width');
	}

	public set borderTopWidth(value: string) {
		this.setProperty('border-top-width', value);
	}

	public get borderWidth(): string {
		return this.getPropertyValue('border-width');
	}

	public set borderWidth(value: string) {
		this.setProperty('border-width', value);
	}

	public get borderEndEndRadius(): string {
		return this.getPropertyValue('border-end-end-radius');
	}

	public set borderEndEndRadius(value: string) {
		this.setProperty('border-end-end-radius', value);
	}

	public get borderEndStartRadius(): string {
		return this.getPropertyValue('border-end-start-radius');
	}

	public set borderEndStartRadius(value: string) {
		this.setProperty('border-end-start-radius', value);
	}

	public get borderStartEndRadius(): string {
		return this.getPropertyValue('border-start-end-radius');
	}

	public set borderStartEndRadius(value: string) {
		this.setProperty('border-start-end-radius', value);
	}

	public get borderStartStartRadius(): string {
		return this.getPropertyValue('border-start-start-radius');
	}

	public set borderStartStartRadius(value: string) {
		this.setProperty('border-start-start-radius', value);
	}

	public get bottom(): string {
		return this.getPropertyValue('bottom');
	}

	public set bottom(value: string) {
		this.setProperty('bottom', value);
	}

	public get boxShadow(): string {
		return this.getPropertyValue('box-shadow');
	}

	public set boxShadow(value: string) {
		this.setProperty('box-shadow', value);
	}

	public get boxSizing(): string {
		return this.getPropertyValue('box-sizing');
	}

	public set boxSizing(value: string) {
		this.setProperty('box-sizing', value);
	}

	public get breakAfter(): string {
		return this.getPropertyValue('break-after');
	}

	public set breakAfter(value: string) {
		this.setProperty('break-after', value);
	}

	public get breakBefore(): string {
		return this.getPropertyValue('break-before');
	}

	public set breakBefore(value: string) {
		this.setProperty('break-before', value);
	}

	public get breakInside(): string {
		return this.getPropertyValue('break-inside');
	}

	public set breakInside(value: string) {
		this.setProperty('break-inside', value);
	}

	public get bufferedRendering(): string {
		return this.getPropertyValue('buffered-rendering');
	}

	public set bufferedRendering(value: string) {
		this.setProperty('buffered-rendering', value);
	}

	public get captionSide(): string {
		return this.getPropertyValue('caption-side');
	}

	public set captionSide(value: string) {
		this.setProperty('caption-side', value);
	}

	public get caretColor(): string {
		return this.getPropertyValue('caret-color');
	}

	public set caretColor(value: string) {
		this.setProperty('caret-color', value);
	}

	public get clear(): string {
		return this.getPropertyValue('clear');
	}

	public set clear(value: string) {
		this.setProperty('clear', value);
	}

	public get clip(): string {
		return this.getPropertyValue('clip');
	}

	public set clip(value: string) {
		this.setProperty('clip', value);
	}

	public get clipPath(): string {
		return this.getPropertyValue('clip-path');
	}

	public set clipPath(value: string) {
		this.setProperty('clip-path', value);
	}

	public get clipRule(): string {
		return this.getPropertyValue('clip-rule');
	}

	public set clipRule(value: string) {
		this.setProperty('clip-rule', value);
	}

	public get color(): string {
		return this.getPropertyValue('color');
	}

	public set color(value: string) {
		this.setProperty('color', value);
	}

	public get colorInterpolation(): string {
		return this.getPropertyValue('color-interpolation');
	}

	public set colorInterpolation(value: string) {
		this.setProperty('color-interpolation', value);
	}

	public get colorInterpolationFilters(): string {
		return this.getPropertyValue('color-interpolation-filters');
	}

	public set colorInterpolationFilters(value: string) {
		this.setProperty('color-interpolation-filters', value);
	}

	public get colorRendering(): string {
		return this.getPropertyValue('color-rendering');
	}

	public set colorRendering(value: string) {
		this.setProperty('color-rendering', value);
	}

	public get colorScheme(): string {
		return this.getPropertyValue('color-scheme');
	}

	public set colorScheme(value: string) {
		this.setProperty('color-scheme', value);
	}

	public get columnCount(): string {
		return this.getPropertyValue('column-count');
	}

	public set columnCount(value: string) {
		this.setProperty('column-count', value);
	}

	public get columnFill(): string {
		return this.getPropertyValue('column-fill');
	}

	public set columnFill(value: string) {
		this.setProperty('column-fill', value);
	}

	public get columnGap(): string {
		return this.getPropertyValue('column-gap');
	}

	public set columnGap(value: string) {
		this.setProperty('column-gap', value);
	}

	public get columnRule(): string {
		return this.getPropertyValue('column-rule');
	}

	public set columnRule(value: string) {
		this.setProperty('column-rule', value);
	}

	public get columnRuleColor(): string {
		return this.getPropertyValue('column-rule-color');
	}

	public set columnRuleColor(value: string) {
		this.setProperty('column-rule-color', value);
	}

	public get columnRuleStyle(): string {
		return this.getPropertyValue('column-rule-style');
	}

	public set columnRuleStyle(value: string) {
		this.setProperty('column-rule-style', value);
	}

	public get columnRuleWidth(): string {
		return this.getPropertyValue('column-rule-width');
	}

	public set columnRuleWidth(value: string) {
		this.setProperty('column-rule-width', value);
	}

	public get columnSpan(): string {
		return this.getPropertyValue('column-span');
	}

	public set columnSpan(value: string) {
		this.setProperty('column-span', value);
	}

	public get columnWidth(): string {
		return this.getPropertyValue('column-width');
	}

	public set columnWidth(value: string) {
		this.setProperty('column-width', value);
	}

	public get columns(): string {
		return this.getPropertyValue('columns');
	}

	public set columns(value: string) {
		this.setProperty('columns', value);
	}

	public get contain(): string {
		return this.getPropertyValue('contain');
	}

	public set contain(value: string) {
		this.setProperty('contain', value);
	}

	public get containIntrinsicSize(): string {
		return this.getPropertyValue('contain-intrinsic-size');
	}

	public set containIntrinsicSize(value: string) {
		this.setProperty('contain-intrinsic-size', value);
	}

	public get content(): string {
		return this.getPropertyValue('content');
	}

	public set content(value: string) {
		this.setProperty('content', value);
	}

	public get contentVisibility(): string {
		return this.getPropertyValue('content-visibility');
	}

	public set contentVisibility(value: string) {
		this.setProperty('content-visibility', value);
	}

	public get counterIncrement(): string {
		return this.getPropertyValue('counter-increment');
	}

	public set counterIncrement(value: string) {
		this.setProperty('counter-increment', value);
	}

	public get counterReset(): string {
		return this.getPropertyValue('counter-reset');
	}

	public set counterReset(value: string) {
		this.setProperty('counter-reset', value);
	}

	public get counterSet(): string {
		return this.getPropertyValue('counter-set');
	}

	public set counterSet(value: string) {
		this.setProperty('counter-set', value);
	}

	public get containIntrinsicBlockSize(): string {
		return this.getPropertyValue('contain-intrinsic-block-size');
	}

	public set containIntrinsicBlockSize(value: string) {
		this.setProperty('contain-intrinsic-block-size', value);
	}

	public get containIntrinsicHeight(): string {
		return this.getPropertyValue('contain-intrinsic-height');
	}

	public set containIntrinsicHeight(value: string) {
		this.setProperty('contain-intrinsic-height', value);
	}

	public get containIntrinsicInlineSize(): string {
		return this.getPropertyValue('contain-intrinsic-inline-size');
	}

	public set containIntrinsicInlineSize(value: string) {
		this.setProperty('contain-intrinsic-inline-size', value);
	}

	public get containIntrinsicWidth(): string {
		return this.getPropertyValue('contain-intrinsic-width');
	}

	public set containIntrinsicWidth(value: string) {
		this.setProperty('contain-intrinsic-width', value);
	}

	public get cssFloat(): string {
		return this.getPropertyValue('css-float');
	}

	public set cssFloat(value: string) {
		this.setProperty('css-float', value);
	}

	public get cursor(): string {
		return this.getPropertyValue('cursor');
	}

	public set cursor(value: string) {
		this.setProperty('cursor', value);
	}

	public get cx(): string {
		return this.getPropertyValue('cx');
	}

	public set cx(value: string) {
		this.setProperty('cx', value);
	}

	public get cy(): string {
		return this.getPropertyValue('cy');
	}

	public set cy(value: string) {
		this.setProperty('cy', value);
	}

	public get d(): string {
		return this.getPropertyValue('d');
	}

	public set d(value: string) {
		this.setProperty('d', value);
	}

	public get direction(): string {
		return this.getPropertyValue('direction');
	}

	public set direction(value: string) {
		this.setProperty('direction', value);
	}

	public get display(): string {
		return this.getPropertyValue('display');
	}

	public set display(value: string) {
		this.setProperty('display', value);
	}

	public get dominantBaseline(): string {
		return this.getPropertyValue('dominant-baseline');
	}

	public set dominantBaseline(value: string) {
		this.setProperty('dominant-baseline', value);
	}

	public get emptyCells(): string {
		return this.getPropertyValue('empty-cells');
	}

	public set emptyCells(value: string) {
		this.setProperty('empty-cells', value);
	}

	public get fill(): string {
		return this.getPropertyValue('fill');
	}

	public set fill(value: string) {
		this.setProperty('fill', value);
	}

	public get fillOpacity(): string {
		return this.getPropertyValue('fill-opacity');
	}

	public set fillOpacity(value: string) {
		this.setProperty('fill-opacity', value);
	}

	public get fillRule(): string {
		return this.getPropertyValue('fill-rule');
	}

	public set fillRule(value: string) {
		this.setProperty('fill-rule', value);
	}

	public get filter(): string {
		return this.getPropertyValue('filter');
	}

	public set filter(value: string) {
		this.setProperty('filter', value);
	}

	public get flex(): string {
		return this.getPropertyValue('flex');
	}

	public set flex(value: string) {
		this.setProperty('flex', value);
	}

	public get flexBasis(): string {
		return this.getPropertyValue('flex-basis');
	}

	public set flexBasis(value: string) {
		this.setProperty('flex-basis', value);
	}

	public get flexDirection(): string {
		return this.getPropertyValue('flex-direction');
	}

	public set flexDirection(value: string) {
		this.setProperty('flex-direction', value);
	}

	public get flexFlow(): string {
		return this.getPropertyValue('flex-flow');
	}

	public set flexFlow(value: string) {
		this.setProperty('flex-flow', value);
	}

	public get flexGrow(): string {
		return this.getPropertyValue('flex-grow');
	}

	public set flexGrow(value: string) {
		this.setProperty('flex-grow', value);
	}

	public get flexShrink(): string {
		return this.getPropertyValue('flex-shrink');
	}

	public set flexShrink(value: string) {
		this.setProperty('flex-shrink', value);
	}

	public get flexWrap(): string {
		return this.getPropertyValue('flex-wrap');
	}

	public set flexWrap(value: string) {
		this.setProperty('flex-wrap', value);
	}

	public get float(): string {
		return this.getPropertyValue('float');
	}

	public set float(value: string) {
		this.setProperty('float', value);
	}

	public get floodColor(): string {
		return this.getPropertyValue('flood-color');
	}

	public set floodColor(value: string) {
		this.setProperty('flood-color', value);
	}

	public get floodOpacity(): string {
		return this.getPropertyValue('flood-opacity');
	}

	public set floodOpacity(value: string) {
		this.setProperty('flood-opacity', value);
	}

	public get font(): string {
		return this.getPropertyValue('font');
	}

	public set font(value: string) {
		this.setProperty('font', value);
	}

	public get fontDisplay(): string {
		return this.getPropertyValue('font-display');
	}

	public set fontDisplay(value: string) {
		this.setProperty('font-display', value);
	}

	public get fontFamily(): string {
		return this.getPropertyValue('font-family');
	}

	public set fontFamily(value: string) {
		this.setProperty('font-family', value);
	}

	public get fontFeatureSettings(): string {
		return this.getPropertyValue('font-feature-settings');
	}

	public set fontFeatureSettings(value: string) {
		this.setProperty('font-feature-settings', value);
	}

	public get fontKerning(): string {
		return this.getPropertyValue('font-kerning');
	}

	public set fontKerning(value: string) {
		this.setProperty('font-kerning', value);
	}

	public get fontOpticalSizing(): string {
		return this.getPropertyValue('font-optical-sizing');
	}

	public set fontOpticalSizing(value: string) {
		this.setProperty('font-optical-sizing', value);
	}

	public get fontSize(): string {
		return this.getPropertyValue('font-size');
	}

	public set fontSize(value: string) {
		this.setProperty('font-size', value);
	}

	public get fontStretch(): string {
		return this.getPropertyValue('font-stretch');
	}

	public set fontStretch(value: string) {
		this.setProperty('font-stretch', value);
	}

	public get fontStyle(): string {
		return this.getPropertyValue('font-style');
	}

	public set fontStyle(value: string) {
		this.setProperty('font-style', value);
	}

	public get fontVariant(): string {
		return this.getPropertyValue('font-variant');
	}

	public set fontVariant(value: string) {
		this.setProperty('font-variant', value);
	}

	public get fontVariantCaps(): string {
		return this.getPropertyValue('font-variant-caps');
	}

	public set fontVariantCaps(value: string) {
		this.setProperty('font-variant-caps', value);
	}

	public get fontVariantEastAsian(): string {
		return this.getPropertyValue('font-variant-east-asian');
	}

	public set fontVariantEastAsian(value: string) {
		this.setProperty('font-variant-east-asian', value);
	}

	public get fontVariantLigatures(): string {
		return this.getPropertyValue('font-variant-ligatures');
	}

	public set fontVariantLigatures(value: string) {
		this.setProperty('font-variant-ligatures', value);
	}

	public get fontVariantNumeric(): string {
		return this.getPropertyValue('font-variant-numeric');
	}

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

		return <CSSStyleDeclarationPropertyManager>cache.propertyManager;
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
