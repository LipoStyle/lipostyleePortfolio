// src/pages/portfolio/PortfolioPage.jsx
import React, { useState } from 'react';
import './PortfolioPage.css';
import Sidebar from './components/Sidebar';
import ProjectContent from './components/ProjectContent';
import projects from './data/projectsData';
import CustomProjectDropdown from '../../components/customprojectdropdown/CustomProjectDropdown';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState('project1');

  const handleSelectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  return (
    <div className="portfolio-page">
      {/* 🔽 Mobile project selector */}
     <div className="project-selector-mobile">
      <h2>My Projects</h2>
      <CustomProjectDropdown selected={selectedProject} onSelect={setSelectedProject} />
    </div>

      <div className="portfolio-layout">
        {/* 🔽 Desktop sidebar */}
        <Sidebar selected={selectedProject} onSelect={setSelectedProject} />
        <ProjectContent projectId={selectedProject} />
      </div>
    </div>
  );
};

export default PortfolioPage;
