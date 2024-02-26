import { Button } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import {
  ArrowRight,
  Code2,
  Code2Icon,
  ImageDown,
  ImageDownIcon,
  MoreHorizontal,
  Music,
  Music4,
  Text,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-white dark:bg-slate-900  py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              The all-in-one solution
            </h2>
            <h1 className="mt-4 text-5xl font-extrabold text-gray-900 dark:text-white ">
              AI POWER{" "}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#58ffe9] to-[#00ccff] leading-[1.2]">
                (and a whole lot more)
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
              KalpanaKriti is the only platform that provides a complete
              solution for AI powered content generation, and a whole lot more.
            </p>
            <Button className="mt-6 bg-gradient-to-br from-[#58ffe9] to-[#00ccff] text-white">
              Try it now
            </Button>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10">
            <Image
              alt="Enterprise SSO Illustration"
              className="mx-auto shadow-[0_0_1000px_0] shadow-sky-400/40 dark:shadow-sky-400/40 bg-transparent"
              width="500"
              height="400"
              src="/log123.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <Feature />
      </div>
    </div>
  );
}

export function Feature() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs  font-medium text-indigo-600 dark:bg-slate-800 dark:text-white text-center">
              Features
            </span>
            <h2 className="text-4xl text-center font-bold text-gray-900  dark:text-white py-5">
              Revolutionary Features
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-white max-w-md md:max-w-2xl mx-auto">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating subtasks.
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                {/* <svg
                  className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg> */}
                <ImageDownIcon className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Image Generation
              </h4>
              <p className="text-sm font-normal text-gray-500 dark:text-white">
                Image Generation is an advanced feature that generates
                compelling images based on a given text prompt
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                {/* <svg
                  className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                </svg> */}
                <VideoIcon className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Video Generation
              </h4>
              <p className="text-sm font-normal text-gray-500 dark:text-white">
                Video Generation is an advanced feature that generates
                compelling videos based on a given text prompt
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                {/* <svg
                  className=""
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg> */}
                <Music className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Music Generation
              </h4>
              <p className="text-sm font-normal text-gray-500 dark:text-white">
                Music Generation is an advanced feature that generates
                compelling music
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                <Code2Icon className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Code Generation
              </h4>
              <p className="text-sm font-normal text-gray-500 dark:text-white">
                Generate code snippets for any language and framework you need
                to use
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
