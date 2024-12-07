import { TwitterIcon } from "@/icons/twitter-icon";
import { Github } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center">
        About Tailwind Nearest Value Finder
      </h1>
      <p className="text-lg leading-relaxed">
        Welcome to the <strong>Tailwind Nearest Value Finder</strong>! This tool
        is built to make your development process smoother by helping you find
        the closest Tailwind CSS utility classes for any given value. Whether
        you're tweaking spacing, colors, or any other styles, our app ensures
        you can quickly translate raw values into Tailwind's utility classes.
      </p>

      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Nearest Value Finder:</strong> Input any value and get the
          closest Tailwind utility class.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> A clean, modern design to
          enhance usability.
        </li>
        <li>
          <strong>Responsive Design:</strong> Optimized for both desktop and
          mobile users.
        </li>
      </ul>

      {/* <h2 className="text-2xl font-semibold">Upcoming Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Tailwind Config Maker:</strong> Customize and generate your
          own Tailwind configuration visually.
        </li>
        <li>
          <strong>Theme Creator:</strong> Build and preview custom Tailwind
          themes with ease.
        </li>
        <li>
          <strong>Enhanced Integrations:</strong> More features to streamline
          your Tailwind workflow.
        </li>
      </ul> */}

      <div className="text-center border-t pt-6">
        <h2 className="text-2xl font-semibold">Follow Me!</h2>
        <p className="text-gray-700 mb-4">
          If you enjoy using this tool, please consider following me on GitHub
          and Twitter for more updates and projects.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
