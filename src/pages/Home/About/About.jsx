/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./about.css";
import educaitonAnimation from "../../../assets/lottie-animation/education.json";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutImg from "../../../assets/images/me-about.jpg";
import AboutModal from "./AboutModal";
import Experience from "./Experience";
import Lottie from "lottie-react";
import EducationTabs from "./EducationTabs";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto relative ">
      <SectionTitle color={"About"} text={"Me"} />
      <div className="flex md:px-20  py-4 md:py-7 gap-5 flex-col md:flex-row items-center mt-10 abot-bg-grad bg-opacity-60  mx-3">
        <div className="flex-1 relative ">
          <div  data-aos="fade-right"
            data-aos-duration="1000" className="about-img md:w-[400px] md:h-[500px]">
            <img src={aboutImg} className="rounded object-cover" alt="" />
          </div>
        </div>
        <div className=" flex-1 space-y-8 mx-3">
          <h2
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-xl font-semibold border-b-2 w-fit text-[#41c0c7] uppercase">
            Introduction:
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-400">
            Hello, I'm Sadid, a skilled MERN stack web developer. With a passion
            for creating seamless digital experiences, I specialize in crafting
            efficient and user-friendly applications. My expertise spans
            MongoDB, Express.js, React, and Node.js, allowing me to deliver
            end-to-end solutions. I thrive on challenges, continuously learn,
            and am committed to turning your ideas into powerful online
            realities. Let's collaborate and build something extraordinary.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center gap-4">
            <AboutModal />
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="">
        <Experience />
      </div>
      <SectionTitle color={"Education"} />

      <div className="flex flex-col-reverse md:flex-row md:gap-10 items-center">
        <EducationTabs />
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="md:w-1/2 mx-5">
          <Lottie animationData={educaitonAnimation} />
        </div>
      </div>
    </section>
  );
};

export default About;
