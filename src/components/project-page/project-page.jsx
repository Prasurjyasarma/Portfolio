import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Major Project 1"
            />
            <h3>E-commerce platform</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a
              href="/major-project-1"
              target="_blank"
              className="project-button"
            >
              GitHub Link
            </a>
          </div>
          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog Adoption"
            />
            <h3>Dog Adoption</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>
        </div>

        <div className="project-section minor-projects">
          <h1 className="minor-projects"> Minor Projects</h1>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>Nike Mockup website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>Dna Sequence finder</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>Octateone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>SoundBoard</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minor Project 1"
            />
            <h3>Text to speech</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              corporis dolorum. Aut rerum itaque voluptatem? Itaque quia ratione
              ipsum alias hic laboriosam exercitationem quae aspernatur illo,
              repellendus sunt obcaecati tenetur sequi dolore, doloremque,
              tempora voluptates consequatur amet asperiores aut veritatis.
            </p>
            <a href="/major-project-2" className="project-button">
              GitHub Link
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
