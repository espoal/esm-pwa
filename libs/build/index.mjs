import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { vendorsResolver } from './src/vendorsResolver.mjs'
import { timeNow, watchHelper } from './src/utils.mjs'
import { readFile } from 'fs/promises'

// TODO: find a better approach to detect package version
// import pkg from '../../package.json' assert { type: 'json' }
const distPath = await import.meta.resolve('dist/package.json')
const outBase = distPath.split('file://').pop().split('package.json').shift()

const pkg = await readFile(outBase + '../package.json')
const { version } = JSON.parse(pkg)
const currentVersion = '-v' + version
console.log({currentVersion})

const vendors = vendorsResolver(currentVersion)
const pnp = pnpPlugin()

const baseOptions = {
  entryPoints: [ 'No entrypoint specified' ],
  plugins: [],
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
  loader: {'.mjs': 'jsx', '.html': 'file', '.jpg': 'file', '.png': 'dataurl', '.svg': 'dataurl'},
  outExtension: { '.js': '.mjs' }
}

export const buildHelper = async ({
  entryPoints,
  external = [''],
  outDir = '',
  watch = true,
  names = '[dir]/[name]',
  version = false,
  plugins = []
}) => {

  const entryNames = `${names}${ version ? currentVersion : ''}`
  console.log({entryNames})

  const options = {
    ...baseOptions,
    entryPoints,
    external,
    plugins: [vendors, ...plugins, pnp],
    outdir: outBase + 'public/' + outDir,
    watch: watch ? watchHelper : false,
    entryNames
    // entryNames: '[dir]/../[name]'
    // entryNames: version ? `[dir]/[name]-${currentVersion}` : ''
  }

  await esbuild.build(options)
  console.log('Build successful at time: ' + timeNow())
}
