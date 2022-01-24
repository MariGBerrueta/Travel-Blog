describe('Search Countries renders right country', () => {
  //visits Search countries
  it('visits SearchCountries page', () => {
    cy.visit('/SearchCountries')
  })
  //click a random a country
  it('click a country', () => {
    cy.get('[data-cy=Estonia]').click()
  })
  //arrives to /Country/Estonia
  it('visits /country/selectedCountry', () => {
      cy.url().should('include', '/Country/Estonia')
  })
})