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
          Hi, I'm Prasurjya Sarma, a developer skilled in HTML, CSS, JavaScript,
          React, and Redux. While I started as a Front-End Developer, I’ve
          expanded into Python, data analytics, and automation, working on
          various analytics projects and automation scripts. I specialize in
          building responsive interfaces and leveraging data-driven solutions to
          enhance efficiency. Passionate about clean code and seamless digital
          experiences, I’m open to exciting projects and collaborations—let’s
          connect!
        </p>
        <div className="social-section">
          <p>
            <a
              href="https://github.com/Prasurjyasarma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/prasurjya_sarma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/prasurjya-sarma-23b047218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
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
