import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		  }),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
};

export default config;
