import React from "react";

import Info from "./Info";

const About = () => {
  return (
    <section id="about" className="pt-20 flex flex-col items-center mb-10">
      <h2 className="text-zinc-800 text-3xl font-bold ">About Me</h2>
      <span className="text-sm mt-2">My introduction</span>
      <div className="grid mt-16 grid-cols-1 items-center max-lg:grid-cols-1">

        <div className="max-lg:flex block max-lg:flex-col mt-0 max-lg:items-center max-lg:mt-10">
          <Info />
          <p className="max-lg:text-center px-0 max-md:px-3">
          I create web pages with a focus on UI/UX design.
           My journey into programming and web development began in 2021,
            driven by my desire to pursue something I love.
             While I don’t yet hold a formal degree in this field,
              I confidently consider myself a Full Stack Developer.
               This journey has been fueled by my determination,
                resilience, and continuous adaptation to new challenges.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
