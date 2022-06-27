/// <reference types='Cypress' />

describe('Segundo test', () => {

    it('Assert title', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
    });
})  