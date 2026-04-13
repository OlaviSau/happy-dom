/**
 * Intermediate Representation for CSS properties.
 * Parsed from Chromium's css_properties.json5.
 */
export interface PropertyDefinition {
    /** kebab-case name, e.g. "background-color" */
    name: string;
    /** camelCase JS accessor name, e.g. "backgroundColor" */
    camelCaseName: string;
    /** Property classification */
    type: 'longhand' | 'shorthand' | 'alias';
    /** For shorthands: ordered list of longhand property names */
    longhands: string[];
    /** For aliases: the canonical property name this aliases */
    aliasFor: string | null;
    /** Whether the property inherits by default */
    inherited: boolean;
    /** Valid keyword values (lowercased) */
    keywords: string[];
    /** Whether this property appears on CSSStyleDeclaration */
    computable: boolean;
    /** Whether the property can be smoothly animated */
    interpolable: boolean;
    /** CSS Typed OM types: "Keyword", "Length", "Percentage", "Number", etc. */
    typedomTypes: string[];
    /** Whether the property is internal (not web-exposed) */
    isInternal: boolean;
    /** Runtime feature flag name (if gated) */
    runtimeFlag: string | null;
    /** Initial/default CSS value */
    initialValue: string;
    /** Whether negative values are accepted (for lengths) */
    acceptsNegative: boolean;
}
export interface PropertyIR {
    /** All properties (longhands + shorthands + aliases), excluding internal */
    properties: PropertyDefinition[];
    /** Longhands only */
    longhands: PropertyDefinition[];
    /** Shorthands only */
    shorthands: PropertyDefinition[];
    /** Aliases only */
    aliases: PropertyDefinition[];
    /** Map: property name → PropertyDefinition */
    byName: Map<string, PropertyDefinition>;
    /** Map: shorthand name → ordered longhand names */
    shorthandToLonghands: Map<string, string[]>;
    /** Map: alias name → canonical property name */
    aliasToCanonical: Map<string, string>;
    /** Set of inherited property names */
    inheritedProperties: Set<string>;
}
