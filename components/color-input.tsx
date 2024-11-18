"use client";
import { MouseEventHandler, useContext, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { findClosestTailwindColor } from "@/lib/main";
import { ColorContext } from "@/contexts/app-color-context";

export const ColorInput = () => {
  const { setColor, setOriginalColorCode }: any = useContext(ColorContext);

  const [input, setInput] = useState("#64748b");

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      alert("Please provide any hex color");
    }

    const nearestColor = findClosestTailwindColor(input);

    setColor(nearestColor);
    setOriginalColorCode(input);
  };

  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Enter Hex code of the color
      </h2>

      <div className="flex gap-4 items-center w-64 mx-auto">
        <Input
          type="text"
          className=""
          placeholder="#"
          value={input}
          onChange={(e: any): void => {
            setInput(e.target.value);
          }}
        />
      </div>

      <Button className="mx-auto my-8" onClick={handleClick}>
        Get the tailwind class
      </Button>
    </div>
  );
};
