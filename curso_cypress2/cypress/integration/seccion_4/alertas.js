/// <reference types='Cypress' />

const { should } = require('chai');

require('cypress-xpath')

describe('Test Alerts', () => {

    it('titleTest', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-modal-demo.html');
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate');
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
        // cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').clic
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("This is the place where the content for the modal dialog display")
            return true
        })
    })
})