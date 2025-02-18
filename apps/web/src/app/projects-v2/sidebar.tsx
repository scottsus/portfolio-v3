import Link from "next/link";

import { Project } from "./project";

export function Sidebar({ projects }: { projects: Project[] }) {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-y-2 text-white">
      {projects.map((p) => (
        <TabSelection key={p.title} project={p} />
      ))}
    </div>
  );
}

export function TabSelection({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects-v2/${project.slug}`}
      className="opacity-50 transition-all hover:opacity-100 hover:brightness-125"
    >
      <p>{project.title}</p>
    </Link>
  );
}
