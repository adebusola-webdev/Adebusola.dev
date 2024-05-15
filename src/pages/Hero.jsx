import React, { useState } from "react";
import "../styles/Hero.css";
import { Link, NavLink } from "react-router-dom";
import HorizontalScroll from "../components/Horizontalscroll";
import Workproject from "../components/Workproject";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="home__nav">
        <Link to='/'>Busola.</Link>

        <ul className={` ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="mailto:badejoadebusola@gmail.com">Contact</NavLink>
          </li>
          <li>
            <NavLink to="https://drive.google.com/file/d/1S8pi1qOpzqobLnJ_9U27agjheZY5j7AK/view?usp=sharing">Resume</NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/adebusola-webdev">Github</NavLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
          </div>
        </ul>

        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="home__hero">
        <div className="home__hero__text">
          <h1>hey there,</h1>
          <h1>
            I am <span>Adebusola</span>
          </h1>
          <h1>software engineer/</h1>
          <h1>Frontend</h1>
          <h1>Developer</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
