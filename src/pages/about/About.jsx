import React from 'react';
import './About.css';

//import other component
import AboutSectionIntro from './about-section-intro/AboutSectionIntro';
import AboutSectionProfile from './about-section-profile/AboutSectionProfile';
import SkillsAndTechnologies from './about-section-SnT/SkillsAndTechnologies';
import Values from './about-section-values/Values';
import AboutCTA from './about-section-CTA/AboutCTA';

const About = () => {
  return (
    <section className="about-container">
      {/* Introduction */}
      <AboutSectionIntro />
      {/* Profile Comp */}
      <AboutSectionProfile />
      {/* Skills Section */}
      <SkillsAndTechnologies />
      {/* Values Section */}
      <Values />
      {/* Call to Action */}
      <AboutCTA />
    </section>
  );
};

export default About;

