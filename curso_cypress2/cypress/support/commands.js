// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("texto_visible", (selector, text) => {
  cy.get(selector).should("be.visible").type(text);
});

Cypress.Commands.add("texto_visible_xpath", (selector, text) => {
  cy.xpath(selector).should("be.visible").type(text);
});

Cypress.Commands.add("click_btn", (selector) => {
  cy.get(selector).should("be.visible").click();
});

Cypress.Commands.add("click_force_btn", (selector) => {
  cy.get(selector).should("be.visible").click({ force: true });
});

Cypress.Commands.add("valid_field", (selector, message, fieldName) => {
  cy.get(selector).should("be.visible").then((value) => {
      let dato = value.text();
      cy.log(dato);
      expect(dato).to.equal(message);
      if (dato == message) {
        cy.log("#################");
        cy.log(fieldName + " no valid");
        cy.log("#################");
      }
    });
});

Cypress.Commands.add("valid_field_two", (selector, message, fieldName) => {
  cy.get(selector).should("be.visible").should("contain", message).then((value) => {
      cy.log("#################");
      cy.log(fieldName + " no valid");
      cy.log("#################");
    });
});

//funciones por conjunto o completas
Cypress.Commands.add("bloque_ToolsQA", (name, email, dir1, dir2) => {
  cy.get("#userName").should("be.visible").type(name);
  cy.get("#userEmail").should("be.visible").type(email);
  cy.get("#currentAddress").should("be.visible").type(dir1);
  cy.get("#permanentAddress").should("be.visible").type(dir2);
  cy.get("#submit").should("be.visible").click();
});

Cypress.Commands.add("bloqueRetoForm",(name,lastName,email,phone,address,city,state,zip,web,project,t) => {
    cy.xpath("//input[@name='first_name']").clear().should("be.visible").type(name);
    cy.xpath("//input[@name='last_name']").clear().should("be.visible").type(lastName);
    cy.xpath("//input[@name='email']").clear().should("be.visible").type(email);
    cy.xpath("//input[@name='phone']").clear().should("be.visible").type(phone);
    cy.xpath("//input[@name='address']").clear().should("be.visible").type(address);
    cy.xpath("//input[@name='city']").clear().should("be.visible").type(city);
    cy.xpath("//select[@name='state']").should("be.visible").select(state);
    cy.xpath("//input[@name='zip']").clear().should("be.visible").type(zip);
    cy.xpath("//input[@name='website']").clear().should("be.visible").type(web);
    cy.xpath("//input[@value='yes']").check().should("be.checked");
    cy.xpath("//textarea[@name='comment']").clear().should("be.visible").type(project);
    cy.xpath("//button[normalize-space()='Send']").should("be.visible").click({ force: true });
    cy.wait(t);
  }
);
