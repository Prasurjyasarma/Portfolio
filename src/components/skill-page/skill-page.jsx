import "./skill.css";

const Skills = () => {
  const skillsData = [
    { name: "PYHTON", progress: 85 },
    { name: "DJANGO", progress: 75 },
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JAVASCRIPT", progress: 70 },
    { name: "FIGMA", progress: 50 },
    { name: "SELENIUM", progress: 74 },
  ];

  return (
    <div className="skill-page">
      <h1 className="skills-title">Skills</h1>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skills</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {skillsData.map((skill, index) => (
            <tr key={index}>
              <td>{skill.name}</td>
              <td>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
