it('numbers test steps', () => {

    cy.step('open a page')
    cy.visit('cypress/index.html')
  
    cy.step('find all primary colors')
    cy.get('.primary')
  
    cy.step('select blue')
    cy.get('.blue')
  
  });