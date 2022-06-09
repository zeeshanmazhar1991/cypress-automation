const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  username: 'zeeshan.feb89@gmail.com',
  password: 'Casuality01!',
  reporter: 'cypress-multi-reporters',
  experimentalSessionSupport: true,
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com/',
  },
})
