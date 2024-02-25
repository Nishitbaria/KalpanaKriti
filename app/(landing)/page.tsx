import HeroSection from "@/components/landingpage/HeroSection";
import { Navbar } from "@/components/landingpage/Navbar";
import React from "react";
import Hero from "@/components/landingpage/Hero";

export default function page() {
  return (
    <div className="flex min-h-screen h-[250rem]  flex-col bg-richblack-900 font-inter bg-white dark:bg-gray-900 overscroll-x-none">
      <Navbar />
      <HeroSection />
    </div>
  );
}
