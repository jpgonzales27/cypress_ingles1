/// <reference types="cypress" />

export function navigateToLoginPage() {
  cy.visit("https://jpcorp-dev-ed.my.salesforce.com");
}

export function addUserName(userText) {
  cy.get("#username").should("be.visible").clear().type(userText);
}

export function addUserPassword(passwordText) {
  cy.get("#password").should("be.visible").clear().type(passwordText);
}

export function clickLoginButton() {
  cy.get("#Login").should("be.visible").click();
}
