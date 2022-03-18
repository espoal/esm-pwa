import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

export const baseOptions = {
  entryPoints: [
    "@espoal/app/src/index.mjs",
    "@espoal/app/src/error-modal.mjs",
    "@espoal/app/src/sw.mjs",
    "@espoal/app/src/vendors.mjs"
  ],
  plugins: [pnpPlugin()],
  bundle: true,
  splitting: true,
  format: "esm",
  outdir: "dist/public/scripts",
  platform: "browser",
  target: "esnext",
  minify: false,
  watch: true,
  external: ['./vendors.mjs'],
  loader: {'.mjs': 'jsx'},
  outExtension: { '.js': '.mjs' }
}

const time = (date) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


baseOptions.watch = {
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error)
    else {
      console.log('watch build succeeded at time: ' + time(new Date()))
      const {errors, warnings} = result
      console.log({errors, warnings})
    }
  }
}

await esbuild.build(baseOptions)

console.log('Build succesful at time: ' + time(new Date()))
