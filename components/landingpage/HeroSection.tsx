import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, PanelRightDashed } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <header className="dark:bg-gray-900 bg-white container mx-auto px-5 ">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch  bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <p className=" antialiased font-sans leading-relaxed sm:inline-flex text-xs rounded-full border-[1.5px] border-blue-gray-500 bg-slate-300 dark:bg-transparent py-1 lg:px-4 px-1 sm:mb-6 hidden font-semibold text-gray-600 dark:text-white shadow dark:shadow-dark-700 link-none">
              <span className="flex items-center justify-center">
                Exciting News! Introducing our latest innovation
                <ArrowRight className="h-4 w-4 ml-2" />
              </span>
            </p>
            <h1 className="text-center text-4xl text-gray-600 dark:text-white md:text-5xl flex flex-col font-heading font-bold xl:text-7xl 2xl:text-[5.2rem]">
              <span className=" bg-gradient-to-br bg-clip-text text-transparent from-[#58ffe9] to-[#00ccff] leading-[1.2]">
                Kalpana Kriti
              </span>
            </h1>
            <h2>
              <span className="flex flex-col space-y-1 bg-gradient-to-br text-base lg:text-xl dark:from-white dark:via-gray-300 dark:to-gray-400 bg-clip-text text-gray-500 font-normal dark:text-transparent text-center">
                <span>
                  KalpanaKriti is an AI-powered application that brings your
                  imagination to <strong>life.</strong>
                </span>
                <span>
                  Named after the Hindi words for{" "}
                  <strong> ‘imagination’ and ‘creation’,</strong>
                </span>
              </span>
            </h2>

            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Button
                  variant="premiumblue"
                  className="w-full border-0 focus:border-1"
                >
                  Upgrade
                  <ArrowRight className="w-4 h-4 ml-2 fill-white" />
                </Button>
              </div>
            </div>
          </div>
          {/* second Part of HeroSection */}
        </div>
      </header>
    </div>
  );
}
