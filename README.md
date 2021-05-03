<h2 style="text-align: center;" > International Women Day, <i>March 8th, 2021 <i>. <br />  <span style="font-size: 1.5rem" > Women in <b>leadership</b>, Achieving an equal future <br /> in a COVID-19 world. </span> </h2>

## Primary Motivation
This Web Application was built to appreciate the hard-work and effort put in by women around the world.

## Secondary Motivations
- This application was built to illustrate how [React]("https://reactjs.org") can be used as a frontend interface displaying data from a CMS application such as a [Wordpress application](https://wordpress.com) through it [REST API](https://developer.wordpress.org/rest-api).

## Accesibility: 

## Installation

**Note:** All data within this application is served from a hosted Wordpress Application. Hence you should have Wordpress setup on your local machine for local development. To get started, you can launch wordpress from a docker container using `docker-compose` with [this](https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42) configuration file.

- Clone this repository locally using git cli with the `git clone {REPO URL}` command, and install application dependencies using the `yarn install` command. 

- Create a `.env` file in the root directory for securely storing your Wordpress API Endpoint in the following field;

```js

    REACT_APP_WORDPRESS_ENDPOINT=`${WORDPRESS_REST_ENDPOINT}/wp-json/wp/v2`
```

## Testing:

This application is fully E2E tested using Cypress tests.
