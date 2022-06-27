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
Cypress.Commands.add("field_visible" , (selector,texto,t) => {
    cy.get(selector).type(texto)
    cy.wait(t)
})

Cypress.Commands.add("field_visible_xpath",(selector,texto)=>{
    cy.xpath(selector).should('be.visible').type(texto)
})

Cypress.Commands.add("click",(selector,time)=>{
    cy.get(selector).should('be.visible').click()
    cy.wait(time)
})

Cypress.Commands.add("click_force",(selector,time)=>{
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(time)
})

Cypress.Commands.add("click_xpath",(selector,time)=>{
    cy.xpath(selector).should('be.visible').click()
    cy.wait(time)
})

Cypress.Commands.add("click_force_xpath",(selector,time)=>{
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(time)
})




Cypress.Commands.add("bloque_ToolsQA",(name,email,dir1,dir2,time)=>{
    cy.get("#userName").should('be.visible').type(name)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.get("#permanentAddress").should('be.visible').type(dir2)
    cy.get("#submit").should('be.visible').click()
    cy.wait(time)
})