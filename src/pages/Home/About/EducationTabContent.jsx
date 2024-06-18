/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./about.css";

const EducationTabContent = ({ educations }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div className="mx-4 md:mx-1 mb-1 mt-5 md:mt-10">
      {educations.map((education) => (
        <div key={education.id} className="education-card h-fit md:h-[300px]">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="circle right-0 -top-5 md:-top-5 md:-left-5"></div>
          <div className="circle bottom-8 left-5 md:left-auto md:-bottom-5 md:-right-5"></div>
          {/* conent */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="education-card-inner p-5">
            <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-medium text-[#37ccd4] font-Georgian">
                  {education?.institution_name}
                </h2>
                <h2 className="text-[18px] font-medium text-slate-300 font-Georgian">
                  {education?.education_name}
                </h2>
              </div>
              <div>
                <h2 className="bg-[#103551] text-slate-400 px-2 py-1 w-fit rounded mb-2 font-medium font-Georgian">
                  {education?.result}
                </h2>
                <h2 className="font-medium text-slate-400 font-Georgian">{education?.year}</h2>
              </div>
            </div>
            <p className="text-gray-400 mt-5 font-italic leading-7">{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTabContent;
