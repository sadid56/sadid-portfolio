/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import helloAnimation from "../../../assets/lottie-animation/hello.json";
import "./banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Icon from "../../../Components/Icons/Icon";
import Swal from "sweetalert2";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      // offset: 200,
    });
  }, []);
  const handleBlog = () => {
    let timerInterval;
    Swal.fire({
      title: "Opps!",
      icon: "info",
      html: "My blog is coming soon! #StayTuned <br/> <span>Close in <b></b></span>",
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  return (
    <header className=" relative bg-grad px-5 md:px-0">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen pt-10 items-center gap-2 md:gap-10 max-w-7xl mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-white flex-1 space-y-3  md:space-y-5"
        >
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <h2>There,</h2>
          </div>
          <h1 className="text-4xl font-bold">
            I'am <span className="text-[#03e9f4]">Sadid</span>,
          </h1>
          <h1 className=" text-3xl md:text-5xl font-bold text-white text-color-change">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN stack Developer.",
                "Frontend Developer.",
                "React Developer.",
                "Web Designer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="white"
              typeSpeed={200}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h1>
          <h1 className=" text-slate-400 font-normal cursive-font md:w-[90%]">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                `Hi, i'am Sadid, MERN stack developer skilled in React/Next.js, Node.js, Express.js, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`,
              ]}
              cursor
              cursorColor="white"
              typeSpeed={10}
              cursorStyle="."
            />
          </h1>
          <div className="py-7 md:py-10 w-full relative">
            <a
              href={
                "https://drive.google.com/file/d/19jeOu6aglOiyjIJkZbXcAshLzXxIx8EA/view?usp=drive_link"
              }
              target="_blank"
              download
              className="button absolute px-4 py-2 md:px-6 md:py-3"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
            <button
              onClick={handleBlog}
              className="button2 absolute left-[130px] md:left-[150px] px-4 py-[7px] md:px-6 md:py-[11px] cursor-pointer"
            >
              My Blog
            </button>
          </div>
          <div className="flex items-center gap-2 relative">
            <h3
              style={{ letterSpacing: "3px" }}
              className=" uppercase text-sm text-slate-300  z-10"
            >
              Find with me
            </h3>
            <div className="find-border"></div>
          </div>
          <div className="flex items-center gap-5">
            <Icon url={"https://github.com/sadid56"} icon={<FaGithub />} />
            <Icon
              url={"https://www.facebook.com/sadidhasan.hasan.5"}
              icon={<FaFacebookF />}
            />
            <Icon
              url={"https://www.linkedin.com/in/sadid-hasan-1a04a62b7/"}
              icon={<FaLinkedinIn />}
            />
            <Icon
              url={"https://www.discordapp.com/users/1151169623149002752/"}
              icon={<FaDiscord />}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full flex-1"
        >
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="container_mouse hidden lg:block"
      >
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
      </ScrollLink>
    </header>
  );
};

export default Banner;
