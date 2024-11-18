// @ts-nocheck
"use client";
import React, { useContext } from "react";
import { ColorInput } from "./color-input";
import { Preview } from "./preview-area";
import ColorPalette from "./color-palatte";
import { ColorContext, ColorContextType } from "@/contexts/app-color-context";
import { ClassToColorMapping } from "@/data/colors";

export const MainArea = () => {
  const { colorClass, originalColor } = useContext(ColorContext);
  return (
    <div className="mt-16 text-center">
      <ColorInput />
      {colorClass && (
        <Preview originalColor={originalColor} backgroundColor={colorClass} />
      )}

      {colorClass && (
        <ColorPalette baseColor={ClassToColorMapping[colorClass]} />
      )}
    </div>
  );
};
