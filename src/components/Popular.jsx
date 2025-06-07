import { Button } from "@/components/ui/button";
import { popularProducts } from "@/datas";
import React from "react";
import Rating from "./Rating";
// import StarRatings from "react-star-ratings";

function Popular() {
  return (
    <div className="flex flex-col gap-12 overflow-x-hidden items-center w-full my-4">
      <div className="flex flex-wrap md:gap-4 gap-y-6 gap-2 justify-between">
        {popularProducts.map((item, id) => (
          <div className="basis-1/3 md:basis-1/4 lg:basis-1/6 " key={id}>
            <div className="md:h-40 lg:h-48 h-36 w-full">
              <img src={item.image} className="hover:scale-115 transition-all duration-300 object-cover" />
            </div>
            <div className="">
              <p className="text-sm font-bold">
                {item.name}             </p>
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
      <Button variant='outline' className='px-8 cursor-pointer opacity-70'>See more</Button>
    </div>
  );
}

export default Popular;
