"use client";
import { useRef } from "react";
import Image from "next/image";
import { styles } from "@/config/styles";
import { images } from "@/config/images";
import { useScrollFrames } from "@/hooks/useScrollFrames";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollExperienceProps = {
  frameCount?: number;
  framePath?: string;
};

export default function ScrollExperience({
  frameCount = 86,
  framePath = "/frames",
}: ScrollExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useScrollFrames({
    sectionRef,
    canvasRef,
    frameCount,
    framePath,
  });

  useScrollReveal({ sectionRef });

  return (
    <section
      ref={sectionRef}
      aria-label="Scroll-controlled visual experience"
      className={styles.scrollExperience.section}
    >
      <div className={styles.scrollExperience.sticky}>
        <canvas
          ref={canvasRef}
          className={styles.scrollExperience.canvas}
          aria-label="Animação visual controlada pela rolagem"
          role="img"
        />

        <div className={styles.scrollExperience.content}>
          <p className={styles.scrollExperience.text}>
            Alguns caminhos só se revelam quando você segue em frente.
          </p>

          <Image
            src={images.about}
            alt=""
            width={640}
            height={360}
            className={styles.scrollExperience.image}
          />

          <div className="scroll-reveal-cta flex flex-col items-center gap-3 opacity-0">
            <span className="scroll-reveal-cta-text text-center text-sm font-medium tracking-wide text-[#172554] md:text-2xl">
              Por trás do que você vê, existe um caminho. Conheça o meu.
            </span>

            <svg
              className="scroll-reveal-arrow h-5 w-5 text-[#172554]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}