/// <reference types='Cypress' />


describe('description', () => {

    it('Invoke Text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html');
        cy.title().should('eq','Input Validation');
        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.');

        cy.get('[for="firstname"]').invoke('text').as('titleName')
        cy.get('@titleName').should('contain','First name').then(()=>{
            cy.get('#firstname').type('Juan')
        })
    });


    it('Invoke style', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html');
        cy.title().should('eq','Input Validation');
        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.');
        cy.get('[for="firstname"]').invoke('attr','style','color_Blue; font-size:50px')
    });

    it.only('Invoke ocultar y mostrar', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html');
        cy.title().should('eq','Input Validation');
        cy.get('[for="firstname"]').invoke('hide')
        cy.wait(3000);
        cy.get('[for="firstname"]').invoke('show')
    });
})