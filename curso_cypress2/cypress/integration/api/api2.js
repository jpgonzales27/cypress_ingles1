/// <reference types='Cypress' />

describe('description', () => {

    it('Api test 1', () => {
        const datos = {
            "nombre":"juan",
            "apellido":"Gonzales",
            "telefono":"6666666",
            "direccion":"Tarija",
            "cursos" : [
                {
                    "nombre":"cypress",
                    "descripcion":"lo mejor"
                },
                {
                    "nombre":"js",
                    "descripcion":"lenguaje"
                },
                {
                    "nombre":"java",
                    "descripcion":"lenguaje"
                },
            ]
        }

        cy.log(datos.nombre)
        cy.log(datos.apellido)
        cy.log(datos.cursos)
        cy.log(datos.cursos[1])
        cy.log(datos.cursos[1].nombre)
    });
})