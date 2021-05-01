import React, { useState, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";
import axios from "axios";

import Loader from "../components/loader";
import "../App.css";
import Card from "../components/card";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [postData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, shouldLoadMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const request = await axios.get(
        `${process.env.REACT_APP_WORDPRESS_ENDPOINT}/posts?per_page=6&page=${currentPage}`
      );
      if (request.status === 200) {
        setData(request.data);
      }
      //   WP REST API doesnt provide a max_page or min_page to better handle this.
      else if (request.status === 400) {
        shouldLoadMore(false);
      }
    } catch (e) {
      console.log(`Error fetching posts ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Banner />
      <div role="main">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="cards-body">
            <ul className="cards">
              {postData.map(({ id, title, slug, featured_media }) => (
                <li key={id}>
                  <Card
                    url={featured_media}
                    slug={slug}
                    id={id}
                    name={title.rendered}
                    descripton="The first woman to win a Nobel Prize, in Physics."
                  />
                </li>
              ))}
            </ul>
            <br />
            <br />
            <br />

            <div className="align-center">
              <button
                disabled={!loadMore}
                className="custom-btn"
                style={{ backgroundColor: !loadMore && "transparent" }}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {!loadMore ? "Loaded All Heroines!" : "See More Heroines"}
                {loadMore && (
                  <div style={{ padding: "0 .5rem" }} className="align-center">
                    <FiArrowDown size={20} />
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
