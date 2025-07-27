import React from "react";
import "./AboutSectionProfile.css";
import aboutData from "./aboutData";
import AnimatedItem from "../../../components/common/AnimatedItem";

const AboutSectionProfile = () => {
  return (
    <div className="about-section-profile">
      {/* Title */}
      <AnimatedItem delay={100}>
        <h2>{aboutData.title}</h2>
      </AnimatedItem>

      {/* Journey Sections */}
      <div className="my-jurney">
        {aboutData.sections.map((section, index) => {
          // Determine direction class: even index -> slide-in-right, odd index -> slide-in-left
          const directionClass =
            index % 2 === 0 ? "slide-in-right" : "slide-in-left";

          return (
            <div key={section.id} className={`${section.id}-jurney`}>
              {/* Image with directional slide animation */}
              <AnimatedItem delay={150} extraClass={directionClass}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="image-of-me"
                />
              </AnimatedItem>

              {/* Text Content */}
              <AnimatedItem delay={250}>
                <div className="text-content">
                  <h3>{section.title}</h3>
                  {section.paragraphs.map((para, pIndex) => (
                    <p key={pIndex}>{para}</p>
                  ))}
                </div>
              </AnimatedItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSectionProfile;
