import { cn } from "@repo/ui/lib/utils";
import { Badge } from "~/src/components/badge";
import { AnimatePresence, motion } from "framer-motion";
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
  description: string;
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
    description,
    demoAssetUrl,
    githubUrl,
    playgroundUrl,
    date,
  } = project;
  const { Icon, color } = icon;
  const isVideo = demoAssetUrl.endsWith(".mp4");
  const isSelected = activeProjectIndex === projectIndex;

  return (
    <AnimatePresence initial={false}>
      <div
        className={cn(
          "flex size-full h-full rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-2 transition-all",
          !isSelected ? "cursor-pointer hover:brightness-125" : "",
        )}
        onClick={() => setActiveProjectIndex(projectIndex)}
      >
        {isSelected && (
          <div
            key="demoAsset"
            className="relative mb-3 w-2/5 overflow-hidden rounded-lg"
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
          key="description"
          className={cn(
            "flex flex-col items-start p-4",
            isSelected ? "w-3/5" : "w-full",
          )}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <Icon color={color} className="mr-1" />
              <h2 className="text-xl text-white">{title}</h2>
            </div>
            <p className="text-sm text-[#919191]">{date}</p>
          </div>
          <p className="text-md my-1 text-[#959595]">{description}</p>
          <div className="scrollbar-hide mx-2 flex w-full items-center gap-x-2 overflow-x-scroll">
            {project.badges.map((badge) => (
              <Badge key={badge} name={badge} />
            ))}
          </div>

          {isSelected && (
            <motion.div
              key="buttons"
              className="flex flex-col gap-y-2 p-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                amet natus ullam est impedit commodi consequatur iusto, error
                veritatis, minima modi quibusdam. Reprehenderit ad fugiat,
                voluptatum aspernatur amet culpa animi? Aliquid iste nisi
                perspiciatis neque expedita velit autem, minima qui fu
              </p>
              <div className="mx-auto mt-6 flex gap-x-4 text-white">
                <Link
                  href={githubUrl}
                  className="flex items-center gap-x-2 rounded-md border px-10 py-2 transition-all hover:bg-gray-800"
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
                    className="flex items-center gap-x-2 rounded-md border px-8 py-2 transition-all hover:bg-gray-800"
                    target="_blank"
                  >
                    <SparklesIcon />
                    <p>Try it out</p>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
