import React from 'react';
import './Contact.css';
import TitleSection from './TitleSection/TitleSection';
import ContactInfo from './ContactInfo/ContactInfo';
import SocialInfo from './SocialInfo/SocialInfo';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="overlay" />
      <div className="contact-page">
        <TitleSection />

        <div className="contact-main">
          <div className="contact-left">
            <ContactInfo />
            <SocialInfo />
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
