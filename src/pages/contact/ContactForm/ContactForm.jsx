import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Send Me a Message</h2>
      <p className="form-subtext">Have a project in mind or just want to say hello? Fill out the form below and I’ll get back to you soon.</p>
      
      <form action="/send-message" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject">
            <option value="project-inquiry">Project Inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="button-56">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
