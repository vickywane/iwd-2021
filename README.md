<h2 style="text-align: center;" > International Women Day, <i>March 8th, 2021 </i>. <br />  <span style="font-size: 1.5rem" > Women in <b>leadership</b>, Achieving an equal future <br /> in a COVID-19 world. </span> </h2>
<img src="https://res.cloudinary.com/dkfptto8m/image/upload/v1620167537/iwd-preview.png" style="text-align: center;"/>

### Primary Motivation
This Web Application was built to appreciate the hard-work and effort put in by women around the world and can be accessed [here](http://35.222.91.200:3000/).

## Secondary Motivations
- This application was built to illustrate how [React]("https://reactjs.org") can be used as a frontend interface displaying data from a CMS application such as a [Wordpress application](https://wordpress.com) through it [REST API](https://developer.wordpress.org/rest-api).

### Accesibility: 

### Local Installation

**Note:** All data within this application is served from a Wordpress Application. Hence you should have Wordpress setup on your local machine for local development. To get started, you can launch wordpress from a docker container using `docker-compose` with [this](https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42) configuration file.

- Clone this repository locally using git cli with the `git clone {REPO URL}` command, and install application dependencies using the `yarn install` command. 

- Create a `.env` file in the root directory for securely storing your Wordpress API Endpoint in the following field;

```js

    REACT_APP_WORDPRESS_ENDPOINT=`${WORDPRESS_REST_ENDPOINT}/wp-json/wp/v2`
```

### Testing:

All End-to-end(E2E) tests within this application are written using [Cypress](https://docs.cypress.io/). All network requests within the application are tested using [Moxios](https://www.npmjs.com/package/moxios).

### Contributions

We welcome and appreciate pull requests from everyone.

You can participate in many ways. The application codes are available in their respective files for this project. You can get all of them, change anything and send the changes back.

### Commit changes

Easily contribute to the content of the style guide by adding new recommendations, making corrections or adding examples in the form of images or videos:

If you have Git installed on your system, [cloning](https://help.github.com/articles/cloning-a-repository/) is preferred way to get the contents since it allows you to contribute back.
