import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Software Developer",
          "JAVA",
          "Angular Js",
          "Flutter Developer",
          "Cross Platform Developer",
          "Android Application Developer"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
