/// <reference types='Cypress' />

describe("cargar json con varios ejemplos", () => {
    it('Test cargando archivos desde json', () => {
        cy.fixture("datos2").then((testdata) => {
          testdata.forEach((data) => {
            const d_nombre = data.nombre;
            const d_email = data.email;
            const d_dir1 = data.dir1;
            const d_dir2 = data.dir2;
    
            cy.visit("https://demoqa.com/text-box");
            cy.title().should("eq", "ToolsQA");
    
            cy.get("#userName").should("be.visible").type(data.nombre);
            cy.get("#userEmail").should("be.visible").type(data.email);
            cy.get("#currentAddress").should("be.visible").type(data.dir1);
            cy.get("#permanentAddress").should("be.visible").type(data.dir2);
            cy.get("#submit").should("be.visible").click();
          });
        }); 
    });
});
