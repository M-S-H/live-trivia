const path = require('path')

module.exports = {
  lintOnSave: true,
  outputDir: path.resolve(__dirname, '../priv/static')
  // configureWebpack: {
  //   outputDir: path.resolve(__dirname, '../priv/static')
  //   // output: {
  //   //   path: path.resolve(__dirname, '../priv/static'),
  //   // },
  // },
}
