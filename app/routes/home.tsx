// import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/home";
import Popular from "~/components/Popular";
import Featured from "~/components/Featured";
import LevelUp from "~/components/LevelUp";
import Subscribe from "~/components/Subscribe";
import { lazy } from "react";

const HeroSection = lazy(() =>import('~/components/HeroSection'))
export function meta({}: Route.MetaArgs) {
  return [
    { title: "khdcfkguhtbyjlognfd" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return   <div className="w-full overflow-x-hidden">
        {/* <HeroSection /> */}
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
}
