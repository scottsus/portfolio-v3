"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export function Highlight({
  title,
  description,
  assetUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  assetUrl: string;
  githubUrl: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link
      ref={containerRef}
      href={githubUrl}
      target="_blank"
      className="relative flex aspect-[12/10] cursor-pointer flex-col overflow-hidden rounded-lg bg-[#1C1C1C] pl-7 pt-3 md:aspect-[12/8]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isHovering
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 300px)`
            : "none",
        }}
      />
      <h1 className="my-1 text-lg font-semibold text-white">{title}</h1>
      <p className="my-1/2 font-light">{description}</p>
      <div className="relative mb-0 mt-auto h-5/6">
        <video
          className="absolute bottom-0 right-0 h-[95%] w-[95%] rounded-tl-lg object-cover object-center"
          style={{ transformOrigin: "bottom right" }}
          src={assetUrl}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
        />
      </div>
    </Link>
  );
}
