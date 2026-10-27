
"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseScrollRevealProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export function useScrollReveal({ sectionRef }: UseScrollRevealProps) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const text = section.querySelector(".scroll-reveal-text");
    const image = section.querySelector(".scroll-reveal-image");
    const cta = section.querySelector(".scroll-reveal-cta");
    const ctaText = section.querySelector(".scroll-reveal-cta-text");
    const arrow = section.querySelector(".scroll-reveal-arrow");

    gsap.set([image, cta], { opacity: 0, y: 20 });

    const timeline = text
      ? gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=3500",
              scrub: true,
            },
          })
          .fromTo(
            text,
            { opacity: 0, y: 20, color: "#FFFFFF" },
            { opacity: 1, y: 0, duration: 1, ease: "none" },
          )
          .to(text, {
            color: "#172554",
            duration: 2,
            ease: "none",
          })
          .to(text, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "none",
          })
          .to(
            image,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "none",
            },
            "-=1.5",
          )
          .to(image, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "none",
          })
          .to(cta, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "none",
          })
          .to(
            ctaText,
            {
              y: -8,
              duration: 0.7,
              ease: "none",
            },
            "<",
          )
          .to(
            arrow,
            {
              y: 5,
              duration: 0.5,
              repeat: 3,
              yoyo: true,
              ease: "power1.inOut",
            },
            "<",
          )
          .to(cta, {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "none",
          })
      : null;

    return () => {
      timeline?.scrollTrigger?.kill();
      timeline?.kill();
    };
  }, [sectionRef]);
}