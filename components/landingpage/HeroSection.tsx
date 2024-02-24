import React from "react";
import { Navbar } from "./Navbar";

export default function HeroSection() {
  return (
    <div>
      <Navbar />

      <header className="bg-gray-900 text-white p-8 ">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch  bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <p className="antialiased font-sans leading-relaxed  inline-flex text-xs rounded-full border-[1.5px] border-blue-gray-50 bg-slate-800  py-1 lg:px-4 px-1 font-medium text-primary">
              Exciting News! Introducing our latest innovation
            </p>
            <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl">
              Get ready to experience a new level of and
            </h1>
            <p className="block antialiased font-sans font-normal leading-relaxed text-inherit mx-auto w-full !text-white lg:text-lg text-base">
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </p>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                {/* <div className="relative w-full min-w-[200px] h-11">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Enter your email
                  </label>
                </div> */}
                {/* <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full md:w-[12rem]"
                  type="button"
                  data-ripple-light="true"
                >
                  get started
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
