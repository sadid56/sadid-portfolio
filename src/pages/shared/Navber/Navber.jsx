import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/images/my-logo-removebg-preview.png";
import { Link as ScrollLink } from "react-scroll";
import "./navber.css";

const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="nav"
        style={
          scroll
            ? { backdropFilter: "blur(50px)" }
            : { backgroundColor: "transparent" }
        }
        className={`w-full fixed top-0 z-40 ${
          scroll ? "py-6" : "py-4"
        } transition-all duration-500 px-3`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="w-[120px]">
            <img src={logo} alt="" />
          </div>
          <ul
            className={`text-white flex uppercase text-sm cursor-pointer transition-all duration-500 ${
              isToggle
                ? "flex-col absolute md:block top-0 left-0 min-h-screen bg-slate-900 md:bg-transparent w-[70%] pt-14 rounded-l-sm shadow-2xl "
                : "hidden md:flex"
            } items-center gap-7`}
          >
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className={`group transition duration-300 ${
                  !scroll ? "homeActive" : undefined
                }`}
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="skills"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Skills
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="projects"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="services"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                services
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setIsToggle(false)}
                to="contact"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
          </ul>
          <button
            className="md:hidden text-3xl transition-all duration-500 z-50"
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? <IoMdClose /> : <FiAlignJustify />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navber;
