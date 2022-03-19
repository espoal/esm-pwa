import { buildHelper } from 'build'

const options = {
  entryPoints: ['react.mjs'],
  outDir: 'libs',
  version: true
}

await buildHelper(options)
