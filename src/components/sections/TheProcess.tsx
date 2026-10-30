"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "@/config/styles";

gsap.registerPlugin(ScrollTrigger);

const { colors, timeline } = styles;

const experiences = [
  {
    date: "2021–2023",
    title: "Início da Jornada",
    job: "Explorando programação e design",
    contents: [
      "Mergulhei de cabeça no universo da programação e design, movido pela curiosidade, pelos jogos e pela paixão por tecnologia.",
      "Descobri meu gosto por criar soluções digitais e explorar como tudo funciona por trás das telas.",
    ],
  },
  {
    date: "2023–2024",
    title: "Formação e Consolidação",
    job: "Aluno DevMedia",
    contents: [
      "Entrei como aluno na DevMedia, referência nacional em cursos de programação e desenvolvimento web.",
      "Aprimorei minhas habilidades técnicas com trilhas práticas e projetos guiados, transformando conhecimento em experiência real.",
    ],
  },
  {
    date: "2025–2026",
    title: "Web Designer & Desenvolvedor Freelancer",
    job: "Atuação independente",
    contents: [
      "Consolidei minha atuação no desenvolvimento web, unindo design de interfaces, identidade visual e programação para criar experiências digitais completas.",
      "Passei a desenvolver projetos que vão de sites institucionais e landing pages a sistemas e aplicações web, explorando tecnologias modernas como Next.js, React e TypeScript.",
      "Sigo aprimorando minhas habilidades em UI/UX e desenvolvimento full-stack, construindo projetos autorais e expandindo meu portfólio com foco em qualidade, funcionalidade e atenção aos detalhes.",
    ],
  },
];

export default function TheProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const line = section.querySelector<HTMLElement>(
        "[data-timeline-progress]",
      );

      const items = gsap.utils.toArray<HTMLElement>(
        "[data-timeline-item]",
      );

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: section,
              start: "top 20%",
              end: "bottom 75%",
              scrub: 0.3,
            },
          },
        );
      }

      items.forEach((item) => {
        const content = item.querySelectorAll(
          "[data-timeline-content]",
        );

        gsap.fromTo(
          content,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trabalho"
      ref={sectionRef}
      aria-label="Minha experiência profissional"
      className={timeline.section}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <div className={timeline.container}>
        <div className="relative">
          <div
            aria-hidden="true"
            className={timeline.line}
            style={{ backgroundColor: colors.line }}
          />

          <div
            aria-hidden="true"
            data-timeline-progress
            className={timeline.progress}
            style={{
              height: "100%",
              transform: "scaleY(0)",
              backgroundImage: `linear-gradient(to bottom, ${colors.blueLight}, ${colors.blue}, ${colors.navy})`,
            }}
          />

          <div className={timeline.list}>
            {experiences.map((item, index) => (
              <article
                key={item.date}
                data-timeline-item
                className={timeline.item}
              >
                <div
                  aria-hidden="true"
                  className={timeline.marker}
                  style={{
                    backgroundColor: colors.surface,
                    boxShadow: `0 0 0 4px ${colors.background}`,
                  }}
                >
                  <span
                    className={timeline.markerDot}
                    style={{
                      backgroundColor:
                        index === 0
                          ? colors.blueLight
                          : colors.markerMuted,
                      boxShadow:
                        index === 0
                          ? `0 0 12px ${colors.blueLight}99`
                          : "none",
                    }}
                  />
                </div>

                <div
                  data-timeline-content
                  className={timeline.info}
                >
                  <p
                    className={timeline.date}
                    style={{ color: colors.blueLight }}
                  >
                    {item.date}
                  </p>

                  <h3
                    className={timeline.title}
                    style={{ color: colors.text }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={timeline.job}
                    style={{ color: colors.muted }}
                  >
                    {item.job}
                  </p>
                </div>

                <div
                  data-timeline-content
                  className={timeline.description}
                >
                  {item.contents.map((content) => (
                    <p
                      key={content}
                      className={timeline.paragraph}
                      style={{ color: colors.muted }}
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}