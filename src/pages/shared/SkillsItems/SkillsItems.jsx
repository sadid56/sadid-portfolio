/* eslint-disable react/prop-types */
import "./items.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./items.css";
const SkillsItems = ({ skills }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-10 ">
      {skills?.map((skill) => (
        // <div data-aos="fade-up" data-aos-duration="2000" key={skill?.id}>
        //   <div className="skill-card p-4 cursor-pointer rounded-md transform transition duration-500 hover:scale-125 hover:text-slate-900 ">
        //     <div className="w-10 skill-icon h-10   mx-auto">
        //       <img
        //         src={skill?.logo}
        //         className="w-10 h-10 object-cover rounded-full border-2 border-[#11c6cf]"
        //         alt=""
        //       />
        //     </div>
        //     <h2 className="text-xl text-gray-300 font-semibold text-center mt-2">
        //       {skill?.name}
        //     </h2>
        //   </div>
        // </div>
        <div key={skill?.id} className="tooltip-container">
          <div className="tooltip">
            <div className="side">
              <div className="about">{skill?.side}</div>
            </div>
          </div>
          <div className="text">
            <div className="icon">
              <div className="layer w-[60px] h-[60px] md:w-[90px] md:h-[90px]">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="p-2 md:p-3">
                  <img
                    src={skill?.logo}
                    className="w-full h-full object-cover rounded-full border-2 border-[#11c6cf]"
                    alt=""
                  />
                </span>
              </div>
              <div className="text">{skill?.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsItems;
