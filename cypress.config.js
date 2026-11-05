const fs = require("node:fs/promises");
const path = require("node:path");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  trashAssetsBeforeRuns: false,
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://automationexercise.com",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotsFolder: "test-artifacts/automationexercise/test-execution/screenshots",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      on("after:run", async (results) => {
        const reportsDirectory = path.join(
          config.projectRoot,
          "test-artifacts",
          "automationexercise",
          "reports",
        );
        await fs.mkdir(reportsDirectory, { recursive: true });
        await fs.writeFile(
          path.join(reportsDirectory, "cypress-results.json"),
          JSON.stringify(results, null, 2),
          "utf8",
        );
      });
    },
  },
});
