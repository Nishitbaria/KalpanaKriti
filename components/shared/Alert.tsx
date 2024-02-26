import { ArrowRight } from "lucide-react";
import React from "react";

export default function Alert() {
  return (
    <div>
      <div className="bg-green-500 text-sm text-white text-center flex items-center justify-center p-4">
        <p>
          {" "}
          Website is UnderDevelopment So If you Found Any Issue Mail me on{" "}
          <strong>Nishitbaria@gmail.com</strong>{" "}
        </p>
        <ArrowRight size={20} />
      </div>
    </div>
  );
}
