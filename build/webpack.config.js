module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/vue-tag.js',
    library: 'VueTag',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}
