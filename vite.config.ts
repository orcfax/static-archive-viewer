import path from 'path';
import { setDefaultResultOrder } from 'dns';
import { defineConfig, PluginOption } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

setDefaultResultOrder('verbatim');

export default defineConfig({
	plugins: [
		svelte() as PluginOption,
		viteSingleFile({
			removeViteModuleLoader: true,
			useRecommendedBuildConfig: true
		})
	],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	},
	build: {
		outDir: 'build',
		target: 'es2019'
	}
});
