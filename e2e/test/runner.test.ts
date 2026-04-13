import { describe, it, expect } from 'vitest';
import { Browser } from 'happy-dom';
import { accessSync, constants, readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/**
 * Directory that mirrors the browser-specific fixture layout:
 *   e2e/chrome/<category>/<test>.html
 */
const CHROME_DIR = resolve(__dirname, '../chrome');

// ---------------------------------------------------------------------------
// Chrome binary detection
// ---------------------------------------------------------------------------

function findChromePath(): string {
	const envPath = process.env['CHROME_PATH'];
	if (envPath) {
		return envPath;
	}

	const candidates = [
		'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
		'/usr/bin/google-chrome', // Linux
		'/usr/bin/chromium-browser', // Linux (Debian/Ubuntu)
		'/usr/bin/chromium' // Linux (Arch)
	];

	for (const candidate of candidates) {
		try {
			accessSync(candidate, constants.X_OK);
			return candidate;
		} catch {
			// not found, try next
		}
	}

	throw new Error(
		'Chrome executable not found. Set the CHROME_PATH environment variable to point at it.'
	);
}

const CHROME_EXECUTABLE = findChromePath();

// ---------------------------------------------------------------------------
// HTML file discovery
// ---------------------------------------------------------------------------

function findHtmlFiles(dir: string): string[] {
	const results: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const fullPath = resolve(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...findHtmlFiles(fullPath));
		} else if (entry.name.endsWith('.html')) {
			results.push(fullPath);
		}
	}
	return results;
}

// ---------------------------------------------------------------------------
// HTML normalisation
// ---------------------------------------------------------------------------

/**
 * Strips leading/trailing whitespace from every line and drops blank lines so
 * that cosmetic whitespace differences don't cause false failures.
 * @param html
 */
function normalizeHtml(html: string): string {
	return html
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.length > 0)
		.join('\n');
}

/**
 * Extracts the innerHTML of <body> from a full HTML document string.
 * Chrome's --dump-dom output wraps the document in its own chrome chrome, so
 * we need to isolate just the user-authored body.
 * @param fullHtml
 */
function extractBodyHtml(fullHtml: string): string {
	const match = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
	return normalizeHtml(match ? match[1] : fullHtml);
}

// ---------------------------------------------------------------------------
// Renderers
// ---------------------------------------------------------------------------

async function renderWithHappyDom(htmlContent: string): Promise<string> {
	const browser = new Browser({ settings: { enableJavaScriptEvaluation: true } });
	const page = browser.newPage();
	page.content = htmlContent;
	await page.waitUntilComplete();
	const bodyHtml = page.mainFrame.document.body.innerHTML;
	await browser.close();
	return normalizeHtml(bodyHtml);
}

function renderWithChrome(filePath: string): string {
	const result = spawnSync(
		CHROME_EXECUTABLE,
		[
			'--headless',
			'--dump-dom',
			'--no-sandbox',
			'--disable-web-security',
			'--allow-file-access-from-files',
			`file://${filePath}`
		],
		{ encoding: 'utf-8', timeout: 25000, stdio: ['ignore', 'pipe', 'ignore'] }
	);

	if (result.error) {
		throw result.error;
	}

	return extractBodyHtml(result.stdout ?? '');
}

// ---------------------------------------------------------------------------
// Tests — one per HTML fixture file
// ---------------------------------------------------------------------------

const htmlFiles = findHtmlFiles(CHROME_DIR);

describe('Chrome conformance', () => {
	for (const filePath of htmlFiles) {
		const name = relative(CHROME_DIR, filePath);
		it(name, async () => {
			const htmlContent = readFileSync(filePath, 'utf-8');
			const [happyDomOutput, chromeOutput] = await Promise.all([
				renderWithHappyDom(htmlContent),
				Promise.resolve(renderWithChrome(filePath))
			]);
			expect(happyDomOutput).toBe(chromeOutput);
		});
	}
});
