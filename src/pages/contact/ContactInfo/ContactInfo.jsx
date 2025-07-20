import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <p className="contact-subtext">Feel free to reach out with any questions, collaborations, or project ideas. I'm always happy to connect!</p>
      <ul>
        <li><i className="fas fa-envelope"></i> <a href="mailto:contact@lipostylee.gr">lipostylee@gmail.com</a></li>
        <li><i className="fas fa-phone-alt"></i> +30 6955339965</li>
        <li><i className="fas fa-map-marker-alt"></i> Skiathos, Greece</li>
      </ul>
    </section>
  );
};

export default ContactInfo;
