/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutImg from '../../../assets/images/me-about.jpg'
import rocketAnimatiom from '../../../assets/lottie-animation/about-rocket.json'
import aboutWelcomeAnimation from '../../../assets/lottie-animation/cute-welcome.json'

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto relative">
      <SectionTitle color={"About"} text={"Me"}/>
      <div className="space-y-5 mx-3">
          <h2 className="text-xl font-semibold text-color-change">
            Introduction
          </h2>
          <p className="cursive-font text-slate-400">
          Hello, I'm Sadid, a skilled MERN stack web developer. With a passion for creating seamless digital experiences, I specialize in crafting efficient and user-friendly applications. My expertise spans MongoDB, Express.js, React, and Node.js, allowing me to deliver end-to-end solutions. I thrive on challenges, continuously learn, and am committed to turning your ideas into powerful online realities. Let's collaborate and build something extraordinary.
          </p>
         
        </div>
      <div className="">
      <div className="flex gap-5 flex-col md:flex-row items-center mt-10">
      <div className="flex-1 relative">
          <img src={aboutImg} className="w-[300px] border-[#e00549] border-r-2 border-b-2" alt="" />
          <div className="w-[100px] -bottom-3 left-52 absolute">
        <Lottie animationData={aboutWelcomeAnimation}/>
      </div>
        </div>
      <div className="flex-1 space-y-5">
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Name</span>: Sadid Hasan
          </h3>
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Age</span>: 20
          </h3>
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Education</span>: HSC (Science)
          </h3>
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Language</span>: Bangla, Hindi,
            English
          </h3>
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Role</span>: React Developer
          </h3>
          <h3 className="text-slate-400 text-xl font-medium">
            <span className="text-[#e00549]">Habbit</span>: Gaming, Music,
          </h3>
          <a
            href="#_"
            className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#e00549] text-xl transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-[#e00549] group">
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
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
                className="w-5 h-5 text-green-400"
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
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-slate-400">
              Download CV
            </span>
          </a>
        </div>

        
        
      </div>
      <div className="w-[200px] md:w-[300px] absolute -right-10 md:-right-36 top-16 md:top-[400px] hidden lg:flex">
        <Lottie animationData={rocketAnimatiom}/>
      </div>
      
      </div>
        
    </section>
  );
};

export default About;
