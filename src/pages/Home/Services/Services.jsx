
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Services = () => {


  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services.json");
      return res.data;
    },
  });


  return (
    <section className="max-w-7xl mx-auto relative overflow-hidden">
      <SectionTitle color={"My"} text={"Services"} />
      <div className="flex space-x-5 scroll-container h-screen items-center">
        {services.map((service, index) => (
          <div key={service.id} className="snap-item">
            <div className="mb-10 shadow-md p-5 space-y-3 text-center w-full card-grad md:p-7 rounded-md border-slate-900 border-2 h-[400px]" >
              <div className="flex justify-center">
                <img src={service?.icon} className="w-10" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-[#37c5cd] my-3">
                {service.service_name}
              </h2>
              <p className="font-normal text-slate-400">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Other content */}
      <div className="other-elements">
        <p>Other content on the page</p>
      </div>
    </section>
  );
};

export default Services;


