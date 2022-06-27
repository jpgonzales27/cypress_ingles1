/// <reference types='Cypress' />

describe('description', () => {

    let datos

    it('api test 1', () => {
        datos = cy.request('http://localhost:3000/posts')
        datos.its('status').should('equal',200)
       
    });
   
    it('api test 2', () => {
        cy.request('http://localhost:3000/posts').should((response) => {
            expect(response.status).to.eq(200)
        })       
    });

    it('api test GET', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let datos
            datos = JSON.parse(JSON.stringify(response.body))
            cy.log(datos)
            expect(datos[0]).has.property("title","json-server")
            expect(datos[0]).has.property("author","typicode")
        }) 
    });

    it('api test POST', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "id": 8,
                "title":"curos cypress",
                "author":"juampi"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        }) 
    });

    it('api test reto POST', () => {
        for (let i = 0; i<10; i++) {
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body: {
                    "id": 9+i,
                    "title":"curos "+i,
                    "author":"numero "+i
                }
            }).then((response) => {
                expect(response.status).to.equal(201)
            }) 
        }

    });

    it('api test UPDATE', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/10",
            body: {
                "title":"curos cypress update",
                "author":"juampi"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
        }) 
    });


    it.only('api test DELETE', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/15",
        }).then((response) => {
            expect(response.status).to.equal(200)
        }) 
    });
})