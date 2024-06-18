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
      className="my-16 relative">
      <h2
        className={`${
          inView && "section-animation-text"
        } flex gap-2 text-color-change`}>
        <span>{color}</span> <span className="text-slate-300"> {text}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
