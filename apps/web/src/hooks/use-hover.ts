import { useEffect, useRef, useState } from "react";

export default function useHover<T extends HTMLElement>() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return { ref, isHovered };
}
