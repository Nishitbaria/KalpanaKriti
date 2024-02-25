import { RectangleHorizontalIcon } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiPrisma } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

import React from "react";

export default function CustomerLogos() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Service Which We Use For making Our Product
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
              <FaReact className="w-16 h-16 dark:hover:text-white hover:text-sky-400" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <TbBrandNextjs className="w-16 h-16 dark:hover:text-white hover:text-gray-900" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <SiTailwindcss className="w-16 h-16 dark:hover:text-white hover:text-sky-400" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <SiPostgresql className="w-16 h-16 dark:hover:text-white hover:text-blue-600" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <SiPrisma className="w-16 h-16 dark:hover:text-white hover:text-gray-800" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <RiOpenaiFill className="w-16 h-16 dark:hover:text-white hover:text-green-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
