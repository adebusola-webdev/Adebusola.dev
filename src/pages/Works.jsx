import React from "react";
import "../styles/work.css";
import "../styles/Horizontalscroll.css";
import { Link } from "react-router-dom";

import HorizontalScroll from "../components/Horizontalscroll";

const Works = () => {
  return (
    <HorizontalScroll>
      <div className="projects__section">
        <div className="project__con">
          <p className="project__con__header">projects- </p>
          <Link to="https://flutterclone.vercel.app">
            <div className="projects__inner__con">
              <div className="project">
                <div className="image-con">
                  <div className="image">
                    <h2>0</h2>
                  </div>
                  <div className="image">
                    <h2>1</h2>
                  </div>
                </div>
                <div className="text__section">
                  <h1 className="text__title"> A Flutterwave clone</h1>
                  <p className="text_text">
                    Due to my enthusiasm for technology, I felt motivated to
                    create a replica website resembling Flutterwave.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="https://revolvepay.vercel.app/">
            <div className="projects__inner__con">
              <div className="project">
                <div className="image-con">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/images/revolve1.jpg)" }}
                  >
                    {" "}
                    <h2>0</h2>
                  </div>
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/images/revolve2.jpg)" }}
                  >
                    {" "}
                    <h2>2</h2>
                  </div>
                </div>
                <div className="text__section">
                  <h1 className="text__title"> Revolvepayement</h1>
                  <p className="text_text">
                    I undertook a freelance project where I developed a landing
                    page for a payment platform.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="https://e-commerce-sitewithreact.vercel.app">
            <div className="projects__inner__con">
              <div className="project">
                <div className="image-con">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/images/bubu1.png)" }}
                  >
                    {" "}
                    <h2>0</h2>
                  </div>
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/images/bubu2.png)" }}
                  >
                    {" "}
                    <h2>3</h2>
                  </div>
                </div>
                <div className="text__section">
                  <h1 className="text__title"> An ecommerce site</h1>
                  <p className="text_text">
                    I indulged in coding and created an e-commerce platform
                    driven by my passion and dedication to the field.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://flutterclone.vercel.app">
            <div className="projects__inner__con">
              <div className="project">
                <div className="image-con">
                  <div className="image">
                    {" "}
                    <h2>0</h2>
                  </div>
                  <div className="image">
                    {" "}
                    <h2>4</h2>
                  </div>
                </div>
                <div className="text__section">
                  <h1 className="text__title"> A Flutterwave clone</h1>
                  <p className="text_text">
                    Due to my enthusiasm for technology, I felt motivated to
                    create a replica website resembling Flutterwave.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </HorizontalScroll>
  );
};

export default Works;
