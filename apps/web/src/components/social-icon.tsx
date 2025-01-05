"use client";

import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import Link from "next/link";

import useWindowSize from "../hooks/use-window-size";

export function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  const { isMobile } = useWindowSize();
  const size = 20;

  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "mx-[0.35em] brightness-0 invert filter transition-all hover:brightness-100 hover:invert-0",
        isMobile ? "mr-1" : "mr-2",
      )}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </Link>
  );
}
