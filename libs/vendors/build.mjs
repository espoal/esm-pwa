import { buildHelper } from 'build'

const options = {
  entryPoints: ['vendors.mjs'],
  outDir: 'libs',
  version: 'aaa'
}

await buildHelper(options)
