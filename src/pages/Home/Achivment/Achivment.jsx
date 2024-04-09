/* eslint-disable react/no-unknown-property */
import experience from "../../../assets/icons/schedule_3652191.png";
import Projects from "../../../assets/icons/boost_10497959.png";
import clients from "../../../assets/icons/dad_4190194.png";
import certificate from "../../../assets/icons/certificate_8123718.png";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation , motion} from "framer-motion";
import "./Achivement.css"
const Achievement = () => {
  const [projects, setProjects] = useState(0);
  const [achivement, setAchivement] = useState(0);
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      setProjects(10);
      setAchivement(3)
    } else {
      setProjects(0);
      setAchivement(0)
    }
  }, [inView]);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const AchimentAnimate = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div 
    ref={ref}
    variants={AchimentAnimate}
    initial="hidden"
    animate={control}
      className="grid gap-10 mt-10 p-10 md:grid-cols-2 lg:grid-cols-4 Achievement-style rounded-md bg-opacity-60 mx-3 max-w-7xl md:mx-auto">
      <div className="text-center space-y-2 transform transition duration-500 hover:scale-110">
        <img className="w-10 mx-auto" src={experience} alt="" />
        <h2 className="text-3xl font-bold text-[#03e9f4]">1</h2>
        <h4 className="text-xl text-gray-400 font-medium">
          Year of Experiance
        </h4>
      </div>

      <div className="text-center space-y-2 transform transition duration-500 hover:scale-110">
        <img className="w-10 mx-auto" src={Projects} alt="" />
        <h2 className="text-3xl font-bold text-[#03e9f4]">
          {<CountUp end={projects} duration={5} />}+
        </h2>
        <h4 className="text-xl text-gray-400 font-medium">Projects Complete</h4>
      </div>

      <div className="text-center space-y-2 transform transition duration-500 hover:scale-110">
        <img className="w-10 mx-auto" src={clients} alt="" />
        <h2 className="text-3xl font-bold text-[#03e9f4]">0</h2>
        <h4 className="text-xl text-gray-400 font-medium">Happy Clients</h4>
      </div>

      <div className="text-center space-y-2 transform transition duration-500 hover:scale-110">
        <img className="w-10 mx-auto" src={certificate} alt="" />
        <h2 className="text-3xl font-bold text-[#03e9f4]">
          {<CountUp end={achivement} duration={5} />}+
        </h2>
        <h4 className="text-xl text-gray-400 font-medium">Achievement</h4>
      </div>
    </motion.div>
  );
};

export default Achievement;
