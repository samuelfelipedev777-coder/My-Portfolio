
"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { styles } from "@/config/styles";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className = "",
}: TextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const items = element.querySelectorAll(
        ":scope > span"
      );

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          x: -12,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "transform",
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={textRef}
      className={`${styles.text.root} ${className}`}
    >
      {children}
    </h1>
  );
}