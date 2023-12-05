/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub   } from "react-icons/fa";
import { Link } from "react-router-dom";
import helloAnimation from '../../../assets/lottie-animation/hello.json'
import './banner.css'
const Banner = () => {
    
  return ( 
    <div className="w-full bg-grad py-5 px-5 pt-24 md:pt-0">
      <div className="flex flex-col-reverse md:flex-row h-screen pt-10 items-center gap-10 max-w-6xl mx-auto">
        <div className="text-white flex-1 md:w-1/2 space-y-3">
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
            <Lottie animationData={helloAnimation}/>
            </div>
            <h2>There</h2>
            </div>
          <h1 className="text-4xl font-bold">
            I'am <span className="text-[#f13b81]">Sadid</span>,
          </h1>
          <h1 className=" text-3xl md:text-5xl font-bold text-white text-color-change">
            
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["MERN stack Developer", "React Developer", "Web Designer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={200}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            
          </h1>
          <h1  className=" text-slate-300">
            
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[`Hi, i'am Sadid, Experienced MERN stack developer skilled in React.js, Node.js/Express, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`]}
                cursor
                cursorColor="white"
                typeSpeed={10}
                cursorStyle="."

              />
            
          </h1>
          <div className="flex items-center gap-2">
          <h3 className=" uppercase text-sm">Find with me</h3>
          <div className="border border-[#f13b81] w-16"></div>
          </div>
          <div className="flex items-center gap-4">
          <Link to='https://www.facebook.com/sadidhasan.hasan.5' target="_blank"  style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaFacebookF/></Link>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaLinkedinIn /></button>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaInstagram /></button>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaGithub /></button>
          </div>
        </div>
        <div className=" md:w-[450px]">
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
