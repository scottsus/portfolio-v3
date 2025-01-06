"use client";

import { cn } from "@repo/ui/lib/utils";
import {
  HomeIcon,
  LibraryBigIcon,
  MicroscopeIcon,
  PaletteIcon,
  PenToolIcon,
  TestTubeDiagonalIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

import useWindowSize from "../hooks/use-window-size";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-[5vh] z-[20] flex items-center justify-around rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-2 text-white md:p-4">
      <IconLink href="/" Icon={HomeIcon} pathname={pathname} />
      <IconLink href="/projects" Icon={PaletteIcon} pathname={pathname} />
      <IconLink
        href="https://scottsus.substack.com"
        Icon={PenToolIcon}
        pathname={pathname}
      />
      <IconLink href="/research" Icon={MicroscopeIcon} pathname={pathname} />
      <IconLink
        href="/playground"
        Icon={TestTubeDiagonalIcon}
        pathname={pathname}
      />
      <IconLink href="/library" Icon={LibraryBigIcon} pathname={pathname} />
    </div>
  );
}

function IconLink({
  href,
  Icon,
  pathname,
}: {
  href: string;
  Icon: ComponentType<{ size?: number }>;
  pathname: string;
}) {
  const { isMobile } = useWindowSize();
  const size = isMobile ? 20 : 24;
  const blank = href.startsWith("https://") ? true : false;

  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      className={cn(
        "mx-1 flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]",
        pathname === href ? "bg-[#222]" : "",
      )}
    >
      <Icon size={size} />
    </Link>
  );
}
