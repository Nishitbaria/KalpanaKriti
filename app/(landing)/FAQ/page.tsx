"use client";
import Footer from "@/components/landingpage/Footer";
import { Navbar } from "@/components/landingpage/Navbar";
import React, { useState } from "react";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex min-h-screen flex-col  font-inter bg-white dark:bg-gray-900 overscroll-x-none 0">
      <Navbar />
      {/* <!-- FAQ --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-2xl mx-auto">
          {/* <!-- Accordion --> */}
          <div className="hs-accordion-group">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`hs-accordion ${
                  activeAccordion === index
                    ? "hs-accordion-active:bg-gray-100"
                    : ""
                } rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]`}
                id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 ${
                      activeAccordion === index ? "hidden" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 ${
                      activeAccordion === index ? "" : "hidden"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  className={`hs-accordion-content ${
                    activeAccordion === index ? "" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- End Accordion --> */}
        </div>
      </div>
      {/* <!-- End FAQ --> */}
      <div className="">
        <hr className="border-gray-500" />
      </div>
      <Footer />
    </div>
  );
}

const faqData = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
  },
  {
    question:
      "Can I use the content generated by KalpanaKriti for commercial purposes?",
    answer:
      "Yes, you can use the content generated by KalpanaKriti for commercial purposes. However, please note that some content may be subject to copyright or other restrictions.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes, there is a free plan available. The free plan includes basic support and allows users to generate up to 5 items (images, videos, music, code, etc.) per month.",
  },
  {
    question: "How secure is KalpanaKriti?",
    answer:
      "Protecting the data you trust to  KalpanaKriti is our first priority. This part is really crucial in keeping the project in line to completion. we are not storing any of your data on our servers. We are using the best security practices to keep your data safe and secure. We are using the best security practices to keep your data safe and secure.",
  },
  {
    question: "How can I get in touch with customer support??",
    answer:
      "You can get in touch with our customer support team by emailing Nishitbaria@gmail.com , or by visiting our website chat section you can found it at right bottom side.",
  },
  {
    question: "What are the benefits of the paid plan?",
    answer:
      "The paid plan offers unlimited access to generate any type of content, extended and premium support for 24 months, and early access to beta features.",
  },
];
