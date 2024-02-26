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
import { MobileSidebar2 } from "../shared/mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link
              href={"/"}
              className=" text-lg text-black dark:text-white font-black ml-1 hidden sm:block"
            >
              {" "}
              KalpanaKriti
            </Link>
          </div>
          {/* Links of The navbar */}
          <div
            className="hidden lg:flex items-center justify-center rounded-lg text-sm transition colors transform active:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center aria-disabled:cursor-not-allowed aria-disabled:opacity-50 active:text-current text-gray-600 dark:text-gray-300
            hover:text-current dark:hover:text-white font-semibold"
          >
            <Link
              className="transition-transform duration-500 "
              href="/dashboard"
            >
              DashBoard
            </Link>
            <Link className="transition-transform duration-500 " href="/Price">
              Pricing
            </Link>
            <Link className="transition-transform duration-500 " href="/FAQ">
              FAQ
            </Link>
          </div>

          {/* TOP RIGHT CORNER */}
          <div className="hidden lg:flex items-center justify-between gap-4"></div>

          <div className="flex items-center justify-between space-x-2">
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
            <SignedOut>
              <Link
                href="/login"
                className="align-middle  lg:block hidden select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
              >
                Log in
              </Link>
            </SignedOut>
            <UserButton />
            <MobileSidebar2 />
          </div>
        </div>
        {/* <div className="hidden lg:block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden">
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4"></div>
        </div> */}
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
