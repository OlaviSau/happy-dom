/**
 * CSSStyleDeclaration Behavioral Contract Tests
 *
 * These tests define the EXACT behavior our generated CSSStyleDeclaration must
 * exhibit. Each test documents a specific interaction pattern between shorthands,
 * longhands, serialization, and the public API.
 *
 * Run against the generated code:
 *   node --experimental-vm-modules behavioral-contract-tests.mjs
 *
 * The `expectedValues` in each test were captured from Chrome (see
 * capture-chrome-behavior.html). If Chrome's behavior changes, update both
 * the expected values and the generated code.
 */

// ---------------------------------------------------------------
// PLACEHOLDER: Replace this import with the generated module path
// ---------------------------------------------------------------
// import { createCSSStyleDeclaration } from '../out/css/declaration/CSSStyleDeclaration.js';
//
// For now we define a factory. When we have the real module:
//   function freshStyle() { return createCSSStyleDeclaration(); }
// ---------------------------------------------------------------

let passCount = 0;
let failCount = 0;
const failures = [];

function assertEqual(actual, expected, label) {
	if (actual !== expected) {
		failCount++;
		failures.push({ label, actual, expected });
		return false;
	}
	passCount++;
	return true;
}

function section(name) {
	console.log(`\n━━━ ${name} ━━━`);
}

function test(name, fn) {
	try {
		fn();
	} catch (e) {
		failCount++;
		failures.push({ label: name, error: e.message });
	}
}

// ============================================================
// We define all tests as data so they can be run against any
// CSSStyleDeclaration implementation. Each test is a function
// that receives a `freshStyle()` factory.
// ============================================================

