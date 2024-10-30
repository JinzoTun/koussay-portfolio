import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section id="home">
      <div className=" my-20 items-center flex justify-between  gap-y-20  max-sm:gap-y-6">
        <div className="grid grid-cols-[116px,repeat(1,1fr)] items-center gap-y-4 pt-20 max-sm:pt-14 max-sm:grid-cols-[0.5fr,3fr] max-sm:px-4">
          <Social />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
