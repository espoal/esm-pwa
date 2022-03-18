import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

let vendorsResolver = {
  name: 'example',
  setup(build) {
    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^@espoal\/vendors$/ }, args => {
      // console.log({args})
      return { path: '/libs/vendors.mjs', external: true }
    })
  },
}



export const baseOptions = {
  entryPoints: [ 'No entrypoints specified' ],
  plugins: [vendorsResolver, pnpPlugin()],
  bundle: true,
  splitting: true,
  format: "esm",
  chunkNames: "chunks/[name]-[hash]",
  platform: "browser",
  target: "esnext",
  minify: false,
  treeShaking: true,
  watch: true,
  loader: {'.mjs': 'jsx'},
  outExtension: { '.js': '.mjs' }
}

const time = (date) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


const watchHelper = {
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error)
    else {
      console.log('watch build succeeded at time: ' + time(new Date()))
      const {errors, warnings} = result
      console.log({errors, warnings})
    }
  }
}


console.log('Build successful at time: ' + time(new Date()))


export const buildHelper = async ({
  entryPoints,
  external = [''],
  outDir = '',
  outBase = '../../dist/public/',
  watch = true,
  version = false
}) => {

  const options = {
    ...baseOptions,
    entryPoints,
    external,
    outdir: outBase + outDir,
    watch: watch ? watchHelper : false,
    entryNames: version ? `[dir]/[name]-${version}` : ''
  }

  await esbuild.build(options)
}
