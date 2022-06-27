export function clickNewContactBtn() {
    cy.get("input[name='newContact']").should("be.visible").click();
  }