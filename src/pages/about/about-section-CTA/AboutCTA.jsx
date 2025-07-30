import React from "react";
import "./AboutCTA.css";
import AnimatedItem from "../../../components/common/AnimatedItem";

const AboutCTA = () => {
  return (
    <section className="about-call-to-action">
      <AnimatedItem>
        <h2 className="cta-title">Let's Collaborate!</h2>
      </AnimatedItem>

      <AnimatedItem delay={150}>
        <div className="cta-buttons">
          <a href="/contact" className="button-56">
            Contact Me
          </a>
          <a href="/portfolio" className="button-56">
            View My Work
          </a>
        </div>
      </AnimatedItem>
    </section>
  );
};

export default AboutCTA;
