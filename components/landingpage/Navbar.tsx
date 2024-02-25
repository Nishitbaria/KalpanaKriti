"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const threshold = 100;

      setIsTransparent(scrollTop < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { setTheme } = useTheme();
  return (
    <div className="container mx-auto px-5">
      <div className="flex py-1.5 px-1 items-center border-b dark:border-gray-50 border-gray-800/50 justify-between">
        <div className="container mx-auto flex items-center justify-between">
          {/* here is Coming Linnks */}
          <div className="flex items-center justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage className="p-1" src="/logo.png" />
            </Avatar>
            <p className=" text-lg text-white font-black ml-1"> KalpanaKriti</p>
          </div>

          <div
            className="flex items-center justify-center  lg:justify-start rounded-lg text-sm transition colors transform active:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center aria-disabled:cursor-not-allowed aria-disabled:opacity-50 active:text-current text-gray-600 dark:text-gray-300
            hover:text-current dark:hover:text-white font-semibold"
          >
            <Link
              className="transition-transform duration-500 "
              href="/dashboard"
            >
              DashBoard
            </Link>
            <Link
              className="transition-transform duration-500 "
              href="/dashboard"
            >
              Pricing
            </Link>
            <Link
              className="transition-transform duration-500 "
              href="/dashboard"
            >
              FAQ
            </Link>
          </div>

          {/* TOP RIGHT CORNER */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
              data-ripple-light="true"
            >
              Log in
            </button>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              buy now
            </button>
            {/* Dark mode Light Mode Button */}
            <DropdownMenu>
              <DropdownMenuTrigger className="" asChild>
                <Button variant="outline" size="icon" className="bg-transpert">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="" align="end">
                <DropdownMenuItem
                  className=""
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button
            className="relative ml-auto inline-block h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            data-ripple-dark="true"
            data-collapse-target="navbar"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          data-collapse="navbar"
          className="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden"
        >
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            {/* here is Coming Linnks */}

            {/* TOP RIGHT CORNER */}
            <div className="mt-6 mb-4 flex items-center gap-4">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
                data-ripple-dark="true"
              >
                Log in
              </button>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    name: "Work",
    href: "#sec-work",
  },

  { name: "Info", href: "#sec-about" },
  { name: "Work with me", href: "#sec-contact" },
];
