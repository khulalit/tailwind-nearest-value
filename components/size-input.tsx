"use client";
import { MouseEventHandler, useContext, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { findNearestTailwindSize } from "@/lib/main";

import { SizeContext } from "@/contexts/app-size-context";

export const SizeInput = () => {
  const { setSize, setOriginalSize }: any = useContext(SizeContext);

  const [input, setInput] = useState("24px");

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      alert("Please provide size");
    }

    const cleanedNumber = !isNaN(Number(input.replace("px", "")))
      ? Number(input.replace("px", ""))
      : 0;

    const nearestNumber = findNearestTailwindSize(cleanedNumber);
    console.log(nearestNumber);
    setSize(nearestNumber);
    setOriginalSize(input);
  };

  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Enter the size in pixel
      </h2>

      <div className="flex gap-4 items-center w-64 mx-auto">
        <Input
          type="text"
          className=""
          placeholder="px"
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
