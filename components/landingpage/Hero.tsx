import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "./Navbar";
export default function Hero() {
  return (
    <div className="container mx-auto px-5">
      <Navbar />
      <div className="mt-12 mb-5 flex flex-col items-center md:flex-row lg:mt-16 mx-auto flex-1 justify-center animate-in fade-in  duration-1000 slide-in-from-top-12">
        {/* Main content which is contain Link Header sub Headers and buttons  */}
        <div className="flex w-full flex-1 flex-col items-center space-y-8"></div>
        {/* Link sections */}
        <Link href="/signup" className="">
          <h2 className="inline-flex w-auto items-center space-x-2 rounded-full bg-gradient-to-br dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-gray-500 dark:text-transparent shadow dark:shadow-dark-700">
            <span>
              <div className="flex items-center">
                <span>Introducing v3 - a complete upgrade of PDF2Anki</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="ml-1 h-3 w-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </span>
          </h2>
        </Link>
        {/* Heading */}
        <h1 className="text-center text-4xl text-gray-600 dark:text-white md:text-5xl flex flex-col font-heading font-bold xl:text-7xl 2xl:text-[5.2rem]">
          <span>Save Hours Making</span>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-primary-400 to-primary-700 leading-[1.2]">
            Flashcards Manually Everyday
          </span>
        </h1>
        {/* SubHeading */}
        <h2 className="inline-flex w-auto items-center space-x-2 rounded-full bg-gradient-to-br dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 bg-clip-text px-4 py-2 text-center text-sm font-normal text-gray-500 dark:text-transparent shadow dark:shadow-dark-700">
          <span>
            <div className="flex items-center">
              <span>Introducing v3 - a complete upgrade of PDF2Anki</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="ml-1 h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </div>
          </span>
        </h2>
        {/* second Part of HeroSection */}
      </div>
    </div>
  );
}
