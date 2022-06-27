/// <reference types='Cypress' />

describe('Reto selectores multiples', () => {

    it('', () => {
        cy.visit('https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html');
        cy.get('.form-control.pickListSelect.pickData').should('be.visible')
        .select(["Isis","Luiza","Manuela"]).then(()=>{
            cy.get('.pAdd.btn.btn-primary.btn-sm').should('be.visible').click().then(()=>{
                cy.get('.pAddAll').click().then(()=>{
                    cy.get('.pRemoveAll').click().then(()=>{
                        cy.log("se ejecutaron todas las promesas")
                    })
                })
            });
        });
    });
})  