import tinycolor from "tinycolor2";

import { ColorToClassMapping } from "@/data/colors";
import { findClosestTailwindColor } from "./main";

export interface TailwindColorPalette {
  shades: string[];
  tints: string[];
  complementary: any;
  analogous: any;
}

export const generateTailwindColorPalette = (
  baseColor: keyof typeof ColorToClassMapping
): TailwindColorPalette => {
  const baseClass = ColorToClassMapping[baseColor];

  if (!baseClass) {
    throw new Error("Base color not found in Tailwind mapping.");
  }

  const [colorFamily, intensity] = baseClass.split("-");

  const shades = [900, 800, 700, 600, 500]
    .filter((level) => parseInt(intensity) <= level)
    .map((level) => `${colorFamily}-${level}`);

  const tints = [400, 300, 200, 100, 50]
    .filter((level) => parseInt(intensity) >= level)
    .map((level) => `${colorFamily}-${level}`);

  const complementaryColor = tinycolor(baseColor).complement().toHexString();
  const analogousColors = tinycolor(baseColor)
    .analogous()
    .map((c) => c.toHexString());

  const complementary = findClosestTailwindColor(complementaryColor);
  const analogous = analogousColors.map(findClosestTailwindColor);

  return {
    shades,
    tints,
    complementary,
    analogous,
  };
};
