"use client";

import { Button } from "@repo/ui/components/ui/";
import { cn } from "@repo/ui/lib/utils";
import { motion } from "framer-motion";
import { WandSparklesIcon } from "lucide-react";
import NextLink from "next/link";

import { SocialIcon } from "../components/social-icon";
import { Experiences } from "./home/experience";
import { Highlight } from "./home/highlight";
import { MachineLearning } from "./home/machine-learning";
import { Projects } from "./home/project";

export default function HomePage() {
  return (
    <main className="flex w-11/12 max-w-[720px] flex-1 flex-col items-center gap-y-6 pb-[10vh] pt-[8vh] text-[#959595] md:w-2/3">
      <AnimatedBlock
        key="name"
        className="mb-4 flex w-full flex-col items-start justify-between gap-y-4"
        delay={0.2}
      >
        <h1 className="text-start text-3xl font-semibold text-[#ececec] md:text-5xl">
          Scott Susanto
        </h1>
        <div className="flex">
          <SocialIcon
            href="https://linkedin.com/in/susantoscott"
            src="/logos/linkedin.svg"
            alt="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/scottsus"
            src="/logos/github-colored.svg"
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
      </AnimatedBlock>

      <AnimatedBlock key="just" delay={0.3}>
        <p className="w-full">
          Just another engineer building AI agents good enough to replace
          myself.
        </p>
      </AnimatedBlock>

      <AnimatedBlock key="intersection" delay={0.4}>
        <p>
          Deeply care about the intersection between AI engineering and ML
          research. Set on building browser agents that can navigate the AWS
          website, code agents that can rewrite my entire codebase in rust, and
          models that escape Mt Moon.
        </p>
      </AnimatedBlock>

      <AnimatedBlock key="experience" delay={0.5}>
        <p className="w-full">
          If there&apos;s one thing I wanna do without AI, however ironic,
          it&apos;s{" "}
          <Link href="https://scottsus.substack.com">
            <span>writing</span>
          </Link>{" "}
          - come dive deep into my world. Or, stay, and explore some nerd stuff.
        </p>
      </AnimatedBlock>

      <AnimatedBlock key="multimodal" delay={0.8}>
        <Heading text="Multimodal AI" />
        <p>
          A coding agent, browser agent, conversational audio agent - collecting
          my AI infinity stones. In all seriousness, spent a ton of time
          building these, check them out
        </p>
        <Highlight
          title="Surf"
          description="CUA as a browser extension, available on the Chrome store"
          assetUrl="/demos/surf.mp4"
          githubUrl="https://github.com/scottsus/surf"
        />
        <Highlight
          title="🔥 flamethrower"
          description="Your shell, with AI superpowers - 18 months before Claude Code and OpenAI Codex"
          assetUrl="/demos/flamethrower.mp4"
          githubUrl="https://github.com/scottsus/flamethrower"
        />
        <p>This last one is pretty cool; you can try it out right now 👇</p>
        <Link
          href="https://deep-clone-web.vercel.app/scottsus"
          className="mx-auto mt-1"
        >
          <Button
            variant="secondary"
            className="font-semibold hover:bg-[#FE8D59] hover:text-white"
          >
            <div className="flex items-center gap-x-1">
              <p>Let&apos;s chat</p>
              <WandSparklesIcon size={24} />
            </div>
          </Button>
        </Link>
      </AnimatedBlock>

      <AnimatedBlock key="machine-learning" delay={1.0}>
        <Heading text="Machine Learning" />
        <p>
          AI engineering is cool, but I&apos;m deeply passionate about the
          research that goes behind it. Ilya Sutskever, Geoffrey Hinton, Alex
          Krizhevsky: it&apos;s truly their shoulders the modern world is
          standing atop of.
        </p>
        <MachineLearning
          papers={[
            {
              title: "Perpetual",
              abstract: `Can instruct-tuned models learn new things? In this work we explore a novel technique inspired by human ways of learning new facts, 
              utilizing both raw information and flashcard-style questions, attempting to teach instruct-tuned models new information without losing their 
              conversational behavior. We observe that Mamba-2.8b can in fact learn new factual knowledge while still retaining assistant behavior, confirming 
              our initial hypothesis that instruct-tuned models can indeed continue to learn `,
              githubUrl: "https://github.com/scottsus/Perpetual",
              paperUrl:
                "https://github.com/scottsus/Perpetual/blob/dev/Can_Instruct-Tuned_Models_Learn_New_Things.pdf",
            },
            {
              title: "MedTranslate",
              abstract: `This work explores the simplification of medical texts to improve health literacy, especially in under-resourced regions.
              The study uses the MedEasi corpus and the ctrlSIM model, employing a T5-Large model for simplification. To address computational limitations 
              in third-world healthcare settings, a novel knowledge distillation approach is used, with a T5-Small model as a student model emulating the 
              T5-Large teacher model, with performance of the student model evaluated using various metrics, including SARI, ROUGE scores, and readability 
              tests. While conventional metrics show satisfactory results, human evaluations reveal that the student model sometimes fails to simplify complex 
              medical jargon.`,
              githubUrl: "https://github.com/scottsus/MedTranslate",
              paperUrl:
                "https://github.com/scottsus/MedTranslate/blob/main/CS_544_Final_Report.pdf",
            },
            {
              title: "TrashCNN",
              abstract: `Recycling is a well known solution to saving landfill space, however, the sorting of trash is certainly a nontrivial process. Sorting 
              recyclables before reaching the recycling facility is crucial for effective recycling as it keeps costs down by preventing clogged machinery and 
              the need of manual sorting in the facilities. If contaminants were to pass, the final product would be deemed unsatisfactory and thrown into the 
              landfill rather than being reused. This experiment's purpose is to help improve models designed to classify six different forms of waste: glass, 
              cardboard, metal, paper, plastic and trash.`,
              githubUrl: "https://github.com/scottsus/TrashCNN",
              paperUrl:
                "https://github.com/scottsus/TrashCNN/blob/main/Final_Report.pdf",
            },
          ]}
        />
      </AnimatedBlock>

      <AnimatedBlock key="projects" delay={1.2}>
        <Heading text="Misc" />
        <p>
          Hackathon projects, Lava demos, and templates you might find useful
        </p>
        <Projects
          projects={[
            {
              title: "Med-GT",
              description:
                "An implementation of MedTranslate - winner of LA Hacks 2024 🏆",
              githubUrl: "https://github.com/scottsus/Med-GT",
            },
            {
              title: "Spotlight",
              description:
                "The Expedia for sports & concert tickets 🎫 now on the Chrome Store",
              githubUrl: "https://github.com/scottsus/spotlight",
            },
            {
              title: "Everything Monorepo",
              description:
                "Next.js frontend, Dockerized FastAPI backend, Prisma/Drizzle ORM, Postgres",
              githubUrl: "https://github.com/scottsus/everything-monorepo",
            },
            {
              title: "Dotfiles",
              description:
                "A collection of useful dotfiles for your zsh, vim, tmux, iTerm, etc...",
              githubUrl: "https://github.com/scottsus/dotfiles",
            },
          ]}
        />
      </AnimatedBlock>

      <AnimatedBlock key="experiences" delay={1.4}>
        <Heading text="Experiences" />
        <Experiences />
      </AnimatedBlock>
    </main>
  );
}

function Heading({ text }: { text: string }) {
  const id = text.toLowerCase().replace(/\s+/g, "-");

  return (
    <h3
      id={id}
      className="mt-8 scroll-mt-[12vh] text-xl font-semibold text-white"
    >
      <a href={`#${id}`} className="hover:text-[#FE8D59]">
        {text}
      </a>
    </h3>
  );
}

function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const blank = href.startsWith("https://") ? true : false;

  return (
    <NextLink
      href={href}
      className={cn("text-white hover:text-[#FE8D59]", className)}
      target={blank ? "_blank" : "_self"}
    >
      {children}
    </NextLink>
  );
}

function AnimatedBlock({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={
        className === undefined ? "flex w-full flex-col gap-y-6" : className
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
