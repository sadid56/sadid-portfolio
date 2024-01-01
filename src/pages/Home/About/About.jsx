/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutImg from "../../../assets/images/me-about.jpg";
import AboutModal from "./AboutModal";
import Education from "./Education";
import Experience from "./Experience";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, 
      // offset: 200,
    });
  }, []);
  
  return (
  
    <section  className="max-w-6xl mx-auto relative overflow-x-hidden">
      <SectionTitle color={"About"} text={"Me"} />
        <div className="flex md:px-20 py-5 gap-5 flex-col md:flex-row items-center mt-10 bg-slate-900 rounded-md bg-opacity-60 mx-3">
          <div className="flex-1 relative ">
            <img
            data-aos="fade-right"
              src={aboutImg}
              className="md:w-[400px] border-[#32a7ae] border-r-[2px] p-2 border-b-[2px]"
              alt=""
            />
          </div>
          <div data-aos="fade-left" className=" flex-1 space-y-8 mx-3">
        <h2 className="text-2xl font-semibold border-b-2 w-fit text-[#41c0c7]">
          Introduction:
        </h2>
        <p className=" text-slate-400">
          Hello, I'm Sadid, a skilled MERN stack web developer. With a passion
          for creating seamless digital experiences, I specialize in crafting
          efficient and user-friendly applications. My expertise spans MongoDB,
          Express.js, React, and Node.js, allowing me to deliver end-to-end
          solutions. I thrive on challenges, continuously learn, and am
          committed to turning your ideas into powerful online realities. Let's
          collaborate and build something extraordinary.
        </p>
      <div className="flex items-center gap-4">
        <Education/>
      <AboutModal/>
      </div>
      </div>
        </div>
       
        <div  data-aos="zoom-in" data-aos-duration="1000">
        <Experience/>
        </div>

    </section>
  );
};

export default About;
