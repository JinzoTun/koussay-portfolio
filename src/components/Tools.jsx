import React from "react";

const Tools = () => {
  return (
    <div className="bg-white border grid grid-cols-1 justify-items-center gap-y-6 px-10 py-8 rounded-xl shadow-sm">
      <h2 className="font-semibold text-zinc-700 text-xl mb-4">Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Tool Item: Git */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Git</h3>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
        </div>

        {/* Tool Item: Docker */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Docker</h3>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
        </div>

        {/* Tool Item: VS Code */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">VS Code</h3>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
        </div>

        {/* Tool Item: Postman */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Postman</h3>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
        </div>

        {/* Tool Item: Firebase */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">Firebase</h3>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
        </div>

        {/* Tool Item: GitHub */}
        <div className="flex items-baseline gap-2">
          <i className="bx bx-badge-check text-zinc-700 text-xl"></i>
          <div>
            <h3 className="font-semibold text-zinc-700 text-lg">GitHub</h3>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
