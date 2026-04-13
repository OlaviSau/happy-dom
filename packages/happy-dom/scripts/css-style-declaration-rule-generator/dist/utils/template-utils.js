/**
 * Utility functions for code generation / template emission.
 */
/**
 * Indent every line of a multi-line string by a given number of tabs.
 * @param text
 * @param tabs
 */
export function indent(text, tabs) {
    const prefix = '\t'.repeat(tabs);
    return text
        .split('\n')
        .map((line) => (line.trim() ? prefix + line : line))
        .join('\n');
}
/**
 * Wrap a string in single quotes, escaping internal quotes.
 * @param s
 */
export function quote(s) {
    return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}
/**
 * Format a string as an object key: unquoted if it's a valid JS identifier,
 * otherwise single-quoted.
 * @param key
 */
export function objectKey(key) {
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : quote(key);
}
/**
 * Convert a kebab-case shorthand name to a camelCase method name.
 * E.g., 'border-top' → 'parseBorderTop', 'margin' → 'parseMargin'.
 * @param name
 */
export function shorthandToMethodName(name) {
    return ('parse' +
        name
            .split('-')
            .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
            .join(''));
}
/**
 * Format an array of quoted strings to fit within 100 chars at the given indent.
 * If the inline form fits, returns e.g. `['a', 'b', 'c']`.
 * Otherwise wraps each item on its own line.
 * @param items
 * @param indentLevel
 */
export function formatArray(items, indentLevel) {
    const inline = `[${items.join(', ')}]`;
    // Prettier counts each tab as tabWidth (default 2) for printWidth purposes
    const tabWidth = 2;
    const lineLen = indentLevel * tabWidth + 'keywords: '.length + inline.length + 1;
    if (lineLen < 100) {
        return inline;
    }
    const innerIndent = '\t'.repeat(indentLevel + 1);
    const closingIndent = '\t'.repeat(indentLevel);
    const lastIdx = items.length - 1;
    const lines = items.map((item, i) => `${innerIndent}${item}${i < lastIdx ? ',' : ''}`);
    return `[\n${lines.join('\n')}\n${closingIndent}]`;
}
/**
 * Generate a file header comment.
 */
export function fileHeader() {
    return `/**
 * AUTO-GENERATED FILE — DO NOT EDIT
 *
 * Derived from Chromium Blink rendering engine property data.
 * Source: https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink
 */

`;
}
//# sourceMappingURL=template-utils.js.map