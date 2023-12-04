

const SkillsProgress = () => {
    return (
        <div className="relative mx-5">
       
        <div className="skill-box">
          <span className="title">React Development</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="toltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Web Design</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="toltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">MERN Stack Development</span>
          <div className="skill-bar">
            <span className="skill-per js">
              <span className="toltip">85%</span>
            </span>
          </div>
        </div>
      </div>
    );
};

export default SkillsProgress;