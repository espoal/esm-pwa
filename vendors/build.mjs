import { buildHelper } from 'build'

const options = {
  entryPoints: ['react/react.mjs'],
  outDir: 'libs',
  version: true
}

await buildHelper(options)
