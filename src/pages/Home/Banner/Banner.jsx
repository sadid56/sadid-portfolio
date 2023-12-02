/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub   } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
    
  return (
    <div className="w-full bg-[#010610]">
      <div className="flex h-screen items-center gap-10 max-w-6xl mx-auto">
        <div className="text-white flex-1 w-1/2 space-y-3">
          <h1 className=" font-semibold uppercase">Hello There</h1>
          <h1 className="text-4xl font-bold">
            I am <span className="text-[#e00549]">Sadid</span>
          </h1>
          <h1 className="text-5xl font-bold text-white text-color-change">
            
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["MERN stack Web Developer", "React Developer", "Web Designer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={100}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            
          </h1>
          <h1 className=" text-white ">
            
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[`Hi, i'am Sadid, Experienced MERN stack developer skilled in React.js, Node.js/Express, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`]}
                cursor
                cursorColor="white"
                typeSpeed={10}
                cursorStyle="."

              />
            
          </h1>
          <h3 className=" uppercase ">Find with me</h3>
          <div className="flex items-center gap-4">
          <Link to='https://www.facebook.com/sadidhasan.hasan.5' target="_blank"  style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaFacebookF/></Link>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaLinkedinIn /></button>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaInstagram /></button>
          <button style={{boxShadow: '0px 0px 10px 2px #f13b81'}} className="btn btn-circle btn-sm border bg-transparent border-[#f13b81] hover:bg-[#f13b81] hover:text-white text-[#f13b81] hover:border-white"><FaGithub /></button>
          </div>
        </div>
        <div className="w-[450px]">
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
