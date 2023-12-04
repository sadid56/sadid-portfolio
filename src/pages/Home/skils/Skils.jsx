import Lottie from "lottie-react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./skills.css";
import skillsAnimation from '../../../assets/lottie-animation/skills.json'
import SkillsProgress from "./SkillsProgress";
import SkillsTabs from "./SkillsTabs";


const Skils = () => {
  return (
    <section id="skils" className="max-w-6xl mx-auto relative overflow-x-hidden">
      <SectionTitle color={"Skills"} text={"Tooltip"} />
      <div className="w-48 absolute -right-10 md:right-80 top-8 md:top-7">
      <Lottie animationData={skillsAnimation}/>
      </div>
      <SkillsProgress />
      <SectionTitle color={'My Skills'}/>
      <div className="mt-10">
       <SkillsTabs/>
      </div>
    </section>
  );
};

export default Skils;
