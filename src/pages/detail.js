import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { FiArrowLeft, FiAward } from "react-icons/fi";
import axios from "axios";

import Loader from "../components/loader";
import "../App.css";
import { fetchImage, stripString } from "../utils/";

const Detail = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const req = await axios.get(
        `${process.env.REACT_APP_WORDPRESS_ENDPOINT}/posts/${id}`
      );

      setPost(req.data);
      setImgUrl(await fetchImage(req.data.featured_media));

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
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
          <div id="loader" >
            <Loader />
          </div>
        ) : (
          <div>
            <img id="heroine-image" alt="Marie E. Curie" className="img" src={imgUrl} />
            <h1> {post.title.rendered} </h1>

            <div className="align-center">
              <div className="flex">
                <div className={"align-center"} style={{ padding: "0 .5rem" }}>
                  <FiAward size={20} />
                </div>
                <p>Known for her Educational impact in Sciences.</p>
              </div>
            </div>

            <p className="bio">{stripString(post.content.rendered)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
