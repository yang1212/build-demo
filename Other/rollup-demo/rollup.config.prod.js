import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/main.js',
  output: [
    {
      format: 'es',
      file: 'dist/index.esm.js',
      name: 'testEs'
    },
    {
      format: 'cjs',
      file: 'dist/index.common.js',
      name: 'testCjs'
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
  external: ['yangfumoduletest1']
}