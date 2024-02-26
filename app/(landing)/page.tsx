"use client";
import HeroSection from "@/components/landingpage/HeroSection";
import { Navbar } from "@/components/landingpage/Navbar";
import React from "react";
import Footer from "@/components/landingpage/Footer";
import CustomerLogos from "@/components/landingpage/InfiniteScrolle";
import MasonryCards from "@/components/landingpage/MasonryCards";
import NewsLetter from "@/components/landingpage/NewsLetter";
import Features from "@/components/landingpage/Featuer";
import CTASection from "@/components/landingpage/CTASection";
import Howitwork from "@/components/landingpage/Howitwork";
import Alert from "@/components/shared/Alert";

export default function page() {
  return (
    // bg-grid-[#2c2f38]/[0.4]
    <div className="flex sm:h-[388vh] h-screen flex-col font-inter bg-white dark:bg-gray-900 overscroll-x-none">
      {/* <Alert /> */}
      <Navbar />
      <HeroSection />
      <div className="mt-48">
        <hr className="border-gray-500 mt-14" />
      </div>
      <CustomerLogos />
      <Howitwork />
      <Features />
      <CTASection />
      {/* <MasonryCards /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
}
