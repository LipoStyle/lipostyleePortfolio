import React from 'react';
import './SocialInfo.css';

const SocialInfo = () => {
  return (
    <section className="social-info">
      <h2>Connect with Me</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialInfo;
