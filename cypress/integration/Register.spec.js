describe("Test Registration", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/register')
      })
    
    it("Test Registration", () => {
        cy.get("#name").type("oleksandr").should("have.value", "oleksandr")
        cy.get('#gender').select('female')
        cy.get('#gender').select('male')
        
        cy.get("#email").type("oleksandr@gmail.com").should("have.value", "oleksandr@gmail.com")
        cy.get("#pwd").type("123456").should('have.value', "123456")
        cy.get("#pwd_confirm").type("123456").should('have.value', "123456")
        cy.get("#birthday").type("2021-05-16").should('have.value', "2021-05-16")

        
        
        cy.get('button[type="submit"]').click()
    })

})