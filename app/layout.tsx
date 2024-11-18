import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/app-header";

import { ColorProvider } from "@/contexts/app-color-context";
import { SizeProvider } from "@/contexts/app-size-context";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tailwind Utility Finder",
  description:
    "Easily find the nearest Tailwind CSS classes for colors, spacing, widths, and heights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-zinc-800`}>
        <ColorProvider>
          <SizeProvider>
            <div className="max-w-screen max-h-screen overflow-auto rounded-lg bg-white">
              <SidebarProvider>
                <Header />
                <AppSidebar />
                <main className="w-full b-red-500">{children}</main>
              </SidebarProvider>
            </div>
          </SizeProvider>
        </ColorProvider>
      </body>
    </html>
  );
}
