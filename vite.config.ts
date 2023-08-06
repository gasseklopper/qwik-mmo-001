import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import netlifyEdge from '@netlify/vite-plugin-netlify-edge'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

export default defineConfig(() => {
	return {
		plugins: [
			qwikCity(),
			qwikVite({
				ssr: { outDir: 'netlify/edge-functions/entry.netlify-edge' },
			}),
			tsconfigPaths(),
			netlifyEdge({ functionName: 'entry.netlify-edge' }),
			partytownVite({ dest: join(__dirname, 'public', '~partytown') }),
		],
		test: {}, // this is the config entry we are adding
		esbuild: {
			include: ['**/*.js'],
		},
	}
})
