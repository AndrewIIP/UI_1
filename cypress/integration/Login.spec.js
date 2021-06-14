describe("Test Login", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
      })
    
    it("Test Login", () => {
        cy.get("#email").type("oleksandr@gmail.com").should("have.value", "oleksandr@gmail.com")
        cy.get("#pwd").type("123456").should('have.value', "123456")
        cy.get('input[type="checkbox"]').not('[disabled]')
            .check().should('be.checked')
        cy.get('button[type="submit"]').click()
    })

})