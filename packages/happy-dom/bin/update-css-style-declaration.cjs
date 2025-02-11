const { readFile, writeFile } = require('node:fs/promises');

const CSS_STYLE_DECLARATION_FILE_PATH = './src/css/declaration/CSSStyleDeclaration.ts';

(async () => {
	const content = await readFile(CSS_STYLE_DECLARATION_FILE_PATH, { encoding: 'utf8' });

	const properties = await fetch('https://www.w3.org/Style/CSS/all-properties.en.json').then(
		(response) => response.json()
	);

	const propertySet = new Set();

	for (const property of properties) {
		if (property.property === '--*') {
			continue;
		}
		propertySet.add(property.property);
	}

	const lines = [];

	lines.unshift('\t/* eslint-disable @typescript-eslint/member-ordering */');
	lines.unshift('\t// +CSSProperties');

	for (const property of propertySet) {
		lines.push(`\tpublic declare ${CSSPropertyToJavaScriptProperty(property)}: string;`);
	}

	lines.push('\t/* eslint-enable @typescript-eslint/member-ordering */');
	lines.push('\t// -CSSProperties');

	await writeFile(
		CSS_STYLE_DECLARATION_FILE_PATH,
		content.replace(/\t\/\/ \+CSSProperties(.|\n)*\t\/\/ -CSSProperties/, lines.join('\n'))
	);
})();

function CSSPropertyToJavaScriptProperty(str) {
	return str
		.replace(/^-(webkit|o|ms|moz)/, '$1')
		.replace(/-[a-z]/g, (letter) => letter[1].toUpperCase());
}
