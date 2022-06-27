/// <reference types='Cypress' />

describe('4to test', () => {

    it('Type pageup', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
        cy.wait(1000);
        cy.get('#userName').type('{pageup}');
        cy.wait(1000);
    });

    it('Type pagedown', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
        cy.wait(1000);
        cy.get('#userName').type('{pagedown}');
        cy.wait(1000);
    });
})  