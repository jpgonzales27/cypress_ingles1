/// <reference types='Cypress' />

describe("Campos tipo fechas", () => {
    it("fecha uno", () => {
        cy.visit(
            "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
        );
        cy.title().should(
            "eq",
            "Selenium Easy - Best Demo website for Bootstrap Date picker"
        );
        // cy.get("div[class='input-group date'] input[type='text']").should('be.visible').type('10/10/2021').then(()=>{
        //     // cy.get("div[class='input-group date'] input[type='text']").should('be.visible').tab()
        //     // cy.get('[placeholder="Start date"]').should('be.visible').focus()
        //     // cy.get("div[class='input-group date'] input[type='text']").should('be.visible').click(10,20)
        // })
        cy.get("div[class='input-group date'] input[type='text']")
            .should("be.visible")
            .click();
        cy.get(".today").first().click({ force: true });
    });

    it.only("fecha dos", () => {
        cy.visit(
            "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
        );
        cy.title().should(
            "eq",
            "Selenium Easy - Best Demo website for Bootstrap Date picker"
        );

        // cy.get('[placeholder="Start date"]').should('be.visible').type('10/10/2021').type('{esc}')
        cy.get('[placeholder="Start date"]')
            .should("be.visible")
            .type("01/11/2021 {esc}");
        cy.wait(2000);
        cy.get('[placeholder="End date"]')
            .should("be.visible")
            .type("25/12/2021 {esc}");
    });

    it("fecha tres", () => {
        cy.visit(
            "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
        );
        cy.title().should(
            "eq",
            "Selenium Easy - Best Demo website for Bootstrap Date picker"
        );

        // cy.get('[placeholder="Start date"]').should('be.visible').type('10/10/2021').type('{esc}')
        cy.get('[placeholder="Start date"]')
            .should("be.visible")
            .type("01/11/2021 {esc}")
            .tab()
            .type("25/12/2021 {esc}");
    });
});
