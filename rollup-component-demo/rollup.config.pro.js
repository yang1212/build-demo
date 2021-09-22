import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/index-es.js',
      name: 'testEs',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'dist/index-cjs.js',
      name: 'testCjs',
      sourcemap: true
    }
  ],
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