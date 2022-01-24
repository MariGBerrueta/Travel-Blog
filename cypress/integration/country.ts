describe ('country page renders right country and images', () => {
    //visits country/targetCountry page
    it('visits Country page', () => {
      cy.visit('/Country/Russia')
    })
    //title is equal to targetCountry
    it('title of the page equals the target country', () => {
      cy.get('[cy-data=pageTitle]').should('contain', 'Russia')
    })
    //clicks on image in gallery and country has a value of the target country
    it('image in the gallery corresponds to the target country', () => {
       cy.get('[cy-data=photo1]').click()
       cy.get('[cy-data=BDcountryName]').should('contain', 'Country: Russia')
    })
  })