import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <footer
      data-aos="fade-down"
      data-aos-duration="2000"
      className="py-5 mt-10 bg-black relative">
      <h4 className="text-center text-slate-300 font-medium">
        Copyright © 2023 - All right reserved by Sadid Hasan.
      </h4>
    </footer>
  );
};

export default Footer;
