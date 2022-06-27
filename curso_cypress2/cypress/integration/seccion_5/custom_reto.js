/// <reference types='Cypress' />

require("cypress-xpath");

describe("description", () => {
  let time = 1000;

  before(() => {
    cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
    cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations");
  });

//   cy.on("uncaught:exception", (err, runnable) => {
//     return false;
//   });

  it("Test OK", () => {
    cy.bloqueRetoForm("Juan", "gonzales", "jg@gmail.com", "1111111",'dir1','Bolivia','Colorado','12345','demo.com',"Proyecto demo 1",2000);
  });

  it.only("Invalid name", () => {
    cy.bloqueRetoForm("R", "gonzales", "jg@gmail.com", "5551111111",'direccion uno','Bolivia','Colorado','12345','demo.com',"Proyecto demo 1",2000);
    // cy.valid_field("small[data-bv-result='INVALID']",'Please enter more than 2 characters','First Name')
    cy.valid_field_two("small[data-bv-result='INVALID']",'Please enter more than 2 characters','First Name')
});

  it("Invalid lastname", () => {
    cy.bloqueRetoForm("Juan", "00000", "jg@gmail.com", "1111111",'dir1','Bolivia','Colorado','12345','demo.com',"Proyecto demo 1",2000);
  });

  it.only("Invalid email", () => {
    cy.bloqueRetoForm("Juan", "00000", "jg.com", "1111111",'dir1','Bolivia','Colorado','12345','demo.com',"Proyecto demo 1",2000);
    // cy.valid_field('[data-bv-validator="emailAddress"]','Please supply a valid email address','Email')
    cy.valid_field_two('[data-bv-validator="emailAddress"]','Please supply a valid email address','Email')
    // cy.get('[data-bv-validator="emailAddress"]').should('be.visible').then((value)=>{
    //     let dato = value.text()
    //     let message = "Please supply a valid email address"
    //     expect(dato).to.equal(message)
    // })
  });
});
