var webpackConf = require('./webpack.config')
delete webpackConf.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS','Chrome','Firefox'],
    frameworks: ['jasmine'],
    reporters: ['spec','coverage'],
    files: ['../test/unit/index.js'],
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    coverageReporter: {
      dir: '../test/unit/coverage',
      reporters: [
        { type: 'json', subdir: '.', file: 'coverage.json'},
        { type: 'lcov', subdir: '.'},
        { type: 'text-summary'}
      ]
    }
  })
}
