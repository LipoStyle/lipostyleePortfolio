import React from "react";
import "./AboutSectionProfile.css"

// images imports
import secondImage from "../../../images/me.png"
import thirdImage from "../../../images/me.png"
import fourthImage from "../../../images/me.png"

const AboutSectionProfile = () =>{
  return(
    <div className="about-section-profile">
      <h2>My Journey So Far</h2>
      <div className="my-jurney">
        <div className="development-jurney">
          <img src={secondImage} alt="image-of-me" className="image-of-me"/>
          <div className="text-content">
            <h3>About development career</h3>
            <p>I am a self-taught full-stack web developer with a strong passion for technology and problem-solving. My journey into development started with a deep interest in computers, evolving from customizing visual elements and fixing hardware to mastering web technologies. Despite not completing my computer science degree, I have independently built proficiency in HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, SQL, PostgreSQL, and GitHub. Alongside my technical skills, I’ve gained valuable life experience from various jobs, building adaptability, communication, and teamwork. I am eager to apply my skills to create impactful digital solutions.</p>
          </div>
        </div>
        <div className="life-jurney">
          <img src={thirdImage} alt="image-of-me" className="image-of-me"/>
          <div className="text-content">
            <h3>About life-working career</h3>
            <p> Throughout my career, I have gained valuable experience working across diverse industries. While still in school, I began my journey as a second waiter in a café-bar-snack restaurant, where I developed early skills in customer service and multitasking. During my university studies in Computer Science, I continued working as both a second and first waiter in a coffee-bar-restaurant-cocktail bar, further honing my ability to manage busy environments and provide excellent service.</p>
            <p>Afterward, I took on a role as a storekeeper in a large nuts company, where I learned the importance of organization and inventory management. Following that, I transitioned back into the service industry, working primarily as a first waiter in gelato shops, coffeehouses, restaurants, and cocktail bars. Additionally, I gained valuable experience as a barman and even worked as a hotel receptionist, developing my communication and customer interaction skills further. Most recently, I ran my own gardening business, where I applied my skills in project management and client relationships, ensuring high-quality service delivery.</p>
            <p>Simultaneously, I dedicated my time to self-education, keeping up with my university lessons online and pursuing solo learning in web development. This period of my life has allowed me to build a strong foundation in both technical and soft skills, which I continue to apply in my work today.</p>
          </div>
        </div>
        <div className="hobbies-jurney">
          <img src={fourthImage} alt="image-of-me" className="image-of-me"/>
          <div className="text-content">
            <h3>About my hobbies</h3>
            <p>From a very young age, I developed a passion for football and joined a local team, where I enjoyed the thrill of teamwork and competition. Music has always been a significant part of my life as well. I began playing the trumpet in a local traditional band and later expanded my skills through self-learning, picking up the electric and acoustic guitar, bass guitar, and even a bit of saxophone. Music, both listening and playing, has been a constant source of joy and creativity for me.</p>
            <p>In addition to music, I have a strong love for the outdoors. I enjoy exploring nature on my bicycle and hiking through new landscapes. Swimming is another activity I find refreshing, and it allows me to stay active and connected to nature. Occasionally, I dive into reading psychological and self-improvement books, which help me reflect and grow personally.</p>
            <p>Lastly, I have always had a deep connection with technology. I thoroughly enjoy spending time on my computer, whether it’s playing video games, watching series, or simply exploring different aspects of the digital world.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSectionProfile;