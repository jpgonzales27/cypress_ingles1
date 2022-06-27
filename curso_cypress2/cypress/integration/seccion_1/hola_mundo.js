
/// <reference types='Cypress' />

describe('Bienvenido a cypress', () => {

    it('Mi primer test', () => {
        cy.log('hola mundo');
        cy.wait(4000);
    });

    it('Segundo test -> escribir nombre', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').type("Juan Pablo");
    });
})  