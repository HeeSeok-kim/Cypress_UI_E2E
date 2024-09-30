import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
    viewportHeight: 760,
    viewportWidth: 360,
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  watchForFileChanges: false,
});

