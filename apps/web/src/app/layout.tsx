import "./globals.css";

import { Toaster } from "@repo/ui/components/ui/toaster";
import { type Metadata } from "next";

import { Navbar } from "../components/navbar";
import { Overlay } from "../components/overlay";

export const metadata: Metadata = {
  title: "Scott Susanto",
  description: "Conversational voice cloning",
  icons: [{ rel: "icon", url: "/github.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen w-full flex-col items-center">
        <Overlay />
        <Toaster />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
