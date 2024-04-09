// Home.js
import { Element } from "react-scroll";
import Navber from "../../shared/Navber/Navber";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skils from "../skils/Skils";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { FaLongArrowAltUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import ParticlesAnimation from "../ParticlessJs/Particless";
import { useEffect, useState } from "react";
import "./Home.css";
import FooterNav from "../../shared/FooterNav/FooterNav";
import Achievement from "../Achivment/Achivment";
import Education from "../EducationPage/Education";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setScrollToTopVisible(true);
    } else {
      setScrollToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>Sadid Portfolio - Home</title>
    </Helmet>
      <ParticlesAnimation />
      <Navber />
      <Element name="home" className="element">
        <Navber />
      </Element>
      <Banner />
      <div
        className={`${
          scrollToTopVisible ? "fixed" : "hidden"
        } top-[85%] right-5 z-50`}>
        <button
          style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
          className="btn btn-sm md:btn-md btn-circle animate-bounce text-xl border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white "
          onClick={scrollToTop}>
          <FaLongArrowAltUp />
        </button>
      </div>
      <Element name="about" className="element">
        <About />
      </Element>
      <div className="relative ">
        <Achievement />
      </div>
      <Education />
      <Element name="skills" className="element">
        <Skils />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="services" className="element">
        <Services />
      </Element>
      {/* <Element name="gallery" className="element">
            <Gallery />
          </Element> */}
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
      <FooterNav />
    </>
  );
};

export default Home;
