import { cn } from "@repo/ui/lib/utils";
import { Badge } from "~/src/components/badge";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentType } from "react";

export type Project = {
  icon: {
    Icon: ComponentType<{ color?: string; className?: string }>;
    color: string;
  };
  title: string;
  short: string;
  long: string;
  demoAssetUrl: string;
  githubUrl: string;
  playgroundUrl?: string;
  date: string;
  badges: string[];
};

export function Project({
  project,
  projectIndex,
  activeProjectIndex,
  setActiveProjectIndex,
}: {
  project: Project;
  projectIndex: number;
  activeProjectIndex: number;
  setActiveProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const {
    icon,
    title,
    short,
    long,
    demoAssetUrl,
    githubUrl,
    playgroundUrl,
    date,
  } = project;
  const { Icon, color } = icon;
  const isVideo = demoAssetUrl.endsWith(".mp4");
  const isSelected = activeProjectIndex === projectIndex;

  return (
    <motion.div
      className={cn(
        "flex size-full flex-col rounded-lg bg-[#1C1C1C] p-4 shadow-md shadow-black/50 transition-all lg:p-5",
        !isSelected
          ? "cursor-pointer brightness-100 hover:brightness-125"
          : "brightness-125",
      )}
      onClick={() =>
        setActiveProjectIndex((activeProjectIndex) =>
          activeProjectIndex === projectIndex ? -1 : projectIndex,
        )
      }
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * projectIndex, duration: 0.4 }}
    >
      {/* add loader */}
      {isSelected && (
        <div
          key="demoAsset"
          className="relative mb-3 w-full overflow-hidden rounded-lg bg-red-500"
        >
          {isVideo ? (
            <>
              <video
                className="absolute inset-0 h-full w-full object-cover blur-lg filter"
                src={demoAssetUrl}
                muted
              />
              <video
                className="relative z-10 h-full w-full object-contain"
                src={demoAssetUrl}
                autoPlay
                loop
                muted
                playsInline
              />
            </>
          ) : (
            <>
              <img
                className="absolute inset-0 h-full w-full object-cover blur-lg filter"
                src={demoAssetUrl}
                alt="Demo Video"
              />
              <img
                className="relative z-10 h-full w-full object-contain"
                src={demoAssetUrl}
                alt="Demo Video"
              />
            </>
          )}
        </div>
      )}

      <div
        key="text"
        className={cn(
          "flex flex-col items-start p-1",
          isSelected ? "w-full" : "w-full",
        )}
      >
        <div className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="flex items-center">
            <Icon color={color} className="mr-1" />
            <h2 className="text-xl text-white">{title}</h2>
          </div>
          <p className="py-1 text-xs text-[#919191] lg:p-0 lg:text-sm">
            {date}
          </p>
        </div>
        <p className="text-md my-1 text-[#959595]">{short}</p>
        <div className="scrollbar-hide mx-2 flex w-full items-center gap-x-2 overflow-x-scroll">
          {project.badges.map((badge) => (
            <Badge key={badge} name={badge} />
          ))}
        </div>

        {isSelected && (
          <div
            key="long"
            className="mt-3 flex w-full flex-col gap-y-2 text-white"
          >
            <p className="text-sm lg:text-base">{long}</p>
            <div className="mx-auto mt-6 flex gap-x-4 text-white">
              <Link
                href={githubUrl}
                className="flex items-center gap-x-2 rounded-md border px-5 py-1 transition-all hover:bg-gray-800 lg:px-10 lg:py-2"
                target="_blank"
              >
                <Image
                  src="/logos/github.svg"
                  alt="Github"
                  width={20}
                  height={20}
                />
                <p>GitHub</p>
              </Link>
              {playgroundUrl && (
                <Link
                  href={githubUrl}
                  className="flex items-center gap-x-2 rounded-md border px-4 py-1 transition-all hover:bg-gray-800 lg:px-8 lg:py-2"
                  target="_blank"
                >
                  <SparklesIcon />
                  <p>Try it out</p>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
