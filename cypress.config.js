const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1300,
    viewportHeight: 800,
    fixturesFolder: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: 'cypress/report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'dd-mm-yyyy_HH-MM-ss',
    },
    env: {
      baseUrl: "https://www.corinthians.com.br/",
    },
    e2e: {
      chromeWebSecurity: false,
      hideXHRInCommandLog: true,
      experimentalRunAllSpecs: true,
      //Aqui ficarão todos os meus testes:
      specPattern: [
        "cypress/e2e/gui/01 - Tela Principal.cy.js",
        "cypress/e2e/gui/02 - Tela de Parque São Jorge.cy.js"
      ],
    },
});