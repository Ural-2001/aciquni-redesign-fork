import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

const config = {
	plugins: [
		sveltekit({preprocess: preprocess()}),
	]
};

export default config;
