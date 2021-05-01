/// <reference types="cypress" />
import moxios from "moxios";

const data = [
  {
    id: 15,
    slug: "rosa-parks",
    link: "http://35.222.91.200:8000/rosa-parks/",
    title: {
      rendered: "Rosa Parks",
    },
    content: {
      rendered:
        '\n<p>Rosa Parks was on a bus in Montgomery, Alabama in 1955, when the bus driver asked her to stand up and give her seat to a white man. Parks, a black seamstress, refused and in doing so sparked an entire civil rights&nbsp;<a rel="noreferrer noopener" href="https://www.marieclaire.com.au/keep-families-together-donald-trump-immmigration-march-photos" target="_blank">movement in America.</a></p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 55,
  },
  {
    id: 13,
    slug: "sojourner-truth",
    link: "http://35.222.91.200:8000/sojourner-truth/",
    title: {
      rendered: "Sojourner Truth",
    },
    content: {
      rendered:
        '\n<p>Sojourner Truth is one of the&nbsp;<a rel="noreferrer noopener" href="https://www.marieclaire.com.au/i-love-oprah-but-she-shouldn-t-be-president" target="_blank">most inspirational black women</a>&nbsp;in America’s history and her words belong to one of the&nbsp;<a rel="noreferrer noopener" href="https://www.marieclaire.com.au/serena-williams-emotional-wimbledon-speech" target="_blank">most famous speeches by any woman</a>.&nbsp; An African-American abolitionist and women’s rights activist, Truth delivered a&nbsp;<a rel="noreferrer noopener" href="https://www.marieclaire.com.au/meghan-markle-feminist-speech-new-zealand" target="_blank">now famous speech</a>&nbsp;at the Ohio Women’s Right’s Convention in Akron, 1851, that has come to be known as “Ain’t I a Woman?”</p>\n',
      protected: false,
    },
  },
];

context("Default Home Page", () => {
  beforeEach(() => {
    moxios.install();
    cy.visit("http://localhost:3000");
  });

  it("It loads home page banner component", () => {
    cy.get("h1").should("exist");
  });

  afterEach(() => moxios.uninstall())

  it("It makes request to fetch all heroines", () => {
    moxios.stubRequest("/posts?per_page=6&page=1");

    moxios.wait(async () => {
      const stubRequest = moxios.requests.mostRecent();

      try {
        await stubRequest.respondWith({
          status: 200,
          response: data,
        });

        cy.get(".cards-body").should("exist");
        cy.get("ul").should("exist");
      } catch (e) { 
        console.debug(`error ${e}`);
      }
    });
  });
});
