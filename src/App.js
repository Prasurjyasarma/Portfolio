import MainDirectory from "./components/main-directory/main-directory";
import AboutPage from "./components/about-page/about-page";
import Skills from "./components/skill-page/skill-page";
import Projects from "./components/project-page/project-page";
import Experience from "./components/experience-page/expericence-page";
import Resume from "./components/resume-page/resume";

import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDirectory />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/skill-page" element={<Skills />} />
      <Route path="/project-page" element={<Projects />} />
      <Route path="/experience-page" element={<Experience />} />
      <Route path="/resume-page" element={<Resume />} />
    </Routes>
  );
}

export default App;
