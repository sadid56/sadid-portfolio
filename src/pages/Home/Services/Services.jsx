import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './services.css'
import { Tilt } from "react-tilt";

const Services = () => {
    const {data: services =[]} = useQuery({
        queryKey:['services'],
        queryFn: async()=>{
            const res = await axios.get('/services.json');
            return res.data
        }
    })
    // console.log(services);
    return (
        <section className="max-w-6xl mx-auto">
            <SectionTitle color={"My"} text={"Services"} />
            <div className="grid md:grid-cols-2 gap-6 mx-3">
                {
                    services.map(service => <Tilt key={service.id} >
                        <div className="text-center w-ful space-y-4 card-grad p-3 md:p-7 rounded-md border-slate-900 border-2 h-full">
                        <img src={service?.icon} className="w-14 mx-auto" alt="" />
                        <h2 className="text-3xl font-bold text-[#37c5cd]">{service?.service_name}</h2>
                        <p className=" font-medium text-slate-400">{service?.description}</p>
                    </div>
                    </Tilt>)
                }
            </div>
        </section>
    );
};

export default Services;