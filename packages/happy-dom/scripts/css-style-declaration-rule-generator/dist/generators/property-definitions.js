/**
 * Generates property definition data files from the IR.
 * These are data-only TypeScript files (exported const objects/maps).
 */
import { fileHeader, quote, objectKey, formatArray } from '../utils/template-utils.js';
/**
 * Helper to check if an array of quoted items fits on one line within a given indent.
 * @param items
 * @param indentLevel
 * @param keyLen
 */
function formatShorthandArray(items, indentLevel, keyLen) {
    const quotedItems = items.map(quote);
    const inline = `[${quotedItems.join(', ')}]`;
    // Prettier counts each tab as tabWidth (default 2) for printWidth purposes
    // Use a slightly conservative threshold to avoid boundary issues
    const tabWidth = 2;
    const lineLen = indentLevel * tabWidth + keyLen + 2 + inline.length;
    if (lineLen < 100) {
        return inline;
    }
    // Wrap to multiple lines
    const innerIndent = '\t'.repeat(indentLevel + 1);
    const closingIndent = '\t'.repeat(indentLevel);
    const lastIdx = quotedItems.length - 1;
    const lines = quotedItems.map((item, i) => `${innerIndent}${item}${i < lastIdx ? ',' : ''}`);
    return `[\n${lines.join('\n')}\n${closingIndent}]`;
}
/**
 * Generate CSSPropertyDefinitions.ts — registry of all property metadata.
 * @param ir
 */
export function generatePropertyDefinitions(ir) {
    let out = fileHeader();
    out += `export interface ICSSPropertyMeta {\n`;
    out += `\tname: string;\n`;
    out += `\tcamelCase: string;\n`;
    out += `\tinherited: boolean;\n`;
    out += `\tkeywords: string[];\n`;
    out += `\tinitialValue: string;\n`;
    out += `\tacceptsNegative: boolean;\n`;
    out += `}\n\n`;
    out += `/**\n * All non-internal CSS longhand properties.\n */\n`;
    out += `export const CSS_LONGHAND_PROPERTIES: Record<string, ICSSPropertyMeta> = {\n`;
    // Patch IR: add 'fill' to flex-basis keywords at the end if not already present
    const flexBasis = ir.longhands.find((p) => p.name === 'flex-basis');
    if (flexBasis && !flexBasis.keywords.includes('fill')) {
        flexBasis.keywords.push('fill');
    }
    const longhands = ir.longhands;
    for (let i = 0; i < longhands.length; i++) {
        const p = longhands[i];
        if (p.comment) {
            out += `\t${p.comment}\n`;
        }
        const kws = formatArray(p.keywords.map(quote), 2);
        out += `\t${objectKey(p.name)}: {\n`;
        out += `\t\tname: ${quote(p.name)},\n`;
        out += `\t\tcamelCase: ${quote(p.camelCaseName)},\n`;
        out += `\t\tinherited: ${p.inherited},\n`;
        out += `\t\tkeywords: ${kws},\n`;
        out += `\t\tinitialValue: ${quote(p.initialValue)},\n`;
        out += `\t\tacceptsNegative: ${p.acceptsNegative}\n`;
        out += `\t},\n`;
    }
    // Extra longhands not in Chromium's IR: 'overflow' and 'animation' are shorthands
    // in Chromium but we store them as raw single values (no expansion), so we add them
    // as longhands here if they weren't already included.
    const extraLonghands = [
        {
            name: 'overflow',
            camelCase: 'overflow',
            inherited: false,
            keywords: ['visible', 'hidden', 'clip', 'scroll', 'auto', 'overlay'],
            initialValue: 'visible',
            acceptsNegative: false
        },
        {
            name: 'animation',
            camelCase: 'animation',
            inherited: false,
            keywords: [],
            initialValue: '',
            acceptsNegative: false
        }
    ];
    for (const p of extraLonghands) {
        if (!ir.longhands.find((lh) => lh.name === p.name)) {
            const kws = formatArray(p.keywords.map(quote), 2);
            out += `\t// '${p.name}' is stored as a single raw value (not expanded to longhands)\n`;
            out += `\t// since we don't have a full ${p.name} shorthand parser.\n`;
            out += `\t${objectKey(p.name)}: {\n`;
            out += `\t\tname: ${quote(p.name)},\n`;
            out += `\t\tcamelCase: ${quote(p.camelCase)},\n`;
            out += `\t\tinherited: ${p.inherited},\n`;
            out += `\t\tkeywords: ${kws},\n`;
            out += `\t\tinitialValue: ${quote(p.initialValue)},\n`;
            out += `\t\tacceptsNegative: ${p.acceptsNegative}\n`;
            out += `\t},\n`;
        }
    }
    // Remove trailing comma from last entry and close
    out = out.replace(/,\n\};\n\n$/, '\n};\n\n');
    out = out.trimEnd().replace(/,\n$/, '\n') + '\n};\n\n';
    // Keyword lookup map: property name → Set of valid keywords
    out += `/**\n * Fast keyword lookup: property name → valid keywords.\n */\n`;
    out += `export const CSS_PROPERTY_KEYWORDS: Record<string, Set<string>> = {};\n`;
    out += `for (const [name, meta] of Object.entries(CSS_LONGHAND_PROPERTIES)) {\n`;
    out += `\tif (meta.keywords.length > 0) {\n`;
    out += `\t\tCSS_PROPERTY_KEYWORDS[name] = new Set(meta.keywords);\n`;
    out += `\t}\n`;
    out += `}\n`;
    return out;
}
/**
 * Generate CSSShorthandDefinitions.ts — shorthand → longhand mappings.
 * @param ir
 */
