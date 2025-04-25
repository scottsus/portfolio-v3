import { cn } from "@repo/ui/lib/utils";
import { GithubIcon, LayersIcon } from "lucide-react";
import Link from "next/link";

type Paper = {
  title: string;
  abstract: string;
  githubUrl: string;
  paperUrl: string;
};
export function MachineLearning({ papers }: { papers: Paper[] }) {
  return (
    <div>
      {papers.map((paper, idx) => (
        <Paper key={idx} paper={paper} isLast={idx === papers.length - 1} />
      ))}
    </div>
  );
}

export function Paper({ paper, isLast }: { paper: Paper; isLast: boolean }) {
  const { title, abstract, githubUrl, paperUrl } = paper;

  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-y-4 rounded-lg border-[3px] border-[#414141] p-8 hover:brightness-125",
        isLast ? "mb-0" : "mb-8",
      )}
    >
      <h4 className="mb-1 text-lg text-white">{title}</h4>
      <p>{abstract}</p>
      <div className="flex gap-x-3">
        <Link href={paperUrl} target="_blank" className="hover:brightness-150">
          <LayersIcon />
        </Link>
        <Link href={githubUrl} target="_blank" className="hover:brightness-150">
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
}
