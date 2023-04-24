describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r', {
      statusCode: 400,
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display an error message upon a server error', () => {
    cy.get('.error').should('be.visible').contains('Error: Server Error, please try again.')
  })
})