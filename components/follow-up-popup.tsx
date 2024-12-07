"use client";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"; // Adjust the import path based on your project structure
import { Github, Twitter } from "lucide-react";
import { TwitterIcon } from "@/icons/twitter-icon";

const FollowPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem("popupLastShown");
    const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD

    if (lastShownDate !== today) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("popupLastShown", today);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <AlertDialog open={showPopup} onOpenChange={handleClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl">
            Follow Me!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            If you find this tool helpful, please consider following me on:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/khulalit"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 size-12 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            <Github />
          </a>
          <a
            href="https://x.com/lalitkhu"
            title="X.com (formally twitter.com)"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center size-12 gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            <TwitterIcon />
          </a>
        </div>
        <AlertDialogFooter>
          <button
            onClick={handleClose}
            className="text-sm text-gray-500  hover:underline mt-4"
          >
            No, thanks
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FollowPopup;
