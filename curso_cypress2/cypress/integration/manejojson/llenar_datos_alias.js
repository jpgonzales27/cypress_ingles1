/// <reference types='Cypress' />

describe('cargar json', () => {

    before(function(){
         cy.fixture("datos").as("datos_json")
    })

    it('cargar desde json alias', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');

        cy.get("@datos_json").then((data)=>{
            cy.get('#userName').should('be.visible').type(data.nombre)
            cy.get('#userEmail').should('be.visible').type(data.email)
            cy.get('#currentAddress').should('be.visible').type(data.dir1)
            cy.get('#permanentAddress').should('be.visible').type(data.dir2)
            cy.get('#submit').should('be.visible').click()
        })
    });
})