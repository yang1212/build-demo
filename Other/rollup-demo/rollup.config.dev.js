import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/main.js',
  output: [
    {
      format: 'es',
      file: 'dist/index.esm.js',
      name: 'testEs',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'dist/index.common.js',
      name: 'testCjs',
      sourcemap: true
    }
  ],
  // module路径指向
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
  external: ['yangfumoduletest1']
}