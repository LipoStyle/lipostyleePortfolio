import React from "react";
import "./Values.css"

const Values = () =>{
  return(
    <div className="about-section-values">
      <h2>My Values & Approach</h2>
      <div className="values-container">
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
  )
}

export default Values;