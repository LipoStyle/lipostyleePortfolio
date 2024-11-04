import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-us'>
     {/* contact intro */}
     <section id="contact-intro">
      <h1>Get in Touch</h1>
      <p>If you have any questions, want to collaborate on a project, or just say hello, feel free to reach out. I’d love to hear from you!</p>
    </section>

     {/* form and details  */}
     <div className='form-and-details'>
        {/* details and socials */}
        <div className='details-and-socials'>
          {/* contact details  */}
          <section id="contact-details">
            <h2>Contact Information</h2>
            <ul>
              <li><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@lipostylee.gr">contact@lipostylee.gr</a></li>
              <li><i className="fas fa-phone-alt"></i> Phone: +30 123 456 789</li>
              <li><i className="fas fa-map-marker-alt"></i> Location: Athens, Greece</li>
            </ul>
          </section>
          {/* social links */}
          <section id="social-links">
            <h2>Connect with Me</h2>
            <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://github.com/yourprofile" target="_blank"><i className="fab fa-github"></i> GitHub</a></li>
              <li><a href="https://twitter.com/yourprofile" target="_blank"><i className="fab fa-twitter"></i> Twitter</a></li>
            </ul>
          </section>
        </div>      
        {/* contact Form */}
        <section id="contact-form">
          <form action="/send-message" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <select id="subject" name="subject">
                <option value="project-inquiry">Project Inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <div className="form-group button-styling">
              <button type="submit" className='button-56'>Send Message</button>
            </div>
          </form>
        </section>
     </div>
    </div>
  );
};

export default Contact;
