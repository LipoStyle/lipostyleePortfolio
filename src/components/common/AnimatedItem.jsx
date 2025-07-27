import React from "react";
import useIntersectionAnimation from "../../hooks/useintersectionanimation/useIntersectionAnimation";

const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionAnimation();

  return (
    <div
      ref={ref}
      className={`animate-child ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedItem;
