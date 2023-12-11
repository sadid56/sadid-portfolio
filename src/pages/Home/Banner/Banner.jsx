/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import helloAnimation from "../../../assets/lottie-animation/hello.json";
import "./banner.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import resume from '../../../assets/images/resume.png'
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500, 
      // offset: 200,
    });
  }, []);
  return (
    <div className="w-full bg-grad py-5 px-5 pt-24 md:pt-0">
      <div className="flex flex-col-reverse md:flex-row h-screen pt-10 items-center gap-10 max-w-6xl mx-auto">
        <div className="text-white flex-1 md:w-1/2 space-y-3">
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <h2>There</h2>
          </div>
          <h1 className="text-4xl font-bold">
            I'am <span className="text-[#03e9f4]">Sadid</span>,
          </h1>
          <h1 className=" text-3xl md:text-5xl font-bold text-white text-color-change">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN stack Developer",
                "React Developer",
                "Web Designer",
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
          <h1 className=" text-slate-400">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                `Hi, i'am Sadid, Experienced MERN stack developer skilled in React.js, Node.js/Express, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`,
              ]}
              cursor
              cursorColor="white"
              typeSpeed={10}
              cursorStyle="."
            />
          </h1>
         <div className="">
         <a href={resume} download target="_blank" className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group">
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#03e9f4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#03e9f4]">
                Download Resume
              </span>
            </a>
           
         </div>
          <div className="flex items-center gap-2">
            <h3 style={{letterSpacing:'3px'}} className=" uppercase text-sm text-slate-400">Find with me</h3>
            <div className="border border-[#03e9f4] w-14"></div>
          </div>
          <div className="flex items-center gap-5">
          <Link
             to="https://github.com/sadid56"
             target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white">
              <FaGithub />
            </Link>
            <Link
              to="https://www.facebook.com/sadidhasan.hasan.5"
              target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white">
              <FaFacebookF />
            </Link>
            <Link
            to="https://www.linkedin.com/in/sadid-hasan-5b35a62a0/"
            target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white">
              <FaLinkedinIn />
            </Link>
            <Link
            to="https://www.instagram.com/sadidhasan56/"
            target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white">
              <FaInstagram />
            </Link>
            
          </div>
        </div>
        <div  className=" md:w-[450px]">
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
