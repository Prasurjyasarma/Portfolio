import "./resume.css";
import img1 from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <img src={img1} alt="resume1" />
      <img src={img2} alt="resume2" />
    </div>
  );
};
export default Resume;
