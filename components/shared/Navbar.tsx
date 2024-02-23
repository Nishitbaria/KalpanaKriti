import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

interface NavbarProps {
  apiLimitCount: number;
}

export default function Navbar({ apiLimitCount }: NavbarProps) {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
