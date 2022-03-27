import { buildHelper } from '@libs/build'
import { tailwindPlugin } from '@libs/tailwind'

const options = {
  entryPoints: [
    'app/index.mjs',
    'sw/sw.mjs'
  ],
  names: '[dir]/../[name]',
  plugins: [tailwindPlugin]
}

await buildHelper(options)
