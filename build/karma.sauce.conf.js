var base = require('./karma.conf')

var batches = [
  // the cool kids
  {
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
  },
  // ie family
  {
    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    },
    sl_ie_10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    sl_edge: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10'
    }
  },
  // mobile
  {
    sl_ios_safari_7: {
      base: 'SauceLabs',
      browserName: 'iphone',
      version: '7.0'
    },
    sl_ios_safari_9: {
      base: 'SauceLabs',
      browserName: 'iphone',
      version: '9.2'
    },
    sl_android_4_2: {
      base: 'SauceLabs',
      browserName: 'android',
      version: '4.2'
    },
    sl_android_5_1: {
      base: 'SauceLabs',
      browserName: 'android',
      version: '5.1'
    }
  }
]

module.exports = function (config) {

    // Use ENV vars on Travis and sauce.json locally to get credentials
    if (!process.env.SAUCE_USERNAME) {
        process.env.SAUCE_USERNAME = require('./sauce').username;
        process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }

    config.set(Object.assign(base, {
        sauceLabs: {
            'testName': 'Vue Tag Unit Tests',
            'public': 'public'
        },
        browsers: Object.keys(batches),
        customLaunchers: batches,
        reporters: ['progress', 'saucelabs'],
        singleRun: true
    }));
};
