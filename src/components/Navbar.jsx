import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="w-full h-20 px-[10px] sm:p-[0px] flex flex-col sm:flex-row justify-center items-center fixed left-1/2 -translate-x-1/2 z-50">
      <a
        className="w-[10vw] self-end sm:hidden hover:cursor-pointer"
        onClick={() => {
          setShowLinks(!showLinks);
        }}
      >
        <img src="/menuIcon.png" />
      </a>

      <div
        className={
          showLinks
            ? "bg-[#0f1980] flex flex-col rounded-[5px] w-[35vw] py-1 h-auto fixed right-4 top-[60px] z-10 sm:hidden"
            : "hidden"
        }
      >
        <a href="#home" className="w-[100%] text-white bg-[#141a57] py-2 px-1">
          Home
        </a>

        <a href="#about" className="w-[100%] text-white bg-[#141a57] py-2 px-1">
          About
        </a>

        <a
          href="#skills"
          className="w-[100%] text-white bg-[#141a57] py-2 px-1"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="w-[100%] text-white bg-[#141a57] py-2 px-1"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="w-[100%] text-white bg-[#141a57] py-2 px-1"
        >
          Contact
        </a>
      </div>

      <nav
        className="hidden sm:w-[87%] sm:flex md:w-[87%] md:flex lg:w-[90%] lg:flex xl:w-[85%] xl:flex h-[50px] px-[20px] text-[white] bg-white/5 backdrop-blur-md border-2 border-[#17ebe7] rounded-[30px] justify-between items-center
    "
      >
        <a
          href="#home"
          className="px-[1.2%] py-[0.5%] rounded-[20px] flex items-center hover:bg-white/15 hover:backdrop-blur-md duration-[0.4s]"
        >
          <img
            src="/images/home.svg"
            alt="Home Icon"
            className="w-[22px] mr-[5px]"
          />
          Home
        </a>

        <a
          href="#about"
          className="px-[3%] py-[0.5%] rounded-[20px] flex items-center hover:bg-white/15 hover:backdrop-blur-md duration-[0.4s]"
        >
          <img
            src="/images/about.svg"
            alt="About Icon"
            className="w-[22px] mr-[5px]"
          />
          About
        </a>

        <a
          href="#skills"
          className="px-[3%] py-[0.5%] rounded-[20px] flex items-center hover:bg-white/15 hover:backdrop-blur-md duration-[0.4s]"
        >
          <img
            src="/images/skill.svg"
            alt="Skills Icon"
            className="w-[22px] mr-[5px]"
          />
          Skills
        </a>

        <a
          href="#projects"
          className="px-[3%] py-[0.5%] rounded-[20px] flex items-center hover:bg-white/15 hover:backdrop-blur-md duration-[0.4s]"
        >
          <img
            src="/images/projects.svg"
            alt="Projects Icon"
            className="w-[22px] mr-[5px]"
          />
          Projects
        </a>

        <a
          href="#contact"
          className="px-[3%] py-[0.5%] rounded-[20px] flex items-center hover:bg-white/15 hover:backdrop-blur-md duration-[0.4s]"
        >
          <img
            src="/images/contact.svg"
            alt="Contact Icon"
            className="w-[22px] mr-[5px]"
          />
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
