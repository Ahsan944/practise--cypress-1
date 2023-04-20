
///<reference types = "Cypress"/> ------- //  for Cypress
///<reference types = "Cypress-xpath"/>---- // for xpath


describe('Suite name', () => {


    it('verify title - positive', () => 
    {
        //Steps 
       
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq','OrangeHRM')

        
    })


    it('verify title-negative', () => 
    {
        //Steps 
       
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq','OrangeHRM123')

       
    })



//     it('test2', () => 
//     {
        
//         //Steps


//     }
    
//     )
  
// //sample of code test case 


//     it('test3', () => 
    
//     {
//         //Steps


//     }
    
//     )

      


})

// /// same but code is function() is replace is ()=>


// describe('suite name',function() {


//     it('test1', () => {
//       expect(true).to.equal(true)
//     })
// }) 


// testSuite --- Testcase --- TestSteps 

// spec file extension spec.cy.js