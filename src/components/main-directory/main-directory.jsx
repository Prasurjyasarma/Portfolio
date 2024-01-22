import "./main-directory.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SendMeMessage from "../send-me-message/send-me-message";

const MainDirectory = () => {
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
        <h4
          className="text"
          onMouseEnter={() => setHoverText("Get to know me")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-right"
        >
          HI
          <span>
            <Link to={"/about-page"}>ABOUT ME</Link>
          </span>
        </h4>
        <h4
          className="text"
          onMouseEnter={() => setHoverText("What I bring to the table")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-right"
        >
          I AM
          <span>
            <Link to={"/skill-page"}>SKILLS</Link>
          </span>
        </h4>
        <h5
          className="text"
          onMouseEnter={() => setHoverText("Ideas i have built")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-left"
        >
          PRASURJYA
          <span>
            <Link to={"/project-page"}>PROJECTS</Link>
          </span>
        </h5>
        <h6
          className="text"
          onMouseEnter={() => setHoverText("Dive into my experiences")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-left"
        >
          SARMA
          <span>
            <Link to={"/experience-page"}>EXPERIENCE</Link>
          </span>
        </h6>
        <h4
          className="text"
          onMouseEnter={() => setHoverText("Check out my resume")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-right"
        >
          A FRONT-END
          <span>
            <Link to={"/resume-page"}>RESUME</Link>
          </span>
        </h4>
        <h4
          className="text"
          onMouseEnter={() => setHoverText("Drop me a text")}
          onMouseLeave={() =>
            setHoverText("Try hovering over the above texts☝🏻")
          }
          data-aos="fade-right"
        >
          WEB DEVELOPER
          <span onClick={handleConnectClick}>LET'S CONNECT</span>
        </h4>
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
