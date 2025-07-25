// src/pages/portfolio/components/CustomProjectDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import './CustomProjectDropdown.css';
import projects from '../../pages/portfolio/data/projectsData';

const CustomProjectDropdown = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedProject = projects.find(p => p.id === selected);

  const handleSelect = (id) => {
    onSelect(id);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedProject.logo} alt={selectedProject.title} />
        <span>{selectedProject.title}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`dropdown-item ${selected === project.id ? 'active' : ''}`}
              onClick={() => handleSelect(project.id)}
            >
              <img src={project.logo} alt={project.title} />
              <span>{project.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomProjectDropdown;
