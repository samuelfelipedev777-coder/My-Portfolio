
"use client";

import { useEffect, useRef } from "react";
import { FiCoffee, FiHeart } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "@/config/styles";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Tudo começou com a curiosidade de entender como as coisas funcionam. Com o tempo, essa curiosidade se transformou em paixão por tecnologia — e assim, a vontade de transformar ideias em experiências digitais, unindo lógica, criatividade e soluções que fazem sentido.";

const COLORS = {
  base: "#202633",
  highlight: "#315DA8",
  final: "#202633",
};

export default function AnimatedText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const splitText = (value: string) =>
    value.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;

      return (
        <span
          key={`${index}-${part}`}
          data-word
          className={styles.about.word}
        >
          {part}
        </span>
      );
    });

  useEffect(() => {
    const section = sectionRef.current;
    const heading = textRef.current;

    if (!section || !heading) return;

    const words = heading.querySelectorAll<HTMLElement>("[data-word]");

    if (!words.length) return;

    const context = gsap.context(() => {
      gsap.set(words, {
        opacity: 1,
        y: 0,
        color: COLORS.base,
        willChange: "color",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(words, {
        color: COLORS.highlight,
        stagger: {
          each: 0.045,
          from: "start",
        },
        duration: 1,
        ease: "none",
      });

      timeline.to(words, {
        color: COLORS.final,
        stagger: {
          each: 0.035,
          from: "start",
        },
        duration: 0.8,
        ease: "none",
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <div ref={sectionRef} className={styles.about.content}>
      <div className={styles.about.textRow}>
        <FiHeart
          aria-hidden="true"
          className={`${styles.about.icon} ${styles.about.heart}`}
        />

        <h2 ref={textRef} className={styles.about.text}>
          {splitText(text)}
        </h2>

        <FiCoffee
          aria-hidden="true"
          className={`${styles.about.icon} ${styles.about.coffee}`}
        />
      </div>

      <div className={styles.about.divider} aria-hidden="true">
        <span className={styles.about.line} />
        <span className={styles.about.dot} />
        <span className={styles.about.line} />
      </div>
    </div>
  );
}