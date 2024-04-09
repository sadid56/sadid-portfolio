/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutDesciption = ({ control, DescAnimate }) => {
  const [ref] = useInView();

  return (
    <motion.div
      ref={ref}
      variants={DescAnimate}
      initial="hidden"
      animate={control}
      className="flex-1 space-y-8 mx-3"
    >
      <h2 className="text-xl font-semibold border-b-2 w-fit text-[#41c0c7] uppercase">
        Introduction:
      </h2>
      <p className="text-gray-400">
        Hello, I'm Sadid, a skilled MERN stack web developer. With a passion
        for creating seamless digital experiences, I specialize in crafting
        efficient and user-friendly applications. My expertise spans
        MongoDB, Express.js, React, and Node.js, allowing me to deliver
        end-to-end solutions. I thrive on challenges, continuously learn,
        and am committed to turning your ideas into powerful online
        realities. Let's collaborate and build something extraordinary.
      </p>
    </motion.div>
  );
};

export default AboutDesciption;
