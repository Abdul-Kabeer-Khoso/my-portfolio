import AllProjects from "../components/AllProjects";
import SectionHeading from "../components/SectionHeading";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto mt-12 py-3 flex flex-col appear"
    >
      <SectionHeading sectionTitle="PROJECTS" />
      <AllProjects />
    </div>
  );
};

export default Projects;
