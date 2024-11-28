import React from "react";

const Project = ({ image, title, about, github, live, tools = [] }) => { // Default tools to an empty array
  return (
    <div className="bg-white shadow-md rounded-md h-full border border-zinc-300 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {image ? (
        <img
          src={image}
          alt={title || "Project Image"} // Use dynamic alt text for better accessibility
          className="w-full rounded-t-md h-52 object-cover transition-transform duration-500 transform hover:scale-110"
        />
      ) : (
        <div className="w-full h-52 bg-gray-200 flex justify-center items-center">
          <span className="text-xl text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="w-full px-7 py-4 mt-2 gap-4 flex flex-col pb-6">
        <h2 className="text-zinc-800 font-bold text-2xl sm:text-lg hover:text-zinc-900 transition-colors duration-200">
          {title}
        </h2>
        <p className="text-zinc-600 sm:text-sm">{about}</p>
        
        <div className="flex justify-between mt-4 sm:flex-col sm:gap-2">
          <a href={github} target="_blank" rel="noreferrer">
            <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide transition-colors duration-200 transform hover:scale-105">
              GitHub
            </button>
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <button className="px-5 py-2 bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide transition-colors duration-200 transform hover:scale-105">
              Live
            </button>
          </a>
        </div>
        
        <div className="flex gap-3 mt-3 flex-wrap">
          {tools.length > 0 ? (
            tools.map((item, index) => (
              <span
                key={index}
                className="bg-[#e8e8e8] text-xs rounded-md px-3 pt-[2px] pb-[1px]"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No tools listed</span> // Fallback if no tools are provided
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
