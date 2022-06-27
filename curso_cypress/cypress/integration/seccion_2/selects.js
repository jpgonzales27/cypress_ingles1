/// <reference types='Cypress' />

describe('', () => {

    it('Select uno', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html');
        cy.get('#select-demo').should('be.visible').select('Friday').should('have.value','Friday');
        cy.wait(1000);
        cy.get('#select-demo').should('be.visible').select('Saturday').should('have.value','Friday');
    });


    
    it('Select autocompletdo', () => {
        cy.visit('https://www.google.com');
        cy.get("[name='q']").should('be.visible').type('ferrari {enter}');
        cy.get('[href="https://www.ferrari.com/es-BO"] > .LC20lb').click()
    });

    
    it('Select multiples opciones', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html');
        cy.get('#multi-select').should('be.visible').select(["California","Ohio","Washington"]) 
    });

    it.only('Select multiples opciones', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html');
        cy.get('#multi-select').should('be.visible').select(["California","Ohio","Washington"]).then(()=>{
            cy.get('#printMe').should('be.visible').click()
        }) 
    });
})  