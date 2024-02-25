import HeroSection from "@/components/landingpage/HeroSection";
import { Navbar } from "@/components/landingpage/Navbar";
import React from "react";
import Hero from "@/components/landingpage/Hero";
import Footer from "@/components/landingpage/Footer";
import CustomerLogos from "@/components/landingpage/InfiniteScrolle";
import MasonryCards from "@/components/landingpage/MasonryCards";

export default function page() {
  return (
    <div className="flex min-h-screen h-[300vh] flex-col bg-richblack-900 font-inter bg-white dark:bg-gray-900 overscroll-x-none">
      <Navbar />
      <HeroSection />
      <div className="mt-48">
        <hr className="border-gray-500 mt-14" />
      </div>
      <CustomerLogos />
      <MasonryCards />
    </div>
  );
}
