import React from "react";

const Footer = () => (
  <footer aria-labelledby="footer" className="footer">
    <div id="footer">
      <p>
        Designed and built by{" "}
        <a href="https://nwani.netlify.com" className="author-link">
          Victory Nwani
        </a>
      </p>
      <p>
        All content here is displayed from a Wordpress using it's{" "}
        <a
          rel="noreferrer"
          href="https://developer.wordpress.org/rest-api/"
          target="_blank"
        >
          REST API
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
