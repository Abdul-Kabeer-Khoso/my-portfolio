import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieAnimation = (props) => {
  return (
    <DotLottieReact
      src={props.fileLink}
      loop
      autoplay
      className={props.className}
    />
  );
};

export default LottieAnimation;
