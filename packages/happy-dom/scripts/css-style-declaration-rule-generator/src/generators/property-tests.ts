/**
 * Generates a comprehensive per-property test suite.
 *
 * For every exposed CSS property, emits:
 * - set/get round-trip with a valid value
 * - keyword validation (first keyword accepted)
 * - invalid value rejection (for keyword-only properties)
 * - shorthand expansion (all longhands populated)
 * - alias delegation (canonical receives value)
 * - removeProperty works
 *
 * Output is a standalone ESM (.mjs) file that imports the compiled
 * CSSStyleDeclaration and runs all assertions.
 */

import type { IPropertyIR, IPropertyDefinition } from '../ir/property-ir.js';
import { kebabToCamelCase } from '../utils/name-utils.js';

// Same sets used in set-parser.ts — keep in sync
const COLOR_PROPERTIES = new Set([
	'color',
	'background-color',
	'border-top-color',
	'border-right-color',
	'border-bottom-color',
	'border-left-color',
	'border-block-start-color',
	'border-block-end-color',
	'border-inline-start-color',
	'border-inline-end-color',
	'outline-color',
	'text-decoration-color',
	'column-rule-color',
	'caret-color',
	'accent-color',
	'flood-color',
	'lighting-color',
	'stop-color',
	'fill',
	'stroke',
	'-webkit-text-fill-color',
	'-webkit-text-stroke-color',
	'text-emphasis-color',
	'scrollbar-color'
]);

const LENGTH_PROPERTIES = new Set([
	'width',
	'height',
	'min-width',
	'min-height',
	'max-width',
	'max-height',
	'top',
	'right',
	'bottom',
	'left',
	'margin-top',
	'margin-right',
	'margin-bottom',
	'margin-left',
	'padding-top',
	'padding-right',
	'padding-bottom',
	'padding-left',
	'border-top-width',
	'border-right-width',
	'border-bottom-width',
	'border-left-width',
	'font-size',
	'line-height',
	'letter-spacing',
	'word-spacing',
	'text-indent',
	'outline-width',
	'outline-offset',
	'column-width',
	'column-gap',
	'row-gap',
	'flex-basis',
	'gap',
	'block-size',
	'inline-size',
	'min-block-size',
	'min-inline-size',
	'max-block-size',
	'max-inline-size',
	'margin-block-start',
	'margin-block-end',
	'margin-inline-start',
	'margin-inline-end',
	'padding-block-start',
	'padding-block-end',
	'padding-inline-start',
	'padding-inline-end',
	'border-block-start-width',
	'border-block-end-width',
	'border-inline-start-width',
	'border-inline-end-width',
	'inset-block-start',
	'inset-block-end',
	'inset-inline-start',
	'inset-inline-end',
	'scroll-margin-top',
	'scroll-margin-right',
	'scroll-margin-bottom',
	'scroll-margin-left',
	'scroll-padding-top',
	'scroll-padding-right',
	'scroll-padding-bottom',
	'scroll-padding-left',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-right-radius',
	'border-bottom-left-radius',
	'border-start-start-radius',
	'border-start-end-radius',
	'border-end-start-radius',
	'border-end-end-radius',
	'cx',
	'cy',
	'r',
	'rx',
	'ry',
	'x',
	'y',
	'stroke-width',
	'stroke-dashoffset'
]);

const NON_NEGATIVE_LENGTH_PROPERTIES = new Set([
	'width',
	'height',
	'min-width',
	'min-height',
	'padding-top',
	'padding-right',
	'padding-bottom',
	'padding-left',
	'border-top-width',
	'border-right-width',
	'border-bottom-width',
	'border-left-width',
	'font-size',
	'outline-width',
	'block-size',
	'inline-size',
	'min-block-size',
	'min-inline-size',
	'padding-block-start',
	'padding-block-end',
	'padding-inline-start',
	'padding-inline-end',
	'border-block-start-width',
	'border-block-end-width',
	'border-inline-start-width',
	'border-inline-end-width',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-right-radius',
	'border-bottom-left-radius',
	'scroll-padding-top',
	'scroll-padding-right',
	'scroll-padding-bottom',
	'scroll-padding-left',
	'column-width',
	'column-gap',
	'row-gap',
	'r',
	'rx',
	'ry',
	'stroke-width'
]);

