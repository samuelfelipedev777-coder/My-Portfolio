"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/config/images";
import { styles } from "@/config/styles";
import Text from "../ui/Text";
import { InteractiveName } from "../ui/InteractiveName";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundImageRef = useRef<HTMLImageElement>(null);

  const [pointerX, setPointerX] = useState<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const backgroundImage = backgroundImageRef.current;

    if (!hero || !backgroundImage) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        backgroundImage,
        {
          yPercent: -4,
        },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    if (!bounds.width) return;

    const position = Math.max(
      0,
      Math.min(1, (event.clientX - bounds.left) / bounds.width),
    );

    setPointerX(position * 2 - 1);
  }

  function handlePointerLeave() {
    setPointerX(null);
  }

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={styles.hero.section}
    >
      <picture className={styles.hero.background}>
        <source
          media="(max-width: 767px)"
          srcSet={images.studioMobile}
        />

        <img
          ref={backgroundImageRef}
          src={images.studio}
          alt=""
          fetchPriority="high"
          className={styles.hero.backgroundImage}
        />
      </picture>

      <div className={styles.hero.content}>
        <Text>
          <span className={styles.text.item}>
            Web Designer
            <br className="md:hidden" />
          </span>

          <span className={styles.text.itemRight}>
            Desenvolvedor
            <br className="md:hidden" /> Full-Stack
          </span>
        </Text>
      </div>

      <div className={styles.hero.interactiveName}>
        <div className={styles.hero.interactiveNameDesktop}>
          <InteractiveName pointerX={pointerX} />

          <div className={styles.hero.freelancer}>
            Desenvolvedor Freelancer
          </div>
        </div>

        <div className={styles.hero.interactiveNameMobileWrapper}>
          <h1 className={styles.hero.interactiveNameMobile}>
            <span className="sr-only">Samuel Felipe</span>

            <span
              aria-hidden="true"
              className={styles.hero.interactiveNameMobileText}
            >
              Samuel Felipe
            </span>
          </h1>

          <div className={styles.hero.freelancerMobile}>
            Desenvolvedor Freelancer
          </div>
        </div>
      </div>
    </section>
  );
}