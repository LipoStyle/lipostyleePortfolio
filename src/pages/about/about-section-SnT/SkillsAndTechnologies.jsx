import React, { useState } from 'react';
import './SkillsAndTechnologies.css';
import {skillsData, technologiesData} from './data'

const SkillsAndTechnologies = () => {

  // making the animation consept with  usestate
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
      <h2>Skills & Technologies</h2>
      <div className="skills-technologies-wrapper">
        {/* Skills Column */}
        <div className="skills-column">
          <h3 className="column-title">Skills</h3>
            <div className='column-data'>
            {skillsData.map((skill, index) => (
              <div
                className="skill-item"
                key={index}
                onClick={() => toggleSkill(index)}
              >
                <div className="skill-title">
                  <h4>{skill.title}</h4>
                  <span
                    className={`arrow ${openSkillIndex === index ? 'rotate' : ''}`}
                  >
                    &#9654;
                  </span>
                </div>
                <div
                  className={`skill-description ${openSkillIndex === index ? 'open' : ''}`}
                >
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Column */}
        <div className="technologies-column">
          <h3 className="column-title">Technologies</h3>
          <div className='column-data'>
            {technologiesData.map((tech, index) => (
              <div
                className="tech-item"
                key={index}
                onClick={() => toggleTech(index)}
              >
                <div className="tech-title">
                  <h4>{tech.title}</h4>
                  <span
                    className={`arrow ${openTechIndex === index ? 'rotate' : ''}`}
                  >
                    &#9654;
                  </span>
                </div>
                <div
                  className={`tech-description ${openTechIndex === index ? 'open' : ''}`}
                >
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTechnologies;
