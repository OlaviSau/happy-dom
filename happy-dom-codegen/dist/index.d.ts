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
export {};
