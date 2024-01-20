import "./project.css";

const Projects = () => {
  return (
    <div className="project-page">
      <section className="projects">
        <h1> Major Projects</h1>

        <div className="project-section major-projects">
          <h2>Major Projects</h2>
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Major Project 1"
            />
            <h3>Major Project 1</h3>
            <p>Description of Major Project 1.</p>
            <a href="/major-project-1" className="project-button">
              View Details
            </a>
          </div>
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Major Project 2"
            />
            <h3>Major Project 2</h3>
            <p>Description of Major Project 2.</p>
            <a href="/major-project-2" className="project-button">
              View Details
            </a>
          </div>
        </div>

        <div className="project-section minor-projects">
          <h1> Major Projects</h1>

          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div className="project-card" key={index}>
              <img
                src={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={`Minor Project ${index}`}
              />
              <h3>Minor Project {index}</h3>
              <p>Description of Minor Project {index}.</p>
              <a href={`/minor-project-${index}`} className="project-button">
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
