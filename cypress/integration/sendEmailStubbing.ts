describe('Contact Form sends email', () => {
    it('the server sends emails correctly', () => {
        cy.request('POST', '/api/contact', {"name": "Carlos", "email":"test@gmail.com", "message":"hello world!"})
        .then( (res) => {
            expect(res.status).to.eq(200)
        })
    })
})