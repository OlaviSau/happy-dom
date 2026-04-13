#!/usr/bin/env node
/**
 * Smoke test for the generated CSSStyleDeclaration.
 * Tests all 13 behavioral contracts (B1-B13).
 */

import CSSStyleDeclaration from '../out-compiled/css/declaration/CSSStyleDeclaration.js';
import { illegalConstructor } from '../out-compiled/PropertySymbol.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
	if (condition) {
		passed++;
	} else {
		failed++;
		console.error(`  ✗ FAIL: ${message}`);
	}
}

function assertEq(actual, expected, message) {
	if (actual === expected) {
		passed++;
	} else {
		failed++;
		console.error(
			`  ✗ FAIL: ${message} — expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
		);
	}
}

// Mock BrowserWindow with DOMException support
const mockWindow = { DOMException };

function fresh() {
	return new CSSStyleDeclaration(illegalConstructor, mockWindow);
}

console.log('=== B1: Shorthand → Longhand Expansion ===');
{
	const s = fresh();
	s.margin = '10px 20px';
	assertEq(s.marginTop, '10px', 'margin-top from margin: 10px 20px');
	assertEq(s.marginRight, '20px', 'margin-right from margin: 10px 20px');
	assertEq(s.marginBottom, '10px', 'margin-bottom from margin: 10px 20px');
	assertEq(s.marginLeft, '20px', 'margin-left from margin: 10px 20px');
}
{
	const s = fresh();
	s.padding = '5px';
	assertEq(s.paddingTop, '5px', 'padding-top from padding: 5px');
	assertEq(s.paddingRight, '5px', 'padding-right from padding: 5px');
	assertEq(s.paddingBottom, '5px', 'padding-bottom from padding: 5px');
	assertEq(s.paddingLeft, '5px', 'padding-left from padding: 5px');
}

console.log('=== B2: Shorthand Recomposition ===');
{
	const s = fresh();
	s.marginTop = '10px';
	s.marginRight = '10px';
	s.marginBottom = '10px';
	s.marginLeft = '10px';
	assertEq(s.margin, '10px', 'margin recomposition — all same');
}
{
	const s = fresh();
	s.marginTop = '10px';
	s.marginRight = '20px';
	s.marginBottom = '10px';
	s.marginLeft = '20px';
	assertEq(s.margin, '10px 20px', 'margin recomposition — 2 values');
}
{
	const s = fresh();
	s.marginTop = '10px';
	s.marginRight = '20px';
	s.marginBottom = '30px';
	s.marginLeft = '20px';
	assertEq(s.margin, '10px 20px 30px', 'margin recomposition — 3 values');
}

console.log('=== B3: Longhand Override Invalidates Shorthand ===');
{
	const s = fresh();
	s.margin = '10px';
	s.marginTop = '20px';
	assertEq(s.marginTop, '20px', 'overridden margin-top');
	assertEq(s.marginRight, '10px', 'unchanged margin-right');
	assertEq(s.margin, '20px 10px 10px', 'shorthand recomposes from current values');
}

console.log('=== B4: Remove Property ===');
{
	const s = fresh();
	s.margin = '10px';
	s.removeProperty('margin');
	assertEq(s.marginTop, '', 'margin-top removed');
	assertEq(s.marginRight, '', 'margin-right removed');
	assertEq(s.length, 0, 'length is 0 after removing shorthand');
}
{
	const s = fresh();
	s.margin = '10px';
	s.removeProperty('margin-top');
	assertEq(s.marginTop, '', 'margin-top removed individually');
	assertEq(s.marginRight, '10px', 'margin-right still set');
	assertEq(s.margin, '', 'shorthand empty after partial remove');
}

console.log('=== B5: Value Normalization ===');
{
	const s = fresh();
	s.display = 'BLOCK';
	assertEq(s.display, 'block', 'keyword lowercased');
}

console.log('=== B6: Invalid Values Silently Ignored ===');
{
	const s = fresh();
	s.display = 'block';
	s.display = 'banana';
	assertEq(s.display, 'block', 'invalid value does not change existing');
}

console.log('=== B7: Empty String Removes ===');
{
	const s = fresh();
	s.display = 'block';
	s.display = '';
	assertEq(s.display, '', 'empty string removes property');
	assertEq(s.length, 0, 'length is 0 after removal');
}

console.log('=== B8: Priority / !important ===');
{
	const s = fresh();
	s.setProperty('color', 'red', 'important');
	assertEq(s.getPropertyPriority('color'), 'important', 'priority is important');
	assertEq(s.color, 'red', 'value is red');
}

console.log('=== B9: cssText ===');
{
	const s = fresh();
	s.margin = '10px';
	const css = s.cssText;
	assert(css.includes('margin'), 'cssText contains margin');
	assert(css.includes('10px'), 'cssText contains value');
}
{
	const s = fresh();
	s.cssText = 'color: red; display: block;';
	assertEq(s.color, 'red', 'cssText set — color');
	assertEq(s.display, 'block', 'cssText set — display');
}
{
	const s = fresh();
	s.margin = '10px';
	s.cssText = 'color: red;';
	assertEq(s.margin, '', 'cssText replaces — old props gone');
	assertEq(s.color, 'red', 'cssText replaces — new props set');
}

console.log('=== B10: length and item() ===');
{
	const s = fresh();
	s.margin = '10px';
	assertEq(s.length, 4, 'margin expands to 4 longhands');
	assert(
		['margin-top', 'margin-right', 'margin-bottom', 'margin-left'].includes(s.item(0)),
		'item(0) is a margin longhand'
	);
}

console.log('=== B11: Accessor ↔ getPropertyValue Parity ===');
{
	const s = fresh();
	s.marginTop = '10px';
	assertEq(s.getPropertyValue('margin-top'), '10px', 'getPropertyValue matches accessor');
	assertEq(s.marginTop, s.getPropertyValue('margin-top'), 'accessor === getPropertyValue');
}

console.log('=== B12: Custom Properties ===');
{
	const s = fresh();
	s.setProperty('--my-var', '42px');
	assertEq(s.getPropertyValue('--my-var'), '42px', 'custom property stored');
	s.removeProperty('--my-var');
	assertEq(s.getPropertyValue('--my-var'), '', 'custom property removed');
}

console.log('=== B13: Alias Properties ===');
{
	const s = fresh();
	s.setProperty('-webkit-transform', 'rotate(45deg)');
	assertEq(s.getPropertyValue('transform'), 'rotate(45deg)', 'alias sets canonical');
}

console.log('=== Border Shorthand ===');
{
	const s = fresh();
	s.setProperty('border', '1px solid red');
	assertEq(s.getPropertyValue('border-top-width'), '1px', 'border → border-top-width');
	assertEq(s.getPropertyValue('border-top-style'), 'solid', 'border → border-top-style');
	assertEq(s.getPropertyValue('border-top-color'), 'red', 'border → border-top-color');
	assertEq(s.getPropertyValue('border-bottom-width'), '1px', 'border → border-bottom-width');
}

console.log('=== Flex Shorthand ===');
{
	const s = fresh();
	s.flex = '1';
	assertEq(s.flexGrow, '1', 'flex: 1 → flex-grow: 1');
	assertEq(s.flexShrink, '1', 'flex: 1 → flex-shrink: 1');
	assertEq(s.flexBasis, '0%', 'flex: 1 → flex-basis: 0%');
}
{
	const s = fresh();
	s.flex = 'none';
	assertEq(s.flexGrow, '0', 'flex: none → flex-grow: 0');
	assertEq(s.flexShrink, '0', 'flex: none → flex-shrink: 0');
	assertEq(s.flexBasis, 'auto', 'flex: none → flex-basis: auto');
}

console.log(`\n${'='.repeat(50)}`);
console.log(`Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
process.exit(failed > 0 ? 1 : 0);
