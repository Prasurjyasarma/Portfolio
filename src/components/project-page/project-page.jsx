import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import img1 from "../../Assets/E-commerce.png"; //E-commerce
import img2 from "../../Assets/Dog.png"; //Dog
import img3 from "../../Assets/Nike.png"; //Nike
import img4 from "../../Assets/DNA.png"; //Dna
import img5 from "../../Assets/Oct.png"; //Oct
import img6 from "../../Assets/Port.png"; //Port
import img7 from "../../Assets/Pad.png"; //Pad
import img8 from "../../Assets/Sound.png"; //Text

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="project-page">
      <section className="projects">
        <h1 className="Major-projects" data-aos="fade-in">
          Major Projects
        </h1>

        <div className="project-section major-projects">
          <div className="project-card" data-aos="fade-in">
            <img src={img1} alt="Major Project 1" />
            <h3>E-commerce</h3>
            <p>
              Presenting my e-commerce platform, a personal project that
              redefines the online shopping experience. Crafted with React,
              Redux, and Firebase, it showcases dynamic interfaces, seamless
              state management, and real-time updates. The integration of
              Firebase ensures secure authentication and a scalable backend.
              This project reflects my commitment to delivering modern and
              engaging digital solutions. Explore the intersection of technology
              and user satisfaction with my React and Redux-powered e-commerce
              platform, showcased here as part of my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/E-commerce.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>
          <div className="project-card" data-aos="fade-up">
            <img src={img2} alt="Dog Adoption" />
            <h3>Dog Adoption</h3>
            <p>
              Introducing my dog adoption website, a project that reflects my
              passion for creating meaningful online experiences. Developed with
              a stack including JavaScript, HTML, CSS, and PHP, this platform
              offers a user-friendly interface for discovering and adopting
              furry companions. Through the seamless integration of PHP, the
              website provides dynamic content and robust backend
              functionalities. This project showcases my dedication to
              leveraging diverse technologies to address real-world needs.
              Explore the heartwarming world of dog adoption through my creation
              – a testament to the bond between technology and compassion,
              presented here as part of my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Pet-Adopt.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>
        </div>

        <div className="project-section minor-projects">
          <h1 className="minor-projects"> Minor Projects</h1>

          <div className="project-card" data-aos="fade-up">
            <img src={img3} alt="Minor Project 1" />
            <h3>Nike Mockup website</h3>
            <p>
              Presenting my Nike mockup website, a creative endeavor that blends
              design and functionality. Crafted with a combination of HTML, CSS,
              and JavaScript, this project mirrors the aesthetic and user
              experience of the renowned Nike brand. The use of JavaScript adds
              interactivity, enhancing the user's exploration of the mockup
              site. This project is a testament to my ability to translate
              design concepts into a fully functional and visually appealing web
              experience. Immerse yourself in the world of virtual Nike
              exploration through my mockup website – a showcase of my design
              and development skills, presented here in my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={img4} alt="Minor Project 1" />
            <h3>Dna Sequence finder</h3>
            <p>
              Presenting my DNA sequence finder, a JavaScript-powered project
              that demonstrates my coding skills applied to scientific
              exploration. With a focus on efficiency and accuracy, this tool
              allows for the identification and analysis of DNA sequences.
              Leveraging JavaScript's capabilities, the finder provides a
              seamless and interactive user experience. This project reflects my
              passion for combining technology with scientific inquiry,
              showcasing the potential for innovation within the realm of
              molecular biology. Explore the intricacies of DNA analysis through
              my sequence finder – a unique fusion of coding expertise and
              scientific curiosity, now featured in my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={img5} alt="Minor project 3" />
            <h3>Octateone</h3>
            <p>
              Introducing my creative website designed for a startup company, a
              testament to my skills in web development and design. Crafted
              using HTML, CSS, and JavaScript, this project captures the essence
              and vision of the startup, offering a visually appealing and
              user-friendly online presence. From interactive features to
              responsive layouts, every element is meticulously tailored to
              enhance the user experience. This project reflects my ability to
              translate a brand's identity into a compelling digital space.
              Immerse yourself in the innovative spirit of the startup world
              through my creative website – a showcase of my commitment to
              delivering impactful digital solutions, proudly featured in my
              portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={img6} alt="Minor Project 1" />
            <h3>Portfolio</h3>
            <p>
              Presenting the portfolio website I crafted for a client, a
              testament to my expertise in web development and design. Utilizing
              HTML, CSS, and JavaScript, I brought to life a personalized and
              visually appealing digital space that effectively showcases the
              client's skills and accomplishments. The website's responsive
              design ensures a seamless experience across various devices, while
              interactive elements enhance user engagement. This project
              exemplifies my commitment to translating individual stories and
              professional journeys into compelling online narratives. Explore
              the unique and tailored portfolio experience designed for my
              client – a demonstration of my dedication to delivering impactful
              and personalized web solutions, now highlighted in my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={img7} alt="Minor Project 1" />
            <h3>SoundBoard</h3>
            <p>
              Introducing my soundboard website, a dynamic project where users
              can unleash their creativity by clicking to create simple beats.
              Developed with HTML, CSS, and JavaScript, this interactive
              platform allows users to experiment with sound and rhythm in an
              engaging way. The intuitive design ensures a user-friendly
              experience, enabling individuals to craft their unique musical
              compositions effortlessly. This project showcases my passion for
              combining coding skills with a creative outlet, providing an
              accessible space for users to explore the world of music creation.
              Dive into the rhythmic world of my soundboard website – a playful
              blend of technology and creativity, now proudly featured in my
              portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={img8} alt="Minor Project 1" />
            <h3>Text to speech</h3>
            <p>
              Presenting my text-to-speech website, a project that transforms
              written words into spoken language using the Google Text-to-Speech
              API. Crafted with HTML, CSS, and JavaScript, this user-friendly
              platform allows users to convert text into lifelike speech with a
              simple click. The seamless integration of the Google
              Text-to-Speech API ensures high-quality and natural-sounding audio
              output. This project highlights my commitment to enhancing user
              experiences by leveraging powerful APIs. Immerse yourself in the
              innovative capabilities of my text-to-speech website – a
              demonstration of my dedication to making technology accessible and
              engaging, now showcased in my portfolio.
            </p>
            <a
              href="https://github.com/Prasurjyasarma/Projects-HTML-CS-JS-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
