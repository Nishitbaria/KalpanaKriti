import { AirVentIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const features = [
    {
      id: 1,
      title: "A cat in Indian wedding clothes",
      description:
        "Generate Animal images with AI, and use them in your project.",
      imageSrc: "https://th.bing.com/th/id/OIG3.dIHdiznmIO_oLlyuqTwv?pid=ImgGn",
    },
    {
      id: 2,
      title: "Generate Logo for Ecommerce website",
      description:
        "Generate Logo for your project with AI, and use them in your project.",
      imageSrc: "https://th.bing.com/th/id/OIG2.mxTG_PYUOGXmdnT2ErY9?pid=ImgGn",
    },
    {
      id: 3,
      title: "Generate sketch for Save Environment Campaign",
      description:
        "Generate sketch for your project with AI, and use them in your Campaign.",
      imageSrc: "https://th.bing.com/th/id/OIG1.jSXaPAZQrqUiffaKdGE0?pid=ImgGn",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="mt-4 text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
        Some of Example of AI Power
        <span className="sm:ml-2 bg-gradient-to-br bg-clip-text text-transparent from-[#58ffe9] to-[#00ccff] leading-[1.2]">
          Image Generator{" "}
        </span>
      </h1>
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
              Fully customizable rules to match your unique needs
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
                    activeTab === feature.id ? "hs-tab-active:bg-white" : ""
                  }`}
                  onClick={() => handleTabClick(feature.id)}
                  id={`tabs-with-card-item-${feature.id}`}
                  data-hs-tab={`#tabs-with-card-${feature.id}`}
                  aria-controls={`tabs-with-card-${feature.id}`}
                  role="tab"
                >
                  <span className="flex">
                    <ArrowRight className="h-12 w-12 text-sky-500" />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        {feature.title}
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        {feature.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    id={`tabs-with-card-${feature.id}`}
                    className={`${activeTab === feature.id ? "" : "hidden"}`}
                    role="tabpanel"
                    aria-labelledby={`tabs-with-card-item-${feature.id}`}
                  >
                    <Image
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src={feature.imageSrc}
                      alt="Image Description"
                      width={987}
                      height={1220}
                    />
                  </div>
                ))}
              </div>
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
