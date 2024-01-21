import "./main-directory.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SendMeMessage from "../send-me-message/send-me-message";

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

  const [isSendMeMessageVisible, setSendMeMessageVisible] = useState(false);
  const handleConnectClick = () => {
    setSendMeMessageVisible(true);
  };
  const closeSendMeMessage = () => {
    setSendMeMessageVisible(false);
  };

  return (
    <>
      <div className="container">
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Know about me 🤓")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          HI
          <span>
            <Link to={"/about-page"}>ABOUT ME</Link>
          </span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Know about my skill sets 🤠")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          I AM
          <span>
            <Link to={"/skill-page"}>SKILLS</Link>
          </span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() =>
            setHoverText("Know about the things that I have build 👷🏻‍♂️")
          }
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          PRASURJYA
          <span>
            <Link to={"/project-page"}>PROJECTS</Link>
          </span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Know about my past experiences 😌")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          SARMA
          <span>
            <Link to={"/experience-page"}>EXPERIENCE</Link>
          </span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Check out my resume 😇")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          A FRONT-END
          <span onClick={handleResumeClick}>RESUME</span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Connect with me in Linkedin 🙃")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
        >
          WEB DEVELOPER
          <span onClick={handleConnectClick}>LET'S CONNECT</span>
        </h1>
        <h3>{hoverText}</h3>
      </div>

      {isSendMeMessageVisible && (
        <div className="popup-overlay" onClick={closeSendMeMessage}>
          <div
            className="popup-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SendMeMessage />
          </div>
        </div>
      )}
    </>
  );
};

export default MainDirectory;
