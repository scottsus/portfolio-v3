import { ChromeIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

export type Project = {
  title: string;
  description: string;
  demoAssetUrl: string;
  githubUrl: string;
  playgroundUrl?: string;
};

export function Project(project: Project) {
  const { title, description, demoAssetUrl, githubUrl, playgroundUrl } =
    project;
  const isVideo = demoAssetUrl.endsWith(".mp4");

  return (
    <div className="flex h-[80vh] w-full flex-col rounded-lg border-2 border-[#222] bg-[#0f0f0f] p-4">
      <div className="relative mb-3 h-4/5 w-full overflow-hidden rounded-lg">
        {isVideo ? (
          <>
            <video
              className="absolute inset-0 h-full w-full object-cover blur-lg filter"
              src={demoAssetUrl}
              muted
            />
            <video
              className="relative z-10 h-full w-full object-contain"
              src={demoAssetUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          </>
        ) : (
          <>
            <img
              className="absolute inset-0 h-full w-full object-cover blur-lg filter"
              src={demoAssetUrl}
              alt="Demo Video"
            />
            <img
              className="relative z-10 h-full w-full object-contain"
              src={demoAssetUrl}
              alt="Demo Video"
            />
          </>
        )}
      </div>
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

function IconLink({
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
