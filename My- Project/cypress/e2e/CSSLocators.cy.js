
describe('CSSLocators',() =>{


it("css locators",() =>{


    cy.visit("https://itera-qa.azurewebsites.net/home/automation?")
    cy.get("input[placeholder='Search']"). type("Test Automation")      //id tag is optional 

    cy.get("button[type='submit']").click()
    // cy.get("//a[normalize-space()='Practice']").click()

    

})



})