export function runAllTests(freshStyle) {
	// ============================================================
	// 1. SHORTHAND → LONGHAND EXPANSION
	//
	// Setting a shorthand property MUST decompose the value into
	// its constituent longhand properties. The shorthand itself
	// is NOT stored — only longhands are stored. Reading the
	// shorthand back recomposes from longhands.
	// ============================================================
	section('1. SHORTHAND → LONGHAND EXPANSION');

	test('margin: single value expands to all four sides', () => {
		const s = freshStyle();
		s.margin = '10px';
		assertEqual(s.marginTop, '10px', 'margin 1v → marginTop');
		assertEqual(s.marginRight, '10px', 'margin 1v → marginRight');
		assertEqual(s.marginBottom, '10px', 'margin 1v → marginBottom');
		assertEqual(s.marginLeft, '10px', 'margin 1v → marginLeft');
		assertEqual(s.margin, '10px', 'margin 1v → margin readback');
	});

	test('margin: two values → vertical | horizontal', () => {
		const s = freshStyle();
		s.margin = '10px 20px';
		assertEqual(s.marginTop, '10px', 'margin 2v → marginTop');
		assertEqual(s.marginRight, '20px', 'margin 2v → marginRight');
		assertEqual(s.marginBottom, '10px', 'margin 2v → marginBottom');
		assertEqual(s.marginLeft, '20px', 'margin 2v → marginLeft');
		assertEqual(s.margin, '10px 20px', 'margin 2v → margin readback');
	});

	test('margin: three values → top | horizontal | bottom', () => {
		const s = freshStyle();
		s.margin = '10px 20px 30px';
		assertEqual(s.marginTop, '10px', 'margin 3v → marginTop');
		assertEqual(s.marginRight, '20px', 'margin 3v → marginRight');
		assertEqual(s.marginBottom, '30px', 'margin 3v → marginBottom');
		assertEqual(s.marginLeft, '20px', 'margin 3v → marginLeft');
		assertEqual(s.margin, '10px 20px 30px', 'margin 3v → margin readback');
	});

	test('margin: four values → top | right | bottom | left', () => {
		const s = freshStyle();
		s.margin = '10px 20px 30px 40px';
		assertEqual(s.marginTop, '10px', 'margin 4v → marginTop');
		assertEqual(s.marginRight, '20px', 'margin 4v → marginRight');
		assertEqual(s.marginBottom, '30px', 'margin 4v → marginBottom');
		assertEqual(s.marginLeft, '40px', 'margin 4v → marginLeft');
		assertEqual(s.margin, '10px 20px 30px 40px', 'margin 4v → margin readback');
	});

	test('border: full shorthand expands to all longhands', () => {
		const s = freshStyle();
		s.border = '1px solid red';
		assertEqual(s.borderTopWidth, '1px', 'border → borderTopWidth');
		assertEqual(s.borderTopStyle, 'solid', 'border → borderTopStyle');
		assertEqual(s.borderTopColor, 'red', 'border → borderTopColor');
		assertEqual(s.borderRightWidth, '1px', 'border → borderRightWidth');
		assertEqual(s.borderRightStyle, 'solid', 'border → borderRightStyle');
		assertEqual(s.borderRightColor, 'red', 'border → borderRightColor');
		assertEqual(s.borderBottomWidth, '1px', 'border → borderBottomWidth');
		assertEqual(s.borderBottomStyle, 'solid', 'border → borderBottomStyle');
		assertEqual(s.borderBottomColor, 'red', 'border → borderBottomColor');
		assertEqual(s.borderLeftWidth, '1px', 'border → borderLeftWidth');
		assertEqual(s.borderLeftStyle, 'solid', 'border → borderLeftStyle');
		assertEqual(s.borderLeftColor, 'red', 'border → borderLeftColor');
	});

	test('flex: single number means flex-grow with implicit shrink and basis', () => {
		const s = freshStyle();
		s.flex = '1';
		assertEqual(s.flexGrow, '1', 'flex 1 → flexGrow');
		assertEqual(s.flexShrink, '1', 'flex 1 → flexShrink');
		assertEqual(s.flexBasis, '0%', 'flex 1 → flexBasis');
	});

	test('flex: three values → grow shrink basis', () => {
		const s = freshStyle();
		s.flex = '2 3 100px';
		assertEqual(s.flexGrow, '2', 'flex 3v → flexGrow');
		assertEqual(s.flexShrink, '3', 'flex 3v → flexShrink');
		assertEqual(s.flexBasis, '100px', 'flex 3v → flexBasis');
	});

	test('overflow: two values → overflowX | overflowY', () => {
		const s = freshStyle();
		s.overflow = 'hidden scroll';
		assertEqual(s.overflowX, 'hidden', 'overflow 2v → overflowX');
		assertEqual(s.overflowY, 'scroll', 'overflow 2v → overflowY');
	});

	test('gap: two values → rowGap | columnGap', () => {
		const s = freshStyle();
		s.gap = '10px 20px';
		assertEqual(s.rowGap, '10px', 'gap 2v → rowGap');
		assertEqual(s.columnGap, '20px', 'gap 2v → columnGap');
	});

	test('inset: four values → top right bottom left', () => {
		const s = freshStyle();
		s.inset = '10px 20px 30px 40px';
		assertEqual(s.top, '10px', 'inset 4v → top');
		assertEqual(s.right, '20px', 'inset 4v → right');
		assertEqual(s.bottom, '30px', 'inset 4v → bottom');
		assertEqual(s.left, '40px', 'inset 4v → left');
	});

	// ============================================================
	// 2. SHORTHAND RECOMPOSITION
	//
	// Reading a shorthand MUST recompose from its stored longhands.
	// If all longhands are set and compatible, return collapsed form.
	// If any longhand is missing or incompatible, return ''.
	// ============================================================
	section('2. SHORTHAND RECOMPOSITION');

	test('margin: all same → single value', () => {
		const s = freshStyle();
		s.marginTop = '10px';
		s.marginRight = '10px';
		s.marginBottom = '10px';
		s.marginLeft = '10px';
		assertEqual(s.margin, '10px', 'all same → collapsed margin');
	});

	test('margin: vertical=horizontal pairs → two values', () => {
		const s = freshStyle();
		s.marginTop = '10px';
		s.marginRight = '20px';
		s.marginBottom = '10px';
		s.marginLeft = '20px';
		assertEqual(s.margin, '10px 20px', 'v/h pairs → 2-value margin');
	});

	test('margin: all different → four values', () => {
		const s = freshStyle();
		s.marginTop = '10px';
		s.marginRight = '20px';
		s.marginBottom = '30px';
		s.marginLeft = '40px';
		assertEqual(s.margin, '10px 20px 30px 40px', 'all diff → 4-value margin');
	});

	test('margin: only some longhands set → empty shorthand', () => {
		const s = freshStyle();
		s.marginTop = '10px';
		s.marginRight = '20px';
		// marginBottom and marginLeft NOT set
		assertEqual(s.margin, '', 'partial → empty margin');
	});

	test('border: all longhands uniform → collapsed shorthand', () => {
		const s = freshStyle();
		s.borderTopWidth = '1px';
		s.borderRightWidth = '1px';
		s.borderBottomWidth = '1px';
		s.borderLeftWidth = '1px';
		s.borderTopStyle = 'solid';
		s.borderRightStyle = 'solid';
		s.borderBottomStyle = 'solid';
		s.borderLeftStyle = 'solid';
		s.borderTopColor = 'red';
		s.borderRightColor = 'red';
		s.borderBottomColor = 'red';
		s.borderLeftColor = 'red';
		assertEqual(s.border, '1px solid red', 'uniform border → collapsed');
	});

	test('border: widths differ → empty border shorthand', () => {
		const s = freshStyle();
		s.borderTopWidth = '1px';
		s.borderRightWidth = '2px';
		s.borderBottomWidth = '1px';
		s.borderLeftWidth = '1px';
		s.borderTopStyle = 'solid';
		s.borderRightStyle = 'solid';
		s.borderBottomStyle = 'solid';
		s.borderLeftStyle = 'solid';
		s.borderTopColor = 'red';
		s.borderRightColor = 'red';
		s.borderBottomColor = 'red';
		s.borderLeftColor = 'red';
		assertEqual(s.border, '', 'non-uniform widths → empty border');
	});

	// ============================================================
	// 3. LONGHAND OVERRIDE → SHORTHAND INVALIDATION
	//
	// After setting a shorthand, overriding one longhand MUST cause
	// the shorthand to read back as '' (since longhands no longer
	// match). The OTHER longhands must remain intact.
	// ============================================================
	section('3. LONGHAND OVERRIDE → SHORTHAND INVALIDATION');

	test('set margin then override marginTop → margin is empty', () => {
		const s = freshStyle();
		s.margin = '10px';
		s.marginTop = '20px';
		assertEqual(s.marginTop, '20px', 'override preserved');
		assertEqual(s.marginRight, '10px', 'other longhands intact');
		assertEqual(s.marginBottom, '10px', 'other longhands intact');
		assertEqual(s.marginLeft, '10px', 'other longhands intact');
		assertEqual(s.margin, '', 'shorthand invalidated');
	});

	test('set border then override borderTopWidth → border is empty', () => {
		const s = freshStyle();
		s.border = '1px solid red';
		s.borderTopWidth = '3px';
		assertEqual(s.borderTopWidth, '3px', 'override preserved');
		assertEqual(s.borderRightWidth, '1px', 'other longhands intact');
		assertEqual(s.border, '', 'shorthand invalidated');
	});

	test('set padding then override paddingLeft → padding invalidated', () => {
		const s = freshStyle();
		s.padding = '10px';
		s.paddingLeft = '20px';
		assertEqual(s.paddingLeft, '20px', 'override preserved');
		assertEqual(s.paddingTop, '10px', 'other longhands intact');
		assertEqual(s.padding, '', 'shorthand invalidated');
	});

	// ============================================================
	// 4. REMOVE PROPERTY
	//
	// Removing a shorthand MUST remove ALL its longhands.
	// Removing a longhand MUST remove ONLY that longhand;
	// other longhands (and the shorthand read) are unaffected
	// (shorthand becomes '' since longhands are incomplete).
	// ============================================================
	section('4. REMOVE PROPERTY');

	test('removeProperty shorthand removes all longhands', () => {
		const s = freshStyle();
		s.margin = '10px';
		s.removeProperty('margin');
		assertEqual(s.marginTop, '', 'longhand cleared');
		assertEqual(s.marginRight, '', 'longhand cleared');
		assertEqual(s.margin, '', 'shorthand cleared');
		assertEqual(s.length, 0, 'length is 0');
		assertEqual(s.cssText, '', 'cssText is empty');
	});

	test('removeProperty longhand keeps sibling longhands', () => {
		const s = freshStyle();
		s.margin = '10px';
		s.removeProperty('margin-top');
		assertEqual(s.marginTop, '', 'removed longhand is empty');
		assertEqual(s.marginRight, '10px', 'sibling longhand preserved');
		assertEqual(s.marginBottom, '10px', 'sibling longhand preserved');
		assertEqual(s.marginLeft, '10px', 'sibling longhand preserved');
		assertEqual(s.margin, '', 'shorthand is empty (incomplete)');
	});

	test('removeProperty border clears all border longhands', () => {
		const s = freshStyle();
		s.border = '1px solid red';
		s.removeProperty('border');
		assertEqual(s.borderTopWidth, '', 'border longhand cleared');
		assertEqual(s.borderTopStyle, '', 'border longhand cleared');
		assertEqual(s.borderTopColor, '', 'border longhand cleared');
		assertEqual(s.length, 0, 'length is 0');
	});

	// ============================================================
	// 5. VALUE NORMALIZATION
	//
	// Some values are normalized when stored. Keywords are
	// lowercased. Colors may be canonicalized. Zero-length values
	// may drop units.
	// ============================================================
	section('5. VALUE NORMALIZATION');

	test('keywords are lowercased', () => {
		const s = freshStyle();
		s.display = 'BLOCK';
		assertEqual(s.display, 'block', 'keyword lowercased');
	});

	test('color names are lowercased', () => {
		const s = freshStyle();
		s.color = 'RED';
		assertEqual(s.color, 'red', 'color name lowercased');
	});

	test('border-style keyword lowercased', () => {
		const s = freshStyle();
		s.borderTopStyle = 'SOLID';
		assertEqual(s.borderTopStyle, 'solid', 'border-style lowercased');
	});

	// ============================================================
	// 6. INVALID VALUES (silently ignored)
	//
	// Setting an invalid value MUST be silently ignored.
	// It must NOT clear the existing value.
	// It must NOT throw an error.
	// ============================================================
	section('6. INVALID VALUES');

	test('invalid keyword is ignored', () => {
		const s = freshStyle();
		s.display = 'banana';
		assertEqual(s.display, '', 'invalid value → empty');
	});

	test('invalid value does not clear existing', () => {
		const s = freshStyle();
		s.display = 'block';
		s.display = 'banana';
		assertEqual(s.display, 'block', 'existing value preserved');
	});

	test('negative padding rejected', () => {
		const s = freshStyle();
		s.paddingTop = '-10px';
		assertEqual(s.paddingTop, '', 'negative padding rejected');
	});

	test('negative margin accepted', () => {
		const s = freshStyle();
		s.marginTop = '-10px';
		assertEqual(s.marginTop, '-10px', 'negative margin accepted');
	});

	// ============================================================
	// 7. EMPTY STRING REMOVES PROPERTY
	//
	// Setting a property to '' MUST remove it (equivalent to
	// removeProperty).
	// ============================================================
	section('7. EMPTY STRING REMOVES PROPERTY');

	test('empty string removes property', () => {
		const s = freshStyle();
		s.display = 'block';
		s.display = '';
		assertEqual(s.display, '', 'property removed');
		assertEqual(s.length, 0, 'length is 0');
	});

	// ============================================================
	// 8. PRIORITY / !important
	//
	// setProperty with 'important' priority sets the flag.
	// Shorthand !important propagates to all longhands.
	// cssText serializes !important.
	// ============================================================
	section('8. PRIORITY / !important');

	test('setProperty with important', () => {
		const s = freshStyle();
		s.setProperty('color', 'red', 'important');
		assertEqual(s.color, 'red', 'value set');
		assertEqual(s.getPropertyPriority('color'), 'important', 'priority set');
	});

	test('shorthand important propagates to longhands', () => {
		const s = freshStyle();
		s.setProperty('margin', '10px', 'important');
		assertEqual(s.getPropertyPriority('margin-top'), 'important', 'longhand has priority');
		assertEqual(s.getPropertyPriority('margin-right'), 'important', 'longhand has priority');
	});

	test('cssText includes !important', () => {
		const s = freshStyle();
		s.setProperty('color', 'red', 'important');
		assertEqual(s.cssText.includes('!important'), true, 'cssText has !important');
	});

	// ============================================================
	// 9. cssText SERIALIZATION
	//
	// cssText MUST serialize all set properties. Longhands that
	// form a complete shorthand SHOULD be collapsed. Setting
	// cssText replaces ALL properties.
	// ============================================================
	section('9. cssText SERIALIZATION');

	test('cssText replaces all existing properties', () => {
		const s = freshStyle();
		s.color = 'red';
		s.display = 'block';
		s.cssText = 'width: 100px;';
		assertEqual(s.color, '', 'old property cleared');
		assertEqual(s.display, '', 'old property cleared');
		assertEqual(s.width, '100px', 'new property set');
	});

	test('cssText parsed into properties', () => {
		const s = freshStyle();
		s.cssText = 'color: red; display: block; margin: 10px;';
		assertEqual(s.color, 'red', 'color parsed');
		assertEqual(s.display, 'block', 'display parsed');
		assertEqual(s.marginTop, '10px', 'margin expanded');
	});

	// ============================================================
	// 10. length AND item()
	//
	// length reflects the number of LONGHAND properties set.
	// item() returns kebab-case property names.
	// Out-of-bounds item() returns ''.
	// ============================================================
	section('10. length AND item()');

	test('length counts longhands', () => {
		const s = freshStyle();
		s.color = 'red';
		s.display = 'block';
		assertEqual(s.length, 2, 'two longhands');
	});

	test('shorthand expansion increases length', () => {
		const s = freshStyle();
		s.margin = '10px';
		assertEqual(s.length, 4, 'margin expands to 4 longhands');
	});

	test('item returns kebab-case', () => {
		const s = freshStyle();
		s.backgroundColor = 'red';
		assertEqual(s.item(0), 'background-color', 'item returns kebab-case');
	});

	test('item out of bounds returns empty string', () => {
		const s = freshStyle();
		s.color = 'red';
		assertEqual(s.item(99), '', 'out of bounds → empty string');
	});

	// ============================================================
	// 11. getPropertyValue vs ACCESSOR PARITY
	//
	// style.marginTop MUST equal style.getPropertyValue('margin-top')
	// ============================================================
	section('11. getPropertyValue vs ACCESSOR PARITY');

	test('accessor equals getPropertyValue', () => {
		const s = freshStyle();
		s.marginTop = '10px';
		assertEqual(s.marginTop, s.getPropertyValue('margin-top'), 'accessor === getPropertyValue');
	});

	test('camelCase set, kebab-case get', () => {
		const s = freshStyle();
		s.backgroundColor = 'red';
		assertEqual(
			s.backgroundColor,
			s.getPropertyValue('background-color'),
			'camelCase → kebab-case parity'
		);
	});

	// ============================================================
	// 12. CSS CUSTOM PROPERTIES
	//
	// Custom properties (--*) are stored and retrieved via
	// setProperty/getPropertyValue. They are NOT accessible
	// as named properties on the style object.
	// ============================================================
	section('12. CSS CUSTOM PROPERTIES');

	test('set and get custom property', () => {
		const s = freshStyle();
		s.setProperty('--my-color', 'red');
		assertEqual(s.getPropertyValue('--my-color'), 'red', 'custom property stored');
	});

	test('remove custom property', () => {
		const s = freshStyle();
		s.setProperty('--my-color', 'red');
		s.removeProperty('--my-color');
		assertEqual(s.getPropertyValue('--my-color'), '', 'custom property removed');
	});

	// ============================================================
	// SUMMARY
	// ============================================================
	console.log(`\n${'═'.repeat(40)}`);
	console.log(`RESULTS: ${passCount} passed, ${failCount} failed`);
	if (failures.length > 0) {
		console.log('\nFAILURES:');
		for (const f of failures) {
			if (f.error) {
				console.log(`  ✗ ${f.label}: ${f.error}`);
			} else {
				console.log(
					`  ✗ ${f.label}: expected ${JSON.stringify(f.expected)}, got ${JSON.stringify(f.actual)}`
				);
			}
		}
	}
	console.log('');

	return { passCount, failCount, failures };
}
