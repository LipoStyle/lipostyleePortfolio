import React from 'react';
import './Home.css'; // Home-specific styles
import Hero from './hero/Hero';
import HomeAboutMe from './home-aboutme/HomeAboutMe';
import Skills from './skills/Skills';
import HomeProjects from './home-projects/HomeProjects';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <Hero />
      {/* About Me Section */}
      <HomeAboutMe />
      {/* Skills Section */}
      <Skills />
      {/* Featured Projects Section */}
     <HomeProjects />

    </div>
  );
};

export default Home;