const NUMBER_PROPERTIES = new Set([
	'opacity',
	'flex-grow',
	'flex-shrink',
	'order',
	'orphans',
	'widows',
	'z-index',
	'tab-size',
	'font-weight',
	'fill-opacity',
	'stroke-opacity',
	'stop-opacity',
	'flood-opacity',
	'shape-image-threshold',
	'font-size-adjust'
]);

/**
 * Pick a representative valid CSS value for a longhand property.
 * @param prop
 */
function pickValidValue(prop: IPropertyDefinition): string {
	// Color properties
	if (COLOR_PROPERTIES.has(prop.name)) {
		return 'red';
	}
	// Length properties
	if (LENGTH_PROPERTIES.has(prop.name)) {
		return NON_NEGATIVE_LENGTH_PROPERTIES.has(prop.name) ? '10px' : '10px';
	}
	// Number properties
	if (NUMBER_PROPERTIES.has(prop.name)) {
		return '1';
	}
	// Keyword-only: use first keyword
	if (prop.keywords.length > 0) {
		// Prefer a non-initial keyword if available
		const nonInitial = prop.keywords.find(
			(k) => k !== 'initial' && k !== 'inherit' && k !== 'unset' && k !== 'revert'
		);
		return nonInitial ?? prop.keywords[0];
	}
	// Complex properties — pick something reasonable based on name
	if (prop.name.includes('color')) {
		return 'blue';
	}
	if (
		prop.name.includes('width') ||
		prop.name.includes('height') ||
		prop.name.includes('size') ||
		prop.name.includes('radius') ||
		prop.name.includes('offset') ||
		prop.name.includes('gap')
	) {
		return '10px';
	}
	if (prop.name.includes('image')) {
		return 'none';
	}
	if (prop.name === 'content') {
		return '"hello"';
	}
	if (prop.name === 'font-family') {
		return 'Arial';
	}
	if (prop.name === 'cursor') {
		return 'pointer';
	}
	if (prop.name.includes('duration') || prop.name.includes('delay')) {
		return '1s';
	}
	if (prop.name === 'grid-template-columns' || prop.name === 'grid-template-rows') {
		return '1fr';
	}
	// Fallback: use 'initial'
	return 'initial';
}

/**
 * Pick a second (different) valid value for testing overwrite.
 * @param prop
 */
function pickSecondValue(prop: IPropertyDefinition): string {
	if (COLOR_PROPERTIES.has(prop.name)) {
		return 'blue';
	}
	if (LENGTH_PROPERTIES.has(prop.name)) {
		return '20px';
	}
	if (NUMBER_PROPERTIES.has(prop.name)) {
		return '2';
	}
	if (prop.keywords.length > 1) {
		const first = pickValidValue(prop);
		return (
			prop.keywords.find(
				(k) => k !== first && k !== 'initial' && k !== 'inherit' && k !== 'unset' && k !== 'revert'
			) ?? 'inherit'
		);
	}
	return 'inherit';
}

/**
 * Pick a valid shorthand value and the expected longhand values.
 * @param prop
 */
