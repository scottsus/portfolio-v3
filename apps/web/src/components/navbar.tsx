"use client";

import { cn } from "@repo/ui/lib/utils";
import {
  HomeIcon,
  MicroscopeIcon,
  PaletteIcon,
  PenToolIcon,
  TestTubeDiagonalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mb-[5vh] flex items-center justify-around gap-x-2 rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-4 text-white">
      <IconLink href="/" Icon={HomeIcon} pathname={pathname} />
      <IconLink href="/projects" Icon={PaletteIcon} pathname={pathname} />
      <IconLink href="/blog" Icon={PenToolIcon} pathname={pathname} />
      <IconLink href="/research" Icon={MicroscopeIcon} pathname={pathname} />
      <IconLink
        href="/playground"
        Icon={TestTubeDiagonalIcon}
        pathname={pathname}
      />

      <div className="mx-2 h-[2rem] w-[0.17rem] rounded-full bg-white" />

      <SocialIcon
        href="https://linkedin.com/in/susantoscott"
        src="/logos/linkedin.svg"
        alt="LinkedIn"
      />
      <SocialIcon
        href="https://github.com/scottsus"
        src="/logos/github.svg"
        alt="GitHub"
      />
      <SocialIcon
        href="https://huggingface.co/scottsus"
        src="/logos/huggingface.svg"
        alt="Huggingface"
      />
      <SocialIcon
        href="https://x.com/susantoscott"
        src="/logos/x.svg"
        alt="X"
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

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="mx-1 brightness-0 invert filter transition-all hover:brightness-100 hover:invert-0"
    >
      <Image src={src} alt={alt} width={26} height={26} />
    </Link>
  );
}
