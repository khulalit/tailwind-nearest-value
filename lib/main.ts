import { ClassToColorMapping } from "@/data/colors";
import { PixelsToTailwind } from "@/data/spacing";
import tinycolor from "tinycolor2";

const hexToRgb = (hex: string): [number, number, number] => {
  const color = tinycolor(hex).toRgb();

  return [color.r, color.g, color.b];
};

const colorDistance = (
  rgb1: [number, number, number],
  rgb2: [number, number, number]
): number => {
  return Math.sqrt(
    (rgb1[0] - rgb2[0]) ** 2 +
      (rgb1[1] - rgb2[1]) ** 2 +
      (rgb1[2] - rgb2[2]) ** 2
  );
};

export const findClosestTailwindColor = (inputColor: string): string | null => {
  const inputHex = tinycolor(inputColor).toHexString();
  const inputRgb = hexToRgb(inputHex);

  let closestColor: string | null = null;
  let minDistance: number = Infinity;

  for (const [name, hex] of Object.entries(ClassToColorMapping)) {
    const rgb = hexToRgb(hex);

    const distance = colorDistance(inputRgb, rgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = name;
    }
  }

  return closestColor;
};

// Function to find the nearest Tailwind size
export const findNearestTailwindSize = (inputSize: number): string => {
  let closestSize: string | null = null;
  let minDifference: number = Infinity;

  for (const [px, twSize] of Object.entries(PixelsToTailwind)) {
    const pixelValue = parseInt(px);
    const difference = Math.abs(inputSize - pixelValue);

    if (difference < minDifference) {
      minDifference = difference;
      closestSize = twSize;
    }
  }

  return closestSize || "";
};
