import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import "../App.css";
import { FiArrowLeft, FiCalendar, FiAward } from "react-icons/fi";
import Loader from "../components/loader";

const stripString = (str) => {
  let strippedString = str.replace(/(<([^>]+)>)/gi, "");

  return strippedString;
};

const Detail = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const req = await fetch(
        `${process.env.REACT_APP_WORDPRESS_ENDPOINT}/posts/${id}`
      );

      const post = await req.json();
      setPost(post);

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div role="main" className="App">
      <header className="navbar">
        <nav>
          <div
            className="back-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <div style={{ padding: "0 .7rem" }} className="align-center">
              <FiArrowLeft size={20} />
            </div>

            <p className="align-center">#IWD 2020</p>
          </div>
        </nav>
      </header>

      <div className="detail">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <img
              alt="Marie E. Curie"
              className="img"
              src="https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png"
            />
            <h1> {post.title.rendered} </h1>

            <div className="align-center">
              <div className="flex">
                <div className={"align-center"} style={{ padding: "0 .5rem" }}>
                  <FiCalendar size={20} />
                </div>
                <p>Born 12, May, 1999, and sadly died on 1909.</p>
              </div>
            </div>

            <div className="align-center">
              <div className="flex">
                <div className={"align-center"} style={{ padding: "0 .5rem" }}>
                  <FiAward size={20} />
                </div>
                <p>Known for her Educational impact in Sciences.</p>
              </div>
            </div>

            <p className="bio">{stripString(post.content.rendered)}</p>

            <p>
              {" "}
              View Wiki page in her honor{" "}
              <a href="#" rel="noreferrer" target="_blank">
                here
              </a>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
