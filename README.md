<h1 style="text-align: center;" > International Women Day, <i>March 8th, 2021 <i>. <br />  <span style="font-size: 1.5rem" > Women in <b>leadership</b>, Achieving an equal future <br /> in a COVID-19 world. </span> </h1>

## Motivation

This Web Application was built using [React]("https://reactjs.org") and served with data from a [Wordpress API]() and was built to appreciate the hard-work and effort put in by women around the world.

## Installation

**Note:** All data within this application is served from a hosted Wordpress Application. Hence you should have Wordpress setup on your local machine for local development.

- Clone this repository locally using the `git clone {REPO URL}`, and install dependencies using `yarn install`

- Create a `.env` file in the root directory for securely storing your Wordpress API in the following field;

```bashh
    .env

    REACT_APP_WORDPRESS_ENDPOINT= <YOUR WORDPRESS ENDPOINT>
```

## Testing:

All End-to-end(E2E) tests within this application are written using [Cypress](https://docs.cypress.io/). All network requests within the application are tested using [Moxios](https://www.npmjs.com/package/moxios).
