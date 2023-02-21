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
  ]
}