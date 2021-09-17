import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/index.js',
    name: 'test'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    commonjs()
  ],
  external: ['lodash']
}