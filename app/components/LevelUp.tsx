import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

function LevelUp() {
  return <div className="mb-20 w-full md:block hidden md:px-12 lg:px-28 px-4">
    <div className="flex md:py-12 lg:py-16 bg-gray-200 gap-4 w-full justify-between items-center">
        <div className="w-[30%]"> <img src="./jambox.png" alt="jambox" /> </div>
        <div className="w-37% flex flex-col gap-1 items-center">
            <p className="md:text-2xl lg:text-4xl text-sm max-w-full text-center font-bold">Level Up Your <br /> Gaming Experience</p>
            <p className="text-xs">From immersive sound to precise controls...</p>
            <p className="text-xs">Everything you need to win</p>

            <Button className='bg-cyan-800 mt-2'>Buy now<ArrowRight /></Button>
        </div>
        <div className="max-w-[30%] flex justify-center items-center"><img src="./gamepad.png" alt="gamepad" /> </div>
    </div>
  </div>;
}

export default LevelUp;
