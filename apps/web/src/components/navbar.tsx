"use client";

import { cn } from "@repo/ui/lib/utils";
import {
  BriefcaseIcon,
  EllipsisIcon,
  HomeIcon,
  LinkedinIcon,
  MicroscopeIcon,
  PaletteIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mb-[5vh] flex items-center justify-around gap-x-2 rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-4 text-white">
      <IconLink href="/" Icon={HomeIcon} pathname={pathname} />
      <IconLink href="/experiences" Icon={BriefcaseIcon} pathname={pathname} />
      <IconLink href="/projects" Icon={PaletteIcon} pathname={pathname} />
      <IconLink href="/research" Icon={MicroscopeIcon} pathname={pathname} />
      <IconLink href="/" Icon={EllipsisIcon} pathname={pathname} />
      <div className="mx-2 h-[2rem] w-[0.17rem] rounded-full bg-white" />
      <IconLink
        href="https://linkedin.com/in/susantoscott"
        Icon={LinkedinIcon}
        pathname={pathname}
        blank
      />
      <IconLink
        href="https://x.com/susantoscott"
        Icon={TwitterIcon}
        pathname={pathname}
        blank
      />
    </div>
  );
}

function IconLink({
  href,
  Icon,
  size = 24,
  pathname,
  blank = false,
}: {
  href: string;
  Icon: ComponentType<{ size?: number }>;
  pathname: string;
  size?: number;
  blank?: boolean;
}) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]",
        pathname === href ? "bg-[#222]" : "",
      )}
    >
      <Icon size={size} />
    </Link>
  );
}
