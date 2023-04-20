// const { describe } = require("mocha");

// const cypress = require("cypress")
// const { it } = require("mocha")

describe("Assertion", ()=>{

    it("implicit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should and 

        // cy.url().should('include','orangehrmlive.com')

        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // cy.url().should('contain','orangehrm')

        // Implicit Assertion difference should using different assertion include , eq & contain

        // cy.url().should('include','orangehrmlive.com')

        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // .should('contain','orangehrm')

        // 2nd method assertion .should keyword

        // cy.url().should('include','orangehrmlive.com')

        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // .and('contain','orangehrm')

        //3rd method assertion using .and keyword


        // 4th method assertion using not.contain and wrong name greenhrm

        cy.url().should('include','orangehrmlive.com')

        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')  // Logo visible 

        .and('exist')      // Logo exist

        cy.xpath("//a").should('have.length','5')   // No of links

        cy.get("input[placeholder='Username']").type("Admin")   //provide a vlaue input box 

        cy.get("input[placeholder='Username']").should('have.value','Admin')   //vlaue  
        
        // cy.get("input[placeholder='Password']").type("admin123") // provide a value input box



        




    })




})