const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/': '/'

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'))
    .set('_api', resolve('src/api'))
    .set('_lib', resolve('src/lib'))
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  productionSourceMap: false,
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: process.env.VUE_APP_API_URL
  }
}
