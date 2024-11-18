"use client";
import { ClassToColorMapping } from "@/data/colors";
import React, { createContext, useState, ReactNode, useContext } from "react";

export interface ColorContextType {
  colorClass: keyof typeof ClassToColorMapping;
  setLoading: (loading: boolean) => void;
  isLoading: boolean;
  setColor: (colorClass: keyof typeof ClassToColorMapping) => void;
  originalColor: string;
  setOriginalColorCode: (code: string) => void;
}

export const ColorContext = createContext<ColorContextType>({
  colorClass: "",
  isLoading: false,
  setLoading: () => {},
  setColor: () => {},
  originalColor: "",
  setOriginalColorCode: () => {},
});

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colorClass, setColorClass] =
    useState<keyof typeof ClassToColorMapping>("slate-50");
  const [originalColor, setOriginalColor] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setColor = (color: keyof typeof ClassToColorMapping) => {
    setColorClass(color);
  };

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setOriginalColorCode = (code: string) => {
    setOriginalColor(code);
  };

  return (
    <ColorContext.Provider
      value={{
        colorClass,
        isLoading,
        setColor,
        setLoading,
        originalColor,
        setOriginalColorCode,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
