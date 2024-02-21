import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export default function UserAvatar() {
  const { user } = useUser();

  return (
    <div>
      <Avatar className="w-8 h-8">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.fullName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
