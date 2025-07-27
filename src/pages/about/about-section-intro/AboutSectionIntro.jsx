import React from "react";
import "./AboutSectionIntro.css";
import firstImage from "../../../images/me.png";
import useIntersectionAnimation from "../../../hooks/useintersectionanimation/useIntersectionAnimation";

const AboutSectionIntro = () => {
  const [ref, isVisible] = useIntersectionAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className={`about-section-intro ${isVisible ? "animate" : ""}`}>
      <div className="img-section">
        <img src={firstImage} alt="my-profile-pic" className="profile-pic" />
      </div>
      <div className="text-section">
        <h1>About Me</h1>
        <p>
          Hi, I'm Manuel Lipo, a full-stack developer passionate about building
          modern, seamless web applications. With a deep understanding of both
          front-end and back-end technologies, I focus on delivering
          high-quality, user-centric solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSectionIntro;
