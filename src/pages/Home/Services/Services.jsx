import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./services.css";
import { Tilt } from "react-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services.json");
      return res.data;
    },
  });
  // console.log(services);
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle color={"My"} text={"Services"} />
      <div className="mx-5">    
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
 {
  services.map(service=>  
  <li key={service.id}>
  <div  className="timeline-middle">
  <RiVerifiedBadgeFill className="text-xl text-[#37c5cd]"/>
  </div>
  <div  data-aos="fade-up"  data-aos-duration="2000" className={`${service.style === "start" ?  "timeline-start text-start md:text-end" : "timeline-end text-start"} mb-10 shadow-md p-5 space-y-3 text-center w-ful card-grad md:p-7 rounded-md border-slate-900 border-2`}>
  <Tilt  options={{ scale: 1, max: 25, speed: 1500, perspective: 2000 }}>
  <div  className={`flex ${service.style === "start" ? "justify-start md:justify-end" : "justify-start"}`}>
  <img src={service?.icon} className="w-10" alt="" />
  </div>
    <h2 className="text-3xl font-bold text-[#37c5cd] my-3">{service.service_name}</h2>
   <p className=" font-normal text-slate-400">{service.description}</p>
  </Tilt>
  </div>
  <hr/>
</li>
)
 }
 
</ul>
        </div>
    
    </section>
  );
};

export default Services;
