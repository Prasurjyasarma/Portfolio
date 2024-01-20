import "./main-directory.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainDirectory = () => {
  const handleResumeClick = () => {
    const pdfPath = "./Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const [hoverText, setHoverText] = useState(
    "Try hovering over the above texts☝🏻"
  );

  return (
    <>
      <div className="container">
        <h1 className="text">
          HI
          <span>
            <Link to={"/about-page"}>ABOUT ME</Link>
          </span>
        </h1>
        <h1 className="text">
          I AM
          <span>
            <Link to={"/skill-page"}>SKILLS</Link>
          </span>
        </h1>
        <h1 className="text">
          PRASURJYA
          <span>
            <Link to={"/project-page"}>PROJECTS</Link>
          </span>
        </h1>
        <h1 className="text">
          SARMA
          <span>
            <a
              href="https://twitter.com/juxtopposed"
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPERIENCE
            </a>
          </span>
        </h1>
        <h1 className="text">
          A FRONT-END
          <span onClick={handleResumeClick}>RESUME</span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Fuck off nigga")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          WEB DEVELOPER
          <span>
            <a
              href="https://twitter.com/juxtopposed"
              target="_blank"
              rel="noopener noreferrer"
            >
              LET'S CONNECT
            </a>
          </span>
        </h1>
        <h3>{hoverText}</h3>
      </div>
    </>
  );
};

export default MainDirectory;
