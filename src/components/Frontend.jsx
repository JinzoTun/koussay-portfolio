import React from "react";

const Frontend = () => {
  return (
    <div className="bg-white border grid grid-cols-1 justify-items-center gap-y-6 py-8 w-full  rounded-xl shadow-sm">
      <h2 className="font-semibold text-zinc-700 text-xl mb-4">Frontend Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-4">
        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">HTML</h3>
            <span className="text-xs text-gray-500">Experienced</span>
          </div>
        </div>

        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Tailwind</h3>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
        </div>

        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Git</h3>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
        </div>

        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">React</h3>
            <span className="text-xs text-gray-500">Junior</span>
          </div>
        </div>

        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Node.js</h3>
            <span className="text-xs text-gray-500">Beginner</span>
          </div>
        </div>

        {/* Skill Item */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Express</h3>
            <span className="text-xs text-gray-500">Beginner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
