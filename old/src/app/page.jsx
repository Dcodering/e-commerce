import React from "react";
import Navbar from "../components/Navbar";
// import HeroSection from "./components/HeroSection";
import FrontPage from "../components/FrontPage";

function page() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col gap-5">
      <FrontPage />
    </div>
  );
}

export default page;
