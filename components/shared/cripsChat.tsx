"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CripsChat = () => {
  useEffect(() => {
    Crisp.configure("80310499-141c-4683-a8b7-d577c7199dbf");
  }, []);

  return null;
};
