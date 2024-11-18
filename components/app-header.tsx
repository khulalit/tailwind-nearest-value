import Image from "next/image";
import Logo from "@/assets/logo.webp";
import { SidebarTrigger } from "./ui/sidebar";
import { Github } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full p-1 h-16">
      <div className="rounded-lg p-2 flex items-center justify-between gap-2 bg-stone-900 text-white">
        <SidebarTrigger />
        <Image
          src={Logo}
          width={32}
          height={32}
          alt="Tailwind Matcher"
          className="rounded-full"
        />
        <h1 className="tracking-wide text-2xl font-semibold mr-auto">
          Nearest Tailwind CSS Value Finder
        </h1>
        <Link
          href="https://github.com/khulalit"
          className="bg-teal-600 rounded-full p-2"
        >
          <Github color="white" size="18px" />
        </Link>
      </div>
    </header>
  );
};
