import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import { AllProducts } from "@/datas";
import Image from "next/image";
import React from "react";

function Shop() {
  return (
    <div className="md:px-16 lg:px-36 px-6 w-full">
      <div className="text-lg mb-8 md:text-xl lg:text-2xl font-bold flex w-fit flex-col">
        All Products <div className="w-full h-[2px] bg-cyan-800"></div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7  gap-4">
        {AllProducts.map((item, id) => (
          <div className="basis-1/3 md:basis-1/4 lg:basis-1/6 " key={id}>
            <div className="bg-gray-100  rounded flex justify-center items-center p-4 mdpx-8 md:h-40 lg:h-48 h-36 w-36 md:w-full">
              <img src={item.image} width={100} className="hover:scale-115" />
            </div>
            <div className="">
              <p className="text-sm font-bold">
                {item.name.length > 20
                  ? item.name.slice(0, 17) + "..."
                  : item.name}
              </p>
              <p className="text-xs opacity-50">
                {item.description.length > 25
                  ? item.description.slice(0, 20) + "..."
                  : item.description}
              </p>
              <p className="flex text-center  gap-1 text-xs">
                {item.rating} <Rating rating={item.rating} />
              </p>
            </div>
            <div className="flex items-center mt-2 justify-between">
              <p className="text-sm font-semibold">${item.price}</p>
              <Button
                variant="outline"
                size="sm"
                className=" rounded-full cursor-pointer text-xs"
              >
                Buy now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
