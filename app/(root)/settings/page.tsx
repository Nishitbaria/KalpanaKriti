import Heading from "@/components/shared/Heading";
import SubscriptionButton from "@/components/shared/SubscriptionButton";
import { checkSubscription } from "@/lib/subsciption";
import { Settings } from "lucide-react";
import React from "react";

export default async function Setting() {
  const isPro = await checkSubscription();

  return (
    <div className="">
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700 dark:text-gray-300"
        bgColor="bg-gray-700/10 dark:bg-gray-800"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}
