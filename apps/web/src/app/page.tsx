import { cn } from "@repo/ui/lib/utils";
import { FlameIcon, MicIcon, TicketsIcon } from "lucide-react";
import NextLink from "next/link";

export default async function HomePage() {
  return (
    <main className="flex w-11/12 flex-1 flex-col items-center justify-center gap-y-6 text-[#959595] lg:w-1/2 2xl:w-1/4">
      <h1 className="w-full text-start text-5xl font-semibold text-[#ececec]">
        Scott Susanto
      </h1>
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
          At Redshift, our features were among the top highlights of AWS
          re:Invent 2024.
        </p>
      </Link>
      <p className="w-full">
        Combined BS + MS in Computer Engineering & Computer Science from USC
        Viterbi in 2024. My research was focused on the acquisition of unseen
        knowledge for instruct-tuned models, enabling them to learn new things
        without a complete re-pretraining. I also dabbled in robotics and
        reinforcement learning.
      </p>
      <p className="w-full">
        Besides research, I also enjoy building cool (nerd) stuff:
      </p>
      <ul className="w-full pl-4">
        <li className="my-1 flex items-start">
          <FlameIcon className="mr-2 mt-1" color="#FF6154" />
          <p>
            <Link href="/projects?projectId=1">flamethrower</Link>: codegen
            agent released before Cognition Devin's initial release in March
          </p>
        </li>
        <li className="my-1 flex items-start">
          <TicketsIcon className="mr-2 mt-1" color="#4A20FF" />
          <p>
            <Link href="/projects?projectId=4">Spotlight</Link>: ticket price
            comparison browser extension that got thousands of downloads
          </p>
        </li>
        <li className="my-1 flex items-start">
          <MicIcon className="mr-2 mt-1" color="#FAD075" />
          <p>
            <Link href="/projects?projectId=1">Deep Clone</Link>: ElevenLabs
            professional voice cloning with actual infra & deployment
          </p>
        </li>
      </ul>
      <p className="w-full">
        I also was a previous intern at Cofactory, Amazon Aurora, and
        Sourcegraph.
      </p>
    </main>
  );
}

export function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NextLink
      href={href}
      className={cn("text-white hover:text-blue-400", className)}
    >
      {children}
    </NextLink>
  );
}
