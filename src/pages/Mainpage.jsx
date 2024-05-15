import React from "react";
import Hero from "./Hero";
import Works from "./Works";

import About from "./About";
import LayoutBackground from "../components/LayoutBackground";
import Experiences from "./Experiences";
import Contact from './Contact';
import Stacks from "./Stacks";


const Mainpage = () => {
  return (
    <>
      {/* <LayoutBackground /> */}
    
       <Hero /> 
       <Works />  
       <Stacks/> 
    
      <About /> 
       {/* <Experiences/>  */}
       <Contact/> 
    
      {/* <Build />
        */}
       
    </>
  );
};

export default Mainpage;
