import { useEffect, useRef, useState } from "react";

export default function useHeaderScroll() {
  const previousScroll = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrollingDown(currentScroll > previousScroll.current);
      previousScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrollingDown };
}