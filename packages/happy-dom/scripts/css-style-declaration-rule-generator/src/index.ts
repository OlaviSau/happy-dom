#!/usr/bin/env node
/**
 * CLI entry point for the happy-dom CSS codegen tool.
 *
 * Usage: node dist/index.js [--out <dir>] [--offline]
 *
 * Downloads the latest css_properties.json5 from Chromium's repository,
 * then builds IR → runs all generators → writes output.
 *
 * Flags:
 *   --out <dir>   Output directory (default: ./out)
 *   --offline     Skip download, use cached data/css-properties.json5
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';
import { parseJSON5 } from './parser/json5-parser.js';
import {
	generatePropertyDefinitions,
	generateShorthandDefinitions,
	generateAliasDefinitions
} from './generators/property-definitions.js';
import { generateCSSParser } from './generators/css-parser.js';
import { generateValueParser, generateNamedColors } from './generators/value-parser.js';
import { generatePropertyTests } from './generators/property-tests.js';
import { generateSetParser, generatePropertyTypeSets } from './generators/set-parser.js';
import { generateGetParser } from './generators/get-parser.js';
import { generatePropertyManager } from './generators/property-manager.js';
import {
	generateCSSDeclarations,
	generateCSSPropertyNameMap
} from './generators/css-style-declaration.js';

const ROOT = path.resolve(
	import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname),
	'..'
);

const CSS_PROPERTIES_URL =
	'https://chromium.googlesource.com/chromium/src/+/main/third_party/blink/renderer/core/css/css_properties.json5?format=TEXT';

/**
 * Download the latest css_properties.json5 from Chromium's Gitiles.
 * The Gitiles ?format=TEXT endpoint returns base64-encoded content.
 * @param destPath
 */
async function downloadCSSProperties(destPath: string): Promise<void> {
	console.log('[codegen] Downloading css_properties.json5 from Chromium...');
	const response = await fetch(CSS_PROPERTIES_URL);
	if (!response.ok) {
		throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
	}
	const base64 = await response.text();
	const content = Buffer.from(base64, 'base64').toString('utf-8');
	fs.mkdirSync(path.dirname(destPath), { recursive: true });
	fs.writeFileSync(destPath, content, 'utf-8');
	console.log(
		`[codegen] Saved to ${path.relative(ROOT, destPath)} (${(content.length / 1024).toFixed(0)} KB)`
	);
}

