import { buildHelper } from 'build'
import { tailwindPlugin } from '@vendors/tailwind/esbuild.mjs'

const options = {
  entryPoints: [
    'app/index.mjs',
    'sw/sw.mjs'
  ],
  names: '[dir]/../[name]',
  plugins: [tailwindPlugin],
  external: ['postcss']
}

await buildHelper(options)
