/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import helloAnimation from "../../../assets/lottie-animation/hello.json";
import "./banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Icon from "../../../Components/Icons/Icon";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      // offset: 200,
    });
  }, []);
  return (
    <header className=" relative bg-grad py-5 px-5 pt-5 md:pt-0">
      <div className="flex flex-col-reverse md:flex-row h-screen pt-10 items-center gap-10 max-w-7xl mx-auto">
        
        <div className="text-white flex-1  md:w-1/2 space-y-3">
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <h2 data-aos="fade-right" data-aos-duration="2000">There,</h2>
          </div>
          <h1 data-aos="fade-right" data-aos-duration="2000" className="text-4xl font-bold">
            I'am <span className="text-[#03e9f4]">Sadid</span>,
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
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
          </h1>
          <h1
          
            data-aos="fade-down"
            data-aos-duration="2000"
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
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
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
          </div>
          <div className="flex items-center gap-2 relative">
            <h3
              style={{ letterSpacing: "3px" }}
              className=" uppercase text-sm text-slate-300  z-10">
              Find with me
            </h3>
            <div className="find-border"></div>
          </div>
          <div  className="flex items-center gap-5">
            <Icon url={"https://github.com/sadid56"} icon={<FaGithub/>} style={"icon-bounc"}/>
            <Icon url={"https://www.facebook.com/sadidhasan.hasan.5"} icon={<FaFacebookF/>} style={"icon-bounc2"}/>
            <Icon url={"https://www.linkedin.com/in/sadid-hasan-1a04a62b7/"} icon={<FaLinkedinIn/>} style={"icon-bounc"}/>
            <Icon url={"https://www.discordapp.com/users/1151169623149002752/"} icon={<FaDiscord/>} style={"icon-bounc2"}/>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" md:w-[530px]">
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
    </header>
  );
};

export default Banner;
