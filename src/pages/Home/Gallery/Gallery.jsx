import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Gallery = () => {
    const { data: photos = [] } = useQuery({
        queryKey: ["photos"],
        queryFn: async () => {
            const res = await axios.get('/gallery.json');
            return res.data;
        }
    });

    return (
        <div className="">
            <SectionTitle color={"My Photo"} text={"Gallery"}/>
           <div>
           <Marquee className="">
                {photos?.map(photo => (
                    <div key={photo?.id} className=" z-50 mx-5 ">
                        <img
                            src={photo?.Image}
                            alt=""
                            className="w-60 h-72 object-cover  rounded-md"
                        />
                    </div>
                ))}
                
            </Marquee>
           </div>
        </div>
    );
};

export default Gallery;
