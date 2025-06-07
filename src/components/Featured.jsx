import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/datas";
import { ArrowUpRight, ArrowUpRightFromCircle } from "lucide-react";
import React from "react";

function Featured() {
  return (
    <div className="w-full lg:px-16 px-4">
      <div className="w-full items-center flex flex-col">
        <p className="text-lg font-bold mb-10 w-fit lg:text-2xl md:text-xl flex flex-col justify-center">
          Featured Products
          <div className="h-[2.5px] mt-1 w-full px-8 ">
            <div className="bg-cyan-800 w-full h-full"></div>
          </div>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 lg:gap-10">
          {FeaturedProducts.map((item, id) => (
            <div
              className={`h-96 ${item.bg} group relative flex flex-col justify-end`}
              key={id}
            >
              <div className="max-h-full max-w-full">
                <img src={item.image} alt="" className="px-5 max-h-full" />
              </div>
              <div className="absolute flex bg:translate-y-full bg:group-hover:translate-y-0 group-hover:bg:opacity-100 transition-all duration-500 ease-in-out bg:opacity-0 flex-col gap-2 p-5 text-white bg-gradient-to-t backdrop-blur-sm from-gray-400/70  to-gray-200/10 filter">
                <p className="text-lg font-bold text-cyan-400">
                  {item.heading}
                </p>
                <p className="text-xs lg:text-sm">{item.desc}</p>
                <Button className="text-sm bg-cyan-800 cursor-pointer flex items-center justify-center">
                  Buy now
                  <ArrowUpRightFromCircle
                    height={8}
                    width={8}
                    className="h-8 w-8"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
