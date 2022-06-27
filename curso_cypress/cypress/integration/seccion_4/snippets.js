/// <reference types='Cypress' />

require('cypress-xpath')

describe('description', () => {

    let time = 1000

    before(()=>{
        cy.visit('url');
        cy.title().should('eq','pageTitle')
    })

    it('titleTest', () => {
        cy.get('locator');
    });
})