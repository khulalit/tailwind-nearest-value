"use client";
import React, { useState } from "react";
import { Check, Clipboard } from "lucide-react";

interface CopyTextWithIconProps {
  text: string;
  className?: string;
}

const CopyTextWithIcon: React.FC<CopyTextWithIconProps> = ({
  text,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer bg-gray-100 text-zinc-800 px-1 w-fit py-1 rounded-md ${className} flex justify-between`}
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      <span className="text-sm font-medium">{text}</span>
      {copied ? (
        <Check className="text-gray-500" size={16} />
      ) : (
        <Clipboard className="text-gray-500" size={16} />
      )}
    </div>
  );
};

export default CopyTextWithIcon;
