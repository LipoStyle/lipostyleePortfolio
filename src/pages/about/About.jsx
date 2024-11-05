import React from 'react';
import './About.css';
import profilePic from '../../images/homeimages/background-hero.webp'; // Ensure your import is at the top
import SkillsAndTechnologies from './SkillsAndTechnologies';

const About = () => {
  return (
    <section className="about-container">
      {/* Introduction */}
      <div className="about-section intro">
        <h1>About Me</h1>
        <p>Hi, I'm Manuel Lipo, a full-stack developer passionate about building modern, seamless web applications. With a deep understanding of both front-end and back-end technologies, I focus on delivering high-quality, user-centric solutions.</p>
      </div>

      {/* Profile Picture */}
      <div className="about-section profile">
        <img src={profilePic} alt="Manuel Lipo" className="profile-image" />
        <h2>My Journey So Far</h2>
        <div className="my-jurney">
          <div className="development-jurney">
            <h3>About development career</h3>
            <p>I am a self-taught full-stack web developer with a strong passion for technology and problem-solving. My journey into development started with a deep interest in computers, evolving from customizing visual elements and fixing hardware to mastering web technologies. Despite not completing my computer science degree, I have independently built proficiency in HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, SQL, PostgreSQL, and GitHub. Alongside my technical skills, I’ve gained valuable life experience from various jobs, building adaptability, communication, and teamwork. I am eager to apply my skills to create impactful digital solutions.</p>
          </div>
          <div className="life-jurney">
            <h3>About life-working career</h3>
            <p> Throughout my career, I have gained valuable experience working across diverse industries. While still in school, I began my journey as a second waiter in a café-bar-snack restaurant, where I developed early skills in customer service and multitasking. During my university studies in Computer Science, I continued working as both a second and first waiter in a coffee-bar-restaurant-cocktail bar, further honing my ability to manage busy environments and provide excellent service.</p>
            <p>Afterward, I took on a role as a storekeeper in a large nuts company, where I learned the importance of organization and inventory management. Following that, I transitioned back into the service industry, working primarily as a first waiter in gelato shops, coffeehouses, restaurants, and cocktail bars. Additionally, I gained valuable experience as a barman and even worked as a hotel receptionist, developing my communication and customer interaction skills further. Most recently, I ran my own gardening business, where I applied my skills in project management and client relationships, ensuring high-quality service delivery.</p>
            <p>Simultaneously, I dedicated my time to self-education, keeping up with my university lessons online and pursuing solo learning in web development. This period of my life has allowed me to build a strong foundation in both technical and soft skills, which I continue to apply in my work today.</p>
          </div>
          <div className="hobbies-jurney">
            <h3>about my hobbies</h3>
            <p>From a very young age, I developed a passion for football and joined a local team, where I enjoyed the thrill of teamwork and competition. Music has always been a significant part of my life as well. I began playing the trumpet in a local traditional band and later expanded my skills through self-learning, picking up the electric and acoustic guitar, bass guitar, and even a bit of saxophone. Music, both listening and playing, has been a constant source of joy and creativity for me.</p>
            <p>In addition to music, I have a strong love for the outdoors. I enjoy exploring nature on my bicycle and hiking through new landscapes. Swimming is another activity I find refreshing, and it allows me to stay active and connected to nature. Occasionally, I dive into reading psychological and self-improvement books, which help me reflect and grow personally.</p>
            <p>Lastly, I have always had a deep connection with technology. I thoroughly enjoy spending time on my computer, whether it’s playing video games, watching series, or simply exploring different aspects of the digital world.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsAndTechnologies />

      {/* Values Section */}
      <div className="about-section values-section">
        <h2>My Values & Approach</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Clean Code</h3>
            <p>I believe in writing maintainable, scalable code that is easy to understand and modify for the future.</p>
          </div>
          <div className="value-card">
            <h3>Continuous Learning</h3>
            <p>Technology is constantly evolving, and I ensure to stay updated with the latest trends, tools, and practices.</p>
          </div>
          <div className="value-card">
            <h3>User-Centric Design</h3>
            <p>Building for the user is at the core of everything I do, focusing on usability and performance.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <h2>Let's Collaborate!</h2>
        <a href="/contact">Contact Me</a>
      </div>
    </section>
  );
};

export default About;

