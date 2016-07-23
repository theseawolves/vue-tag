var path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'vue-tag.js',
    library: 'VueComp',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
