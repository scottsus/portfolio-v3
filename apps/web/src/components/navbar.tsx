"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import { cn } from "@repo/ui/lib/utils";
import {
  DrillIcon,
  FileTextIcon,
  HomeIcon,
  LibraryBigIcon,
  MicroscopeIcon,
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
    <div className="fixed bottom-[5vh] z-[20] flex items-center justify-between rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-2 text-white md:p-4">
      <IconLink
        href="/"
        Icon={HomeIcon}
        description="Home"
        pathname={pathname}
      />
      <IconLink
        href="/projects"
        Icon={DrillIcon}
        description="Projects"
        pathname={pathname}
      />
      <IconLink
        href="https://scottsus.substack.com"
        Icon={PenToolIcon}
        description="Blog"
        pathname={pathname}
      />
      <IconLink
        href="/research"
        Icon={MicroscopeIcon}
        description="Research"
        pathname={pathname}
      />
      <IconLink
        href="/playground"
        Icon={TestTubeDiagonalIcon}
        description="Playground"
        pathname={pathname}
      />
      <IconLink
        href="/library"
        Icon={LibraryBigIcon}
        description="Library"
        pathname={pathname}
      />
      <IconLink
        href="https://docs.google.com/document/d/1Yce8F7U8oqhexGJ2p-hxDdvZAD8q6YmkFh_nvR0YkJM/edit?tab=t.0"
        Icon={FileTextIcon}
        description="Resume"
        pathname={pathname}
      />
    </div>
  );
}

function IconLink({
  href,
  Icon,
  description,
  pathname,
}: {
  href: string;
  Icon: ComponentType<{ size?: number }>;
  description: string;
  pathname: string;
}) {
  const { isMobile } = useWindowSize();
  const size = isMobile ? 20 : 24;
  const blank = href.startsWith("https://") ? true : false;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-pointer">
          <Link
            href={href}
            target={blank ? "_blank" : "_self"}
            className={cn(
              "mx-1 flex items-center justify-center rounded-lg bg-transparent p-2 hover:bg-[#222]",
              pathname === href ? "bg-[#222]" : "",
            )}
          >
            <Icon size={size} />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="mb-1 border-none bg-[#222]">
          <p className="text-white">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
