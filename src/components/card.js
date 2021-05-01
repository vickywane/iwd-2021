import React from "react";
import { Link, navigate } from "@reach/router";

const Card = ({ url, name, descripton }) => (
  <div className="card">
    <img className="img" src={url} />
    <h2> {name}</h2>
    <p>{descripton}</p>
    <br />

    <button
      onClick={() => navigate("/detail", { state: { name, url, descripton } })}
      className="detail-button"
    >
      Learn More
    </button>
  </div>
);

export default Card;
