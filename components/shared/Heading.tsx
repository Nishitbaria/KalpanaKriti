import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function Heading(Props: HeadingProps) {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", Props.bgColor)}>
        <Props.icon className={(cn("w-10 h-10"), Props.iconColor)} />
      </div>
      {/*Title and description*/}
      <div>
        <h2 className="text-3xl font-bold">{Props.title}</h2>
        <p className="text-sm"> {Props.description}</p>
      </div>
    </div>
  );
}
