import { buildHelper } from 'build'

const entryPoints = [
  "./src/index.mjs",
  "./src/sw.mjs"
]

await buildHelper({entryPoints})


