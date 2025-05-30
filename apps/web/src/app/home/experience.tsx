import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Experience = {
  filepath: string;
  backgroundColor: string;
  company: string;
  description: string;
  url: string;
};

export function Experiences() {
  const experiences: Experience[] = [
    {
      filepath: "prime-video.svg",
      backgroundColor: "#1b5686",
      company: "Amazon Prime Video",
      description: "Building a SOTA Data Lakehouse",
      url: "https://www.primevideo.com",
    },
    {
      filepath: "hatchet.svg",
      backgroundColor: "#381C10",
      company: "Hatchet",
      description: "Firefighting analytics",
      url: "https://tryhatchet.com",
    },
    {
      filepath: "x-ai.svg",
      backgroundColor: "#000",
      company: "xAI",
      description: "Grokking Grok",
      url: "https://x.ai",
    },
    {
      filepath: "atlas.svg",
      backgroundColor: "#000",
      company: "Atlas",
      description: "Product Engineering",
      url: "https://atlas.org",
    },
    {
      filepath: "cofactory.svg",
      backgroundColor: "#000",
      company: "Cofactory",
      description: "AI Engineering",
      url: "https://cofactory.ai",
    },
    {
      filepath: "apriora.svg",
      backgroundColor: "#E5E6F4",
      company: "Apriora (YC W24)",
      description: "Infra Engineering",
      url: "https://apriora.ai",
    },
    {
      filepath: "aws.svg",
      backgroundColor: "#242C3F",
      company: "Amazon Web Services",
      description: "Systems Engineering",
      url: "https://aws.com",
    },
    {
      filepath: "sourcegraph.svg",
      backgroundColor: "#000",
      company: "Sourcegraph",
      description: "Backend Engineering",
      url: "https://sourcegraph.com",
    },
    {
      filepath: "usc.svg",
      backgroundColor: "#fff",
      company: "University of Southern California",
      description: "Computer Engineering & Computer Science",
      url: "https://viterbischool.usc.edu/",
    },
  ];

  return (
    <div className="my-4 flex w-full flex-col items-start gap-y-5">
      {experiences.map((exp, idx) => (
        <Experience
          key={idx}
          experience={exp}
          isLast={idx === experiences.length - 1}
        />
      ))}
    </div>
  );
}

function Experience({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast: boolean;
}) {
  const { filepath, backgroundColor, company, description, url } = experience;

  return (
    <div className={cn("flex items-center gap-x-4", isLast && "mt-8")}>
      <LogoBox
        filepath={filepath}
        backgroundColor={backgroundColor}
        url={url}
      />
      <div className="flex flex-col">
        <p className="font-medium text-white">{company}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

function LogoBox({
  filepath,
  backgroundColor,
  url,
}: {
  filepath: string;
  backgroundColor: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md p-2 transition-all duration-300 hover:brightness-125"
      style={{ backgroundColor }}
    >
      <Image
        src={`/logos/${filepath}`}
        alt="alt"
        width={30}
        height={30}
        className="rounded-sm"
      />
    </Link>
  );
}
