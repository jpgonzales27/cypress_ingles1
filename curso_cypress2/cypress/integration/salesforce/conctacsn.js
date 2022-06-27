/// <reference types='Cypress' />

describe('description', () => {

    it('titleTest', () => {

        cy.visit('https://jpcorp-dev-ed.my.salesforce.com');
        cy.get('#username').should('be.visible').clear().type('juampi7237@gmail.com')
        cy.get('#password').should('be.visible').clear().type('JP123456jp')
        cy.get('#Login').should('be.visible').click()
        cy.visit('https://jpcorp-dev-ed.my.salesforce.com/003');
        cy.get("input[name='newContact']").should('be.visible').click();
        cy.get('#name_salutationcon2').should('be.visible').select('Dr.');
        cy.get('#name_firstcon2').should('be.visible').type('Juan')
        cy.get('#con7').should('be.visible').type('30/7/2021{enter}')
        cy.get('#name_lastcon2').should('be.visible').type('Gonzales')
        // cy.get('#con4').should('be.visible').type('Gonzales')
        cy.get('#con5').should('be.visible').type('title')
        cy.get('#con6').should('be.visible').type('Tarija')
        // cy.get('#con8').should('be.visible').type('30/7/2021')
        cy.get('#con9').should('be.visible').select('Web')
        cy.get('#con10').should('be.visible').type('78965412')
        cy.get('#con13').should('be.visible').type('33333333')
        cy.get('#con12').should('be.visible').type('77777777')
        cy.get('#con14').should('be.visible').type('11111111')
        cy.get('#con11').should('be.visible').type('44444444')
        cy.get('#con15').should('be.visible').type('example@gmail.com')
        cy.get('#con16').should('be.visible').type('Assistant name')
        cy.get('#con10').should('be.visible').type('78965412')

        cy.get('#con19street').should('be.visible').type('mailing street')
        cy.get('#con19zip').should('be.visible').type('mailing postalcode')
        cy.get('#con19city').should('be.visible').type('mailing city')
        cy.get('#con19state').should('be.visible').type('mailing state')
        cy.get('#con19country').should('be.visible').type('mailing country')

        cy.get('#con18street').should('be.visible').type('other street')
        cy.get('#con18zip').should('be.visible').type('other postalcode')
        cy.get('#con18city').should('be.visible').type('other city')
        cy.get('#con18state').should('be.visible').type('other state')
        cy.get('#con18country').should('be.visible').type('other country')

        cy.get('#00N5e00000KkjUz').should('be.visible').type('English')
        cy.get('#00N5e00000KkjV0').should('be.visible').select('Primary')
        cy.get('#con20').should('be.visible').type('description')
        
        cy.get("td[id='bottomButtonRow'] input[title='Save']").should('be.visible').click();
    });
})