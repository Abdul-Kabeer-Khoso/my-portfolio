import React from "react";
import styled from "styled-components";

const ThirdSkillSection = () => {
  return (
    <StyledWrapper>
      <ul className="example-2 w-auto sm:w-lg mt-14 mx-auto">
        <li className="icon-content">
          <a
            href="#"
            data-social="node"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img src="/Web/node.png" />
          </a>
          <div className="tooltip">Node</div>
        </li>
        <li className="icon-content">
          <a
            href="#"
            data-social="express"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img src="/Web/express.png" />
          </a>
          <div className="tooltip">Express</div>
        </li>
        <li className="icon-content">
          <a
            href="#"
            data-social="mysql"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img
              src="/Web/mysql.png"
              width="70%"
              className="rounded-lg"
            />
          </a>
          <div className="tooltip">MySQL</div>
        </li>
        <li className="icon-content">
          <a
            href="#"
            data-social="mongodb"
            className="w-[12vw] h-[12vw] sm:w-[70px] sm:h-[70px]"
          >
            <img src="/Web/mongodb.png" width="70%" />
          </a>
          <div className="tooltip">mongoDB</div>
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
  .example-2 .icon-content a[data-social="node"] .filled,
  .example-2 .icon-content a[data-social="node"] ~ .tooltip {
    background-color: #5fd65bff;
  }
  .example-2 .icon-content a[data-social="express"] .filled,
  .example-2 .icon-content a[data-social="express"] ~ .tooltip {
    background-color: #2d393bff;
  }
  .example-2 .icon-content a[data-social="mysql"] .filled,
  .example-2 .icon-content a[data-social="mysql"] ~ .tooltip {
    background-color: #1ba1d6ff;
  }
  .example-2 .icon-content a[data-social="mongodb"] .filled,
  .example-2 .icon-content a[data-social="mongodb"] ~ .tooltip {
    background-color: #1c8d0dff;
  }
`;

export default ThirdSkillSection;
