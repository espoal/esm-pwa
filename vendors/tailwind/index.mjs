import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

const tail = tailwind({
  theme: {
    extend: {},
  },
  plugins: [],
})

export const tailwindPlugin = sassPlugin({async transform(source, resolveDir) {
    const {css} = await postcss([
      tail,
      autoprefixer
    ]).process(source)
    return css
  }})
