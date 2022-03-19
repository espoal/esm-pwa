import { buildHelper } from 'build'
import { tailwindPlugin } from '@vendors/tailwind'

const options = {
  entryPoints: [
    'app/index.mjs',
    'sw/sw.mjs'
  ],
  names: '[dir]/../[name]',
  plugins: [tailwindPlugin]
}

await buildHelper(options)
