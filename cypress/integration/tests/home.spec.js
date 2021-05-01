/// <reference types="cypress" />

context("Default Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("It loads home page banner component", () => {
    cy.get("h1").should("exist");
  });
});
