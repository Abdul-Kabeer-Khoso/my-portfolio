import EducationBox from "../components/EducationBox";
import ProfilesBox from "../components/ProfilesBox";
import SectionHeading from "../components/SectionHeading";
import TextBox from "../components/TextBox";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto pt-10 pb-2 sm:py-2 flex flex-col justify-center items-center appear"
    >
      <SectionHeading sectionTitle="ABOUT ME" />
      <TextBox
        classes="sm:w-xl md:w-2xl lg:w-3xl md:h-auto py-10"
        text="I'm Abdul Kabeer from Pakistan, currently pursuing a degree in Software Engineering at Sukkur IBA University. I specialize in Full Stack Web Development with expertise in the MERN stack. My skills also include DBMS, Java, Python, Data Science, and DSA, giving me a strong technical foundation. Passionate about creating scalable and user-friendly solutions, I focus on blending performance with creativity. Always eager to learn and grow, I aim to contribute through impactful and innovative projects."
        textClasses="text-white text-[4vw] sm:text-base md:text-lg lg:text-lg text-center"
      />

      <ProfilesBox />
      <EducationBox />
    </section>
  );
};

export default About;
