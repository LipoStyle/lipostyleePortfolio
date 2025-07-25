// src/pages/portfolio/components/Sidebar.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import projects from '../data/projectsData';

const Sidebar = ({ selected, onSelect }) => {
  const listRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const index = projects.findIndex((p) => p.id === selected);
    if (index === -1 || !listRef.current) return;

    const listItems = listRef.current.querySelectorAll('.sidebar-item');
    const activeItem = listItems[index];

    if (activeItem) {
      const { offsetTop, offsetHeight } = activeItem;
      setIndicatorStyle({ top: offsetTop, height: offsetHeight });
    }
  }, [selected]);

  return (
    <aside className="sidebar">
      
      <h3 className="sidebar-title">My Projects</h3>
      <ul className="sidebar-list" ref={listRef}>
        <div
          className="sidebar-active-indicator"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
          }}
        />
        {projects.map((project) => (
          <li
            key={project.id}
            className={`sidebar-item ${selected === project.id ? 'active' : ''}`}
            onClick={() => onSelect(project.id)}
          >
            <div className="sidebar-icon">
              <img src={project.logo} alt={project.title} />
            </div>
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
