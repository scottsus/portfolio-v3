import {
  AxeIcon,
  FlameIcon,
  FootprintsIcon,
  MicIcon,
  MousePointerClickIcon,
  TicketsIcon,
} from "lucide-react";

import { Project } from "../project";
import { Sidebar } from "../sidebar";

export default async function ProjectsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project =
    projects.find((p) => p.slug === slug.toLowerCase()) || projects[0];

  return (
    <main className="scrollbar-hide flex h-screen w-11/12 items-start gap-x-4 gap-y-6 py-[3vh] pb-[15vh] lg:w-2/3 lg:pt-[5vh]">
      <div className="w-1/5 pt-[5vh]">
        <Sidebar projects={projects} />
      </div>
      <div className="w-4/5">
        <Project project={project!} />
      </div>
    </main>
  );
}

const projects: Project[] = [
  {
    icon: {
      Icon: MousePointerClickIcon,
      color: "#5A7EFF",
    },
    title: "Surf",
    slug: "surf",
    long: `Surf is a unique take on Claude's computer use via a well-known distribution system - the browser extension.
        Soon any browser-based workflow can be learned and mastered, and outsourced to Surf.
        On a side note, first time working with @chrispramana - engineering becomes effortless when you have a great design + ux partner to brainstorm with.
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias aspernatur facere iusto quam dolores eius incidunt, dolor, omnis, illo adipisci repellendus iure impedit optio qui eum! A, aspernatur nulla!
Aliquid beatae, debitis, saepe veniam, reiciendis eligendi similique fuga excepturi impedit perspiciatis voluptates exercitationem? Voluptatem debitis sint iusto fugiat labore illum ea a, pariatur iure, dicta, consequatur eius laborum rerum.
Necessitatibus eius totam culpa fugit ab quod ad accusantium voluptatem labore laboriosam adipisci iste hic obcaecati natus quae velit, optio qui nobis accusamus nulla illum quas et porro earum. Vero.
Rem accusantium eaque sunt ratione, accusamus iusto placeat minima quibusdam, ipsa atque asperiores? Eveniet temporibus saepe dolores nulla dignissimos aut soluta earum hic, cumque corporis facere rem vero velit iure.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias aspernatur facere iusto quam dolores eius incidunt, dolor, omnis, illo adipisci repellendus iure impedit optio qui eum! A, aspernatur nulla!
Aliquid beatae, debitis, saepe veniam, reiciendis eligendi similique fuga excepturi impedit perspiciatis voluptates exercitationem? Voluptatem debitis sint iusto fugiat labore illum ea a, pariatur iure, dicta, consequatur eius laborum rerum.
Necessitatibus eius totam culpa fugit ab quod ad accusantium voluptatem labore laboriosam adipisci iste hic obcaecati natus quae velit, optio qui nobis accusamus nulla illum quas et porro earum. Vero.
Rem accusantium eaque sunt ratione, accusamus iusto placeat minima quibusdam, ipsa atque asperiores? Eveniet temporibus saepe dolores nulla dignissimos aut soluta earum hic, cumque corporis facere rem vero velit iure.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias aspernatur facere iusto quam dolores eius incidunt, dolor, omnis, illo adipisci repellendus iure impedit optio qui eum! A, aspernatur nulla!
Aliquid beatae, debitis, saepe veniam, reiciendis eligendi similique fuga excepturi impedit perspiciatis voluptates exercitationem? Voluptatem debitis sint iusto fugiat labore illum ea a, pariatur iure, dicta, consequatur eius laborum rerum.
Necessitatibus eius totam culpa fugit ab quod ad accusantium voluptatem labore laboriosam adipisci iste hic obcaecati natus quae velit, optio qui nobis accusamus nulla illum quas et porro earum. Vero.
Rem accusantium eaque sunt ratione, accusamus iusto placeat minima quibusdam, ipsa atque asperiores? Eveniet temporibus saepe dolores nulla dignissimos aut soluta earum hic, cumque corporis facere rem vero velit iure.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias aspernatur facere iusto quam dolores eius incidunt, dolor, omnis, illo adipisci repellendus iure impedit optio qui eum! A, aspernatur nulla!
Aliquid beatae, debitis, saepe veniam, reiciendis eligendi similique fuga excepturi impedit perspiciatis voluptates exercitationem? Voluptatem debitis sint iusto fugiat labore illum ea a, pariatur iure, dicta, consequatur eius laborum rerum.
Necessitatibus eius totam culpa fugit ab quod ad accusantium voluptatem labore laboriosam adipisci iste hic obcaecati natus quae velit, optio qui nobis accusamus nulla illum quas et porro earum. Vero.
Rem accusantium eaque sunt ratione, accusamus iusto placeat minima quibusdam, ipsa atque asperiores? Eveniet temporibus saepe dolores nulla dignissimos aut soluta earum hic, cumque corporis facere rem vero velit iure.
        `,
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
    slug: "deep-clone",
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
    title: "🔥 flamethrower",
    slug: "flamethrower",
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
    slug: "imitation-learning",
    long: `Before openai o1, and while building 🔥 flamethrower, I've always wondered about the feasibility of fine-tuning kan LLM on its own correct reasoning
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
    slug: "hatchet",
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
    slug: "spotlight",
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