function pickShorthandValue(
	prop: IPropertyDefinition
): { value: string; expected: Record<string, string> } | null {
	const name = prop.name;

	// Box-model 4-value shorthands
	const boxModel4: Record<string, string[]> = {
		margin: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
		padding: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
		inset: ['top', 'right', 'bottom', 'left'],
		'scroll-margin': [
			'scroll-margin-top',
			'scroll-margin-right',
			'scroll-margin-bottom',
			'scroll-margin-left'
		],
		'scroll-padding': [
			'scroll-padding-top',
			'scroll-padding-right',
			'scroll-padding-bottom',
			'scroll-padding-left'
		]
	};
	if (boxModel4[name]) {
		const lhs = boxModel4[name];
		const expected: Record<string, string> = {};
		for (const lh of lhs) {
			expected[lh] = '10px';
		}
		return { value: '10px', expected };
	}

	// Box-model 2-value shorthands
	const boxModel2: Record<string, string[]> = {
		'margin-block': ['margin-block-start', 'margin-block-end'],
		'margin-inline': ['margin-inline-start', 'margin-inline-end'],
		'padding-block': ['padding-block-start', 'padding-block-end'],
		'padding-inline': ['padding-inline-start', 'padding-inline-end'],
		'inset-block': ['inset-block-start', 'inset-block-end'],
		'inset-inline': ['inset-inline-start', 'inset-inline-end'],
		'scroll-margin-block': ['scroll-margin-block-start', 'scroll-margin-block-end'],
		'scroll-margin-inline': ['scroll-margin-inline-start', 'scroll-margin-inline-end'],
		'scroll-padding-block': ['scroll-padding-block-start', 'scroll-padding-block-end'],
		'scroll-padding-inline': ['scroll-padding-inline-start', 'scroll-padding-inline-end']
	};
	if (boxModel2[name]) {
		const lhs = boxModel2[name];
		const expected: Record<string, string> = {};
		for (const lh of lhs) {
			expected[lh] = '5px';
		}
		return { value: '5px', expected };
	}

	// Border sides
	const borderSides: Record<string, string[]> = {
		'border-top': ['border-top-width', 'border-top-style', 'border-top-color'],
		'border-right': ['border-right-width', 'border-right-style', 'border-right-color'],
		'border-bottom': ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
		'border-left': ['border-left-width', 'border-left-style', 'border-left-color'],
		'border-block-start': [
			'border-block-start-width',
			'border-block-start-style',
			'border-block-start-color'
		],
		'border-block-end': [
			'border-block-end-width',
			'border-block-end-style',
			'border-block-end-color'
		],
		'border-inline-start': [
			'border-inline-start-width',
			'border-inline-start-style',
			'border-inline-start-color'
		],
		'border-inline-end': [
			'border-inline-end-width',
			'border-inline-end-style',
			'border-inline-end-color'
		],
		outline: ['outline-width', 'outline-style', 'outline-color']
	};
	if (borderSides[name]) {
		const [w, s, c] = borderSides[name];
		return { value: '1px solid red', expected: { [w]: '1px', [s]: 'solid', [c]: 'red' } };
	}

	// Border compound
	if (name === 'border') {
		return {
			value: '2px dashed blue',
			expected: {
				'border-top-width': '2px',
				'border-right-width': '2px',
				'border-bottom-width': '2px',
				'border-left-width': '2px',
				'border-top-style': 'dashed',
				'border-right-style': 'dashed',
				'border-bottom-style': 'dashed',
				'border-left-style': 'dashed',
				'border-top-color': 'blue',
				'border-right-color': 'blue',
				'border-bottom-color': 'blue',
				'border-left-color': 'blue'
			}
		};
	}
	if (name === 'border-width') {
		return {
			value: '1px 2px 3px 4px',
			expected: {
				'border-top-width': '1px',
				'border-right-width': '2px',
				'border-bottom-width': '3px',
				'border-left-width': '4px'
			}
		};
	}
	if (name === 'border-style') {
		return {
			value: 'solid',
			expected: {
				'border-top-style': 'solid',
				'border-right-style': 'solid',
				'border-bottom-style': 'solid',
				'border-left-style': 'solid'
			}
		};
	}
	if (name === 'border-color') {
		return {
			value: 'red',
			expected: {
				'border-top-color': 'red',
				'border-right-color': 'red',
				'border-bottom-color': 'red',
				'border-left-color': 'red'
			}
		};
	}
	if (name === 'border-radius') {
		return {
			value: '5px',
			expected: {
				'border-top-left-radius': '5px',
				'border-top-right-radius': '5px',
				'border-bottom-right-radius': '5px',
				'border-bottom-left-radius': '5px'
			}
		};
	}

	// Flex
	if (name === 'flex') {
		return { value: '1', expected: { 'flex-grow': '1', 'flex-shrink': '1', 'flex-basis': '0%' } };
	}
	if (name === 'flex-flow') {
		return { value: 'row nowrap', expected: { 'flex-direction': 'row', 'flex-wrap': 'nowrap' } };
	}

	// Overflow
	if (name === 'overflow') {
		return { value: 'hidden', expected: { 'overflow-x': 'hidden', 'overflow-y': 'hidden' } };
	}
	if (name === 'overscroll-behavior') {
		return {
			value: 'auto',
			expected: { 'overscroll-behavior-x': 'auto', 'overscroll-behavior-y': 'auto' }
		};
	}

	// Gap
	if (name === 'gap') {
		return { value: '10px', expected: { 'row-gap': '10px', 'column-gap': '10px' } };
	}

	// Place shorthands
	if (name === 'place-content') {
		return {
			value: 'center',
			expected: { 'align-content': 'center', 'justify-content': 'center' }
		};
	}
	if (name === 'place-items') {
		return { value: 'center', expected: { 'align-items': 'center', 'justify-items': 'center' } };
	}
	if (name === 'place-self') {
		return { value: 'center', expected: { 'align-self': 'center', 'justify-self': 'center' } };
	}

	// Columns
	if (name === 'columns') {
		return { value: 'auto auto', expected: { 'column-width': 'auto', 'column-count': 'auto' } };
	}

	// Background-position
	if (name === 'background-position') {
		return {
			value: '50% 50%',
			expected: { 'background-position-x': '50%', 'background-position-y': '50%' }
		};
	}

	// For remaining shorthands, use a global keyword which always works
	return {
		value: 'inherit',
		expected: Object.fromEntries(prop.longhands.map((lh) => [lh, 'inherit']))
	};
}

