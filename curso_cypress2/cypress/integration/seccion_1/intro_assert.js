/// <reference types='Cypress' />

describe('test 7', () => {

    it('intro a los assert', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);
        cy.get('#userName').should('be.visible').type('juan')
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('jp@example.com')
        cy.get('#currentAddress').should('be.visible').type('Creavux')
    });
})  