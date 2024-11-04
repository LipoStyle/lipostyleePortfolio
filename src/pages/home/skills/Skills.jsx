import React from "react";
import Slider from "react-slick";

import "./Skills.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images here
import html from "../../../images/homeimages/skillsimages/html.svg";
import css from "../../../images/homeimages/skillsimages/css.svg";
import javascript from "../../../images/homeimages/skillsimages/javascript.svg";
import reactjs from "../../../images/homeimages/skillsimages/react.svg";
import ruby from "../../../images/homeimages/skillsimages/ruby.svg";
import rubyonrails from "../../../images/homeimages/skillsimages/RoR.svg";
import postgresql from "../../../images/homeimages/skillsimages/postgresql.svg";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 6, // Default to show 6 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    // Enable dragging/swiping with mouse or touch
    draggable: true,
    swipe: true,
    swipeToSlide: true,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 980, // Below 980px
        settings: {
          slidesToShow: 4, // Show 4 slides
        },
      },
    ],
  };

  return (
    <section className="skills">
      <h2 className="title">Skills</h2>
      <p className="skills-para">I have acquired a versatile set of skills through hands-on projects and continuous learning. Below, you'll find a showcase of the core technologies I specialize in, each one playing a crucial role in my journey as a full-stack developer.</p>
      <hr className="line" />
      <Slider {...settings}>
        <div className="inner-skill-pack">
          <h3 className="skill-title">HTML</h3>
          <img src={html} alt="HTML" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">CSS</h3>
          <img src={css} alt="CSS" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">JavaScript</h3>
          <img src={javascript} alt="JavaScript" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">React</h3>
          <img src={reactjs} alt="React" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">Postgresql</h3>
          <img src={postgresql} alt="PostgreSQL" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">Ruby</h3>
          <img src={ruby} alt="Ruby" />
        </div>
        <div className="inner-skill-pack">
          <h3 className="skill-title">Ruby on Rails</h3>
          <img src={rubyonrails} alt="Ruby on Rails" />
        </div>
        
      </Slider>
    </section>
  );
};

export default Skills;
