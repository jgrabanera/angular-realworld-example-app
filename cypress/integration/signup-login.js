/// <reference types="cypress" />

describe("Signup & Login", () => {
  let randomString = Math.random().toString(36).substring(2);

  it("Test valid signup", () => {
    cy.visit("http://localhost:4200/");

    //cy.get(".container > .nav > :nth-child(3) > .nav-link");
    cy.get(".nav").contains("Sign up").click();

    //cy.get(":nth-child(1) > .form-control");
    cy.get("input[formcontrolname='username'").type("auto" + randomString); //jomz
    cy.get("input[formcontrolname='email'").type(
      "autoEmail" + randomString + "@testing.com"
    ); //jomz@testing.com
    cy.get("input[formcontrolname='password'").type("autoPass" + randomString); //cy.Testing01
    cy.get("button.btn").contains("Sign up").click();
  });
});
