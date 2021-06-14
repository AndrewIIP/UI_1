describe("Test Home", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
      })

    it("Test home Page", () => {
        cy.contains('h2', 'Home page')
        cy.get("#navbarSupportedContent > ul > li:nth-child(1) > a").should('have.attr', 'href')
        cy.get("#navbarSupportedContent > ul > li:nth-child(2) > a").should('have.attr', 'href')
        cy.get("#navbarSupportedContent > ul > li:nth-child(3) > a").should('have.attr', 'href')
        cy.get('#app > div > div > p > a')
    })
})