///  <reference types = "Cypress"/>  //  for Cypress 


describe("Check UI Element",() =>{

    it("Checking Radio Buttons",()=>{
        
        cy.visit("https://itera-qa.azurewebsites.net/home/automation?")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
        cy.get("input#other").should('be.visible')
        
    })
})


