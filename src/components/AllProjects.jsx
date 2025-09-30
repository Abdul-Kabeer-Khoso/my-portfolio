import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  return (
    <div className="relative flex flex-col w-full gap-6 mx-auto mt-10 sm:mt-0 h-[70vh]sm:h-[2040px] items-center">
      {/* First Card */}
      <div className="w-[80vw] sm:w-lg sm:sm:h-[35%] rounded-[32px] sticky top-[50px] flex items-center justify-center">
        <ProjectCard
          projectImage="/Projects Images/Grocify.png"
          projectTitle="Grocify- Full Stack Ecommerce Website"
          projectDescription="Created a Full Stack Food Website using (HTML, CSS, JS, and NODE.JS, EXPRESS.JS, MySQL). Performing CRUD operations using relational database. Secure with authentication and middleware using node.js packages."
          githubLink="https://github.com/Abdul-Kabeer-Khoso/Grocery-full-stack-website"
        />
      </div>

      {/* Second Card */}
      <div className="w-[80vw] sm:w-lg sm:h-[35%] rounded-[32px] sticky top-[80px] flex items-center justify-center">
        <ProjectCard
          projectImage="/Projects Images/Airbnb.png"
          projectTitle="Airbnb Full Stack Website"
          projectDescription="Developed a full-stack traveling website (HTML, CSS, JavaScript, Node.js, Express.js, MongoDB) implementing authentication, listing/review CRUD, responsive design (EJS), and cloud image storage, demonstrating MVC and modern web development practices."
          githubLink="https://github.com/Abdul-Kabeer-Khoso/Airbnb-Clone"
        />
      </div>

      {/* Third Card */}
      <div className="w-[80vw] sm:w-lg sm:h-[35%] rounded-[32px] sticky top-[110px] flex items-center justify-center">
        <ProjectCard
          projectImage="/Projects Images/Music Website.png"
          projectTitle="Music Website"
          projectDescription="Developed a fully functional Music Player web app using HTML, CSS, and JavaScript. The app features play, pause, next/previous track controls, a progress bar, and responsive UI design for an engaging user experience."
          githubLink=""
        />
      </div>

      {/* Fourth Card */}
      <div className="w-[80vw] sm:w-lg sm:h-[35%] rounded-[32px] sticky top-[140px] flex items-center justify-center">
        <ProjectCard
          projectImage="/Projects Images/Currency Converter.png"
          projectTitle="Currency Converter Web App"
          projectDescription="Built a Currency Converter web app using HTML, CSS, and JavaScript that allows users to convert between multiple currencies in real time with accurate exchange rates and a clean, responsive interface. Implemented intuitive UI and user-friendly design to ensure smooth and efficient conversions."
          githubLink="https://github.com/Abdul-Kabeer-Khoso/Currency-Converter"
        />
      </div>
    </div>
  );
}
