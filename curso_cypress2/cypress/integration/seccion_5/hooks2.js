/// <reference types='Cypress' />

require('cypress-xpath')

describe('description', () => {

    let time = 1000

    before(()=>{
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    })

    it('Test uno', () => {
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(time)
    });

    it('Test dos', () => {
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(time)
    });

    it.only('Test tres', () => {
        cy.xpath("//label[normalize-space()='Option 3']").click()
        cy.wait(time)
    });
    
})