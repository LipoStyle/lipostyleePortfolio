import "./HomeAboutMe.css"
import Button from "../../../components/button/Button"

const HomeAboutMe = ()=> {
  return(
    <section className="home-about-me">
      <h2>About Me</h2>
      <p className="hero-para">a self-taught full-stack web developer with a passion for creating dynamic and impactful web solutions. From customizing files as a teenager to building web applications today, I’ve combined years of curiosity, learning, and hands-on experience to become the developer I am today. Let's create something amazing together!</p>
      <div className="button">
        <Button to="about" name="Learn More"/>
      </div>
    </section>
  )
}

export default HomeAboutMe;