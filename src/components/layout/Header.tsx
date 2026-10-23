"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { images } from "@/config/images";
import { styles } from "@/config/styles";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import "@/config/header-effects.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  const { isScrollingDown } = useHeaderScroll();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const about = document.querySelector("#about");

    if (!about) return;

    const updateTheme = () => {
      const rect = about.getBoundingClientRect();
      const headerHeight = headerRef.current?.offsetHeight ?? 100;
      const nextTheme = rect.top <= headerHeight && rect.bottom > 0;

      setIsLightSection((current) =>
        current === nextTheme ? current : nextTheme,
      );
    };

    updateTheme();

    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  useEffect(() => {
    const about = document.querySelector<HTMLElement>("#about");

    if (!about) return;

    const updateTheme = () => {
      const rect = about.getBoundingClientRect();
      const headerHeight = headerRef.current?.offsetHeight ?? 100;
      const nextTheme = rect.top <= headerHeight && rect.bottom > 0;

      setIsLightSection((current) =>
        current === nextTheme ? current : nextTheme,
      );
    };

    updateTheme();

    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={styles.header.root}
      data-theme={isLightSection ? "light" : "dark"}
    >
      <nav className={styles.header.nav}>
        <a
          href="/"
          className={`${styles.header.logoLink} glitch-link`}
          data-text="Samuel.Felipe"
          data-header-logo
        >
          <h1 className={styles.header.logoTitle}>
            <span className={styles.header.logoText} data-header-logo-text>
              Samuel
            </span>
            <span className={styles.header.TextDot} data-header-dot>
              .
            </span>
            <span className={styles.header.logoText} data-header-logo-text>
              Felipe
            </span>
          </h1>
        </a>

        <div className={styles.header.linksWrapper}>
          <a
            href="#contato"
            className={`${styles.header.link} glitch-link`}
            data-text="Contato"
            data-header-link
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
            data-header-link
          >
            Projects
          </a>
        </div>

        <button
          type="button"
          className={styles.header.button}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-header-menu-button
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
        onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Início
          </a>

          <a
            href="#about"
            className={`${styles.drawer.link} glitch-link`}
            data-text="Sobre"
            onClick={closeMenu}
          >
            Sobre
          </a>

          <a
            href="#projects"
            className={`${styles.drawer.link} glitch-link`}
            data-text="Projetos"
            onClick={closeMenu}
          >
            Projetos
          </a>

          <a
            href="#contato"
            className={`${styles.drawer.link} glitch-link`}
            data-text="Contato"
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>
      </aside>
    </header>
  );
}
