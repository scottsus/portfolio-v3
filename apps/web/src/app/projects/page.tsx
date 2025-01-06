"use client";

import {
  AxeIcon,
  FlameIcon,
  FootprintsIcon,
  MicIcon,
  MousePointerClickIcon,
  TicketsIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Project } from "./project";

const projects: Project[] = [
  {
    icon: {
      Icon: MousePointerClickIcon,
      color: "#5A7EFF",
    },
    title: "Surf",
    description: "Equip your browser with AI superpowers",
    demoAssetUrl: "/demos/surf.mp4",
    githubUrl: "https://github.com/scottsus/majordomo",
    playgroundUrl: "https://github.com/scottsus/flamethrower",
    date: "January 2025 - present",
    badges: ["turborepo", "vite", "react"],
  },
  {
    icon: {
      Icon: MicIcon,
      color: "#5A7EFF",
    },
    title: "Deep Clone",
    description: "Speak with the voice of Scott Susanto",
    demoAssetUrl: "/demos/surf.mp4",
    githubUrl: "https://github.com/scottsus/deep-clone",
    playgroundUrl: "https://deep-clone.web.vercel.app",
    date: "October 2024 - December 2024",
    badges: ["turborepo", "nextjs", "python", "prisma", "postgres", "docker"],
  },
  {
    icon: {
      Icon: FlameIcon,
      color: "#FF6154",
    },
    title: "flamethrower",
    description: "Debugging on autopilot with multi-agent LM teams",
    demoAssetUrl: "/demos/flamethrower.mp4",
    githubUrl: "https://github.com/scottsus/flamethrower",
    date: "December 2023 - February 2024",
    badges: ["python", "poetry"],
  },
  {
    icon: {
      Icon: FootprintsIcon,
      color: "#F06C00",
    },
    title: "Imitation Learning",
    description: "Teaching a spider to walk using reinforcement learning",
    demoAssetUrl: "/demos/imitation-learning.gif",
    githubUrl: "https://github.com/scottsus/flamethrower",
    date: "February 2024 - April 2024",
    badges: ["python", "pytorch"],
  },
  {
    icon: {
      Icon: AxeIcon,
      color: "#ED7D31",
    },
    title: "Hatchet",
    description: "Firefighting safety, reimagined",
    demoAssetUrl: "/demos/hatchet.gif",
    githubUrl: "https://github.com/scottsus/hatchet",
    playgroundUrl: "https://tryhatchet.com",
    date: "April 2024 - current",
    badges: ["swift"],
  },
  {
    icon: {
      Icon: TicketsIcon,
      color: "#4A20FD",
    },
    title: "Spotlight",
    description: "Honey for sports and concert tickets",
    demoAssetUrl: "/demos/hatchet.gif",
    githubUrl: "https://github.com/scottsus/spotlight-frontend",
    playgroundUrl:
      "https://chromewebstore.google.com/detail/spotlight-ticket-price-co/eoiphenpdjlfgnmokccmeiopgoeddboe",
    date: "October 2022 - May 2023",
    badges: ["vite", "react", "puppeteer"],
  },
];

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ projectId: string }>;
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const { projectId } = await searchParams;
      const initialProject = parseInt(projectId ?? "0");
      setActiveProjectIndex(initialProject);
    })();
  }, [searchParams]);

  return (
    <main className="scrollbar-hide flex h-screen w-11/12 flex-1 flex-col items-center gap-x-4 gap-y-6 overflow-y-scroll py-[3vh] pb-[15vh] lg:w-1/2 lg:pt-[10vh]">
      {projects.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          projectIndex={index}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
        />
      ))}
    </main>
  );
}
