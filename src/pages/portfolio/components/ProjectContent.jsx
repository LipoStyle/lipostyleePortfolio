import React, { useEffect, useState, useRef } from 'react';
import './ProjectContent.css';
import projects from '../data/projectsData';

// Hook for Intersection Observer
const useIntersectionAnimation = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Animate only once
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

// Reusable animated wrapper
const AnimatedItem = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionAnimation();

  return (
    <div
      ref={ref}
      className={`animate-child ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ProjectContent = ({ projectId }) => {
  const [visible, setVisible] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      const p = projects.find((proj) => proj.id === projectId);
      setProject(p);
      setVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [projectId]);

  if (!project) return <div className="project-content">Project not found.</div>;

  return (
    <div className={`project-content ${visible ? 'fade-in' : 'fade-out'}`}>
      {/* Title */}
      <AnimatedItem delay={100}>
        <h2 className="project-title">{project.title}</h2>
      </AnimatedItem>

      {/* Project Image */}
      <AnimatedItem delay={200}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      </AnimatedItem>

      {/* Description */}
      {project.description && (
        <AnimatedItem delay={300}>
          <p className="project-description">{project.description}</p>
        </AnimatedItem>
      )}

      {/* Purpose Section */}
      {project.purpose && (
        <AnimatedItem delay={400}>
          <div className="project-purpose">
            <h3>Purpose</h3>
            <p>{project.purpose.paragrapgh}</p>
            {project.purpose.itemlist && (
              <ul>
                {project.purpose.itemlist.map((item, index) => (
                  <AnimatedItem key={index} delay={index * 100}>
                    <li>{item}</li>
                  </AnimatedItem>
                ))}
              </ul>
            )}
          </div>
        </AnimatedItem>
      )}

      {/* Pages & Features Section */}
      {project.pagesNfeatures && project.pagesNfeatures.length > 0 && (
        <AnimatedItem delay={500}>
          <div className="project-pages-features">
            <h3>Pages & Features</h3>
            {project.pagesNfeatures.map((pageObj, pageIndex) => (
              <AnimatedItem key={pageIndex} delay={pageIndex * 150}>
                <div className="page-section">
                  <h4>{pageObj.page}</h4>
                  {Array.isArray(pageObj.pageDescription) ? (
                    <ul>
                      {pageObj.pageDescription.map((section, secIndex) => (
                        <AnimatedItem key={secIndex} delay={secIndex * 100}>
                          <li>
                            <strong>{section.sectionName}</strong> {section.sectionDescritpion}
                          </li>
                        </AnimatedItem>
                      ))}
                    </ul>
                  ) : (
                    <p>{pageObj.pageDescription}</p>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedItem>
      )}

      {/* Key Highlights (Features) */}
      {project.features && project.features.length > 0 && (
        <AnimatedItem delay={600}>
          <div className="project-features">
            <h3>Key Highlights</h3>
            <ul>
              {project.features.map((feat, index) => (
                <AnimatedItem key={index} delay={index * 150}>
                  <li className="feature-item">
                    <span className="feature-icon">{feat.icon}</span>
                    <div className="feature-text">
                      <strong>{feat.title}</strong>
                      <p>{feat.description}</p>
                    </div>
                  </li>
                </AnimatedItem>
              ))}
            </ul>
          </div>
        </AnimatedItem>
      )}

     {/* Tech Stack Section */}
      {/* Tech Stack Section */}
      <AnimatedItem delay={700}>
        <div className="project-tech-section">
          <h3 className="tech-stack-title">Tech Stack</h3>

          {/* Grid 2 columns */}
          <div className="tech-stack-grid">
            {project.techStack.map((tech, index) => (
              <AnimatedItem key={index} delay={index * 100}>
                <div className="tech-item">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                  {tech.note && <span className="tech-note">({tech.note})</span>}
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* GitHub & Live Buttons */}
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </div>
        </div>
      </AnimatedItem>
    </div>
  );
};

export default ProjectContent;
