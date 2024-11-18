"use client";
import { PreviewSize } from "@/components/preveiw-size";
import { SizeInput } from "@/components/size-input";
import { SizeContext } from "@/contexts/app-size-context";
import { useContext } from "react";

const SizePage = () => {
  const { sizeClass, originalSize }: any = useContext(SizeContext);
  return (
    <div className="mt-16">
      <SizeInput />
      <PreviewSize
        width={sizeClass}
        originalWidth={originalSize}
        key="unique"
      />
    </div>
  );
};

export default SizePage;
