import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	resolve: {
		// Point the 'happy-dom' import directly at the TypeScript source so the
		// tests always run against local changes without a compile step.
		alias: {
			'happy-dom': resolve(__dirname, '../packages/happy-dom/src/index.ts')
		}
	},
	test: {
		environment: 'node',
		include: ['./test/**/*.test.ts'],
		// Chrome startup takes time; give each test ample room.
		testTimeout: 30000
	}
});
