import React from "react";
import "../styles/Experiences.css";

const Experiences = () => {

    return(
        <>
          <div className="experience__con__layout">
            <div className="experience__text__con">
            <h1>-Experience</h1>

             <h1> some companies </h1>
             <h1>i've worked with -</h1>
            </div>
             
         <div className="company__list__con">
             <div className="company"> 
              <img src="images/coda.png" alt="" /> 
            <h2>Codar</h2>
             </div>
             <div className="company">
             <img src="images/revolvepay-logo.png" alt="" /> <h2>Revolvepay</h2>
             </div>
            
         </div>

          </div>
        </>
    )
}

export default Experiences;