export function generateShorthandDefinitions(ir) {
    let out = fileHeader();
    out += `/**\n * Shorthand → ordered longhand property names.\n`;
    out += ` * Used by PropertyManager for expansion (B1) and recomposition (B2).\n */\n`;
    out += `export const CSS_SHORTHAND_TO_LONGHANDS: Record<string, readonly string[]> = {\n`;
    const shorthands = ir.shorthands;
    for (let i = 0; i < shorthands.length; i++) {
        const s = shorthands[i];
        const isLast = i === shorthands.length - 1;
        const key = objectKey(s.name);
        const longhands = formatShorthandArray(s.longhands, 1, key.length);
        out += `\t${key}: ${longhands}${isLast ? '' : ','}\n`;
    }
    out += `};\n\n`;
    // Reverse map: longhand → shorthands it belongs to
    out += `/**\n * Longhand → shorthands that contain it.\n */\n`;
    out += `export const CSS_LONGHAND_TO_SHORTHANDS: Record<string, readonly string[]> = {};\n`;
    out += `for (const [shorthand, longhands] of Object.entries(CSS_SHORTHAND_TO_LONGHANDS)) {\n`;
    out += `\tfor (const lh of longhands) {\n`;
    out += `\t\tif (!CSS_LONGHAND_TO_SHORTHANDS[lh]) {\n`;
    out += `\t\t\t(<Record<string, string[]>>CSS_LONGHAND_TO_SHORTHANDS)[lh] = [];\n`;
    out += `\t\t}\n`;
    out += `\t\t(<string[]>CSS_LONGHAND_TO_SHORTHANDS[lh]).push(shorthand);\n`;
    out += `\t}\n`;
    out += `}\n`;
    return out;
}
/**
 * Generate CSSAliasDefinitions.ts — alias → canonical property mappings.
 * @param ir
 */
export function generateAliasDefinitions(ir) {
    let out = fileHeader();
    out += `/**\n * Alias property name → canonical property name.\n`;
    out += ` * When a user sets an alias, it transparently delegates to the canonical (B13).\n */\n`;
    out += `export const CSS_ALIAS_TO_CANONICAL: Record<string, string> = {\n`;
    const aliasEntries = [];
    for (const a of ir.aliases) {
        if (a.aliasFor) {
            aliasEntries.push({ name: a.name, aliasFor: a.aliasFor });
        }
    }
    // Hardcoded extra aliases not in the Chromium IR
    const extraAliases = [{ name: 'css-float', aliasFor: 'float' }];
    for (const extra of extraAliases) {
        if (!aliasEntries.find((a) => a.name === extra.name)) {
            aliasEntries.push(extra);
        }
    }
    for (let i = 0; i < aliasEntries.length; i++) {
        const a = aliasEntries[i];
        const isLast = i === aliasEntries.length - 1;
        out += `\t${objectKey(a.name)}: ${quote(a.aliasFor)}${isLast ? '' : ','}\n`;
    }
    out += `};\n`;
    return out;
}
//# sourceMappingURL=property-definitions.js.map