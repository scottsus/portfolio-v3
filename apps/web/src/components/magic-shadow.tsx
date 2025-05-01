import { ReactNode } from "react";

export function MagicShadow({ children }: { children: ReactNode }) {
  return (
    <div className="group relative hover:brightness-110">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500 opacity-0 blur-md group-hover:scale-110 group-hover:opacity-80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
