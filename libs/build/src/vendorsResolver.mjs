
export const vendorsResolver = (currentVersion) => ({
  name: 'example',
  setup(build) {
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^@vendors\/react$/ }, args => {
      // console.log({args})
      return { path: `/libs/react${currentVersion}.mjs`, external: true }
    })
    // Mark all paths starting with 'http://' or 'https://' as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      // console.log({args})
      return { path: args.path, external: true }
    })

    // Mark all paths starting with 'data:' as external
    build.onResolve({ filter: /^data:/ }, args => {
      // console.log({args})
      return { path: args.path, external: true }
    })

    build.onResolve({ filter: /.html/ }, async args => {
      if (args.pluginData) return // Ignore this if we called ourselves
      // TODO: dont treeshake files

      // console.log({args})

      const { path, ...rest } = args
      rest.pluginData = true // Avoid infinite recursion
      const result = await build.resolve(path, rest)

      result.sideEffects = true
      return result
    })
  },
})
