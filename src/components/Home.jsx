import React from "react";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section id="home">
      <div className="  items-center flex justify-between h-screen  max-sm:gap-y-6">
        <div className="grid grid-cols-[116px,repeat(1,1fr)] items-center gap-y-4  max-sm:grid-cols-[0.5fr,3fr] max-sm:px-4">
          <Social />
          <Data />
        </div>
      
      </div>
    </section>
  );
};

export default Home;
