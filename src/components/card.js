import React from "react";
import { navigate } from "@reach/router";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ url, name, descripton }) => (
  <div className="card">
    <img className="img" src={url} />
    <h2> {name}</h2>
    <p>{descripton}</p>
    <br />

    <div className={"align-center"}>
      <button
        onClick={() =>
          navigate("/detail", { state: { name, url, descripton } })
        }
        className="custom-btn"
      >
        Read Biography
        <div style={{padding : ".2rem .5rem"}} className="align-center">
          <FiArrowRight size={20} />
        </div>
      </button>
    </div>
  </div>
);

export default Card;
