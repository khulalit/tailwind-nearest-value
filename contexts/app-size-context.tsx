"use client";
import { ClassToColorMapping } from "@/data/colors";
import { TailwindToPixels } from "@/data/spacing";
import React, { createContext, useState, ReactNode } from "react";

export interface SizeContextType {
  sizeClass: keyof typeof TailwindToPixels;
  setLoading: (loading: boolean) => void;
  isLoading: boolean;
  setSize: (colorClass: keyof typeof TailwindToPixels) => void;
  originalSize: string;
  setOriginalSize: (code: string) => void;
}

export const SizeContext = createContext<SizeContextType>({
  sizeClass: "6",
  isLoading: false,
  setLoading: () => {},
  setSize: () => {},
  originalSize: "",
  setOriginalSize: () => {},
});

interface SizeProviderProps {
  children: ReactNode;
}

export const SizeProvider: React.FC<SizeProviderProps> = ({ children }) => {
  const [sizeClass, setSizeClass] =
    useState<keyof typeof TailwindToPixels>("6");
  const [originalSize, setOriginalSz] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setSize = (color: keyof typeof TailwindToPixels) => {
    setSizeClass(color);
  };

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setOriginalSize = (code: string) => {
    setOriginalSz(code);
  };

  return (
    <SizeContext.Provider
      value={{
        sizeClass,
        isLoading,
        setSize,
        setLoading,
        originalSize,
        setOriginalSize,
      }}
    >
      {children}
    </SizeContext.Provider>
  );
};
