
describe("Test Markup", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/markup')
      })

    it("Click instruments", () => {
        cy.contains('h5', 'Select instruments:')
        cy.get("#1").click()
        cy.get("#2").click()
        cy.get("#3").click()
        cy.get("#4").click()
        cy.get("#5").click()
        cy.get("#6").click()
    })

    it("Test Selects", () => {
        cy.get('select[name="language"]').select('en')
        cy.get('select[name="language"]').select('ru')
        cy.get('select[name="language"]').select('uk')

        cy.get('select[name="tonality"]').select('negative')
        cy.get('select[name="tonality"]').select('neutral')
        cy.get('select[name="tonality"]').select('positive')
    })

    it("Test ner Person", () => {
        cy.get("#1").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        

        cy.get('ner-per')
    })
    
    it("Test ner Location", () => {
        cy.get("#2").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        cy.get('ner-loc')
    })

    it("Test ner Organization", () => {
        cy.get("#3").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        cy.get('ner-org')
    })

    it("Test ner Date", () => {
        cy.get("#4").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        cy.get('ner-date')
    })

    it("Test ner Nationality", () => {
        cy.get("#5").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        cy.get('ner-nat')
    })

    it("Test ner Title", () => {
        cy.get("#6").click()
        cy.get('#app > div > div > div:nth-child(3) > div:nth-child(1) > p').trigger('mousedown')
        .then(($el) => {
          const el = $el[0]
          const document = el.ownerDocument
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, 1)
          document.getSelection().removeAllRanges(range)
          document.getSelection().addRange(range)
        })
        .trigger('mouseup')
        cy.get('ner-title')
    })

    it("Click Save Article", () => {
        cy.get('#app > div > div > div:nth-child(3) > div.mr-5.mt-3.btn-group > button').click()
    })

    it("Click Next Article", () => {
        cy.get('#app > div > div > div:nth-child(3) > div.ml-5.mt-3.btn-group > button').click()
        cy.contains('h3', 'test 2')
    })

    
})