// HomeProjects.js
import "./HomeProjects.css";
import Button from "../../../components/button/Button";
import eNutritionist from "../../../images/homeimages/projectimages/e-nutritionist.png";
import smartRide from "../../../images/homeimages/projectimages/smart-ride.png";

const HomeProjects = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="featured-projects">
        <div className="project-card">
          <img src={eNutritionist} alt="E-Nutritionst site" className="project-image" />
          <div className="project-overlay">
            <h3>E-Nutritionist.com</h3>
            <p>Professional site for nutritionists to manage clients and resources.</p>
            <div className="project-buttons">
              <Button url="/portfolio" name="Learn More" />
              <Button url="https://e-nutritionist.com" name="Visit" />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={smartRide} alt="SmartRide site" className="project-image" />
          <div className="project-overlay">
            <h3>Smartride.gr</h3>
            <p>Platform for convenient and sustainable scooter rentals in urban areas.</p>
            <div className="project-buttons">
              <Button url="/portfolio" name="Learn More" />
              <Button url="https://smartride.gr" name="Visit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
