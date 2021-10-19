const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log(2222)
      return {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, './dist'),
            routes: ['/about'],
            renderer: new Renderer({
              inject: {
                foo: 'bar'
              },
              headless: true,
              renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      }
    }
  },
  productionSourceMap: false,
  parallel: true
}