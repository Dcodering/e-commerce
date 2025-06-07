import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Subscribe() {
  return (
    <div className="w-full md:px-16 lg:px-36  flex flex-col justify-center items-center">
      <div className="lg:w-[50%] w-full md:w-[75%] px-6 mb-8 flex gap-6 flex-col items-center justify-center">
        <div className="">
          <p className="text-center md:text-2xl text-lg font-bold">
            Subscribe now and get 20% off
          </p>
          <p className="text-center text-xs ">
            Subscribe so you can get updates on new arrivals on time before it
            get all picked
          </p>
        </div>
        <div className="flex w-full">
          <Input
            placeholder="Enter your email Id"
            className=" w-full border-cyan-800 rounded-r-none rounded-l-sm focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button className="rounded-none border-cyan-800 bg-cyan-800 border-2">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
