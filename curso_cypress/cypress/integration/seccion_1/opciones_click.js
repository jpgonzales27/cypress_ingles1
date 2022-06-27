/// <reference types='Cypress' />

describe('test 8', () => {

    it('click sencillo', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.viewport(1200,800);
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000);
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').should('be.visible').click();
        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()
    });

    
    it('click forzado', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.viewport(1200,800);
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000);
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').should('be.visible').click();
        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click({force: true})
    });

    it.only('click forzado', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.viewport(1200,800);
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000);
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').should('be.visible').click();
        cy.get('h1').should('be.visible').click(50,5)
        cy.get('h1').should('be.visible').click(70,15)

    });
})  