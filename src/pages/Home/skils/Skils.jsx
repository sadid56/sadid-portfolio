
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./skills.css";
import SkillsProgress from "./SkillsProgress";
import SkillsTabs from "./SkillsTabs";


const Skils = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle color={"Skills"} text={"Tooltip"} />
      <SkillsProgress />
      <SectionTitle color={'My Skills'}/>
      <div className="mt-10">
       <SkillsTabs/>
      </div>
    </section>
  );
};

export default Skils;
