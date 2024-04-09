/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../../pages/Home/About/about.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../hooks/useMotionAnimate";

const EducationTabContent = ({ educations }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [zoomAnimate] = useMotionAnimate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="mx-4 md:mx-1 mb-1 mt-5 md:mt-10">
      {educations.map((education) => (
        <div key={education.id} className="education-card h-fit md:h-[300px]">
          <motion.div
            ref={ref}
            variants={zoomAnimate}
            initial="hidden"
            animate={control}
            className="circle right-0 -top-5 md:-top-5 md:-left-5"></motion.div>
          <div className="circle bottom-8 left-5 md:left-auto md:-bottom-5 md:-right-5"></div>
          {/* conent */}
          <motion.div
            ref={ref}
            variants={zoomAnimate}
            initial="hidden"
            animate={control}
            className="education-card-inner p-5">
            <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-medium text-[#37ccd4]">
                  {education?.intitude_name}
                </h2>
                <h2 className="text-[18px] font-medium text-slate-300">
                  {education?.education_name}
                </h2>
              </div>
              <div>
                <h2 className="bg-[#103551] text-slate-400 px-2 py-1 w-fit rounded mb-2 font-medium">
                  {education?.result}
                </h2>
                <h2 className="font-medium text-slate-400">
                  {education?.year}
                </h2>
              </div>
            </div>
            <p className="text-gray-400 mt-5">{education.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default EducationTabContent;
