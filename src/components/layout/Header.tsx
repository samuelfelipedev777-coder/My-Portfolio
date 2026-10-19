"use client";

import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { images } from "@/config/images";
import { styles } from "@/config/styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header.root}>
        <nav className={styles.header.nav}>
          <a
            href="/"
            className={`${styles.header.logoLink} glitch-link`}
            data-text="Samuel.Felipe"
          >
            <h1 className={styles.header.logoTitle}>
              <span className={styles.header.logoText}>Samuel</span>
              <span className={styles.header.TextDot}>.</span>
              <span className={styles.header.logoText}>Felipe</span>
            </h1>
          </a>

          <div className={styles.header.linksWrapper}>
            <a
              href="#contato"
              className={`${styles.header.link} glitch-link`}
              data-text="Contato"
            >
              Contato
            </a>

            <div className={styles.header.linksImageWrapper}>
              <Image
                src={images.wrenchOSLogo}
                alt="Logo WrenchOS"
                width={40}
                height={40}
                className={styles.header.linksImage}
              />
            </div>

            <a
              href="#projects"
              className={`${styles.header.link} glitch-link`}
              data-text="Projects"
            >
              Projects
            </a>
          </div>

          <button
            type="button"
            className={styles.header.button}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoIosClose className={styles.header.buttonIcon} size={40} />
            ) : (
              <BiMenuAltRight className={styles.header.buttonIcon} size={40} />
            )}
          </button>
        </nav>

        <div
          className={`${styles.drawer.overlay} ${
            menuOpen ? styles.drawer.overlayOpen : styles.drawer.overlayClosed
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <aside
          className={`${styles.drawer.root} ${
            menuOpen ? styles.drawer.open : styles.drawer.closed
          }`}
        >
          <nav className={styles.drawer.list}>
            <a
              href="/"
              className={`${styles.drawer.link} glitch-link`}
              data-text="Início"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </a>

            <a
              href="#about"
              className={`${styles.drawer.link} glitch-link`}
              data-text="Sobre"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>

            <a
              href="#projects"
              className={`${styles.drawer.link} glitch-link`}
              data-text="Projetos"
              onClick={() => setMenuOpen(false)}
            >
              Projetos
            </a>

            <a
              href="#contato"
              className={`${styles.drawer.link} glitch-link`}
              data-text="Contato"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </aside>
      </header>

      <style jsx global>{`
        .glitch-link {
          position: relative;
          isolation: isolate;
        }

        .glitch-link::before,
        .glitch-link::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          pointer-events: none;
          opacity: 0;
          white-space: nowrap;
          overflow: hidden;
          border-radius: inherit;
          z-index: 5;

          font: inherit;
          letter-spacing: inherit;
          line-height: inherit;
        }

        .glitch-link::before {
          color: #60a5fa;
          background: transparent;
          mix-blend-mode: screen;
        }

        .glitch-link::after {
          color: rgba(255, 255, 255, 0.9);
          background: transparent;
          mix-blend-mode: screen;
        }

        .glitch-link:hover {
          animation: glitch-main 420ms steps(1, end);
        }

        .glitch-link:hover::before {
          opacity: 1;
          animation: glitch-blue 420ms steps(1, end);
        }

        .glitch-link:hover::after {
          opacity: 0.8;
          animation: glitch-white 420ms steps(1, end);
        }

        @keyframes glitch-main {
          0% {
            transform: translateX(0);
          }

          10% {
            transform: translateX(-2px);
          }

          20% {
            transform: translateX(3px);
          }

          30% {
            transform: translateX(-3px);
          }

          40% {
            transform: translateX(1px);
          }

          50% {
            transform: translateX(-2px);
          }

          60% {
            transform: translateX(2px);
          }

          70% {
            transform: translateX(-1px);
          }

          80% {
            transform: translateX(1px);
          }

          100% {
            transform: translateX(0);
          }
        }

        @keyframes glitch-blue {
          0% {
            opacity: 0;
            transform: translateX(0);
            clip-path: inset(0 0 100% 0);
          }

          8% {
            opacity: 1;
            transform: translateX(-5px);
            clip-path: inset(8% 0 78% 0);
          }

          16% {
            opacity: 0.9;
            transform: translateX(6px);
            clip-path: inset(45% 0 40% 0);
          }

          24% {
            opacity: 1;
            transform: translateX(-4px);
            clip-path: inset(72% 0 12% 0);
          }

          34% {
            opacity: 0.8;
            transform: translateX(5px);
            clip-path: inset(28% 0 55% 0);
          }

          44% {
            opacity: 0.9;
            transform: translateX(-6px);
            clip-path: inset(58% 0 25% 0);
          }

          54% {
            opacity: 0.6;
            transform: translateX(4px);
            clip-path: inset(12% 0 70% 0);
          }

          68% {
            opacity: 0.45;
            transform: translateX(-3px);
            clip-path: inset(78% 0 8% 0);
          }

          82% {
            opacity: 0.25;
            transform: translateX(2px);
            clip-path: inset(35% 0 48% 0);
          }

          100% {
            opacity: 0;
            transform: translateX(0);
            clip-path: inset(0 0 100% 0);
          }
        }

        @keyframes glitch-white {
          0% {
            opacity: 0;
            transform: translateX(0);
            clip-path: inset(100% 0 0 0);
          }

          12% {
            opacity: 0.9;
            transform: translateX(4px);
            clip-path: inset(65% 0 18% 0);
          }

          22% {
            opacity: 0.75;
            transform: translateX(-5px);
            clip-path: inset(20% 0 62% 0);
          }

          32% {
            opacity: 0.85;
            transform: translateX(3px);
            clip-path: inset(48% 0 35% 0);
          }

          46% {
            opacity: 0.55;
            transform: translateX(-4px);
            clip-path: inset(8% 0 78% 0);
          }

          60% {
            opacity: 0.45;
            transform: translateX(3px);
            clip-path: inset(72% 0 10% 0);
          }

          76% {
            opacity: 0.25;
            transform: translateX(-2px);
            clip-path: inset(38% 0 42% 0);
          }

          100% {
            opacity: 0;
            transform: translateX(0);
            clip-path: inset(100% 0 0 0);
          }
        }

        .glitch-link:hover {
          text-shadow:
            -1px 0 rgba(96, 165, 250, 0.65),
            1px 0 rgba(147, 51, 234, 0.25);
        }

        .drawer .glitch-link:hover {
          text-shadow:
            -2px 0 rgba(96, 165, 250, 0.75),
            2px 0 rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </>
  );
}
