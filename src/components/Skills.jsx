import React from "react";
import Frontend from "./Frontend";
import Tools from "./Tools";

const Skills = () => {
  return (
    <section id="skills" className="pt-20 flex flex-col items-center mb-32 px-5 w-full">
      <h2 className="text-zinc-800 text-4xl font-bold mb-2">Skills</h2>
      <p className="text-sm text-center text-gray-600">My technical level</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-16">
        <Frontend />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
