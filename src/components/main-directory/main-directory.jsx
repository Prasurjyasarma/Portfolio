import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./main-directory.css";
import { useState } from "react";
import ScrollText from "../scroll-text/scroll-text";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    // Animation logic using GSAP
    const textElements = gsap.utils.toArray(".text");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 40%",
          end: "center 50%",
          scrub: true,
        },
      });
    });
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const [hoverText, setHoverText] = useState(
    "Try hovering over the above texts☝🏻"
  );

  return (
    <>
      <ScrollText />
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
          PRASURJYA<span>PROJECTS</span>
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
