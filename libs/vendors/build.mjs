import { buildHelper } from 'build'

const entryPoints = [
  "./vendors.mjs"
]

await buildHelper({entryPoints, outDir: 'libs'})
