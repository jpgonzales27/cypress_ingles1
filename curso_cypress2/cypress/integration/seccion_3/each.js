/// <reference types='Cypress' />

require('cypress-xpath')
describe('funciones each', () => {

    it('ejemplo 1', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq','My Store');

        cy.get('.product-name').each(( $e , index , $list)=>{
            cy.log($e.text())
            let vestido = $e.text()
            cy.log(vestido)
            if(vestido.includes("Blouse")){
                cy.wrap($e).click()
            }
        });
    });

    it('reto each', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq','My Store');
        for (let x = 0; x < 3 ; x++) {
            cy.get('#center_column .product-name').eq(x).click({force:true})
            cy.get('#quantity_wanted').should('be.visible').clear().type('4')
            cy.get('#group_1').select('M').should('have.value','2')
            cy.get('.exclusive > span').should('be.visible').click({force:true})
            // cy.xpath("//span[contains(.,'Proceed to checkout)]").click({force:true})
            cy.get('.button-medium > span').click({force:true})
            cy.get('.icon-home').should('be.visible').click({force:true})
        } 
    });

    
    it.only('reto each 2', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq','My Store');
        const datos = []
        
        cy.get('#center_column .product-name').each(($el,index,$list) => {
            datos[index] = $el.text()
        }).then(()=>{
            for (let i = 0; i < datos.length ; i++) {
                cy.get('#center_column .product-name').eq(i).click({force:true})
                cy.get('#quantity_wanted').should('be.visible').clear().type('4')
                cy.get('#group_1').select('M').should('have.value','2')
                cy.get('.exclusive > span').should('be.visible').click({force:true})
                cy.get('.button-medium > span').click({force:true})
                cy.get('.icon-home').should('be.visible').click({force:true})
            } 
        })
    });
})