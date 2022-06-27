/// <reference types='Cypress' />

require('cypress-xpath')

describe('Reto funcion hooks', () => {

    let time = 1000

    before(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()
        cy.wait(time)
    })

    it('click Admin', () => {
        cy.xpath("//b[normalize-space()='Admin']").should('be.visible').click();
        cy.wait(time);
    });
    
    it('click user managememt', () => {
        cy.get('#menu_admin_UserManagement').should('be.visible').click();
        cy.wait(time);
    });

    it('click job', () => {
        cy.get('#menu_admin_Job').should('be.visible').click();
        cy.wait(time);
    });

    after(()=>{
        cy.get('#welcome').should('be.visible').click()
        cy.xpath("//body/div/div/div[@class='panelContainer']/ul/li[3]").should('be.visible').click();
    })
})