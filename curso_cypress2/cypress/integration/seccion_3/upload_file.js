/// <reference types='Cypress' />

import 'cypress-file-upload';

describe('Subida de archivos', () => {

    it('Cargando imagenes', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        const ruta = 'imagen.jpg'

        cy.get('#uploadPicture').attachFile(ruta)
        // cy.get("[type='file']").attachFile(ruta)
  
    });
})  