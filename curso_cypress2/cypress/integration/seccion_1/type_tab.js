/// <reference types='Cypress' />

require('cypress-plugin-tab')

describe('6yo test', () => {

    it('type tab', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);
        cy.get('#userName').type('juan pablo').tab().type('jp@example.com').tab().type('Creavaux');
    });
})  