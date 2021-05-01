import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

const Banner = ({ data }) => (
  <div>
    <div className="banner">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img src="https://res.cloudinary.com/dkfptto8m/image/upload/v1619841155/International-women-day-logo-1-removebg-preview.png" />
          <h1 className="banner-title">
            Women in <span style={{ color: "#F88C00" }}>leadership</span>:{" "}
            <br /> Achieving an equal future <br />
            in a COVID-19 world.
          </h1>

          <div className="flex">
            <div className="align-center" style={{ padding: "0 .6rem" }}>
              <FiCalendar size={20} />
            </div>
            <p className="banner-text">8th, March, 2021 </p>
          </div>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.youtube.com/watch?v=hyOOQ_6L-2I"
            target="_blank"
          >
            <button className="custom-btn">
              View Event Coverage
              <div style={{ padding: ".2rem .5rem" }} className="align-center">
                <FiExternalLink size={20} />
              </div>
            </button>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <br />
          <br />
          <br />
          <div className="iframe-ctn">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/hyOOQ_6L-2I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>

          <p
            className="scroll-btn"
            onClick={() => {
              scroll.scrollToBottom();
            }}
          >
            View Celebrated Heroes{" "}
          </p>
        </div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill="#141821"
        fill-opacity="1"
        d="M0,160L40,165.3C80,171,160,181,240,186.7C320,192,400,192,480,181.3C560,171,640,149,720,122.7C800,96,880,64,960,42.7C1040,21,1120,11,1200,10.7C1280,11,1360,21,1400,26.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  </div>
);

export default Banner;
