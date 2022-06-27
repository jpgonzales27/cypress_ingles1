/// <reference types='Cypress' />

describe('Tests salesforce', () => {

    it('login', () => {
        // let url = 'https://jpcorp-dev-ed.lightning.force.com'
        // cy.visit("https://test.salesforce.com/?un=juampi7237@gmail.com&pw=JP123456jp&startURL=%2F001")
        // cy.visit('https://jpcorp-dev-ed.lightning.force.com');
        // cy.visit('https://jpcorp-dev-ed.my.salesforce.com/003');
        cy.visit('https://jpcorp-dev-ed.my.salesforce.com');
        // cy.title('eq','Iniciar sesión | Salesforce');
        cy.get('#username').should('be.visible').clear().type('juampi7237@gmail.com')
        cy.get('#password').should('be.visible').clear().type('JP123456jp')
        cy.get('#Login').should('be.visible').click()
        // cy.visit('https://jpcorp-dev-ed.lightning.force.com/lightning/o/Contact/list?filterName=Recent')

        // https://test.salesforce.com/?un=test.user%40workspace.com&pw=your_password&startURL=%2F001

        // cy.visit(url+'/lightning/o/Contact/list?filterName=Recent');
        // the %40 is just the encoded format of @, replacing test.user@workspace.com with test.user%40workspace.com
    });
})  