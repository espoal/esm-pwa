import { buildHelper } from 'build'

const options = {
  entryPoints: ['vendors.mjs'],
  outDir: 'libs',
  version: 'v00'
}

await buildHelper(options)
