import SectionHeading from "./SectionHeading";

const EducationBox = () => {
  return (
    <div className="w-full flex flex-col items-center mt-13 appear">
      <h1 className="text-[7vw] sm:text-3xl mb-4 text-white font-semibold">
        Education
      </h1>
      <div className="w-full h-auto  sm:h-50 md:h-70 lg:h-45 flex flex-col sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center md:justify-center lg:justify-around">
        {/* Bachelor Education */}
        <div className="sm:w-[55%] md:w-[55%] md:h-55 md:py-3 lg:py-0 lg:w-[45%] lg:h-30 xl:w-[40%] xl:h-32 pl-3 mt-7 rounded-lg bg-[rgb(250,250,255)] shadow-md shadow-gray-800/80 relative flex  justify-between items-center transition duration-300 ease-in-out hover:translate-y-2 hover:scale-105">
          <img src="../public/images/iba-logo.png" width="20%" />
          <div className="w-[70%] flex flex-col">
            <p className="font-bold text-[5vw] sm:text-lg md:text-lg lg:text-xl">
              Sukkur IBA University
            </p>
            <p className="text-[5vw] sm:text-base">
              Bachelor of Software Engineering.
            </p>
            <p className="text-[5vw] sm:text-base mt-2 font-semibold">
              2023-Present
            </p>
          </div>
        </div>

        {/* Intermediate Education */}
        <div className="sm:w-[55%] md:w-[55%] md:h-55 md:py-3 lg:py-0 lg:w-[45%] lg:h-30 xl:w-[40%] xl:h-32 pl-3 mt-13 rounded-lg bg-[rgb(250,250,255)] shadow-md shadow-gray-800/80 relative flex justify-between items-center transition duration-300 ease-in-out hover:translate-y-2 hover:scale-105">
          <img src="../public/images/govt-logo.png" width="18%" />
          <div className="w-[80%] flex flex-col ml-5">
            <p className="font-bold text-[5vw] sm:text-lg md:text-lg lg:text-xl ">
              Government Degree College Kandiaro
            </p>
            <p className="text-[5vw] sm:text-base">
              Intermediate, Pre-Medical.
            </p>
            <p className="text-[5vw] sm:text-base mt-2 font-semibold">
              2020-2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;
