"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const threshold = 100;

      setIsTransparent(scrollTop < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className=" fixed z-50 flex h-14 w-full items-center justify-center overflow-hidden border-b backdrop-blur">
        <div className="layout flex justify-between"></div>
      </header>
      <div className="h-14"></div>
    </>
  );
};

const links = [
  {
    name: "Work",
    href: "#sec-work",
  },

  { name: "Info", href: "#sec-about" },
  { name: "Work with me", href: "#sec-contact" },
];
