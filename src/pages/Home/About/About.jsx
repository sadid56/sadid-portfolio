/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./about.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutImg from "../../../assets/images/me-about.jpg";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import useMotionAnimate from "../../../hooks/useMotionAnimate";
import { useNavigate } from "react-router-dom";
const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [zoomAnimate, upAnimate] = useMotionAnimate();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="max-w-7xl mx-auto relative ">
      <SectionTitle color={"About"} text={"Me"} />
      <div className="flex md:px-20  py-4 md:py-7 gap-5 flex-col lg:flex-row items-center mt-10 abot-bg-grad bg-opacity-60  mx-3">
        <motion.div
          ref={ref}
          variants={zoomAnimate}
          initial="hidden"
          animate={control}
          className="flex-1 relative ">
          <div className="about-img md:w-[400px] md:h-[500px]">
            <img src={aboutImg} className="rounded object-cover" alt="" />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={zoomAnimate}
          initial="hidden"
          animate={control}
          className=" flex-1 space-y-8 mx-3">
          <h2 className="text-xl font-semibold border-b-2 w-fit text-[#41c0c7] uppercase">
            Introduction:
          </h2>
          <p className="text-gray-400">
            Hello, I'm Sadid, a skilled MERN stack web developer. With a passion
            for creating seamless digital experiences, I specialize in crafting
            efficient and user-friendly applications. My expertise spans
            MongoDB, Express.js, React, and Node.js, allowing me to deliver
            end-to-end solutions. I thrive on challenges, continuously learn,
            and am committed to turning your ideas into powerful online
            realities. Let's collaborate and build something extraordinary.
          </p>
          <motion.button
            onClick={() => navigate("/about")}
            ref={ref}
            variants={upAnimate}
            initial="hidden"
            animate={control}
            className="flex items-center gap-4 about-btn">
            {/* <AboutModal /> */}More About
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
