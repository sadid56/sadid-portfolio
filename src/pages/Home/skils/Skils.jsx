import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./skills.css";

const Skils = () => {
  return (
    <section id="skils" className="max-w-6xl mx-auto">
      <SectionTitle color={"My Skills in Progress"} />
      <div className="relative">
       
        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="toltip">99%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="toltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per js">
              <span className="toltip">70%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
