/**
 * Utility functions for code generation / template emission.
 */
/**
 * Indent every line of a multi-line string by a given number of tabs.
 * @param text
 * @param tabs
 */
export declare function indent(text: string, tabs: number): string;
/**
 * Wrap a string in single quotes, escaping internal quotes.
 * @param s
 */
export declare function quote(s: string): string;
/**
 * Format a string as an object key: unquoted if it's a valid JS identifier,
 * otherwise single-quoted.
 * @param key
 */
export declare function objectKey(key: string): string;
/**
 * Convert a kebab-case shorthand name to a camelCase method name.
 * E.g., 'border-top' → 'parseBorderTop', 'margin' → 'parseMargin'.
 * @param name
 */
export declare function shorthandToMethodName(name: string): string;
/**
 * Format an array of quoted strings to fit within 100 chars at the given indent.
 * If the inline form fits, returns e.g. `['a', 'b', 'c']`.
 * Otherwise wraps each item on its own line.
 * @param items
 * @param indentLevel
 */
export declare function formatArray(items: string[], indentLevel: number): string;
/**
 * Generate a file header comment.
 */
export declare function fileHeader(): string;
