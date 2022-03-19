import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { sassPlugin } from 'esbuild-sass-plugin'
import { vendorsResolver } from './src/vendorsResolver.mjs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// import pkg from '../../package.json' assert { type: 'json' }


const currentVersion = 'v00'

const vendors = vendorsResolver(currentVersion)

const tail = tailwind({
  theme: {
    extend: {},
  },
  plugins: [],
})

const pnp = pnpPlugin()
const sass = sassPlugin({async transform(source, resolveDir) {
    const {css} = await postcss([
      tail,
      autoprefixer
    ]).process(source)
    return css
  }})


export const baseOptions = {
  entryPoints: [ 'No entrypoint specified' ],
  plugins: [ vendorsResolver, sass, pnp ],
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
