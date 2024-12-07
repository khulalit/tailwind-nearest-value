"use client";
import { Calendar, Home, Inbox } from "lucide-react";
import Logo from "@/assets/logo.webp";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Find near color",
    url: "/",
    icon: Home,
  },
  {
    title: "Find near size",
    url: "size",
    icon: Inbox,
  },
  {
    title: "About",
    url: "about",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const { toggleSidebar, state } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    if (state === "expanded") toggleSidebar();
  }, [pathname]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            <Image
              src={Logo}
              width={16}
              height={16}
              alt="Tailwind Matcher"
              className="rounded-full"
            />
            <SidebarTrigger />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
