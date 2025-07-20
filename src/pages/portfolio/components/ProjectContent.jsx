// src/pages/portfolio/components/ProjectContent.jsx
import React from 'react';
import './ProjectContent.css';
import projects from '../data/projectsData';

const ProjectContent = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div className="project-content">Project not found.</div>;

  return (
    <div className="project-content">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        <strong>Tech Stack:</strong> {project.techStack.join(', ')}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectContent;
