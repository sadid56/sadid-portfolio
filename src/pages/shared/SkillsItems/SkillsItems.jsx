/* eslint-disable react/prop-types */
import './items.css'
const SkillsItems = ({ skills }) => {
  return (
    <div className="mt-10 grid grid-cols-2 mx-3  md:grid-cols-4 lg:grid-cols-6 gap-5 ">
      {skills?.map((skill) => (
        <div
          key={skill?.id}
          className="skill-card p-4 cursor-pointer rounded-md transform transition duration-500 hover:scale-125 hover:text-slate-900 ">
          <div className="w-10 skill-icon h-10  rounded-full bg-white  mx-auto">
            <img src={skill?.logo} className="w-full " alt="" />
          </div>
          <h2 className="text-xl text-gray-300 font-semibold text-center mt-2">
            {skill?.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SkillsItems;
