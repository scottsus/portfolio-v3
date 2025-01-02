import { ChromeIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

export function Project({
  title,
  description,
  demoVideoUrl,
  githubUrl,
  playgroundUrl,
}: {
  title: string;
  description: string;
  demoVideoUrl: string;
  githubUrl: string;
  playgroundUrl?: string;
}) {
  return (
    <div className="flex h-[70vh] w-full flex-col rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-4">
      <video
        className="mb-3 h-4/5 w-full rounded-lg object-cover"
        src={demoVideoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex flex-col gap-y-2 p-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-white">{title}</h2>
          <div className="flex text-white">
            <IconLink href={githubUrl} Icon={GithubIcon} size={21} />
            {playgroundUrl && (
              <IconLink href={playgroundUrl} Icon={ChromeIcon} size={21} />
            )}
          </div>
        </div>
        <p className="text-[#959595]">{description}</p>
      </div>
    </div>
  );
}

export function IconLink({
  href,
  Icon,
  size = 24,
}: {
  href: string;
  Icon: ComponentType<{ size?: number }>;
  size?: number;
}) {
  return (
    <Link href={href} className="rounded-full p-2 hover:bg-[#222]">
      <Icon size={size} />
    </Link>
  );
}
