import Image from "next/image";

import { capitalize } from "../lib/utils";

export function Badge({ name }: { name: string }) {
  const badge = badges.find((b) => b.name === name);
  if (!badge) {
    return <></>;
  }

  const size = badge.size ?? 18;

  return (
    <div
      className="mt-2 flex h-6 min-w-max items-center gap-x-1 rounded-full border px-1"
      style={{ color: badge.color, borderColor: badge.color }}
    >
      <Image
        src={badge.src}
        alt={badge.name}
        width={size}
        height={size}
        className="mx-1 p-0"
      />
      <p className="mr-1 text-xs">{capitalize(badge.name)}</p>
    </div>
  );
}

const badges = [
  { name: "nextjs", src: "/logos/next.svg", color: "#FFFFFF", size: 15 },
  { name: "react", src: "/logos/react.svg", color: "#61DAFB" },
  { name: "turborepo", src: "/logos/turborepo.svg", color: "#2E87F3" },
  { name: "prisma", src: "/logos/prisma.svg", color: "#FFFFFF", size: 15 },
  { name: "postgres", src: "/logos/postgres.svg", color: "#336791" },
  { name: "vite", src: "/logos/vite.svg", color: "#9369FE" },
  { name: "poetry", src: "/logos/poetry.svg", color: "#009EF1" },
  { name: "python", src: "/logos/python.svg", color: "#F7D248" },
  { name: "pytorch", src: "/logos/pytorch.svg", color: "#EE4C2C", size: 14 },
  { name: "swift", src: "/logos/swift.svg", color: "#FB3D26" },
  { name: "puppeteer", src: "/logos/puppeteer.svg", color: "#04D49F" },
  { name: "docker", src: "/logos/docker.svg", color: "#1D63ED", size: 6 },
];
