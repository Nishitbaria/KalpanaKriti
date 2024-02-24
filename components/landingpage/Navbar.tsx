"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
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

  return (
    <div className="container mx-auto px-5">
      <div className="flex py-1.5 px-1 items-center border-b dark:border-gray-50 border-gray-800/50 justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage className="p-1" src="/logo.png" />
            </Avatar>
            <p className=" text-lg text-white font-black ml-1"> KalpanaKriti</p>
          </div>

          <div
            className="flex items-center justify-center font-medium lg:justify-start rounded-lg text-sm transition colors transform active:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center aria-disabled:cursor-not-allowed aria-disabled:opacity-50 active:text-current text-gray-600 dark:text-gray-300
            hover:text-current dark:hover:text-white font-semibold"
          >
            <Link
              className="transition-transform duration-500 text-white"
              href="/dashboard"
            >
              DashBoard
            </Link>
            <Link
              className="transition-transform duration-500 text-white"
              href="/dashboard"
            >
              Pricing
            </Link>
            <Link
              className="transition-transform duration-500 text-white"
              href="/dashboard"
            >
              FAQ
            </Link>
          </div>
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
            {/* <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-blue-gray-700 flex items-center gap-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"></path>
                  </svg>
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-blue-gray-700 flex items-center gap-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-blue-gray-700 flex items-center gap-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Blocks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-blue-gray-700 flex items-center gap-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Docs
                </a>
              </li>
            </ul> */}
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
