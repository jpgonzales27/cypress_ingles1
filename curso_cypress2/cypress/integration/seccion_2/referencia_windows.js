/// <reference types='Cypress' />

describe('Referencias a windows ', () => {

    it('Windows propiedad charset', () => {
        cy.visit('https://testsheepnz.github.io/random-game-instructions.html');
        //propiedades de windows
        cy.title('eq','The Number Game - Instructions')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.url().should('include','random-game-instructions.html')
        cy.url().should('eq','https://testsheepnz.github.io/random-game-instructions.html')
    });
})  