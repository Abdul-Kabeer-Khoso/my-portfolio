import React from "react";
import styled from "styled-components";

const Tagline = () => {
  return (
    <StyledWrapper>
      <div className="card w-[90%] h-[10vw] text-[4vw] text-xl sm:w-[70%] sm:text-xl md:w-[350px] md:mt-[30px] md:h-[47px] md:text-xl lg:w-[450px] lg:h-[50px] lg:text-2xl bg-blue-500/10 backdrop-blur-sm border border-teal-400/10 rounded-[7px]  sm:rounded-[7px] lg:rounded-[10px] pt-[20px] px-[5px] my-[10px] sm:my-[10px] sm:pt-[10px] sm:px-[5px] lg:my-[30px] lg:px-[10px] lg:pt-[10px] flex justify-start items-center">
        <div className="loader">
          <div className="words">
            <span className="word">MERN Stack Developer</span>
            <span className="word">Java & Python Specialist</span>
            <span className="word">Database Management Expert</span>
            <span className="word">Data Science Enthusiast</span>
            <span className="word">MERN Stack Developer</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .words {
    overflow: hidden;
    height: 40px; /* one word height */
    margin-left: 8px;
    position: relative;
  }

  .word {
    display: block;
    height: 40px;
    color: #ffffffff;
    animation: spin 8s infinite; /* change 8s to faster/slower */
  }

  /* Smooth scroll keyframes for 4 unique words */
  @keyframes spin {
    0%,
    20% {
      transform: translateY(0);
    } /* Web */
    25%,
    45% {
      transform: translateY(-40px);
    } /* Python */
    50%,
    70% {
      transform: translateY(-80px);
    } /* Java */
    75%,
    95% {
      transform: translateY(-120px);
    } /* C++ */
    100% {
      transform: translateY(-160px);
    } /* Web (duplicate, no pause) */
  }
`;

export default Tagline;
