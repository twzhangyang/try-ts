import axios from "axios"

describe('Bookish applicaton', function () {

  afterEach(() => {
    return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err=>err)
  })

  beforeEach(() => {
    const books = [
      {"name": "Refactoring", "id": 1},
      {"name": "Domain-driven design", "id": 2}
    ]

    return books.map(item => axios.post('http://localhost:8080/books', item, {
      headers: { 'Content-Type': 'application/json'}
    }))
  })

  it('Visits the bookish', function () {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should('have.length', 2)

    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(2)
      const titles = [...books].map(x => x.querySelector('h2').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})
