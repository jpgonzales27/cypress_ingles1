/// <reference types='Cypress' />

describe('reto 2', () => {

    it('Reto 2', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title('eq','Computers database')
        cy.wait(1500);

        //buscado
        cy.get('#searchbox').should('be.visible').type('ACE');
        cy.get('#searchsubmit').click();

        //add
        cy.get('#add').should('be.visible').click()
        cy.get('#name').type('celu')
        cy.get('#introduced').type('2021-03-12')
        cy.get('#discontinued').type('2022-12-12')
        
        //combo
        cy.get('#company').should('be.visible').select('Nokia').should('have.value','16')
        cy.wait(1000);

        cy.get('.primary').click()
    });
})  