const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({

 watchForFileChanges: false,

pageLoadTimeout: 5000,

reporter: 'cypress-mochawesome-reporter',

reporterOptions: {
  charts: true,
  reportPageTitle: 'custom-title',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
