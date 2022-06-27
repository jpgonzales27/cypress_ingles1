/// <reference types='Cypress' />

require('@4tw/cypress-drag-drop')

describe('description', () => {

    it('drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.title().should('eq','The Internet');
        cy.get('#column-a').drag('#column-b',{force:true})
    });

    it('drag and drop 2', () => {
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html');
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone',{force:true})
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone',{force:true})
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone',{force:true})
    });

    
    it('mouse over', () => {
        cy.visit('https://www.way2automation.com/');
        cy.get('.eicon-close').should('be.visible').click()
        cy.contains("Video Tutorial").trigger('mouseover')
        cy.contains("Selenium with Java").invoke('removeAttr','target').click()
    });
    
    it.only('move slider', () => {
        cy.visit('https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html');
        // cy.get("Selenium with Java").invoke('removeAttr','target').click()
        cy.get('#slider1 > .range > input').invoke('attr','value',80)
        cy.get('#slider3 > .range > input').invoke('attr','value',100)
    });
})