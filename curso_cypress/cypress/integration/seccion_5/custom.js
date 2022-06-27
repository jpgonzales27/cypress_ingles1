/// <reference types='Cypress' />

require('cypress-xpath')

describe('Comandos personalizados', () => {

    let time = 1000

    before(()=>{
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA')
        cy.wait(time);
    })

    it('Demo uno', () => {
        cy.field_visible("#userName","Juan",2000)
        // cy.field_visible("#userEmail","huan@gmail.com",2000)
        // cy.bloque_ToolsQA("juan","jp@gmail.com","taroka","bolivia",1000)
    });
})