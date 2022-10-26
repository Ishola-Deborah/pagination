import React from "react";
import img from "../aboutPage/black.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="about-title">About Me</h1>
      <div className="aboutPage">
        
        <img src={img} className="myImg" alt="" />
        <span className="aboutContent">
          <p>
            I am a Junior Front-end developer with diverse set of skill ranging from design to HTML, CSS, JavaScript with a little bit of basics in React. I am currently enrolled in AltSchool Africa as a Software Engineering Student.Looking to get comfortable with Tailwind and ReactJs. This page is a work in progress as i hope to expand and implement more complex stuffs.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
