import React, { useState } from 'react';
import './SkillsAndTechnologies.css';

const skillsData = [
 
{
  title: "Adaptability & Resilience",
  description: "Gained through working diverse jobs such as waiter, barman, and gardener. Adapting to new roles, environments, and challenges has taught me resilience and how to thrive in dynamic, fast-paced settings."
},
{
  title: "Communication & Interpersonal Skills",
  description: "My time in customer-facing roles such as waiter, barman, and receptionist helped me develop excellent communication and interpersonal skills. I learned how to listen, respond, and empathize with a diverse range of people."
},
{
  title: "Multitasking & Time Management",
  description: "Juggling multiple responsibilities as a waiter and barman allowed me to sharpen my multitasking and time management skills. These experiences translate into my ability to handle multiple development tasks efficiently."
},
{
  title: "Problem-Solving & Creativity",
  description: "Whether troubleshooting issues at work or learning musical instruments on my own, I've developed creative problem-solving skills, which I now apply to my coding and project management work."
},
{
  title: "Leadership & Team Collaboration",
  description: "Through leading shifts as a first waiter and working in teams, I developed leadership and collaboration skills. These are crucial for coordinating development teams and delivering successful projects."
},
{
  title: "Attention to Detail",
  description: "Whether working as a barman or gardener, attention to detail was essential. This translates well into my web development work, where precision is critical for clean and functional code."
},
{
  title: "Self-Motivation & Continuous Learning",
  description: "From teaching myself web development to mastering new instruments, I am driven by a love for continuous learning and improvement. I stay up-to-date with the latest technologies and best practices."
}
];

const technologiesData = [
  {
    title: "HTML & CSS",
    description: "Expertise in building responsive and modern web interfaces using HTML5 and CSS3, ensuring cross-browser compatibility and mobile responsiveness."
  },
  {
    title: "JavaScript & React",
    description: "Proficient in JavaScript, with experience building dynamic and interactive web applications using React.js, including state management and component-based architecture."
  },
  {
    title: "Ruby & Ruby on Rails",
    description: "Strong understanding of Ruby programming language and its framework, Ruby on Rails, to build robust backend applications with databases like PostgreSQL."
  },
  {
    title: "PostgreSQL",
    description: "Experience in using PostgreSQL as a database management system for full-stack web applications, handling data storage, and optimization."
  }
  // Add more technologies here
];

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
        <h2>Skills & Technologies</h2>
        <div className="skills-technologies-wrapper">
          {/* Skills Column */}
          <div className="skills-column">
            <h3 className="column-title">Skills</h3>
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
  
          {/* Technologies Column */}
          <div className="technologies-column">
            <h3 className="column-title">Technologies</h3>
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
      </section>
    );
  };

export default SkillsAndTechnologies;
