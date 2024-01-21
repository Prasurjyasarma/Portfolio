import "./main-directory.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
          data-aos="fade-right"
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
          data-aos="fade-right"
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
          data-aos="fade-left"
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
          data-aos="fade-left"
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
          data-aos="fade-right"
        >
          A FRONT-END
          <span onClick={handleResumeClick}>RESUME</span>
        </h1>
        <h1
          className="text"
          onMouseEnter={() => setHoverText("Send me a text 🙃")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-right"
        >
          WEB DEVELOPER
          <span onClick={handleConnectClick}>LET'S CONNECT</span>
        </h1>
        <h3 data-aos="fade-in">{hoverText}</h3>
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
