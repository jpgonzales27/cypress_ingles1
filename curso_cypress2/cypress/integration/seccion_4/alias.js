/// <reference types='Cypress' />



describe('Alias', () => {

    it('test alias', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html');
        cy.title().should('eq','Input Validation');
        cy.get('#firstname').should('be.visible').as('nom')
        cy.get('#surname').should('be.visible').as('ape')
        cy.get('#age').should('be.visible').as('edad')
        cy.get('#country').should('be.visible').as('pais')
        cy.get('#notes').should('be.visible').as('notas')
        cy.get('[type="submit"]').should('be.visible').as('btn')
        cy.get('@nom').type('Juan');
        cy.get('@ape').type('Gonzales Alvarado');
        cy.get('@edad').type('30');
        cy.get('@pais').select('Bolivia');
        cy.get('@notas').type('Un dios');
        cy.get('@btn').click();

    });
})