import React from "react";
import styled from "styled-components";

const ProfileBackground = () => {
  return (
    <StyledWrapper className="md:ml-20 lg:ml-25 xl:ml-27">
      <div className="spinner md:w-[30vw] lg:w-[27vw] xl:w-[26vw] aspect-square absolute z-[-1]">
        <div className="spinner1 md:w-[30vw] lg:w-[27vw] xl:w-[26vw] aspect-square" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .spinner {
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50%;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 225, 255);
  }

  .spinner1 {
    background-color: rgb(36, 36, 36);
    border-radius: 50%;
    filter: blur(10px);
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ProfileBackground;
