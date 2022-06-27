/// <reference types='Cypress' />

describe('Checkbox', () => {

    it('Check uno', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        //check() = click() - selecciona el elemetno
        cy.get('[type="checkbox"]').check().should('be.checked'); // verifica si esta seleccionado
        cy.wait(1000);
        //uncheck() - deselecciona el elemento
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');// verifica si no esta seleccionado
    });

    
    it('Check por selector', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        //check() = click() - selecciona el elemetno
        cy.get('#isAgeSelected').check().should('be.checked'); // verifica si esta seleccionado
        cy.wait(1000);
        //uncheck() - deselecciona el elemento
        cy.get('#isAgeSelected').uncheck().should('not.be.checked');// verifica si no esta seleccionado
    });

    it.only('Check radio button', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-radiobutton-demo.html');
        //check() = click() - selecciona el elemetno
        cy.get("input[value='Female'][name='optradio']").check().should('be.checked'); // verifica si esta seleccionado
        cy.wait(1000);
        //uncheck() - deselecciona el elemento
        cy.get("input[value='Male'][name='optradio']").click().should('be.checked');// verifica si no esta seleccionado
    });
})  