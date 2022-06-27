/// <reference types='Cypress' />

require('cypress-xpath')

describe('Navegacion entre paginas', () => {

    it('Back, forward', () => {
        let time = 1000
        cy.visit('https://demoqa.com');
        cy.title().should('eq','ToolsQA');

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').should('be.visible').click('')
        cy.wait(time)

        cy.xpath("//span[normalize-space()='Text Box']").should('be.visible').click({force:true})
        cy.wait(time)

        cy.go("back")
        cy.go("back")
        cy.go("forward")
        cy.go("forward") 
    });

    
    it.only('reload', () => {
        let time = 1000
        cy.visit('https://demoqa.com');
        cy.title().should('eq','ToolsQA');

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').should('be.visible').click('')
        cy.wait(time)

        cy.xpath("//span[normalize-space()='Text Box']").should('be.visible').click({force:true})
        cy.wait(time)

        cy.get('#userName').should('be.visible').type('juan')
        cy.wait(time)

        cy.get('#userEmail').should('be.visible').type('j@gmail.com')
        cy.wait(time)

        cy.reload()
        cy.wait(time);
        cy.go("back")
       
    });
})