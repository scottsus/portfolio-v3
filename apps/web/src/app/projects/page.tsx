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
    short: "Equip your browser with AI superpowers",
    long: `Surf is a unique take on Claude's computer use via a well-known distribution system - the browser extension.
    Soon any browser-based workflow can be learned and mastered, and outsourced to Surf.
    On a side note, first time working with @chrispramana - engineering becomes effortless when you have a great design + ux partner to brainstorm with.`,
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
    short: "Speak with the voice of Scott Susanto",
    long: `An infra masterpiece. Turborepo to combine a Next 15 frontend and a FastAPI backend, glued by a Prisma + Postgres ORM.
    I trained a voice agent on ElevenLabs then deployed it. Very proud of this one, you should check it out in the link below.`,
    demoAssetUrl: "/demos/deep-clone.mp4",
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
    short: "Debugging on autopilot with multi-agent LM teams",
    long: `Built this before Cognition released Devin in March 2024 and my favorite project so far. This tested the limits of AI agents in automating the the
    basic [ Write Code → Run Action → Check Logs → Repeat ] engineering flow. It was difficult to achieve consistent results, but will only benefit from
    increased intelligence in the near future. Low hanging fruit: Monte Carlo Tree Search?`,
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
    short: "Teaching a spider to walk using reinforcement learning",
    long: `Before openai o1, and while building 🔥 flamethrower, I've always wondered about the feasibility of fine-tuning an LLM on its own correct reasoning
    chains to reinforce stronger reasoning patterns. This was the first step, which coincided with my interest also in robotics`,
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
    short: "Firefighting safety, reimagined",
    long: `Providing firefighter analytics. Project in beta.`,
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
    short: "Honey for sports and concert tickets",
    long: `Built in junior year, Spotlight got thousands of installs, interviewed by Michael Seibel, final round of Z-Fellows with Cory & Baylor, but learned the hard
    way shipping an app to production requires a strong infra backbone. We were webscraping on demand, leading to: repeated work, skyhigh memory usage, and extremely
    poor ux. What a junior year experience though.`,
    demoAssetUrl: "/demos/spotlight.mp4",
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
