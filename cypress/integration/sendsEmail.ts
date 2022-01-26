describe('Contact Form sends email', () => {
    it('user sends email correctly', () => {
        // spyies on post request
        cy.intercept('POST', '/api/contact').as('sendsEmail')
        //user visits contact page
        cy.visit('/Contact')
        //user fills the form and the inputs have the right values
        cy.get('[cy-data=nameInput]').type('Mariana').should('have.value', 'Mariana')
        cy.get('[cy-data=emailInput]').type('test@gmail.com').should('have.value', 'test@gmail.com')
        cy.get('[cy-data=messageInput]').type('Hello World!').should('have.value', 'Hello World!')
        // user submits the form
        cy.get('[cy-data=submitBtn]').click()
        // the request passes the right values to sever, and the response is successful
        cy.wait('@sendsEmail').then( ({request, response}) => {
            expect(request.body.name).to.eq('Mariana')
            expect(request.body.email).to.eq('test@gmail.com')
            expect(request.body.message).to.eq('Hello World!')
            expect(response.statusCode).to.eq(200)
        })
    })
})