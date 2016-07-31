//var base = require('./karma.conf')
var webpackConf = require('./webpack.config')
delete webpackConf.entry

var customLaunchers =   {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    sl_mac_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.10'
    }
  }

module.exports = function (config) {

    // Use ENV vars on Travis and sauce.json locally to get credentials
    if (!process.env.SAUCE_USERNAME) {
        process.env.SAUCE_USERNAME = require('./sauce').username;
        process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }


    config.set({
      files: ['../test/unit/index.js'],
      preprocessors: {
        '../test/unit/index.js': ['webpack']
      },
      webpack: webpackConf,
      webpackMiddleware: {
        noInfo: true
      },
      reporters: ['progress', 'saucelabs'],
       port: 9876,
       colors: true,
       logLevel: config.LOG_DEBUG,
       sauceLabs: {
         testName: 'Vue tag unit tests',
         recordScreenshots: false,
         connectOptions: {
           port: 5757,
           logfile: 'sauce_connect.log'
         },
         public: 'public'
       },
       // Increase timeout in case connection in CI is slow
       captureTimeout: 120000,
       customLaunchers: customLaunchers,
       browsers: Object.keys(customLaunchers),
       singleRun: true
    });
};
