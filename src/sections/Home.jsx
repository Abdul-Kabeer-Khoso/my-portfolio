import AnimatedBox from "../components/AnimatedBox";
import ButtonOne from "../components/ButtonOne";
import ButtonTwo from "../components/ButtonTwo";
import Intro from "../components/Intro";
import LottieAnimation from "../components/LottieAnimations";
import Profile from "../components/Profile";
import ProfileBackground from "../components/ProfileBackground";
import "../styles/animations.css";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-[210vw] sm:h-[920px] md:h-[100vh] relative"
    >
      <LottieAnimation
        fileLink="../public/lottieAnimation/snowoff.lottie"
        className="opacity-20 w-full h-auto fixed inset z-0"
      />

      <AnimatedBox
        text="UI Magic"
        classes="w-fit h-fit px-2 py-1 text-[13px] sm:text-base sm:px-3 sm:py-2 md:px-3 md:py-1 lg:px-5 lg:py-2 xl:px-5 xl:py-2 rounded-[7px] bg-purple-500/10 backdrop-blur-sm border-1 border-purple-500/20 text-purple-400 absolute top-[17vh] right-[37vw] sm:top-[22vh] sm:right-[40vw] md:top-[29vh] md:left-[21vw] lg:top-[30vh] lg:left-[17vw] xl:top-[29vh] xl:left-[18vw] z-20 bounceAnim3"
      />

      <AnimatedBox
        text="Clean Code"
        classes="w-fit h-fit text-[13px] sm:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-1 lg:px-5 lg:py-2 xl:px-5 xl:py-2 rounded-[7px] bg-blue-500/10 backdrop-blur-sm border-1 border-blue-500/20 text-blue-400 absolute top-[15vh] right-[5vw] sm:top-[26vh] sm:right-[19vw] md:top-[31vh] md:left-[38vw] lg:top-[32vh] lg:left-[32vw] xl:top-[33vh] xl:left-[33vw] z-20 bounceAnim2"
      />

      <AnimatedBox
        text="Innovation"
        classes="w-fit h-fit text-[13px] sm:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-1 lg:px-5 lg:py-2 xl:px-5 xl:py-2 rounded-[7px] bg-amber-500/10 backdrop-blur-sm border-1 border-amber-500/20 text-amber-400 absolute top-[45vh] right-[3vw] sm:top-[40vh] sm:right-[12vw] md:top-[45vh] md:left-[42vw] lg:top-[57vh] lg:left-[38vw] xl:top-[55vh] xl:left-[39vw]  z-20 bounceAnim"
      />

      <AnimatedBox
        text="Welcome to my universe"
        classes="w-fit h-fit text-[13px] sm:text-base px-[10px] py-[2px] sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-3 lg:py-1 xl:px-4 xl: py-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-300 font-medium border border-gray-700/50 absolute top-[10vh] sm:top-[15vh] sm:left-[2vw] md:top-[18vh] md:left-[1vw] lg:top-[22vh] lg:left-[2vw] xl:top-[18vh] xl:left-[3vwv]"
      />

      <div className="w-full absolute top-[18vh] sm:top-[18vw] md:top-[20vh] lg:top-[170px] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center z-10">
        <div className="w-full md:w-full lg:w-[65%] xl:w-[65%] flex flex-col">
          <Intro />
          <div className="hidden sm:flex sm:w-auto mt-8 flex flex-col sm:flex-col lg:flex-row">
            <ButtonOne buttonName="Hire Me" />
            <ButtonTwo buttonName="Resume" />
          </div>
          <div className="flex flex-col sm:hidden">
            <button className="bg-[#006bb3] text-[12px] text-white px-3 py-2 rounded-[7px] w-[80px] mt-3">
              Hire Me
            </button>
            <button className="bg-[#077504ff] text-[12px] text-white px-3 py-2 rounded-[7px] w-[80px] mt-3">
              Resume
            </button>
          </div>
        </div>
        <div className="w-[70%]  sm:w-[45%] lg:w-[35%] xl:w-[35%] h-auto relative">
          {/* <ProfileBackground /> */}
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default Home;
