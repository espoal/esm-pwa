import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import {sassPlugin} from 'esbuild-sass-plugin'

// import pkg from '../../package.json' assert { type: 'json' }


const currentVersion = 'v00'

let vendorsResolver = {
  name: 'example',
  setup(build) {
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^@espoal\/vendors$/ }, args => {
      // console.log({args})
      return { path: `/libs/vendors-${currentVersion}.mjs`, external: true }
    })
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      // console.log({args})
      return { path: args.path, external: true }
    })

    build.onResolve({ filter: /.html/ }, async args => {
      if (args.pluginData) return // Ignore this if we called ourselves
      // TODO: dont treeshake files

      console.log({args})

      const { path, ...rest } = args
      rest.pluginData = true // Avoid infinite recursion
      const result = await build.resolve(path, rest)

      result.sideEffects = true
      return result
    })
  },
}



export const baseOptions = {
  entryPoints: [ 'No entrypoint specified' ],
  plugins: [vendorsResolver, sassPlugin(), pnpPlugin() ],
  bundle: true,
  splitting: true,
  format: 'esm',
  chunkNames: `chunks/[name]-${currentVersion}`,
  assetNames: '[dir]/[name]',
  platform: 'browser',
  target: 'esnext',
  minify: false,
  treeShaking: true,
  watch: true,
  loader: {'.mjs': 'jsx', '.html': 'file'},
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
    entryNames: version ? `[dir]/[name]-${currentVersion}` : ''
  }

  await esbuild.build(options)
}
