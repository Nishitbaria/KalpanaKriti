import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { checkSubscription } from "@/lib/subsciption";
import Darkmodelight from "./Darkmode-light";

interface NavbarProps {
  apiLimitCount: number;
}

export default async function Navbar({ apiLimitCount }: NavbarProps) {
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end items-center space-x-4">
        <Darkmodelight />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
