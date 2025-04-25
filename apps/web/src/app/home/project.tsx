"use client";

import Link from "next/link";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl?: string;
};

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export function Project({ project }: { project: Project }) {
  const { title, description, githubUrl } = project;

  return (
    <Link href={githubUrl} className="w-full py-2 pr-4">
      <div className="-ml-2 flex w-5/6 justify-between">
        <h1 className="rounded-md px-2 py-1 font-semibold text-white transition-all duration-300 hover:bg-[#414141]">
          {title}
        </h1>
      </div>
      <p>{description}</p>
    </Link>
  );
}