async function main(): Promise<void> {
	const args = process.argv.slice(2);
	const outArg = args.indexOf('--out');
	const outDir = outArg !== -1 ? args[outArg + 1] : path.join(ROOT, 'out');
	const offline = args.includes('--offline');

	const jsonPath = path.join(ROOT, 'data', 'css-properties.json5');

	if (!offline) {
		await downloadCSSProperties(jsonPath);
	} else {
		if (!fs.existsSync(jsonPath)) {
			console.error(
				'[codegen] --offline specified but no cached file at data/css-properties.json5'
			);
			process.exit(1);
		}
		console.log('[codegen] Using cached css_properties.json5 (--offline)');
	}

	console.log('[codegen] Parsing css-properties.json5...');
	const ir = parseJSON5(jsonPath);
	console.log(
		`[codegen] IR: ${ir.properties.length} properties (${ir.longhands.length} longhands, ${ir.shorthands.length} shorthands, ${ir.aliases.length} aliases)`
	);

	// Create output directories
	const dirs = [
		'css/declaration/property-definitions',
		'css/declaration/property-manager',
		'css/declaration/css-parser'
	];
	for (const d of dirs) {
		fs.mkdirSync(path.join(outDir, d), { recursive: true });
	}

	// Generate all files
	const files: { relativePath: string; content: string }[] = [];

	console.log('[codegen] Generating property definitions...');
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSPropertyDefinitions.ts',
		content: generatePropertyDefinitions(ir)
	});
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSShorthandDefinitions.ts',
		content: generateShorthandDefinitions(ir)
	});
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSAliasDefinitions.ts',
		content: generateAliasDefinitions(ir)
	});
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSStyleDeclarationPropertyNameMap.ts',
		content: generateCSSPropertyNameMap(ir)
	});
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSNamedColors.ts',
		content: generateNamedColors()
	});
	files.push({
		relativePath: 'css/declaration/property-definitions/CSSPropertyTypeSets.ts',
		content: generatePropertyTypeSets(ir)
	});

	console.log('[codegen] Generating CSS parser...');
	files.push({
		relativePath: 'css/declaration/css-parser/CSSStyleDeclarationCSSParser.ts',
		content: generateCSSParser()
	});

	console.log('[codegen] Generating value parser...');
	files.push({
		relativePath: 'css/declaration/property-manager/CSSStyleDeclarationValueParser.ts',
		content: generateValueParser(ir)
	});

	console.log('[codegen] Generating set parser...');
	files.push({
		relativePath: 'css/declaration/property-manager/CSSStyleDeclarationPropertySetParser.ts',
		content: generateSetParser(ir)
	});

	console.log('[codegen] Generating get parser...');
	files.push({
		relativePath: 'css/declaration/property-manager/CSSStyleDeclarationPropertyGetParser.ts',
		content: generateGetParser(ir)
	});

	console.log('[codegen] Generating property manager...');
	files.push({
		relativePath: 'css/declaration/property-manager/CSSStyleDeclarationPropertyManager.ts',
		content: generatePropertyManager()
	});

	// Interface file
	files.push({
		relativePath: 'css/declaration/property-manager/ICSSStyleDeclarationPropertyValue.ts',
		content: `// Auto-generated — do not edit.\nexport default interface ICSSStyleDeclarationPropertyValue {\n\tvalue: string;\n\timportant: boolean;\n}\n`
	});

	console.log('[codegen] Splicing CSS declarations into CSSStyleDeclaration.ts...');
	const declSourcePath = path.resolve(
		ROOT,
		'..',
		'..',
		'src',
		'css',
		'declaration',
		'CSSStyleDeclaration.ts'
	);
	const declSource = fs.readFileSync(declSourcePath, 'utf-8');
	const START_MARKER = '\t// BEGIN_CSS_DECLARATIONS\n';
	const END_MARKER = '\t// END_CSS_DECLARATIONS';
	const startIdx = declSource.indexOf(START_MARKER);
	const endIdx = declSource.indexOf(END_MARKER);
	if (startIdx === -1 || endIdx === -1) {
		throw new Error(
			'Could not find BEGIN_CSS_DECLARATIONS / END_CSS_DECLARATIONS markers in CSSStyleDeclaration.ts'
		);
	}
	const declarations = generateCSSDeclarations(ir);
	const spliced =
		declSource.slice(0, startIdx + START_MARKER.length) + declarations + declSource.slice(endIdx);
	files.push({
		relativePath: 'css/declaration/CSSStyleDeclaration.ts',
		content: spliced
	});

	// Generate per-property test suite
	console.log('[codegen] Generating per-property test suite...');
	const testContent = generatePropertyTests(ir);
	const testsDir = path.join(ROOT, 'tests');
	fs.mkdirSync(testsDir, { recursive: true });
	const testPath = path.join(testsDir, 'per-property-tests.mjs');
	fs.writeFileSync(testPath, testContent, 'utf-8');
	console.log(`  → tests/per-property-tests.mjs (${(testContent.length / 1024).toFixed(1)} KB)`);

	// Write all files
	let totalSize = 0;
	for (const { relativePath, content } of files) {
		const fullPath = path.join(outDir, relativePath);
		fs.writeFileSync(fullPath, content, 'utf-8');
		totalSize += content.length;
		console.log(`  → ${relativePath} (${(content.length / 1024).toFixed(1)} KB)`);
	}

	console.log(
		`\n[codegen] Done! Generated ${files.length} files (${(totalSize / 1024).toFixed(1)} KB total) in ${outDir}`
	);

	// Post-generation: run ESLint --fix and Prettier on the output files
	const outFiles = files.map((f) => path.join(outDir, f.relativePath));
	const rootDir = path.resolve(ROOT, '..', '..', '..', '..');

	console.log('[codegen] Running ESLint --fix...');
	try {
		execSync(`npx eslint --fix ${outFiles.join(' ')}`, { cwd: rootDir, stdio: 'pipe' });
	} catch {
		// eslint --fix exits non-zero if there are remaining warnings; that's fine
	}

	console.log('[codegen] Running Prettier --write...');
	try {
		execSync(`npx prettier --write ${outFiles.join(' ')}`, { cwd: rootDir, stdio: 'pipe' });
	} catch {
		// prettier may warn but shouldn't fail
	}

	console.log('[codegen] Formatting complete.');
}

main().catch((err) => {
	console.error('[codegen] Fatal error:', err);
	process.exit(1);
});
