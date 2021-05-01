import React from "react";
import { Link } from "@reach/router";

const Card = ({ url, name, descripton }) => (
  <div className="card">
    <img className="img" src={url} />
    <h2> {name}</h2>
    <p>{descripton}</p>
    <br />

    <Link to="/detail">
      <button className="detail-button">Learn More</button>
    </Link>
  </div>
);

export default Card;
