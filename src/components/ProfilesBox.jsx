const ProfilesBox = () => {
  return (
    <div className="h-auto flex flex-col items-center z-1">
      <h1 className="text-[7vw] sm:text-3xl mb-4 text-white font-semibold">
        Profiles
      </h1>
      <div className="w-[80vw] h-[15vw] sm:w-90 sm:h-15 rounded-md bg-[rgb(250,250,255)] flex items-center justify-around shadow-md shadow-teal-600/50 ">
        <a
          href="https://www.linkedin.com/in/abdul-kabeer-khoso/"
          target="_blank"
        >
          <img
            src="../public/images/linkedin logo.png"
            className="w-[9vw] sm:w-[39px]"
          />
        </a>
        <a href="https://leetcode.com/u/Abdul_Kabeer_khoso/" target="_blank">
          <img
            src="/images/leetcode logo.png"
            className="w-[9vw] sm:w-[39px]"
          />
        </a>
        <a href="https://github.com/Abdul-Kabeer-Khoso" target="_blank">
          <img src="/images/github logo.png" className="w-[9vw] sm:w-[39px]" />
        </a>
      </div>
    </div>
  );
};

export default ProfilesBox;
