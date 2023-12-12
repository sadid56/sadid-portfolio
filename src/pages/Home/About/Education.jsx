import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
const Education = () => {
  const { data: educations = [] } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const res = await axios.get("/education.json");
      return res.data;
    },
  });
  return (
    <div>
      <button
        onClick={() => document.getElementById("education").showModal()}
        className="relative text-sm md:text-md uppercase inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group">
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-[#03e9f4]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#03e9f4]">
          Education Info
        </span>
      </button>
      <dialog id="education" className="modal">
        <div className="modal-box w-11/12 max-w-6xl pt-14 bg-[#09152d] shadow-2xl">
          <form method="dialog">
            <button
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn text-xl btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#03e9f4] hover:text-white text-[#03e9f4] hover:border-white absolute right-2 top-2">
              <IoMdClose />
            </button>
          </form>
          <div className="grid md:grid-cols-2 gap-5">
            {educations.map((education) => (
              <div  style={{ boxShadow: "0px 0px 5px  #03e9f4" }} key={education.id} className=" rounded-md p-6 space-y-4 h-full ">
                <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-medium text-[#37ccd4]">{education?.intitude_name}</h2>
                    <h2 className="text-[18px] font-medium">{education?.education_name}</h2>
                  </div>
                  <div>
                    <h2 className="bg-[#103551] px-2 py-1 w-fit rounded mb-2 font-medium">{education?.result}</h2>
                    <h2 className="font-medium">{education?.year}</h2>
                  </div>
                </div>
                <p className="text-gray-400">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Education;
