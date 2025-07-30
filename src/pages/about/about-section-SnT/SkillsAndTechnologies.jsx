import React, { useState } from "react";
import "./SkillsAndTechnologies.css";
import { skillsData, technologiesData } from "./data";
import AnimatedItem from "../../../components/common/AnimatedItem";

const SkillsAndTechnologies = () => {
  const [openSkillIndex, setOpenSkillIndex] = useState(null);
  const [openTechIndex, setOpenTechIndex] = useState(null);

  const toggleSkill = (index) => {
    setOpenSkillIndex(openSkillIndex === index ? null : index);
  };

  const toggleTech = (index) => {
    setOpenTechIndex(openTechIndex === index ? null : index);
  };

  return (
    <section className="skills-section">
      <AnimatedItem>
        <h2 className="skills-title">Skills & Technologies</h2>
      </AnimatedItem>

      <div className="skills-technologies-wrapper">
        {/* Skills Column */}
        <div className="skills-column">
          <AnimatedItem>
            <h3 className="column-title">Skills</h3>
          </AnimatedItem>
          <div className="column-data">
            {skillsData.map((skill, index) => (
              <AnimatedItem key={index} delay={index * 100}>
                <div
                  className="skill-item"
                  onClick={() => toggleSkill(index)}
                >
                  <div className="skill-title">
                    <h4>{skill.title}</h4>
                    <span
                      className={`arrow ${
                        openSkillIndex === index ? "rotate" : ""
                      }`}
                    >
                      &#9654;
                    </span>
                  </div>
                  <div
                    className={`skill-description ${
                      openSkillIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{skill.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        {/* Technologies Column */}
        <div className="technologies-column">
          <AnimatedItem>
            <h3 className="column-title">Technologies</h3>
          </AnimatedItem>
          <div className="column-data">
            {technologiesData.map((tech, index) => (
              <AnimatedItem key={index} delay={index * 100}>
                <div
                  className="tech-item"
                  onClick={() => toggleTech(index)}
                >
                  <div className="tech-title">
                    <h4>{tech.title}</h4>
                    <span
                      className={`arrow ${
                        openTechIndex === index ? "rotate" : ""
                      }`}
                    >
                      &#9654;
                    </span>
                  </div>
                  <div
                    className={`tech-description ${
                      openTechIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{tech.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTechnologies;
