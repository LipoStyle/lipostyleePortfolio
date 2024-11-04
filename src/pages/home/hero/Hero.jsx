import React, { useState, useEffect } from "react";
import "./Hero.css";
import Button from "../../../components/button/Button";

const Hero = () => {
  const [typedQuote, setTypedQuote] = useState(""); // State to hold the typed quote
  const quote = "The journey of a thousand miles begins with one step."; // Full quote

  useEffect(() => {
    const timeouts = []; // Store timeout IDs to clear them later

    // Loop through each character in the quote
    for (let index = 0; index < quote.length; index++) {
      const timeoutId = setTimeout(() => {
        setTypedQuote((prev) => prev + quote.charAt(index));
      }, 100 * index); // Delay increases with each character

      timeouts.push(timeoutId); // Add each timeout ID to the array
    }

    // Cleanup function to clear timeouts if component unmounts or effect is re-run
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []); 

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Manuel Lipo</h1>
        <h2 className="hero-profession">Full-Stack Developer</h2>

        {/* Typing effect applied to the quote */}
        <p className="quote">{typedQuote}</p>

        <div className="hero-cta-buttons">
          <Button url={"/portfolio"} name={"My Work"} />
          <Button url={"/contact"} name={"Contact Me"} />
          <Button
            url={"/files/Manuel-Lipo-CV.pdf"}
            downloadLink={"Manuel-Lipo-CV.pdf"}
            name={"Download CV"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
