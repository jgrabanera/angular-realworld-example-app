/// <reference types="cypress" />

describe("Signup & Login", () => {
  let randomString = Math.random().toString(36).substring(2);
  let username = "auto" + randomString;
  let emailTest = "auto" + randomString + "@gmail.com";

  it("Test valid signup", () => {
    cy.intercept("POST", "**/*.realworld.io/api/users").as("newUser");

    cy.visit("http://localhost:4200/");

    //cy.get(".container > .nav > :nth-child(3) > .nav-link");
    cy.get(".nav").contains("Sign up").click();

    //cy.get(":nth-child(1) > .form-control");
    cy.get("input[formcontrolname='username'").type(username); //jomz
    cy.get("input[formcontrolname='email'").type(emailTest); //jomz@testing.com
    cy.get("input[formcontrolname='password'").type("autoPass" + randomString); //cy.Testing01
    cy.get("button.btn").contains("Sign up").click();

    cy.wait("@newUser").should(({ request, response }) => {
      cy.log("Request: " + JSON.stringify(request));
      cy.log("Response: " + JSON.stringify(response));

      expect(response.statusCode).to.eq(200);

      expect(request.body.user.username).to.include(username); //assert username
      expect(request.body.user.email).to.include(emailTest); // assert email
    });
  });
});
