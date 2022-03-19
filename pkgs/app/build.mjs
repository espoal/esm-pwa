import { buildHelper } from 'build'
import { tailwindPlugin } from '@vendors/tailwind'

const entryPoints = [
  "./src/index.mjs",
  "./src/sw.mjs"
]

await buildHelper({entryPoints, plugins: [tailwindPlugin]})


