import "./expericence.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience-container">
      <div className="card" data-aos="fade-right">
        <h1>Freelancer</h1>
        <ul>
          <li>
            Successfully collaborated with diverse clients to design and develop
            visually appealing and user-friendly websites, ensuring a seamless
            and engaging user experience.
          </li>

          <li>
            Demonstrated proficiency in optimizing websites for speed and
            performance, resulting in improved loading times and enhanced user
            satisfaction
          </li>
        </ul>
      </div>
      <div className="card" data-aos="fade-left">
        <h1>Internship</h1>
        <ul>
          <li>
            Collaborated in a team to create a robust e-commerce platform using
            React and Redux showcasing strong teamwork and communication skills.
          </li>
          <li>
            Spearheaded end-to-end optimization efforts, resulting in a highly
            efficient and responsive web application for the client.
          </li>
        </ul>
      </div>
      <div className="card" data-aos="fade-left">
        <h1>Accenture</h1>
        <ul>
          <li>
            Executed SQL scripts to support various project requirements and
            data operations.
          </li>
          <li>
            Collaborated with requesters to provide necessary assistance and
            ensure smooth execution of tasks.
          </li>
          <li>
            Developed an automation script that generates and sends a weekly
            report to the team.
          </li>
          <li>
            Worked with the automation team to streamline the process of
            executing SQL scripts in an automated manner.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
