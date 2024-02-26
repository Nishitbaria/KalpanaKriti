"use client";
import { cn } from "@/lib/utils";
import {
  Code,
  IceCream,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FreeCounter from "./FreeCounter";
import { Card, CardContent } from "../ui/card";
import { MAX_FREE_COUNTS, routes } from "@/constants/constants";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin-ext"] });

interface Props {
  apiLimitCount: number;
  isPro: boolean;
}

export default function Sidebar({ apiLimitCount, isPro = false }: Props) {
  console.log(apiLimitCount);
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            KalpanaKriti
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} /> */}
      {/* <p className="text-white"> {apiLimitCount} </p> */}
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
}
