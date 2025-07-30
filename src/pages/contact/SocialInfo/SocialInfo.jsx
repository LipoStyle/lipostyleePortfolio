import React from 'react';
import './SocialInfo.css';

const SocialInfo = () => {
  return (
    <section className="social-info">
      <h2>Connect with Me</h2>
      <p className="social-subtext">I'd love to connect with you! Feel free to reach out through any of the platforms below.</p>
      <ul>
        <li className='linkedin'>
          <a href="https://www.linkedin.com/in/lipo-manuel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/LipoStyle" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/lipostyle.Profile/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lipostyle/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialInfo;
