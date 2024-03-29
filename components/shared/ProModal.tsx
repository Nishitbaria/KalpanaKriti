"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/user-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "../ui/card";
import { tools } from "@/constants/constants";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NextResponse } from "next/server";
import axios from "axios";

export default function ProModal() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error: any) {
      console.error("Yaha se error aa rahi he", error.message);
      return new NextResponse(`Webhook Error: ${error.message}`, {
        status: 400,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y pb-2">
            <div className="flex items-center  gap-x-2 font-bold py-1">
              Upgrade to Pro
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 ">
            <p>
              Get access to all the features and tools that are available only
              for pro users.
            </p>
          </DialogDescription>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            className="w-full border-0"
            variant={"premium"}
          >
            Upgrade to Pro
            <Zap className="w-5 h-5 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
