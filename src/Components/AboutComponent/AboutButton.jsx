import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutModal from "../../pages/Home/About/AboutModal";

const AboutButton = ({ control, buttonAnimate }) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      variants={buttonAnimate}
      initial="hidden"
      animate={control}
      className="flex items-center gap-4"
    >
      <AboutModal />
    </motion.div>
  );
};

export default AboutButton;
