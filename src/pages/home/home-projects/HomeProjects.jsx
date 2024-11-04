import "./HomeProjects.css";
import Button from "../../../components/button/Button";
import eNutritionist from "../../../images/homeimages/projectimages/e-nutritionist.png";
import smartRide from "../../../images/homeimages/projectimages/smart-ride.png";

const HomeProjects = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        <div className="project">
          <img src={eNutritionist} alt="E-Nutritionst site" className="project-image" />
          <div className="project-info">
            <h3>E-Nutritionist.com</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reiciendis veritatis totam quia at repudiandae similique?</p>
            <div className="project-buttons">
              <Button url="/portfolio" name="Learn More" />
              <Button url="https://e-nutritionist.com" name="Visit" />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={smartRide} alt="SmartRide site" className="project-image" />
          <div className="project-info">
            <h3>Smartride.gr</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore quidem culpa officiis necessitatibus. Voluptate, illum cumque tempore aliquid vitae eligendi?</p>
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
