// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import {addMatchImageSnapshotCommand} from '@simonsmith/cypress-image-snapshot/command'
import './commands'

addMatchImageSnapshotCommand({
  failureThreshold: 0.1, // threshold for entire image
  failureThresholdType: 'pixel', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
  e2eSpecDir: 'cypress/e2e/'
})
