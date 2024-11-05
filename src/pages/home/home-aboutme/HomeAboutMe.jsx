import React, { useEffect, useRef, useState } from "react";
import "./HomeAboutMe.css";
import Button from "../../../components/button/Button";

const HomeAboutMe = () => {
  const [isVisible, setIsVisible] = useState({ title: false, paragraph: false, button: false });
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.dataset.type]: true }));
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    // Observe each element
    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      // Clean up observers
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="home-about-me">
      <h2
        className={`about-title ${isVisible.title ? 'fade-in' : ''}`}
        ref={titleRef}
        data-type="title"
      >
        About Me
      </h2>
      <p
        className={`hero-para ${isVisible.paragraph ? 'fade-in' : ''}`}
        ref={paragraphRef}
        data-type="paragraph"
      >
        A self-taught full-stack web developer with a passion for creating dynamic and impactful web solutions. From customizing files as a teenager to building web applications today, I’ve combined years of curiosity, learning, and hands-on experience to become the developer I am today. Let's create something amazing together!
      </p>
      <div className="button">
        <Button
          to="about"
          name="Learn More"
          className={isVisible.button ? 'fade-in' : ''}
          ref={buttonRef}
          data-type="button"
        />
      </div>
    </section>
  );
};

export default HomeAboutMe;
