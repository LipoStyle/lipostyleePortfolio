import React from "react";
import "./Values.css";
import AnimatedItem from "../../../components/common/AnimatedItem";

const Values = () => {
  const valuesList = [
    {
      title: "Clean Code",
      description:
        "I believe in writing maintainable, scalable code that is easy to understand and modify for the future.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology is constantly evolving, and I ensure to stay updated with the latest trends, tools, and practices.",
    },
    {
      title: "User-Centric Design",
      description:
        "Building for the user is at the core of everything I do, focusing on usability and performance.",
    },
  ];

  return (
    <section className="about-section-values alt-style">
      <AnimatedItem>
        <h2 className="values-title">My Values & Approach</h2>
      </AnimatedItem>

      <div className="values-container">
        {valuesList.map((value, index) => (
          <AnimatedItem key={index} delay={index * 150}>
            <div className="value-card alt-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
};

export default Values;
