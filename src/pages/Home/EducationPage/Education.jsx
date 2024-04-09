import Lottie from "lottie-react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import educaitonAnimation from "../../../assets/lottie-animation/education.json";
import EducationTabs from "../../../Components/Education/EducationTaps";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../../hooks/useMotionAnimate";
import { useEffect } from "react";
const Education = () => {
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
        <section className="max-w-7xl mx-auto">
        <SectionTitle color={"Education"} />
        <div className="flex flex-col-reverse md:flex-row md:gap-10 items-center">
        <EducationTabs />
        <motion.div
           ref={ref}
           variants={zoomAnimate}
           initial="hidden"
           animate={control}
          className="md:w-1/2 mx-5">
          <Lottie animationData={educaitonAnimation} />
        </motion.div>
      </div>
        </section>
    );
};

export default Education;