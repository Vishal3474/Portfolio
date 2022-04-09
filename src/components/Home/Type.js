import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          " Web Developer",
          "Web Designer",
          "CodeYogi Student",
          "Html, Css, JavaScript, React, Git Hub",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
