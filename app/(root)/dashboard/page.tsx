"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { tools } from "@/constants/constants";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/user-pro-modal";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => {
              router.push(tool.href);
            }}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-center hover:shadow-lg translate cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-1 hover:border-black/10 hover:bg-white/10 rounded-md"
          >
            <div className="flex items-center gap-x-6 ">
              <div className={(cn("p-2 w-fit rounded-md"), tool.bgColor)}>
                <tool.icon className={(cn("w-8 h-8"), tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
