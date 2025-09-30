const SectionHeading = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-[8vw] sm:text-2xl md:text-3xl font-bold">
        {props.sectionTitle}
      </h1>
      <div className="w-15 h-1 bg-[white] mt-1 rounded-sm"></div>
    </div>
  );
};

export default SectionHeading;
