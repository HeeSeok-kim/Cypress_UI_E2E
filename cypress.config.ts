import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
    viewportHeight: 760,
    viewportWidth: 600,
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on)
    },
  },
  chromeWebSecurity: false,
  watchForFileChanges: false,
});

