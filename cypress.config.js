const { defineConfig } = require("cypress");

module.exports = defineConfig({
   defaultCommandTimeout: 10000, // default wait time for .get, .contains, etc.
  pageLoadTimeout: 60000,       // increase if pages load slowly
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
