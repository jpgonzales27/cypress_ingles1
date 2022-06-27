/// <reference types='Cypress' />

describe('5to test', () => {

    it.only('run only primero', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
        cy.wait(1000);
        cy.get('#userName').type('{pageup}');
        cy.wait(1000);
    });

    
    it('test que no se ejecutan', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
    });

    
    it('test que no se ejecutan', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
    });

    it('test que no se ejecutan', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
    });

    it.only('run only ultimo', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.log('El titulo se valido correctamente');
        cy.wait(1000);
        cy.get('#userName').type('{pagedown}');
        cy.wait(1000);
    });
})  