import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Skills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import html from "../../../images/homeimages/skillsimages/html.svg";
import css from "../../../images/homeimages/skillsimages/css.svg";
import javascript from "../../../images/homeimages/skillsimages/javascript.svg";
import reactjs from "../../../images/homeimages/skillsimages/react.svg";
import ruby from "../../../images/homeimages/skillsimages/ruby.svg";
import rubyonrails from "../../../images/homeimages/skillsimages/RoR.svg";
import postgresql from "../../../images/homeimages/skillsimages/postgresql.svg";

const Skills = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    paragraph: false,
    line: false,
    slider: false
  });
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const lineRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.dataset.type]: true }));
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (lineRef.current) observer.observe(lineRef.current);
    if (sliderRef.current) observer.observe(sliderRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (lineRef.current) observer.unobserve(lineRef.current);
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 980,
        settings: { slidesToShow: 4 },
      },
    ],
  };

  return (
    <section className="skills">
      <h2
        className={`title ${isVisible.title ? "fade-in" : ""}`}
        ref={titleRef}
        data-type="title"
      >
        Skills
      </h2>
      <p
        className={`skills-para ${isVisible.paragraph ? "fade-in" : ""}`}
        ref={paragraphRef}
        data-type="paragraph"
      >
        I have acquired a versatile set of skills through hands-on projects and continuous learning. Below, you'll find a showcase of the core technologies I specialize in, each one playing a crucial role in my journey as a full-stack developer.
      </p>
      <hr
        className={`line ${isVisible.line ? "fade-in" : ""}`}
        ref={lineRef}
        data-type="line"
      />
      <div className={`slider-container ${isVisible.slider ? "fade-in" : ""}`} ref={sliderRef} data-type="slider">
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
      </div>
    </section>
  );
};

export default Skills;
