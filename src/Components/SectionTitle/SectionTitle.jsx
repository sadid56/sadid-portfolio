/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./SectionTitle.css";
import { useInView } from "react-intersection-observer";
const SectionTitle = ({ color, text }) => {
  const [ref, inView] = useInView();
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="my-16 w-[200px] mx-auto relative">
      {/* <h2 className="text-4xl font-semibold text-center text-slate-400">
        <span className="text-color-change">{color}</span> {text}
      </h2>
      <h2 className="text-4xl font-semibold text-center text-slate-400 absolute -bottom-2 right-1 section-text">
        <span className="text-color-change">{color}</span> {text}
      </h2> */}
      <h2
        className={`${
          inView && "section-animation-text"
        } flex gap-2 text-color-change`}>
        <span>{color}</span> <span> {text}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
