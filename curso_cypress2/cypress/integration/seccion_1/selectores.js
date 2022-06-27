/// <reference types='Cypress' />
require('cypress-xpath')
describe('TIpos de selectores', () => {

    it('Por Id ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').should('be.visible').type('Juan');
    });

    it('Por sus atributos ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get("[placeholder='Full Name']").should('be.visible').type('Juan');
    });

    it('Por xpath ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.xpath("//input[@type='text']").should('be.visible').type('Juan Pablo')
    });

    it('Por contains', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get(".custom-control-label").contains('Female').click()
        cy.wait(1000);
        cy.get(".custom-control-label").contains('Other').click()
    });

    it.only('Por copy selector', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get("#userNumber").should('be.visible').type('copy selector')

    });

})  

