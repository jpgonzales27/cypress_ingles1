/// <reference types='Cypress' />
require('cypress-xpath')
describe('Asserts Ejemplos', () => {

    it('CONTAINS', () => {
        //Busca los elementos que esten dentro de un padre
        cy.visit('http://automationpractice.com/index.php');
        cy.title('eq','My Store')
        cy.wait(1000); 
        cy.get('#block_top_menu').contains("Women").click();
    });

    it('Find,eq', () => {
        //Busca los elementos que esten dentro de un padre
        cy.visit('http://automationpractice.com/index.php');
        cy.title('eq','My Store')
        cy.wait(1000);
        // cy.get('.product-container').first().click(); 
        cy.get('.product-container').find('.product-image-container').eq(0).click(); 
     
    });

    it('Find,eq MIO', () => {
        //Busca los elementos que esten dentro de un padre
        cy.visit('http://automationpractice.com/index.php');
        cy.title('eq','My Store')
        cy.wait(1000);
        // cy.get('.product-container').first().click(); 
        cy.get('.product-container').find('.product-image-container').eq(3).click().then(()=> {
            cy.get('#product_condition').should('be.visible').contains("New")
        });     
     
    });

    it('Find,eq valindao estado vestido', () => {
        //Busca los elementos que esten dentro de un padre
        cy.visit('http://automationpractice.com/index.php');
        cy.title('eq','My Store')
        cy.wait(1000);
        cy.get('.product-container').find('.product-image-container').eq(3).click().then(()=> {
            cy.get('#product_condition .editable').then( (e)=>{
                let estado = e.text()
                estado=="New" ? cy.log("El vestido es nuevo") : cy.log("El vestido no es nuevo") 
            })
        });
     
    });

    it('Find,eq valindao precio vestido', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title('eq','My Store')
        cy.wait(1000);
        cy.get('.product-container').find('.product-image-container').eq(3).click().then(()=> {
            cy.get("span[itemprop='price']").then((e)=>{
                cy.log(e.text())
                let precio = e.text()
                precio = precio.slice(1,3)
                if (precio>30) {
                    cy.log('No nos alcanza')
                    cy.get("div[class='breadcrumb clearfix'] a[title='Women']").click();  
                } else {
                    cy.log('esta baratito')
                    cy.get("#add_to_cart").click()
                } 
            });
        });
     
    });

    it('Assert Contains , have.text, contain.text', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').should('be.visible').type('Juan Pablo');
        cy.get('#userEmail').should('be.visible').type('jp@gmail.com')
        cy.get('#submit').should('be.visible').click()
        cy.get('.border').should('be.visible').contains('Juan Pablo')

        //have.text debe contener todo el texto
        cy.get('#name').should('be.visible').should('have.text','Name:Juan Pablo')
        //contain.text solo debe tener parte del texto
        cy.get('#name').should('be.visible').should('contain.text','Juan Pablo')
    });

    it('Assert contain.value , have.vale ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').should('be.visible').type('Juan Pablo');

        //containd.text verifica que el campo tenga parte del valor
        //have.text verifica que el campo tenga todo del valor
        // cy.get('#userName').should('be.visible').should('contain.value','Juan').then(()=>{
        cy.get('#userName').should('be.visible').should('have.value','Juan Pablo').then(()=>{
            cy.get('#userEmail').should('be.visible').type('jp@gmail.com')
            cy.get('#submit').should('be.visible').click()
        })
     
    });

    
    it('Assert  have.class ', () => {
        cy.visit('https://demoqa.com/text-box');
            cy.get('#userName').should('be.visible').should('have.class','mr-sm-2').then(()=>{
            cy.get('#userName').should('be.visible').type('Juan Pablo');
        })     
    });


    it('Assert  funcion and ', () => {
        cy.visit('https://demoqa.com/text-box');

            //and obliga a cumplir ambas validaciones
            cy.get('#userName').should('be.visible').and('have.class','mr-sm-2').then(()=>{
            cy.get('#userName').should('be.visible').type('Juan Pablo');
        })     
    });

    it('Assert negativos not ', () => {
        cy.visit('https://demoqa.com/text-box');

            //not niega cualquier assert
            cy.get('#userName').should('be.visible').and('not.have.class','mr-sm-222').then(()=>{
            cy.get('#userName').should('be.visible').type('Juan Pablo');
        })     
    });

    it('Assert negativos not ', () => {
        cy.visit('https://demoqa.com/text-box');

            //not niega cualquier assert
            cy.get('#userName').should('be.visible').and('not.have.class','mr-sm-222').then(()=>{
            cy.get('#userName').should('be.visible').type('Juan Pablo');
        })     
    });

    it('Assert have.lenght , have.css ', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-pagination-demo.html');

            //have.lenght valida la cantidad de algun elemento
            //have.css para validad estilos css 
            cy.xpath("//thead[@class='btn-primary']//tr//th").should('have.length',7).and('have.css','border-spacing', '0px 0px')   
    });

    it.only('Assert contains con validacion ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
            let tiempo = 1500
            cy.get('.at-cm-no-button').should('be.visible').click()
            cy.wait(tiempo);

            cy.get('.form-group > #user-message').should('be.visible').click({force:true})
            cy.get('.form-group > #user-message').type('Message demo')
            
            cy.wait(tiempo);
            //estamo evaluando que el boton tenga ese texto
            cy.contains("[type='button']","Show Message").should('be.visible').click()
            
    });

})  
