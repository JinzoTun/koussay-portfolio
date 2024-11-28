import React from "react";
import Info from "./Info";

const About = () => {
  return (
    <section id="about" className="pt-20 flex flex-col items-center mb-10">
      <h2 className="text-zinc-800 text-4xl font-bold">About Me</h2>
      <p className="text-sm mt-2 text-center max-w-2xl">
        A little about who I am and my journey in web development
      </p>
      <div className="grid mt-16 grid-cols-1 max-lg:grid-cols-1">
        <div className="flex flex-col items-center mt-10 space-y-6">
          <Info />
          <p className="text-center px-4 max-w-2xl">
            I create web pages with a focus on UI/UX design. My journey into
            programming and web development began in 2021, driven by a deep
            passion to pursue what I love.
          </p>
          <p className="text-center px-4 max-w-2xl">
            Although I don’t hold a formal degree in this field yet, I confidently
            consider myself a Full Stack Developer. This journey has been fueled
            by my resilience, adaptability, and continuous pursuit of new
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
