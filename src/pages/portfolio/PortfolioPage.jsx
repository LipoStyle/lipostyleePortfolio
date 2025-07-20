// src/pages/portfolio/PortfolioPage.jsx
import React, { useState } from 'react';
import './PortfolioPage.css';
import Sidebar from './components/Sidebar';
import ProjectContent from './components/ProjectContent';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState('project1');

  return (
    <div className="portfolio-layout">
      <Sidebar selected={selectedProject} onSelect={setSelectedProject} />
      <ProjectContent projectId={selectedProject} />
    </div>
  );
};

export default PortfolioPage;
