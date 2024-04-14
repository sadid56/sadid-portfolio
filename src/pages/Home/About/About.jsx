/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./about.css";
import educaitonAnimation from "../../../assets/lottie-animation/education.json";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutImg from "../../../assets/images/me-about.jpg";
import Experience from "./Experience";
import Lottie from "lottie-react";
import EducationTabs from "./EducationTabs";
import { IoMdArrowBack } from "react-icons/io";
const About = () => {
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto relative ">
      <SectionTitle color={"About"} text={"Me"} />
      <div className="flex md:px-20  py-4 md:py-7 gap-5 flex-col lg:flex-row items-center mt-10 abot-bg-grad bg-opacity-60  mx-3">
        <div className="flex-1 relative ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="about-img md:w-[400px] md:h-[500px]">
            <img src={aboutImg} className="rounded object-cover" alt="" />
          </div>
        </div>
        <div className=" flex-1 space-y-8 mx-3">
          <div className="card-container">
            <div className={`card ${isToggle ? "back-card" : ""}`}>
              <div className="front-content pr-5">
                <div className="space-y-10">
                  <h2 data-aos="fade-left"
            data-aos-duration="1500" className="text-xl font-semibold border-b-2 w-fit text-[#41c0c7] uppercase">
                    Introduction:
                  </h2>
                  <p data-aos="fade-down"
            data-aos-duration="1000" className="text-gray-400">
                    Hello, I'm Sadid, a skilled MERN stack web developer. With a
                    passion for creating seamless digital experiences, I
                    specialize in crafting efficient and user-friendly
                    applications. My expertise spans MongoDB, Express.js, React,
                    and Node.js, allowing me to deliver end-to-end solutions. I
                    thrive on challenges, continuously learn, and am committed
                    to turning your ideas into powerful online realities. Let's
                    collaborate and build something extraordinary.
                  </p>
                  <button data-aos="fade-up"
            data-aos-duration="1500"
                    onClick={() => setIsToggle(true)}
                    className="more-btn z-10 hover:text-black ">
                    <p className="z-20 text-slate-300 font-semibold hover:text-black transition-all duration-300">
                      Why you hire me?
                    </p>
                  </button>
                </div>
              </div>
              <div className="content space-y-3 md:space-y-10">
                <h2 className="text-xl font-semibold border-b-2 w-fit text-[#41c0c7] uppercase">
                  Why you hire me?
                </h2>
                <p className="mt-5 text-slate-300">
                  I am a MERN, Frontend or React.js developer and I have
                  React/Next.js, JavaScript, Tailwindcss, Node.js, express.js,
                  MongoDB etc skills, I have been working on these skills for a
                  long time. A few days ago I work a team project and I work
                  this project 2 months so I think I got used to working with a
                  team and team collaborattion. 
                </p>
                <p className="mt-5 text-slate-300">
                So if you give me an opportunity to work with your team based
                  on my skills then I can create any user-friendly smooth web
                  applications.
                </p>
                <button
                  onClick={() => setIsToggle(false)}
                  className="cursor-pointer back-btn flex items-center gap-2 mt-2 ">
                  <IoMdArrowBack className="text-xl" /> back
                </button>
              </div>
            </div>
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
