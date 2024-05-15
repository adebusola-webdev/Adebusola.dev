import React from 'react'
import "../styles/Hero.css";

const Workproject = (props) => {
  return (
    <>
     <div className="projects__inner__con">
        <div className="project">
          <div className="image-con">
            <div className="image"> <h2>{props.num1}</h2></div>
            <div className="image"> <h2>{props.num2}</h2></div>
          </div>
          <div className="text__section">
             <h1 className="text__title">{props.projectTitle}</h1>
             <p className="text_text">{props.projectDesc}</p>
               
          </div>
        </div>

      </div>
    </>
  )
}

export default Workproject;