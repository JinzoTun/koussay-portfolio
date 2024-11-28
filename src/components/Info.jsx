import React from "react";

const Info = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 justify-center">
      {/* Completed Projects Card */}
      <div className="flex flex-col items-center bg-white px-6 py-4 border rounded-xl shadow-lg hover:bg-zinc-100 transition-all duration-300">
        <div className="text-4xl text-zinc-700 mb-4">
          <i className="bx bx-briefcase-alt"></i>
        </div>
        <h3 className="font-semibold text-zinc-700 text-xl mb-2">Completed Projects</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "75%" }}></div> {/* Progress Bar */}
        </div>
        <span className="text-sm text-gray-500">10+ Projects</span>
      </div>

      {/* Support Card */}
      <div className="flex flex-col items-center bg-white px-6 py-4 border rounded-xl shadow-lg hover:bg-zinc-100 transition-all duration-300">
        <div className="text-4xl text-zinc-700 mb-4">
          <i className="bx bx-support"></i>
        </div>
        <h3 className="font-semibold text-zinc-700 text-xl mb-2">Support</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div> {/* Progress Bar */}
        </div>
        <span className="text-sm text-gray-500">Online 24/7</span>
      </div>

      {/* Another Info Card */}
      <div className="flex flex-col items-center bg-white px-6 py-4 border rounded-xl shadow-lg hover:bg-zinc-100 transition-all duration-300">
        <div className="text-4xl text-zinc-700 mb-4">
          <i className="bx bx-code-alt"></i>
        </div>
        <h3 className="font-semibold text-zinc-700 text-xl mb-2">Coding Skills</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "65%" }}></div> {/* Progress Bar */}
        </div>
        <span className="text-sm text-gray-500">React, Node.js, etc.</span>
      </div>
    </div>
  );
};

export default Info;
