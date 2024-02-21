import Image from "next/image";
import React from "react";

interface EmptyProps {
  lable: string; // Add a new prop
}

export default function Empty({ lable }: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" alt="Empty" fill />
      </div>
      <p className="text-muted-foreground text-sm text-center">{lable}</p>
    </div>
  );
}
