## What is a conformance test for happy-dom?
A conformance test is a simple HTML file that can be opened in a browser to examine the actual behavior for given functionality.

## Naming and Structure
The conformance test only applies to a given browser since the behaviors can be different between browsers.
Perhaps at some point versioning will be needed as well, but for now it's just separated by browsers.
The structure should be mostly match test files in packages/happy-dom/test.

## Implementation
The HTML should be as simple as possible, see existing examples.

## Justification
Having a test that can can make it simpler to understand the implementation details and can make it easier for the maintainer to merge the changes.