describe("Test User Info", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/user')
      })
    
    it("Test info page", () => {
        cy.contains("#info-username", "Oleksandr")
        cy.contains("#info-email", "oleksandr@gmail.com")
        cy.contains("#info-birthday", "01.01.2000")
        cy.contains("#info-gender", "Male")

    })

})