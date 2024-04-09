/* eslint-disable react/prop-types */
import { useAnimation, motion } from "framer-motion";
import "./SectionTitle.css";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../hooks/useMotionAnimate";
import { useEffect } from "react";
const SectionTitle = ({ color, text }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [upAnimate] = useMotionAnimate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={upAnimate}
      initial="hidden"
      animate={control}
      className="my-16 relative">
      <h2
        className={`${
          inView && "section-animation-text"
        } flex gap-2 text-color-change`}>
        <span>{color}</span> <span className="text-white"> {text}</span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
