import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import netlifyEdge from '@netlify/vite-plugin-netlify-edge'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin/'

export default defineConfig(() => {
	return {
		optimizeDeps: {
			exclude: [
				// I tried pretty much everything here: no way to force vite pre-bundling to ignore it...
				'styled-vanilla-extract/qwik',
			],
		},
		plugins: [
			qwikCity(),
			qwikVite({
				ssr: { outDir: 'netlify/edge-functions/entry.netlify-edge' },
			}),
			tsconfigPaths(),
			netlifyEdge({ functionName: 'entry.netlify-edge' }),
			partytownVite({ dest: join(__dirname, 'public', '~partytown') }),
			vanillaExtractPlugin(),
		],
		test: {}, // this is the config entry we are adding
		// esbuild: {
		// 	include: ['**/*.js'],
		// },
	}
})
