import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'

/// <reference types='Cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload';


describe('Page objects models', () => {

    const master = new ProyectoUno_PO()

    master.visitHome()

    cy.on('uncaught:exception',(error,runnable)=>{
        return false;
    })

    it('test seccion uno', () => {
        master.seccionUno('Juan','Gonzales','j@gmail.com',1000)
    });

    it('test seccion dos', () => {
        master.seccionDos('591555555','crevaux123','Estados Unidos','Colorado',1000)
    });

    
    it.only('test seccion tres', () => {
        master.seccionTres('07980','demo.com','project demo 1',1000)
    });
})  