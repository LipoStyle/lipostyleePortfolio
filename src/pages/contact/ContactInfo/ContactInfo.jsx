import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li><i className="fas fa-envelope"></i> <a href="mailto:contact@lipostylee.gr">contact@lipostylee.gr</a></li>
        <li><i className="fas fa-phone-alt"></i> +30 123 456 789</li>
        <li><i className="fas fa-map-marker-alt"></i> Athens, Greece</li>
      </ul>
    </section>
  );
};

export default ContactInfo;
