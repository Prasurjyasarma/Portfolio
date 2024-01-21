import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-section">
      <div className="about-content" data-aos="fade-in">
        <h2>About Me</h2>
        <p>
          Hi, I'm Prasurjya Sarma, a Front-End Web Developer skilled in HTML,
          CSS, JavaScript, React, and Redux. I specialize in creating responsive
          and user-friendly interfaces. Passionate about clean code, I transform
          creative ideas into seamless digital experiences. Currently open to
          exciting projects and collaborations. Let's connect and build
          something amazing!
        </p>
      </div>
      <div className="about-images" data-aos="fade-left">
        <img
          src="https://ouch-cdn2.icons8.com/aa-wDxZIZMZXPRM9yfA3__fncUXSlsBJ0L1vPAtmuW0/rs:fit:608:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDc3/L2UyMTMwZGI2LWM1/NjEtNDMzMC04MDYw/LWFmNzQ3NDVmNzkw/Yi5zdmc.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default AboutPage;
