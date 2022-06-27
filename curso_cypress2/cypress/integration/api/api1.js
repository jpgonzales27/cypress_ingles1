/// <reference types='Cypress' />

describe('description', () => {

    it('Api test 1', () => {
        const datos = {
            "nombre":"juan",
            "apellido":"Gonzales",
            "telefono":"6666666",
            "direccion":"Tarija",
        }

        cy.log(datos.nombre)
        cy.log(datos.apellido)
        cy.log(datos.telefono)
        cy.log(datos.direccion)
    });
})