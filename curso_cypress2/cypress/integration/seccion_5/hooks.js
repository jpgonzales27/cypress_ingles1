/// <reference types='Cypress' />

require('cypress-xpath')

describe('Hooks', () => {

    before(() => {
        // runs once before all tests in the block
        cy.log('Esto inicia antes que todo solo una vez')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('Esto se repite antes de cada uno de los test')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('Esto se hace despues de cada uno de los test')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('Esto se ejecuta al final despues de todos los test ')
      })

    it('test uno', () => {
        cy.log('test uno')
    });

    
    it('test dos', () => {
        cy.log('test dos')
    });

    
    it('test tres', () => {
        cy.log('test tres')
    });
})