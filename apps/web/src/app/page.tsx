import { cn } from "@repo/ui/lib/utils";
import NextLink from "next/link";

import { SocialIcon } from "../components/social-icon";

export default async function HomePage() {
  return (
    <main className="flex w-11/12 flex-1 flex-col items-center gap-y-6 pt-[20vh] text-[#959595] lg:w-1/2 2xl:w-1/3">
      <div className="flex w-full items-center justify-between lg:flex-col lg:items-start lg:gap-y-3">
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
      </div>

      <p className="w-full">
        Engineer at AWS Redshift; interested in ML and infra; raised in
        Singapore, based in SF/LA; searching for the hardest problems to solve
        in our generation.
      </p>

      <Link
        href="https://aws.amazon.com/events/aws-reinvent-2024-recap/"
        className="w-full"
      >
        <p>
          At Amazon Redshift, our features were among the top highlights of AWS
          re:Invent 2024.
        </p>
      </Link>
      <p className="w-full">
        Combined BS + MS in Computer Engineering & Computer Science from USC
        Viterbi in 2024, research focus on acquisition of unseen knowledge for
        instruct-tuned models, enabling them to learn new things without a
        complete re-pretraining. I also dabbled in robotics and reinforcement
        learning.
      </p>

      <p className="w-full">
        I also interned at <Link href="https://cofactory.ai/">Cofactory</Link>,{" "}
        <Link href="https://aws.amazon.com/rds/aurora/">AWS Aurora</Link>, and{" "}
        <Link href="https://sourcegraph.com/">Sourcegraph</Link>.
      </p>

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
