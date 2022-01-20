const { createYield } = require("typescript")

describe('My First Test', () => {
    it('visits landing page', () => {
      cy.visit("http://localhost:3000/")
      cy.pause()
      cy.contains("Choose a country to explore").click()

      cy.url().should('include', 'http://localhost:3000/SearchCountries')
    })
})