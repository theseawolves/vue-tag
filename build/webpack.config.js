module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: '../dist/vue-tag.js',
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
