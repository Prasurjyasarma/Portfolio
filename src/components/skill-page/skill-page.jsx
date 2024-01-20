import "./skill.css";

const Skills = () => {
  const skillsData = [
    { name: "Apple", progress: 80 },
    { name: "Banana", progress: 60 },
    { name: "Orange", progress: 75 },
    { name: "Grapes", progress: 90 },
    { name: "Kiwi", progress: 70 },
    { name: "Mango", progress: 85 },
    { name: "Pineapple", progress: 50 },
  ];

  return (
    <div className="skill-page">
      <h1 className="skills-title">Skills</h1>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill</th>
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
