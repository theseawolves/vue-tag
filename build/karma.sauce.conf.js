var base = require('./karma.conf')

var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      platform: 'OS X 10.11',
      browserName: 'chrome',
      customData: {
        awesome: true
      }
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      platform: 'OS X 10.11',
      browserName: 'firefox'
    },
    'SL_Edge': {
      base: 'SauceLabs',
      platform: 'Windows 10',
      browserName: 'microsoftedge'
    }
  }

module.exports = function (config) {

    // Use ENV vars on Travis and sauce.json locally to get credentials
    if (!process.env.SAUCE_USERNAME) {
        process.env.SAUCE_USERNAME = require('./sauce').username;
        process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }


    config.set(Object.assign(base, {
      frameworks: ['jasmine'],
      reporters: ['progress', 'saucelabs'],
       port: 9876,
       colors: true,
       logLevel: config.LOG_DEBUG,
       sauceLabs: {
         testName: 'Karma and Sauce Labs demo',
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
    }));
};
