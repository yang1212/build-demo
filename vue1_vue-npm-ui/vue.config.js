const path = require('path')

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  productionSourceMap: false, // 打包不输出map文件
  // 强制内联CSS
  css: { extract: false },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // vue默认@指向src目录，这里要修正为examples，另外新增一个@指向packages
    config.resolve.alias
      .set('@', path.resolve('packages'));
    // lib是最终npm包打包好的地方，不需要eslint检查                
    config.module
      .rule('eslint')
      .exclude.add(path.resolve('lib'))
      .end();
    // packages需要编译  
    config.module    
      .rule('js')
      .include.add(/packages/) // 注意这里的/packages/不要加''包裹
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}