"use client";

import { cn } from "@repo/ui/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { Project } from "./project";

const projects = [
  {
    title: "🔥 flamethrower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga earum ipsum odio, cum aperiam illo tempore corporis ducimus in.",
    demoVideoUrl: "/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
  },
  {
    title: "2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga earum ipsum odio, cum aperiam illo tempore corporis ducimus in.",
    demoVideoUrl: "/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
  },
  {
    title: "3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga earum ipsum odio, cum aperiam illo tempore corporis ducimus in.",
    demoVideoUrl: "/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
  },
  {
    title: "4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga earum ipsum odio, cum aperiam illo tempore corporis ducimus in.",
    demoVideoUrl: "/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
  },
  {
    title: "5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga earum ipsum odio, cum aperiam illo tempore corporis ducimus in.",
    demoVideoUrl: "/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
  },
];

export default function ProjectsPage() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = projects[activeProjectIndex]!;

  return (
    <main className="flex w-3/4 flex-1 items-center justify-center gap-x-4 gap-y-6">
      <div className="flex flex-col items-center gap-y-4">
        <Project
          title={project.title}
          description={project.description}
          demoVideoUrl={project.demoVideoUrl}
          githubUrl={project.githubUrl}
          playgroundUrl={project.playgroundUrl}
        />

        <div className="flex gap-x-3">
          <div
            className="flex cursor-pointer items-center justify-center rounded-full p-1 text-white opacity-0 transition-all hover:opacity-100"
            onClick={() =>
              setActiveProjectIndex(
                (i) => (i - 1 + projects.length) % projects.length,
              )
            }
          >
            <ArrowLeftIcon />
          </div>

          <div className="flex h-[2.5vh] items-center justify-around gap-x-4 rounded-full border-2 border-[#222] bg-[#0f0f0f] p-4">
            {projects.map((_, index) => (
              <Dot
                key={index}
                index={index}
                activeIndex={activeProjectIndex}
                setActiveIndex={setActiveProjectIndex}
              />
            ))}
          </div>

          <div
            className="flex cursor-pointer items-center justify-center rounded-full p-1 text-white opacity-0 transition-all hover:opacity-100"
            onClick={() =>
              setActiveProjectIndex((i) => (i + 1) % projects.length)
            }
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </main>
  );
}

function Dot({
  index,
  activeIndex,
  setActiveIndex,
}: {
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={cn(
        "flex h-[0.5em] w-[0.5em] cursor-pointer rounded-full transition-all duration-300 ease-in-out",
        index === activeIndex ? "scale-110 bg-white" : "scale-100 bg-[#222]",
      )}
    />
  );
}
