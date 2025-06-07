import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CrossIcon,
  Home,
  SearchIcon,
  ShoppingBasket,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="md:px-16 lg:px-36 px-6 gap-4 shadow-lg flex justify-between w-full items-center h-12 border-b">
      <Link href="/" className="text-md lg:text-2xl font-bold cursor-pointer">
        <span className="md:text-2xl lg:text-4xl font-extrabold text-cyan-700">
          C
        </span>
        artShop
      </Link>
      <div className="flex items-center justify-between gap-2">
        {/* <Button variant="ghost" size='sm' className="cursor-pointer md:block hidden">
          <Home /> Home
        </Button> */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center border-2 pr-2 rounded-full">
            <Input
              placeholder="Search items..."
              className="md:text-sm rounded-full text-xs md:h-8 h-6 focus-visible:outline-none focus-visible:ring-0 border-0 focus-visible:border-0 focus-visible:ring-transparent"
            />
            <SearchIcon className="cursor-pointer right-2 w-4 h-4" />
          </div>
          <Link href="./shop">
            <Button variant="ghost" size="sm" className="cursor-pointer">
              <ShoppingBasket />
              <span className="md:block hidden"> Shop</span>
            </Button>
          </Link>
          <Link href="./dashboard">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full lg:ml-4 text-xs cursor-pointer"
            >
              <span className="md:block hidden"> Seller's Dashboard</span>
              <span className="md:hidden block">
                <CrossIcon />
              </span>
            </Button>
          </Link>
        </div>

        <Button variant="ghost" className="cursor-pointer">
          <User2Icon /> <span className="md:block hidden">Account</span>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
