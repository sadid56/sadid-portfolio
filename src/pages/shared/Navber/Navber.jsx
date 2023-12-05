import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

//style={{backdropFilter:'blur(50px)'}}
const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [sroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <nav
      style={
        sroll
          ? { backdropFilter: "blur(50px)" }
          : { backgroundColor: "transparent" }
      }
      className={` w-full fixed top-0 z-50  
      }`}>
      <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto  py-6 ">
        <h1 className="text-3xl  text-white italic">Sadid</h1>
        <ul
          className={`text-white flex uppercase text-sm  transition-all delay-1000 ${
            isToggle
              ? "flex-col absolute md:block top-20 right-0 bg-slate-900  md:bg-transparent p-16 rounded-l-sm shadow-2xl"
              : "hidden md:flex"
          } items-center gap-7`}>
          <li>
            <NavLink
              to="#"
              className="group transition duration-300">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f13b81]"></span>
            </NavLink>
          </li>
          <li>
          <NavLink
              to="#"
              className="group transition duration-300">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f13b81]"></span>
            </NavLink>
          </li>
          <li>
          <NavLink
              to="#"
              className="group transition duration-300">
              Skills
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f13b81]"></span>
            </NavLink>
          </li>
          <li>
          <NavLink
              to="#"
              className="group transition duration-300">
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f13b81]"></span>
            </NavLink>
          </li>
          <li>
          <NavLink
              to="#"
              className="group transition duration-300">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f13b81]"></span>
            </NavLink>
          </li>
        </ul>
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? <IoMdClose /> : <FiAlignJustify />}
        </button>
      </div>
    </nav>
  );
};

export default Navber;
