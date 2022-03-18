import { buildHelper } from 'build'

const entryPoints = [
  "@espoal/app/index.mjs",
  "@espoal/app/src/sw.mjs"
]

await buildHelper({entryPoints})


