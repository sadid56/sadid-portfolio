/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import helloAnimation from "../../../assets/lottie-animation/hello.json";
import "./banner.css";
import { useEffect } from "react";
import Icon from "../../../Components/Icons/Icon";
import { useAnimation, motion} from "framer-motion";
import useMotionAnimate from "../../../hooks/useMotionAnimate";
import { useInView } from "react-intersection-observer";
const Banner = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [zoomAnimate, upAnimate, LeftAnimate] = useMotionAnimate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <header ref={ref} className=" relative bg-grad py-5 px-5 pt-5 md:pt-0">
      <div className="flex flex-col-reverse lg:flex-row h-screen pt-10 items-center gap-10 max-w-7xl mx-auto">
        <div className="text-white flex-1  lg:w-1/2 space-y-3">
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <motion.h2 className="relative"  variants={LeftAnimate}
          initial="hidden"
          animate={control}>
              There,
            </motion.h2>
          </div>
          <motion.h1  variants={upAnimate}
          initial="hidden"
          animate={control}
            className="text-4xl font-bold">
            I'am <span className="text-[#03e9f4]">Sadid</span>,
          </motion.h1>
          <motion.h1
           variants={LeftAnimate}
           initial="hidden"
           animate={control}
            className=" text-3xl md:text-5xl font-bold text-white text-color-change">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN stack Developer.",
                "Frontend Developer.",
                "React Developer.",
                "Web Designer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="white"
              typeSpeed={200}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.h1>
          <motion.h1
           variants={zoomAnimate}
           initial="hidden"
           animate={control}
            className=" text-slate-400 font-normal cursive-font md:w-[90%]">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                `Hi, i'am Sadid, MERN stack developer skilled in React/Next.js, Node.js, Express.js, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`,
              ]}
              cursor
              cursorColor="white"
              typeSpeed={10}
              cursorStyle="."
            />
          </motion.h1>
          <motion.div
            variants={zoomAnimate}
            initial="hidden"
            animate={control}
            className="py-9 relative w-full ">
            <a
              href={
                "https://drive.google.com/file/d/19jeOu6aglOiyjIJkZbXcAshLzXxIx8EA/view?usp=drive_link"
              }
              target="_blank"
              download
              className="button absolute left-[65px]">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="button2 absolute left-[220px] cursor-pointer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Hire me
            </ScrollLink>
          </motion.div>
         <motion.div  variants={upAnimate}
          initial="hidden"
          animate={control}>
         <div className="flex items-center gap-2 relative mb-2">
            <h3
              style={{ letterSpacing: "3px" }}
              className=" uppercase text-sm text-slate-300  z-10">
              Find with me
            </h3>
            <div className="find-border"></div>
          </div>
          <div className="flex items-center gap-5">
            <Icon
              url={"https://github.com/sadid56"}
              icon={<FaGithub />}
              style={"icon-bounc"}
            />
            <Icon
              url={"https://www.facebook.com/sadidhasan.hasan.5"}
              icon={<FaFacebookF />}
              style={"icon-bounc2"}
            />
            <Icon
              url={"https://www.linkedin.com/in/sadid-hasan-1a04a62b7/"}
              icon={<FaLinkedinIn />}
              style={"icon-bounc"}
            />
            <Icon
              url={"https://www.discordapp.com/users/1151169623149002752/"}
              icon={<FaDiscord />}
              style={"icon-bounc2"}
            />
          </div>
         </motion.div>
        </div>
        <motion.div
          variants={zoomAnimate}
          initial="hidden"
          animate={control}
          className=" md:w-[530px]">
          <Lottie animationData={codingAnimatoin} loop={true} />
        </motion.div>
      </div>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="container_mouse hidden lg:block">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
      </ScrollLink>
    </header>
  );
};

export default Banner;
