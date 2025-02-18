import { Badge } from "~/src/components/badge";
import { ComponentType } from "react";

export type Project = {
  icon: {
    Icon: ComponentType<{ color?: string; className?: string }>;
    color: string;
  };
  title: string;
  slug: string;
  long: string;
  demoAssetUrl: string;
  githubUrl: string;
  playgroundUrl?: string;
  date: string;
  badges: string[];
};

export function Project({ project }: { project: Project }) {
  const { icon, title, long, demoAssetUrl, githubUrl, playgroundUrl, date } =
    project;
  const { Icon, color } = icon;
  const isVideo = demoAssetUrl.endsWith(".mp4");
  return (
    <div className="flex h-full max-h-[80vh] w-full flex-col gap-y-4 overflow-y-scroll">
      <h2 className="text-3xl text-white">{project.title}</h2>

      <div
        key="demoAsset"
        className="relative mb-3 min-h-[20vh] w-full overflow-hidden rounded-lg"
      >
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

      <div className="scrollbar-hide mx-2 flex w-full items-center gap-x-2 overflow-x-scroll">
        {project.badges.map((badge) => (
          <Badge key={badge} name={badge} />
        ))}
      </div>

      <p className="text-lg text-white">{long}</p>
    </div>
  );
}
