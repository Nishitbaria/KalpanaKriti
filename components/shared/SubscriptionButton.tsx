"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro?: boolean;
}

export default function SubscriptionButton({
  isPro = false,
}: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant={isPro ? "default" : "premium"}
        className=""
        onClick={onClick}
      >
        {isPro ? "Manage Subscription" : "Upgrade to Pro"}
        {!isPro && <Zap size={16} className="ml-2" />}
      </Button>
    </div>
  );
}
