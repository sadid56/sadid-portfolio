import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./services.css";
import { Tilt } from "react-tilt";
import { useEffect } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../../hooks/useMotionAnimate";

const Services = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [zoomAnimate, upAnimate] = useMotionAnimate();
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services.json");
      return res.data;
    },
  });
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section  ref={ref} className="max-w-7xl mx-auto">
      <SectionTitle color={"My"} text={"Services"} />
      <div className="mx-5">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {services.map((service) => (
            <li 
            key={service.id}>
              <div className="timeline-middle">
                <RiVerifiedBadgeFill className="text-xl text-[#37c5cd]" />
              </div>
              <motion.div 
         variants={zoomAnimate}
         initial="hidden"
         animate={control} 
                className={`${
                  service.style === "start"
                    ? "timeline-start text-start md:text-end"
                    : "timeline-end text-start"
                } mb-10 shadow-md p-5 space-y-3 text-center w-ful card-grad md:p-7 rounded-md border-slate-900 border-2`}>
                <Tilt
                  options={{
                    scale: 1,
                    max: 25,
                    speed: 1500,
                    perspective: 2000,
                  }}>
                  <div
                    className={`flex ${
                      service.style === "start"
                        ? "justify-start md:justify-end"
                        : "justify-start"
                    }`}>
                    <img src={service?.icon} className="w-10" alt="" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#37c5cd] my-3">
                    {service.service_name}
                  </h2>
                  <p className=" font-normal text-slate-400">
                    {service.description}
                  </p>
                </Tilt>
              </motion.div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
