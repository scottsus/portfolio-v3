import "./globals.css";

import { Toaster } from "@repo/ui/components/ui/toaster";
import { type Metadata } from "next";

import { Footer } from "../components/footer";
import { Overlay } from "../components/overlay";

export const metadata: Metadata = {
  title: "Scott Susanto",
  description:
    "Just another engineer building AI agents good enough to replace myself",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "og:image", url: "/images/scott-avatar.jpeg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex size-full flex-col items-center">
        <Overlay />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