function isKeywordOnly(prop: IPropertyDefinition): boolean {
	if (prop.keywords.length === 0) {
		return false;
	}
	if (
		COLOR_PROPERTIES.has(prop.name) ||
		LENGTH_PROPERTIES.has(prop.name) ||
		NUMBER_PROPERTIES.has(prop.name)
	) {
		return false;
	}
	const types = prop.typedomTypes || [];
	return types.length === 0 || types.every((t) => t === 'Keyword');
}

export function generatePropertyTests(ir: IPropertyIR): string {
	const lines: string[] = [];
	let testCount = 0;

	lines.push(`#!/usr/bin/env node`);
	lines.push(`/**`);
	lines.push(` * AUTO-GENERATED — do not edit by hand.`);
	lines.push(` * Comprehensive per-property tests for CSSStyleDeclaration.`);
	lines.push(` *`);
	lines.push(` * Covers every exposed CSS property with:`);
	lines.push(` *   - set/get round-trip`);
	lines.push(` *   - overwrite with a second value`);
	lines.push(` *   - removeProperty`);
	lines.push(` *   - global keyword acceptance (inherit)`);
	lines.push(` *   - invalid value rejection (keyword-only properties)`);
	lines.push(` *   - shorthand expansion`);
	lines.push(` *   - alias delegation`);
	lines.push(` */`);
	lines.push(``);
	lines.push(
		`import CSSStyleDeclaration from '../out-compiled/css/declaration/CSSStyleDeclaration.js';`
	);
	lines.push(``);
	lines.push(`let passed = 0;`);
	lines.push(`let failed = 0;`);
	lines.push(`const failures = [];`);
	lines.push(``);
	lines.push(`function assertEq(actual, expected, message) {`);
	lines.push(`  if (actual === expected) {`);
	lines.push(`    passed++;`);
	lines.push(`  } else {`);
	lines.push(`    failed++;`);
	lines.push(
		`    failures.push(\`\${message}: expected \${JSON.stringify(expected)}, got \${JSON.stringify(actual)}\`);`
	);
	lines.push(`  }`);
	lines.push(`}`);
	lines.push(``);
	lines.push(`function fresh() { return new CSSStyleDeclaration(); }`);
	lines.push(``);

	// ---- LONGHANDS ----
	lines.push(`// ============ LONGHAND PROPERTIES ============`);
	lines.push(``);

	for (const prop of ir.longhands) {
		if (prop.isInternal) {
			continue;
		}

		const val1 = pickValidValue(prop);
		const val2 = pickSecondValue(prop);
		const camel = kebabToCamelCase(prop.name);
		const kwOnly = isKeywordOnly(prop);
		const esc = (s: string): string =>
			s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');

		lines.push(`// --- ${prop.name} ---`);
		lines.push(`{`);
		lines.push(`  const s = fresh();`);

		// T1: set via camelCase accessor, read back
		lines.push(`  s.${camel} = '${esc(val1)}';`);
		lines.push(
			`  assertEq(s.${camel}, '${esc(val1)}', '${prop.name}: set/get round-trip via accessor');`
		);
		testCount++;

		// T2: getPropertyValue matches accessor
		lines.push(
			`  assertEq(s.getPropertyValue('${prop.name}'), '${esc(val1)}', '${prop.name}: getPropertyValue matches accessor');`
		);
		testCount++;

		// T3: overwrite with second value
		lines.push(`  s.${camel} = '${esc(val2)}';`);
		lines.push(
			`  assertEq(s.${camel}, '${esc(val2)}', '${prop.name}: overwrite with second value');`
		);
		testCount++;

		// T4: removeProperty
		lines.push(`  s.removeProperty('${prop.name}');`);
		lines.push(`  assertEq(s.${camel}, '', '${prop.name}: removeProperty clears value');`);
		testCount++;

		// T5: global keyword 'inherit' accepted
		lines.push(`  s.setProperty('${prop.name}', 'inherit');`);
		lines.push(
			`  assertEq(s.getPropertyValue('${prop.name}'), 'inherit', '${prop.name}: accepts inherit');`
		);
		testCount++;

		// T6: empty string removes
		lines.push(`  s.${camel} = '';`);
		lines.push(`  assertEq(s.${camel}, '', '${prop.name}: empty string removes');`);
		testCount++;

		// T7: invalid value rejection (keyword-only properties)
		if (kwOnly) {
			lines.push(`  s.${camel} = '${esc(val1)}';`);
			lines.push(`  s.${camel} = 'definitely-not-a-valid-value-xyz';`);
			lines.push(
				`  assertEq(s.${camel}, '${esc(val1)}', '${prop.name}: rejects invalid keyword');`
			);
			testCount++;
		}

		lines.push(`}`);
		lines.push(``);
	}

	// ---- SHORTHANDS ----
	lines.push(`// ============ SHORTHAND PROPERTIES ============`);
	lines.push(``);

	for (const prop of ir.shorthands) {
		if (prop.isInternal) {
			continue;
		}
		const camel = kebabToCamelCase(prop.name);
		const sv = pickShorthandValue(prop);
		if (!sv) {
			continue;
		}

		const esc = (s: string): string =>
			s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');

		lines.push(`// --- ${prop.name} (shorthand) ---`);
		lines.push(`{`);
		lines.push(`  const s = fresh();`);

		// T1: set shorthand, verify longhands
		lines.push(`  s.setProperty('${prop.name}', '${esc(sv.value)}');`);
		for (const [lh, expected] of Object.entries(sv.expected)) {
			lines.push(
				`  assertEq(s.getPropertyValue('${lh}'), '${esc(expected)}', '${prop.name}: expands to ${lh}');`
			);
			testCount++;
		}

		// T2: global keyword 'inherit' on shorthand expands to all longhands
		lines.push(`  s.setProperty('${prop.name}', 'inherit');`);
		for (const lh of prop.longhands) {
			lines.push(
				`  assertEq(s.getPropertyValue('${lh}'), 'inherit', '${prop.name}: inherit expands to ${lh}');`
			);
			testCount++;
		}

		// T3: removeProperty removes all longhands
		lines.push(`  s.removeProperty('${prop.name}');`);
		for (const lh of prop.longhands) {
			lines.push(
				`  assertEq(s.getPropertyValue('${lh}'), '', '${prop.name}: removeProperty clears ${lh}');`
			);
			testCount++;
		}

		lines.push(`}`);
		lines.push(``);
	}

	// ---- ALIASES ----
	lines.push(`// ============ ALIAS PROPERTIES ============`);
	lines.push(``);

	for (const prop of ir.aliases) {
		if (prop.isInternal) {
			continue;
		}
		if (!prop.aliasFor) {
			continue;
		}

		const canonical = ir.byName.get(prop.aliasFor);
		if (!canonical) {
			continue;
		}

		const esc = (s: string): string =>
			s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');

		// Determine a valid value for the canonical property
		let testVal: string;
		if (canonical.type === 'longhand') {
			testVal = pickValidValue(canonical);
		} else {
			// Shorthand alias — use 'inherit' which always works
			testVal = 'inherit';
		}

		lines.push(`// --- ${prop.name} → ${prop.aliasFor} (alias) ---`);
		lines.push(`{`);
		lines.push(`  const s = fresh();`);

		// T1: set via alias, read via canonical
		lines.push(`  s.setProperty('${prop.name}', '${esc(testVal)}');`);

		if (canonical.type === 'longhand') {
			lines.push(
				`  assertEq(s.getPropertyValue('${prop.aliasFor}'), '${esc(testVal)}', '${prop.name}: alias sets canonical ${prop.aliasFor}');`
			);
			testCount++;
		} else {
			// Shorthand: check that at least one longhand got set
			if (canonical.longhands.length > 0) {
				lines.push(
					`  assertEq(s.getPropertyValue('${canonical.longhands[0]}'), '${esc(testVal)}', '${prop.name}: alias expands via ${prop.aliasFor} to ${canonical.longhands[0]}');`
				);
				testCount++;
			}
		}

		// T2: set via canonical, read via alias
		lines.push(`  const s2 = fresh();`);
		lines.push(`  s2.setProperty('${prop.aliasFor}', '${esc(testVal)}');`);

		if (canonical.type === 'longhand') {
			lines.push(
				`  assertEq(s2.getPropertyValue('${prop.name}'), '${esc(testVal)}', '${prop.name}: reading alias returns canonical value');`
			);
			testCount++;
		} else {
			// Shorthand aliases: recomposition may concatenate longhand values,
			// so just verify the alias returns a non-empty value containing the test value
			lines.push(
				`  assertEq(s2.getPropertyValue('${prop.name}').includes('${esc(testVal)}'), true, '${prop.name}: reading alias returns composed value');`
			);
			testCount++;
		}

		lines.push(`}`);
		lines.push(``);
	}

	// ---- SUMMARY ----
	lines.push(`// ============ RESULTS ============`);
	lines.push(`console.log('');`);
	lines.push(`console.log('='.repeat(60));`);
	lines.push(
		`console.log(\`Per-property tests: \${passed} passed, \${failed} failed, \${passed + failed} total\`);`
	);
	lines.push(`if (failed > 0) {`);
	lines.push(`  console.log('');`);
	lines.push(`  console.log('Failures:');`);
	lines.push(`  for (const f of failures) console.log(\`  ✗ \${f}\`);`);
	lines.push(`}`);
	lines.push(`console.log('='.repeat(60));`);
	lines.push(`process.exit(failed > 0 ? 1 : 0);`);

	return lines.join('\n') + '\n';
}
