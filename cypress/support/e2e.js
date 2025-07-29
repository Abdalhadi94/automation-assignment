import './commands';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore specific errors
  if (err.message.includes('Cannot read properties of null (reading \'postMessage\')')) {
    return false; // Prevent Cypress from failing the test
  }
});