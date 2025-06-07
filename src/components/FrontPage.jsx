import React from "react";
import HeroSection from "./HeroSection";
import Popular from "./Popular";
import Featured from "./Featured";
import LevelUp from "./LevelUp";
import Subscribe from "./Subscribe";

function FrontPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <div className="md:px-16 lg:px-36 px-6 mt-14">
        <p className="md:text-xl font-semibold mb-4 text-lg md:mb-8">
          Popular Products
        </p>
        <Popular />
      </div>
      <div className="md:px-16 lg:px-36 px-6 my-24">
        <Featured />
      </div>
      <LevelUp />
      <Subscribe />
    </div>
  );
}

export default FrontPage;
