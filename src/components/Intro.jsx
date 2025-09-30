import Tagline from "./Tagline";

const Intro = () => {
  return (
    <div className="w-[90%] sm:mt-[30px] lg:mt-[5px] text-white">
      <h1 className="text-[7vw] sm:text-[7vw] md:text-[5vw] sm:mb-0 md:mb-1 lg:text-[5vw] xl:text-[5vw] font-bold">
        Hello
      </h1>
      <span className="text-[7vw] sm:text-[7vw] md:text-[5vw] lg:text-[5vw] xl:text-[5vw] font-bold inline">
        I'm{" "}
      </span>
      <h1 className="text-[7vw] sm:text-[7vw] md:text-[5vw] lg:text-[5vw] xl:text-[5vw] font-bold inline bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        Abdul Kabeer
      </h1>
      <Tagline />
      <p className="text-[4vw] sm:text-xl sm:mt-[30px] md:text-xl lg:text-2xl xl:text-2xl mt-[10px]">
        🚀Crafting Modern Web Apps with Clean UI & Scalable Backends💻✨
      </p>
    </div>
  );
};

export default Intro;
