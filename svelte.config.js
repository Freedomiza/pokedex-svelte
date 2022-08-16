import path from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			importer: makeAttractionsImporter({
				// specify the path to your theme file, relative to this file
				themeFile: path.join(__dirname, 'static/css/theme.scss'),
				// not mandatory but nice to have for concise imports
				includePaths: [path.join(__dirname, './static/css')]
			})
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			'@': 'src',
			'@components': 'src/components',
			'@models': 'src/models'
		}
	}
};

export default config;
