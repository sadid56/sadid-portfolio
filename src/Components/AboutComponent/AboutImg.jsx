/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../../assets/images/me-about.jpg";

const AboutImg = ({ control, ImgAnimate }) => {
  const [ref] = useInView();

  return (
    <motion.div
      ref={ref}
      variants={ImgAnimate}
      initial="hidden"
      animate={control}
      className="flex-1 relative"
    >
      <div className="about-img md:w-[400px] md:h-[500px]">
        <img src={aboutImg} className="rounded object-cover" alt="" />
      </div>
    </motion.div>
  );
};

export default AboutImg;
