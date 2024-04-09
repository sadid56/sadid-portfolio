/* eslint-disable react/prop-types */
import { useAnimation , motion} from "framer-motion";
import "./items.css";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../../hooks/useMotionAnimate";
import { useEffect } from "react";
const SkillsItems = ({ skills }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [downAnimate] = useMotionAnimate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-10 ">
      {skills?.map((skill) => (
        <motion.div        ref={ref}
        variants={downAnimate}
        initial="hidden"
        animate={control}
          key={skill?.id}
          className="tooltip-container">
          <div className="tooltip">
            <div className="side">
              <div className="about">{skill?.side}</div>
            </div>
          </div>
          <div className="text">
            <div className="icon">
              <div className="layer w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="p-2 md:p-3">
                  <img
                    src={skill?.logo}
                    className="w-full img h-full object-cover rounded-full border-2 border-[#11c6cf]"
                    alt=""
                  />
                </span>
              </div>
              <div className="text">{skill?.name}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsItems;
