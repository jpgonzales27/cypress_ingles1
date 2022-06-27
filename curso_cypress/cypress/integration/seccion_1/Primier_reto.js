/// <reference types='Cypress' />
require('cypress-plugin-tab')

describe('Primer reto', () => {

    it('', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.title().should('eq','ToolsQA')
        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.get('#searchBox').should('be.visible').clear()
        cy.get('#addNewRecordButton').should('be.visible').click()

        cy.get('#firstName').type('Juan').tab()
        .type('gonzales').tab().type('jp@gmail.com').tab()
        .type(30).tab().type(3000).tab().type('Sistemas')
        cy.get('#submit').should('be.visible').click()

        cy.get('#searchBox').should('be.visible').type('Juan')
        cy.get('#searchBox').should('be.visible').clear()

        cy.get('#edit-record-4').click()
        cy.get('#age').clear().type(15);
        cy.get('#salary').clear().type(15000);
        cy.get('#submit').should('be.visible').click()       

        cy.get('#delete-record-4').should('be.visible').click()
   
    });
})  