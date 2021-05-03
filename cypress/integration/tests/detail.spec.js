// <reference types="cypress" />
import moxios from "moxios";

context("Detail Page", () => {
  beforeEach(() => {
    moxios.install();

    cy.visit("http://localhost:3000/detail/jane-austen/29");
  });

  it("it displays top navbar", () => {
    cy.get(".navbar").should("exist");
    cy.get("nav").should("exist");
  });

  it("it displays heroine detail page", () => {
    cy.get(".detail").should("exist");
  });

  it("It makes request to fetch a heroine detail", () => {
    moxios.stubRequest("/posts/jane-austen");

    moxios.wait(async () => {
      const stubRequest = moxios.requests.mostRecent();

      try {
        await stubRequest.respondWith({
          status: 200,
          response: {
            title: {
              rendered: "Jane Austen",
            },
            content: {
              rendered: "lorem ipsum text",
            },
            featured_media: 25,
          },
        });

        const title = cy.get("h1");
        title.should("exist");
        title.contains("Jane Austen");

        cy.get("#heroine-image").should("exist");
        cy.get(".bio").should("exist");
      } catch (e) {
        console.log(`error ${e}`);
      }
    });
  });
});
