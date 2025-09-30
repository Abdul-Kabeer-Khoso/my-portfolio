import React from "react";
import styled from "styled-components";

const SecondSkillSection = () => {
  return (
    <StyledWrapper>
      <ul className="example-2 w-[47%] sm:w-58 mt-14 mx-auto">
        <li className="icon-content">
          <a
            href="#"
            data-social="bootstrap"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img src="/Web/bootstrap.png" />
          </a>
          <div className="tooltip">Bootstrap</div>
        </li>
        <li className="icon-content">
          <a
            href="#"
            data-social="tailwind"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img
              src="/Web/tailwind.png"
              className="rounded-lg mt-1 w-[70%] sm:w-[70%]"
            />
          </a>
          <div className="tooltip">Tailwind</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  li::after {
    content: "";
    display: block;
    height: 0px;
    transition: height 0.3s ease-in-out;
    pointer-events: none;
  }

  li:hover::after {
    height: 10px;
  }

  .example-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -40px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
  .example-2 .icon-content a[data-social="bootstrap"] .filled,
  .example-2 .icon-content a[data-social="bootstrap"] ~ .tooltip {
    background-color: #711de0ff;
  }
  .example-2 .icon-content a[data-social="tailwind"] .filled,
  .example-2 .icon-content a[data-social="tailwind"] ~ .tooltip {
    background-color: #14c0dfff;
  }
`;

export default SecondSkillSection;
