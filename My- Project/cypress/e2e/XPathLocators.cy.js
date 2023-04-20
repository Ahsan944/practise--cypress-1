// const cypress = require("cypress")
// const { it } = require("mocha")


describe('XPathLocators',()=>{

    it('find no products',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation?")
        cy.xpath("//html//head//link").should('have.length',1)
    })


    it('find products',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation?")
        cy.xpath("//html//head//link").should('have.length',1)
    })
})
