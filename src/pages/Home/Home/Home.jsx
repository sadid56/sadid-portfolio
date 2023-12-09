// Home.js
import { Element } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Navber from "../../shared/Navber/Navber";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skils from "../skils/Skils";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ParticlesAnimation from "../ParticlessJs/Particless";
import Lottie from "lottie-react";
import earthAnimation from "../../../assets/lottie-animation/earth.json";
import { useState } from "react";
import { useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
// import logo from '../../../assets/images/my-logo-removebg-preview.png';

const Home = () => {
  const [sroll, setScroll] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Element name="/" className="element">
        <Navber />
      </Element>
      <ParticlesAnimation />
      <Banner />
      <div className="w-[100px] right-4 md:left-24 absolute bg-fixed ">
        <Lottie animationData={earthAnimation} />
      </div>
      <div className={`${sroll ? "fixed" : "hidden"} top-[85%] right-5`}>
        <button
          style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
          className="btn hidden md:flex btn-circle text-xl border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white"
          onClick={scrollToTop}>
          <FaLongArrowAltUp />
        </button>
      </div>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="skills" className="element">
        <Skils />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
