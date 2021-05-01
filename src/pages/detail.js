import React from "react";
import { navigate } from "@reach/router";
import "../App.css";
import { FiArrowLeft, FiCalendar, FiAward } from "react-icons/fi";

const Detail = (props) => {
  const {} = props;

  return (
    <div className="App">
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
        <div>
          <img className="img" src="https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png" />
          <h1> Marie E. Curie </h1>

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

          <p className="bio">
            Marie Curie was the first woman to win a Nobel Prize, in Physics,
            and with her later win, in Chemistry, she became the first person to
            claim Nobel honors twice. Her efforts with her husband Pierre led to
            the discovery of polonium and radium, and she championed the
            development of X-rays
          </p>

          <p>
            {" "}
            View Wiki page in her honor{" "}
            <a href="#" target="_blank">
              here
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
