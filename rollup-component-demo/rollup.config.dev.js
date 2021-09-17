import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/index.js',
    name: 'test',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    livereload(),
    serve({
      open: true,
      port: 9001,
      contentBase: ''
    })
  ],
  external: ['lodash']
}