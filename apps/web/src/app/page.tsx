"use client";

import { cn } from "@repo/ui/lib/utils";
import { motion } from "framer-motion";
import NextLink from "next/link";

import { SocialIcon } from "../components/social-icon";
import { Experiences } from "./home/experience";

export default function HomePage() {
  return (
    <main className="flex w-11/12 flex-1 flex-col items-center gap-y-6 pb-[10vh] pt-[10vh] text-[#959595] lg:w-1/2 2xl:w-1/3">
      <AnimatedBlock
        key="name"
        className="mb-4 flex w-full items-center justify-between lg:flex-col lg:items-start lg:gap-y-4"
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

      <AnimatedBlock key="aws" delay={0.7}>
        <p className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          blanditiis provident fugit non vel voluptate aspernatur, repellat
          fuga. Commodi reprehenderit sint nisi excepturi perferendis ipsam
          asperiores veniam eveniet eius non?
        </p>
      </AnimatedBlock>

      <AnimatedBlock key="experience" delay={1.3}>
        <p className="w-full">
          Since you&apos;re here, do check out some cool (nerd){" "}
          <Link href="/projects">
            <span>projects</span>
          </Link>
          , my{" "}
          <Link href="https://scottsus.substack.com">
            <span>blog</span>
          </Link>
          , or contact me at{" "}
          <Link href="mailto:susantoscott@gmail.com">
            <span>susantoscott@gmail.com</span>
          </Link>
          .
        </p>
      </AnimatedBlock>

      <AnimatedBlock key="experiences" delay={1.6}>
        <h3 className="text-lg font-semibold text-white">Experiences</h3>
        <Experiences />
      </AnimatedBlock>
    </main>
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
