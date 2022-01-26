describe('Contact Form shows right error messages', () => {
    //visit contact page
    it('visits Contact Page', () => {
        cy.visit('/Contact')
    })
    
    //type name, invalid email and no message
    it('user fills out the form wrongly', () => {
        cy.get('[cy-data=nameInput]').type('Mariana')
        cy.get('[cy-data=emailInput]').type('testgmail.com')
    })

    //clicking send should show error messages
    it('form shows error messages', () => {
        cy.get('[cy-data=submitBtn]').click()
        cy.get('[cy-data=errorMessages]').should('have.length', 2)
    })
})