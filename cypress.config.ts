import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mg8umn",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.js",
  },
});
