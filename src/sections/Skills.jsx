import SectionHeading from "../components/SectionHeading";
import FirstSkillSection from "../components/FirstSkillSection";
import SecondSkillSection from "../components/SecondSkillSection";
import ThirdSkillSection from "../components/ThirdSkillSection";
import FourthSkillSection from "../components/FourthSkillSection";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full h-auto mt-15 sm:mt-25 md:mt-12 pt-2 pb-12 flex flex-col appear"
    >
      <SectionHeading sectionTitle="TECH STACK" />
      <FirstSkillSection />
      <SecondSkillSection />
      <ThirdSkillSection />
      <FourthSkillSection />
    </div>
  );
};

export default Skills;
