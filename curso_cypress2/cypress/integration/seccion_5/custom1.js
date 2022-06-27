/// <reference types='Cypress' />

require('cypress-xpath')

describe('description', () => {

    let time = 1000

    before(()=>{
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA')
    })

    it('Demo uno', () => {
        cy.texto_visible("#userName","Juan");
        cy.texto_visible("#userEmail","j@gmail.com");
        cy.texto_visible("#currentAddress","Crevaux");
        cy.texto_visible("#permanentAddress","Ballivian");
        cy.click_btn("#submit")
    });

    it('Demo dos por bloque', () => {
        cy.bloque_ToolsQA('juan','jp@gmail.com','dir1','dir2')
    });
})