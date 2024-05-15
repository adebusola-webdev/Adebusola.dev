import React from "react";
import "../styles/Contact.css";
import { NavLink, Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contactme__section">
        <div className="contactme__con">
          <h3 className="contact__header">let's work together</h3>
          <Link to="mailto:badejoadebusola@gmail.com" >
            <div className="contact">
            <span>-</span>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>-</span>
            {/*  */}
            </div>
           
          </Link>
          <p>Designed and Developed by Adebusola</p>
        </div>

     
      </div>
    </>
  );
};

export default Contact;
