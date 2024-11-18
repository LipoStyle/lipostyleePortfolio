import React from "react";
import "./AboutSectonIntro.css"

import firstImage from "../../../images/me.png"
const AboutSectionIntro = () =>{
  return(
    <div className="about-section-intro">
      <div className="img-section">
        <img src={firstImage} alt="my-profile-pic" className="profile-pic"/>
      </div>
      <div className='text-section'>
        <h1>About Me</h1>
        <p>Hi, I'm Manuel Lipo, a full-stack developer passionate about building modern, seamless web applications. With a deep understanding of both front-end and back-end technologies, I focus on delivering high-quality, user-centric solutions.</p>
      </div>
    </div>
  )
}

export default AboutSectionIntro;