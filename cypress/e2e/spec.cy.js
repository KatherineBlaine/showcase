describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r', {
      statusCode: 200,
      fixture: 'books.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the site title', () => {
    cy.get('h1').should('be.visible').contains('Bookwise')
  })

  it('Should display the search form elements', () => {
    cy.get('form').should('be.visible')

    cy.get('.explore').should('be.visible').contains('EXPLORE')
    cy.get('input').should('be.visible')

    cy.get('[href="/search/"] > button').should('be.visible').contains('Search')
    cy.get('[href="/"] > button').should('be.visible').contains('Reset')
  })

  it('Should display all book covers along with their titles and authors', () => {
    cy.get('.books-container').should('be.visible')
    cy.get('.books-container').children().should('have.length', 3)

    cy.get('[href="/book/9780593422427"]').should('be.visible')
    cy.get('[href="/book/9780593422427"] > .card-img').should('be.visible').should('have.attr', 'src', "https://storage.googleapis.com/du-prd/books/images/9780593422410.jpg")
    cy.get('[href="/book/9780593422427"] > .card-text').should('be.visible')
    cy.get('[href="/book/9780593422427"] > .card-text > h2').should('be.visible').contains('DARK ANGEL')
    cy.get('[href="/book/9780593422427"] > .card-text > h3').should('be.visible').contains('By John Sandford')

    cy.get('[href="/book/9781501171352"]').should('be.visible')
    cy.get('[href="/book/9781501171352"] > .card-img').should('be.visible').should('have.attr', 'src', "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg")
    cy.get('[href="/book/9781501171352"] > .card-text').should('be.visible')
    cy.get('[href="/book/9781501171352"] > .card-text > h2').should('be.visible').contains('THE LAST THING HE TOLD ME')
    cy.get('[href="/book/9781501171352"] > .card-text > h3').should('be.visible').contains('By Laura Dave')

    cy.get('[href="/book/9780593236598"]').should('be.visible')
    cy.get('[href="/book/9780593236598"] > .card-img').should('be.visible').should('have.attr', 'src', "https://storage.googleapis.com/du-prd/books/images/9780593236598.jpg")
    cy.get('[href="/book/9780593236598"] > .card-text').should('be.visible')
    cy.get('[href="/book/9780593236598"] > .card-text > h2').should('be.visible').contains('OUTLIVE')
    cy.get('[href="/book/9780593236598"] > .card-text > h3').should('be.visible').contains('By Peter Attia with Bill Gifford')
  })

  it('Should be able to filter books based on a search query', () => {
    cy.get('input').type('dark')
    cy.get('input').should('have.value', 'dark')
    cy.get('[href="/search/dark"] > button').click()
    cy.url().should('eq', 'http://localhost:3000/search/dark')
    cy.get('.books-container').children().should('have.length', 1)
  })

  it('Should display an error message and home button if no books match the search query', () => {
    cy.get('input').type('zzz')
    cy.get('[href="/search/zzz"] > button').click()

    cy.url().should('eq', 'http://localhost:3000/search/zzz')
    cy.get('.no-results').should('be.visible')
    cy.get('h3').should('be.visible').contains('No results! Please try searching for something else.')
    cy.get('.no-results > a > button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to reset search and show all books again', () => {
    cy.get('input').type('dark')
    cy.get('input').should('have.value', 'dark')
    cy.get('[href="/search/dark"] > button').click()
    cy.get('[href="/"] > button').click()

    cy.get('input').should('have.value', '')
    cy.get('.books-container').children().should('have.length', 3)
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to navigate to the specific book info page when a book is selected', () => {
    cy.get('[href="/book/9780593422427"]').click()
    cy.url().should('eq', 'http://localhost:3000/book/9780593422427')

    cy.get('.books-container').should('not.exist')
    cy.get('.book-info').should('be.visible')

    cy.get('.info-img').should('be.visible').should('have.attr', 'src', "https://storage.googleapis.com/du-prd/books/images/9780593422410.jpg")
    cy.get('.book-title').should('be.visible').contains('DARK ANGEL')
    cy.get('.description').should('be.visible').contains('The second book in the Letty Davenport series. Letty takes an undercover assignment that puts her in harm’s way with a group of hackers.')
    cy.get('.genre-tag').should('be.visible').contains('Genre:')
    cy.get('.genre').should('be.visible').contains('Combined Print and E-Book Fiction')
    cy.get('.stats').should('be.visible')
    cy.get('.stats > :nth-child(1)').should('be.visible').contains('Weeks on bestseller list:')
    cy.get(':nth-child(1) > .book-stat').should('be.visible').contains(1)
    cy.get('.stats > :nth-child(2)').should('be.visible').contains('Current Rank: #')
    cy.get(':nth-child(2) > .book-stat').should('be.visible').contains(1)
  })

  it('Should return home when  the back arrow button is clicked', () => {
    cy.get('[href="/book/9780593422427"]').click()
    cy.get('.back-btn').click()
  
    cy.get('.books-container').should('be.visible')
    cy.get('.book-info').should('not.exist')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should return home when the site title is clicked', () => {
    cy.get('[href="/book/9780593422427"]').click()
    cy.get('.header > .link').click()
  
    cy.get('.books-container').should('be.visible')
    cy.get('.book-info').should('not.exist')
    cy.url().should('eq', 'http://localhost:3000/')
  })
})