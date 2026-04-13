/**
 * Generates CSSStyleDeclarationCSSParser.ts — CSS text → property declarations.
 * This is a static utility (no IR dependency), ported from happy-dom.
 */
import { fileHeader } from '../utils/template-utils.js';
export function generateCSSParser() {
    let out = fileHeader();
    out += `export interface ICSSParsedRule {
\tname: string;
\tvalue: string;
\timportant: boolean;
}

export interface ICSSParseResult {
\trules: ICSSParsedRule[];
\tproperties: Record<string, string>;
}

/**
 * Parses a CSS text string (e.g. from an element's style attribute)
 * into individual property declarations.
 */
export default class CSSStyleDeclarationCSSParser {
\t/**
\t * Parse a CSS text string into rules.
\t *
\t * @param cssText CSS text to parse.
\t * @returns Parsed result with rules and custom properties.
\t */
\tpublic static parse(cssText: string): ICSSParseResult {
\t\tconst rules: ICSSParsedRule[] = [];
\t\tconst properties: Record<string, string> = {};

\t\tif (!cssText || typeof cssText !== 'string') {
\t\t\treturn { rules, properties };
\t\t}

\t\t// Simple state-machine parser for better handling of edge cases
\t\tlet i = 0;
\t\tconst len = cssText.length;

\t\twhile (i < len) {
\t\t\t// Skip whitespace
\t\t\twhile (i < len && /\\s/.test(cssText[i])) {
\t\t\t\ti++;
\t\t\t}
\t\t\tif (i >= len) {
\t\t\t\tbreak;
\t\t\t}

\t\t\t// Find the colon separating name from value
\t\t\tconst colonIndex = cssText.indexOf(':', i);
\t\t\tif (colonIndex === -1) {
\t\t\t\tbreak;
\t\t\t}

\t\t\tconst name = cssText.slice(i, colonIndex).trim();
\t\t\tif (!name) {
\t\t\t\ti = colonIndex + 1;
\t\t\t\tcontinue;
\t\t\t}

\t\t\t// Parse the value — must handle parens, quotes, and semicolons
\t\t\tconst valueStart = colonIndex + 1;
\t\t\tlet j = valueStart;
\t\t\tlet parenDepth = 0;
\t\t\tlet inSingleQuote = false;
\t\t\tlet inDoubleQuote = false;

\t\t\twhile (j < len) {
\t\t\t\tconst ch = cssText[j];
\t\t\t\tif (inSingleQuote) {
\t\t\t\t\tif (ch === "'" && cssText[j - 1] !== '\\\\') {
\t\t\t\t\t\tinSingleQuote = false;
\t\t\t\t\t}
\t\t\t\t} else if (inDoubleQuote) {
\t\t\t\t\tif (ch === '"' && cssText[j - 1] !== '\\\\') {
\t\t\t\t\t\tinDoubleQuote = false;
\t\t\t\t\t}
\t\t\t\t} else if (ch === "'") {
\t\t\t\t\tinSingleQuote = true;
\t\t\t\t} else if (ch === '"') {
\t\t\t\t\tinDoubleQuote = true;
\t\t\t\t} else if (ch === '(') {
\t\t\t\t\tparenDepth++;
\t\t\t\t} else if (ch === ')') {
\t\t\t\t\tparenDepth--;
\t\t\t\t} else if (ch === ';' && parenDepth === 0) {
\t\t\t\t\tbreak;
\t\t\t\t}
\t\t\t\tj++;
\t\t\t}

\t\t\tlet rawValue = cssText.slice(valueStart, j).trim();
\t\t\tlet important = false;

\t\t\t// Check for !important
\t\t\tif (rawValue.endsWith('!important')) {
\t\t\t\trawValue = rawValue.slice(0, -'!important'.length).trim();
\t\t\t\timportant = true;
\t\t\t} else {
\t\t\t\tconst impMatch = rawValue.match(/\\s*!\\s*important\\s*$/i);
\t\t\t\tif (impMatch) {
\t\t\t\t\trawValue = rawValue.slice(0, -impMatch[0].length).trim();
\t\t\t\t\timportant = true;
\t\t\t\t}
\t\t\t}

\t\t\tif (rawValue) {
\t\t\t\tconst lowerName = name.toLowerCase();
\t\t\t\trules.push({ name: lowerName, value: rawValue, important });

\t\t\t\tif (lowerName.startsWith('--')) {
\t\t\t\t\tproperties[lowerName] = rawValue;
\t\t\t\t}
\t\t\t}

\t\t\ti = j + 1; // skip semicolon
\t\t}

\t\treturn { rules, properties };
\t}
}
`;
    return out;
}
//# sourceMappingURL=css-parser.js.map