
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./skills.css";
// import SkillsProgress from "./SkillsProgress";
import SkillsTabs from "./SkillsTabs";

const Skils = () => {
  return (
    <section className="max-w-7xl md:mx-auto mx-3 relative">
      <SectionTitle color={"My Skills"} />
      <div className="mt-10">
        <SkillsTabs />
      </div>
    </section>
  );
};

export default Skils;
