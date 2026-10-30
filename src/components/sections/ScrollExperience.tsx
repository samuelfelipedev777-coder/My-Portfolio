
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "@/config/styles";
import { images } from "@/config/images";
import { useScrollFrames } from "@/hooks/useScrollFrames";

gsap.registerPlugin(ScrollTrigger);

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

  useScrollFrames({ sectionRef, canvasRef, frameCount, framePath });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(
        "[data-narrative-scene]"
      );

      gsap.set(scenes, { autoAlpha: 0, y: 24 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      scenes.forEach((scene, index) => {
        const label = `scene-${index}`;

        timeline.addLabel(label);

        timeline.to(scene, {
          autoAlpha: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
        });

        timeline.to(
          scene,
          {
            autoAlpha: 0,
            y: -20,
            duration: 0.1,
            ease: "power2.in",
          },
          `${label}+=0.2`
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Minha jornada criativa"
      className={styles.scrollExperience.section}
    >
      <div className={styles.scrollExperience.sticky}>
        <canvas
          ref={canvasRef}
          className={styles.scrollExperience.canvas}
          aria-label="Animação visual controlada pela rolagem"
          role="img"
        />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8">
          <div className="relative mx-auto w-full max-w-5xl">

            <div
              data-narrative-scene
              className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-2 text-center sm:px-4"
            >
              <p className="mx-auto max-w-2xl text-xl font-medium leading-snug tracking-[-0.025em] text-[#F1EEE7] sm:text-2xl md:text-3xl">
                Toda grande jornada começa antes de sabermos onde ela vai chegar.
              </p>
            </div>

            <div
              data-narrative-scene
              className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-2 text-center sm:px-4"
            >
              <span className="mb-5 block text-[11px] font-medium uppercase tracking-[0.28em] text-[#4169D8]">
                Posso te mostrar uma coisa que a maioria não vê?
              </span>

              <h2
                className="mx-auto max-w-[48rem] text-[1.9rem] font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-[2.65rem] lg:text-5xl"
                style={{
                  color: "#4169D8",
                  textShadow: "0 2px 20px rgba(65, 105, 216, 0.2)",
                }}
              >
                Todo site que você admira já foi uma tela em branco.
              </h2>
            </div>

            <div
              data-narrative-scene
              className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 flex-col items-center px-2 text-center sm:px-4"
            >
              <Image
                src={images.about}
                alt=""
                width={640}
                height={360}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 360px, 400px"
                className="mb-6 h-auto max-h-36 w-full max-w-[260px] rounded-lg object-cover sm:mb-7 sm:max-h-48 sm:max-w-sm md:max-h-52"
              />

              <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.28em] text-[#4169D8]">
                O processo é oque mais me empolga.
              </span>

              <h2
                className="mx-auto max-w-3xl text-[1.9rem] font-medium leading-[1.13] tracking-[-0.04em] sm:text-4xl md:text-[2.65rem] lg:text-5xl"
                style={{
                  color: "#4169D8",
                  textShadow: "0 2px 20px rgba(65, 105, 216, 0.2)",
                }}
              >
                Requer disciplina e o resultado de cada projeto aqui é parte dele.
              </h2>

              <p className="mx-auto mt-5 max-w-xl mb-20 text-sm leading-relaxed text-[#2558b8] sm:mt-6 sm:text-base md:text-lg">
                E nada se compara a ver uma ideia mesmo que pequena, sair da cabeça e ganhar vida na tela.
              </p>
            </div>

            <div
              data-narrative-scene
              className="absolute left-0 top-1/2 w-full -translate-y-1/2 text-center"
            >
              <span className="mb-5 block text-[11px] font-medium uppercase tracking-[0.28em] text-[#D5D9E5]/70">
                Do primeiro código até hoje
              </span>

              <h2 className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-[-0.045em] text-[#F1EEE7] sm:text-4xl md:text-6xl">
                Você viu o que eu faço. Falta ver como cheguei aqui.
              </h2>

              <div className="mt-9 flex flex-col items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D5D9E5]/70">
                  Minha trajetória
                </span>

                <svg
                  className="h-5 w-5 text-[#4169D8]"
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
        </div>
      </div>
    </section>
  );
}