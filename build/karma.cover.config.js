var path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '../test/unit/index.js'
    ],
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },
    webpack: {
      preLoaders: [
        { test: /\.js$/, include: [path.resolve('src/')], loader: 'isparta' }
      ],
      module: {
        loaders: [
          { test: /\.vue$/, loader: 'vue' },
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
      },
      vue: {
        loaders: {
          js: 'isparta'
        }
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    browsers: ['PhantomJS'],
      reporters: ['mocha', 'coverage'],
      coverageReporter: {
        reporters: [
          { type: 'lcov', dir: '../coverage', subdir: '.' },
          { type: 'text-summary', dir: '../coverage', subdir: '.' }
        ]
      },
      singleRun: true
  })
}
