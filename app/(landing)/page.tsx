import HeroSection from "@/components/landingpage/HeroSection";
import { Navbar } from "@/components/landingpage/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen h-[250rem] w-screen flex-col bg-richblack-900 font-inter bg-gray-900">
      {/* <Navbar /> */}
      <HeroSection />
    </div>
  );
}
