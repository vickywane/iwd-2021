import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { FiArrowRight } from "react-icons/fi";

import { fetchImage } from "../utils/";

const Card = ({ url, name, descripton, slug, id }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setImgUrl(await fetchImage(url));
    };

    fetch();
  }, []);

  return (
    <div className="card">
      <img alt={`Display of ${name}`} className="img" src={imgUrl} />
      <h2> {name}</h2>
      <p>{descripton}</p>
      <br />

      <div className={"align-center"}>
        <button
          onClick={() => navigate(`/detail/${slug}/${id}`)}
          className="custom-btn"
        >
          Read Biography
          <div style={{ padding: ".2rem .5rem" }} className="align-center">
            <FiArrowRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
