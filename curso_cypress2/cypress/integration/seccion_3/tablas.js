/// <reference types='Cypress'/>

describe('Challenge', () => {

    it('children', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get('.btn-group').children('.btn.btn-success.btn-filter').should('contain', 'Green').click()
        cy.get('.btn-group').children('.btn.btn-danger.btn-filter').should('contain', 'Red').click()
    });

    it('elemento eq', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get("[type='button']").eq(2).should("contain", "Orange").click({ force: true })
        cy.get('.btn-group').children('.btn.btn-danger.btn-filter').should('contain', 'Red').click()
    });

    it('funcion filter', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get("[type='button']").filter('.btn.btn-warning.btn-filter').should('contain', 'Orange').click()
        cy.get("[type='button']").filter('.btn.btn-success.btn-filter').should('contain', 'Green').click()
    });

    it('funcion find', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get(".btn-group").find('.btn-warning').should('contain', 'Orange').click()
        cy.get("[type='button']").contains('Red').click()
    });

    it('funcion first', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get(".btn-group").find('button').first().should('contain', 'Green').click()
        cy.get(".btn-group").first().should('contain', 'Green').click()
    });

    it('funcion last', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get(".btn-group").find('button').last().should('contain', 'All').click()
        cy.get(".btn-group").last().should('contain', 'All').click()
    });


    it('funcion nextAll seleccionar los siguientes', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get("[type='button']").should('contain', 'Green').nextAll().should('have.length', 4)
        cy.get("[type='button']").nextAll().should('have.length', 4)
    });

    it('Seleccionar elemento padre', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.get("[type='button']").parent().should('have.class', 'btn-group')
    });

    it('reto 2', () => {

        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").filter('.btn-success').should('contain', 'Green').click()
        cy.get("[type='checkbox']").check({ force: true })
        cy.get('.btn-default').should('be.visible').click()
        cy.get("[type='checkbox']").check({ force: true })

    });


    it('reto 3', () => {

        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        for (let i = 1; i < 4; i++) {
            cy.get("[type='button']").eq(i)
            cy.get("[type='checkbox']").check({ force: true })
        }
    });

    it('reto 3 con asserts', () => {

        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        const nombresBoton = ['Green', 'Orange', 'Red', 'All']
        for (let i = 1; i < 4; i++) {
            cy.get("[type='button']").eq(i).should('contain', nombresBoton[i - 1]).click()
            cy.get("[type='checkbox']").check({ force: true })
        }
    });


    it("Reto de las tablas", () => {
        let tiempo = 1500
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").eq(1).should("contain", "Green").click({ force: true })
        cy.wait(tiempo)
        cy.get("[type='checkbox']").check({ force: true })

        cy.get("[type='button']").eq(4).should("contain", "All").click({ force: true })
        cy.wait(tiempo)

        cy.get("[type='checkbox']").check({ force: true })


    })


    it.only("Reto de las tablas con for", () => {
        let tiempo = 1500
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        for (let x = 1; x <= 4; x++) {
            cy.get("[type='button']").eq(x).click({ force: true })
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({ force: true })
            cy.wait(tiempo)
        }


    })



    it("Reto de las tablas con for y Asserts", () => {
        let tiempo = 1500
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        for (let x = 1; x <= 4; x++) {
            let nombreBoton = ""

            if (x == 1) {
                nombreBoton = "Green"
            }
            else if (x == 2) {
                nombreBoton = "Orange"
            }
            else if (x == 3) {
                nombreBoton = "Red"
            }
            else if (x == 4) {
                nombreBoton = "All"
            }

            cy.get("[type='button']").eq(x).should("contain", nombreBoton).click({ force: true })
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({ force: true })
            cy.wait(tiempo)
        }
    })
});