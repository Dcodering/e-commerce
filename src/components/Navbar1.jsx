"use client";

import {
  ArrowBigUpDash,
  ArrowRight,
  Bell,
  BellIcon,
  Dock,
  File,
  Home,
  HomeIcon,
  Loader2Icon,
  LogIn,
  Menu,
  MenuIcon,
  MoonIcon,
  SunIcon,
  Tv2,
  Tv2Icon,
  TvMinimalPlay,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
// import { Button } from "../ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import { useTheme } from "next-themes";
// import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
// import { Separator } from "../ui/separator";
// import { useNavContext } from "../context/Mycontext";
import { Button } from "@/components/ui/button";

function Navbar() {
  // const {navValue, setNavValue} = useNavContext();
  // const { theme, setTheme } = useTheme();
  // const [loginLoad, setLoginLoad] = useState(false);
  // const { isSignedIn } = useAuth();

  // const LoginLoadFunc = () => {
  //   setLoginLoad(true);

  //   if (isSignedIn) {
  //     setLoginLoad(false);
  //   }
  // };
  // const [activeNavbar, setActiveNavbar] = useState("");
  return (
    <div className=" md:px-[10%] px-[5%] h-full border-b-2 items-center w-screen justify-between shadow-lg flex bg-background backdrop-filter backdrop-blur-lg ">
      <Link href="/" className="font-bold md:text-2xl font-mono text-xl">
        Unimedia
      </Link>
      <div className="flex space-x-4 items-center">
        <div className="">
          <div className="flex gap-2">
            <Link href="/">
              <Button
                title="Home"
                size="sm"
                variant="outline"
                className={`text-foreground border-2`}
              >
                <HomeIcon />
              </Button>
            </Link>
            <Button
              size="sm"
              title="Materials"
              variant="outline"
              className={`text-foreground border-2`}
            >
              <File />
            </Button>
            <Button
              size="sm"
              title="Videos"
              variant="outline"
              className={`text-foreground border-2`}
            >
              <TvMinimalPlay />
            </Button>
          </div>
              <Button variant="outline" size="sm">
                <BellIcon />
                {/* Notification */}
              </Button>
        </div>

        {/* {theme === "white" ? (
          <MoonIcon
            onClick={() => setTheme("dark")}
            className="md:w-5 md:h-5 w-4 h-4 cursor-pointer"
          />
        ) : (
          <SunIcon
            onClick={() => setTheme("white")}
            className="md:w-5 md:h-5 w-4 hover:animate-spin transition-all duration-700 h-4 cursor-pointer"
          />
        )} */}

        {/* {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="hidden md:block">
            <SignInButton mode="modal" size="sm" className="rounded-full">
            <Button onClick={LoginLoadFunc} disabled={loginLoad}>
              {loginLoad ? <Loader2Icon className="animate-spin" /> : "Login"}{" "}
              <ArrowRight />
            </Button>
          </SignInButton>
          </div>
        )}
        <Sheet className="items-center">
          <SheetTrigger>
            <MenuIcon className="block md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Separator />
            {isSignedIn ? (
              <div className="mt-12 w-full flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  className="w-full items-center flex justify-start"
                >
                  <Home className="w-4 h-4" /> Home
                </Button>
                <Button variant="ghost" className="w-full flex justify-start">
                  <User /> Profile
                </Button>
                <Button variant="ghost" className="w-full flex justify-start">
                  <Bell /> Notification
                </Button>
              </div>
            ) : (
              <div className="mt-12 w-full flex flex-col space-y-2">
                <SignInButton mode="modal" className="z-50">
                  <Button onClick={LoginLoadFunc} className="items-center font-bold">
                    Login
                    <LogIn />
                    {
                      loginLoad? <div className="animate-spin">
                        <Loader2Icon />
                      </div>: null
                    }
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal" className="z-50">
                  <Button variant="outline" className="items-center font-bold">
                    Sign Up
                    <LogIn />
                    {
                      loginLoad? <div className="animate-spin">
                        <Loader2Icon />
                      </div>: null
                    }
                  </Button>
                </SignUpButton>
              </div>
            )}
          </SheetContent>
        </Sheet> */}
      </div>
    </div>
  );
}

export default Navbar;
