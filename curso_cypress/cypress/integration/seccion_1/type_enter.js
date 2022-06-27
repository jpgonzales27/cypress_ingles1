/// <reference types='Cypress' />

describe('Tercer Test', () => {

    it('Presionar enter', () => {
        cy.visit('https://www.google.com/');
        cy.get('[name="q"]').type('Cypress io {enter}');
        cy.wait(4000);
        cy.get("[href='https://www.cypress.io/'] > .LC20lb").click();
    });
})  