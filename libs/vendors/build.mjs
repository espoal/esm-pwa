import { buildHelper } from '@libs/build'

const options = {
  entryPoints: ['vendors.mjs'],
  outDir: 'libs',
  version: true
}

await buildHelper(options)
