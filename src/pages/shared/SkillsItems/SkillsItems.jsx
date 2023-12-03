/* eslint-disable react/prop-types */

const SkillsItems = ({ skills}) => {
  return (
    <div className="mt-10 grid grid-cols-6 gap-7 mb-20">
      {skills?.map((skill) => (
        <div style={{boxShadow: '0px 0px 10px 2px #f13b81'}} key={skill?.id} className="bg-[#1e293b] p-4 rounded-md">
            <div className="w-10  mx-auto">
                <img src={skill?.logo} className="w-full object-cover" alt="" />
            </div>
          <h2 className="text-xl font-semibold text-center mt-2">{skill?.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SkillsItems;
