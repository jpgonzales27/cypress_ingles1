/// <reference types='Cypress' />

describe('Reto asserts', () => {

    it('IAssert invock', () => {
        let tiempo = 1500

        // invoke nos permite buscar un elemento por sus atributos
        // tambien podemos agregar atributos a ese elemtno con el invoke

        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        cy.wait(tiempo);
        cy.get('.at-cm-no-button').should('be.visible').click()

        cy.get('#sum1').invoke('attr','placeholder').should('contain','Enter value').then(()=>{
            cy.get('#sum1').type(50).invoke('attr','style','color:blue')
        })
        
        cy.get('#sum2').should('be.visible').and('have.class','form-control').clear().type(10)
        cy.contains("[type='button']","Get Total").click()

        cy.get('#displayvalue').should('be.visible').then((e)=>{
            cy.log(e.text())
            if(e.text()>50) {
                cy.get('#displayvalue').invoke('attr','style','color:red')
            }    
        })
    });
})  