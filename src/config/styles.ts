
export const styles = {
  // ========== PALETA GLOBAL ==========

  colors: {
    background: "#03060F",
    surface: "#080E1C",
    navy: "#162548",
    blue: "#346FBF",
    blueLight: "#6A98EF",
    text: "#EAEFF6",
    muted: "#A5B1C5",
    line: "rgba(234, 239, 246, 0.10)",
    markerMuted: "#52617A",
  },

  // ========== LAYOUT GLOBAL ==========

  layout: {
    main: "",
    container: "",
    section: "",
    sectionTitle: "",
    sectionSubtitle: "",
  },

  // ========== HEADER ==========

  header: {
    root: "fixed inset-x-0 top-0 z-50 w-full",
    hidden: "",
    visible: "",
    top: "",
    scrolled: "",
    menuOpen: "",

    nav: "relative flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:px-14",

    logoWrapper: "flex items-center",

    logoLink:
      "group relative inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1.5 transition-all duration-300 hover:border-blue-400/[0.35] hover:bg-white/[0.05]",

    logoTitle:
      "flex items-center gap-1.5 text-md font-bold tracking-[-0.03em] text-white",

    logoText:
      "whitespace-nowrap bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent",

    TextDot:
      "pointer-events-none relative top-[-2px] inline-flex items-center justify-center text-[1.2em] font-bold leading-none text-white/60 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1 group-hover:scale-125",

    linksWrapper:
      "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full p-1.5 backdrop-blur-xl md:flex",

    linksTitle: "",

    link:
      "glitch-link relative flex h-10 items-center rounded-full border border-white/[0.11] bg-white/[0.035] px-5 text-sm font-medium tracking-[-0.01em] text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text transition-all duration-300 hover:border-blue-300/[0.32] hover:bg-white/[0.07]",

    linksImageWrapper:
      "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]",

    linksImage:
      "h-full w-full object-contain p-1.5 pointer-events-none",

    button:
      "relative z-[60] flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/[0.08]",

    buttonIcon:
      "cursor-pointer text-white transition-transform duration-300 hover:scale-105",
  },

  // ========== DRAWER ==========

  drawer: {
    overlay:
      "fixed inset-0 z-40 bg-black/35 backdrop-blur-[5px]",

    overlayOpen:
      "pointer-events-auto opacity-100 transition-opacity duration-500",

    overlayClosed:
      "pointer-events-none opacity-0 transition-opacity duration-500",

    root:
      "fixed right-0 top-0 z-50 h-screen w-full max-w-lg border-l border-white/[0.08] bg-[#080E1C] px-8 py-8 shadow-[-24px_0_100px_rgba(0,0,0,0.35)] md:px-12",

    open:
      "translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

    closed:
      "translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

    list: "flex flex-col pt-28 md:pt-32",

    link:
      "group glitch-link relative flex items-center justify-between border-b border-white/[0.12] bg-transparent px-1 py-7 text-3xl font-medium tracking-[-0.055em] text-[#6A98EF] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#6A98EF]/40 hover:bg-transparent hover:pl-4 hover:text-[#EAEFF6] md:py-8 md:text-5xl",
  },

  // ========== TEXT ==========

  text: {
    root:
      "grid w-full grid-cols-2 gap-4 px-6 text-md font-semibold leading-[0.95] tracking-[-0.055em] text-[#6A98EF] md:block md:px-10 md:text-[2.125rem] md:-translate-y-20",

    item: "block text-left md:block",

    itemRight: "block text-right md:text-left py-2",
  },

  // ========== HERO ==========

  hero: {
    section:
      "relative h-[100svh] overflow-hidden bg-cover bg-center bg-no-repeat md:h-screen",

    container:
      "relative z-10 px-6 pt-32 md:px-10 md:pt-40 lg:px-14",

    content: "relative z-10 pt-[42svh] md:pt-65",

    background: "absolute inset-0 z-0 overflow-hidden",

    backgroundImage:
      "h-[112%] w-full object-cover object-center will-change-transform max-md:scale-[1.28] max-md:origin-[center_58%] md:object-center",

    image: "object-cover object-center",

    badge: "",
    title: "",
    titleHighlight: "",
    description: "",
    actions: "",
    primaryButton: "",
    secondaryButton: "",

    imageWrapper: "absolute inset-0 h-full w-full",

    interactiveName: "relative z-10 mt-12 md:mt-16",

    interactiveNameDesktop: "hidden md:block",

    freelancer:
      "mt-2 flex justify-end pr-[6.5vw] text-[clamp(1rem,2vw,2.2rem)] font-medium tracking-[-0.025em] text-[#6A98EF]",

    interactiveNameMobileWrapper: "md:hidden",

    interactiveNameMobile:
      "relative z-10 mt-60 flex justify-center px-2 text-[#6A98EF]",

    interactiveNameMobileText:
      "whitespace-nowrap text-center text-[clamp(3.5rem,17vw,11rem)] font-semibold leading-[0.8] tracking-[-0.09em] [word-spacing:0.14em]",

    freelancerMobile:
      "mt-2 flex justify-end pr-3 text-[0.85rem] font-medium tracking-[-0.025em] text-[#6A98EF]",

    interactiveNameInner:
      "relative w-full overflow-hidden bg-transparent px-4 py-8 text-[#6A98EF] sm:px-6 md:px-10 md:py-12",

    interactiveNameRow:
      "flex w-full items-center justify-center gap-[3vw]",

    interactiveNameText:
      "shrink min-w-0 bg-gradient-to-b from-[#6A98EF]/45 via-[#6A98EF]/75 to-[#6A98EF] bg-clip-text text-[clamp(2rem,10.2vw,9.5rem)] font-semibold leading-[0.85] tracking-[-0.085em] text-transparent",

    interactiveNameImage:
      "relative h-[clamp(3.5rem,12vw,9.5rem)] w-[clamp(4.5rem,24vw,21rem)] shrink-0 overflow-hidden rounded-md bg-[#162548]",

    interactiveNameFooter:
      "mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4",
  },

  // ========== SOBRE ==========

  about: {
    section:
      "relative flex h-200 w-full items-center overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-28 md:px-12 md:py-26 lg:px-16 lg:py-20",

    container:
      "mx-auto flex w-full max-w-[1600px] items-center",

    content: "w-full",

    textRow:
      "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-5 md:gap-8 lg:gap-12",

    icon:
      "h-5 w-5 shrink-0 self-center text-[#346FBF] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9",

    heart: "justify-self-start",

    coffee: "justify-self-end",

    text:
      "m-0 w-full min-w-0 font-[var(--font-space-grotesk)] text-[clamp(1.65rem,3.25vw,3.5rem)] font-medium leading-[1.18] tracking-[-0.055em] text-neutral-900 sm:text-[clamp(1.9rem,3.25vw,3.5rem)] md:leading-[1.15]",

    word: "inline-block opacity-0 will-change-[transform,opacity,color]",

    divider:
      "mt-10 flex w-full items-center justify-center gap-3 sm:mt-12 sm:gap-5 md:mt-16 md:gap-7",

    line: "h-px flex-1 bg-neutral-300",

    dot:
      "h-2 w-2 shrink-0 rounded-full bg-[#346FBF] sm:h-2.5 sm:w-2.5",

    title: "",
    imageWrapper: "",
    image: "",
    skillsWrapper: "",
    skillsTitle: "",
    skillsList: "",
    skillItem: "",
    skillIcon: "",
    skillName: "",
  },

  // ========== SCROLL EXPERIENCE ==========

  scrollExperience: {
    section: "relative h-[700vh] bg-[#080E1C]",

    sticky:
      "sticky top-0 h-[100svh] overflow-hidden bg-[#080E1C]",

    canvas: "absolute inset-0 h-full w-full",

    content:
      "pointer-events-none absolute inset-x-0 top-[20%] z-10 flex flex-col items-center gap-6 px-6",

    text:
      "scroll-reveal-text max-w-3xl text-center text-3xl font-medium tracking-tight opacity-0 text-[#EAEFF6] [text-shadow:0_2px_10px_rgba(0,0,0,0.35)] md:text-5xl",

    image:
      "scroll-reveal-image h-auto w-full max-w-sm rounded-lg object-cover opacity-0",
  },

  // ========== TIMELINE / EXPERIÊNCIA ==========

  timeline: {
    section:
      "relative z-20 -mt-20 overflow-hidden bg-[#080E1C] rounded-t-4xl px-6 pt-20 pb-24 shadow-[0_-30px_100px_rgba(0,0,0,0.25)] sm:-mt-28 sm:px-10 sm:pt-24 sm:pb-32 lg:px-16",

    container: 
      "mx-auto max-w-310",

    line:
      "absolute bottom-0 left-[7px] top-0 w-px md:left-[calc(30%-1px)]",

    progress:
      "absolute left-[7px] top-0 z-[1] w-px origin-top md:left-[calc(30%-1px)]",

    list: "space-y-20 md:space-y-28",

    item:
      "relative grid grid-cols-1 gap-5 pl-10 md:grid-cols-[30%_1fr] md:gap-12 md:pl-0",

    marker:
      "absolute left-0 top-2 z-[2] flex size-4 items-center justify-center rounded-full ring-4 md:left-[calc(30%-8px)]",

    markerDot: "size-1.5 rounded-full",

    info: "min-w-0 md:pr-5",

    date: "mb-3 text-sm font-semibold tracking-wide sm:text-base",

    title:
      "text-xl font-semibold leading-snug tracking-tight sm:text-2xl",

    job: "mt-2 text-base font-medium leading-snug sm:text-lg",

    description: "max-w-2xl",

    paragraph:
      "mb-4 text-sm leading-7 last:mb-0 sm:text-[15px] sm:leading-7",
  },

  // ========== PROJECTS ==========

  projects: {
    section: "",
    container: "",
    title: "",
    subtitle: "",
    grid: "",
    card: "",
    cardImageWrapper: "",
    cardImage: "",
    cardBody: "",
    cardTitle: "",
    cardDescription: "",
    tagsWrapper: "",
    tag: "",
    cardActions: "",
    cardLink: "",
    cardButton: "",
  },

  // ========== CONTATO ==========

  contact: {
    section: "",
    container: "",
    title: "",
    subtitle: "",
    wrapper: "",
    form: "",
    field: "",
    label: "",
    input: "",
    textarea: "",
    error: "",
    submitButton: "",
    infoWrapper: "",
    infoItem: "",
    infoIcon: "",
    infoText: "",
    socialList: "",
    socialLink: "",
    socialIcon: "",
  },

  // ========== FOOTER ==========

  footer: {
    root: "",
    container: "",
    logoWrapper: "",
    logoImage: "",
    text: "",
    linksWrapper: "",
    link: "",
    socialList: "",
    socialLink: "",
    socialIcon: "",
    copyright: "",
  },
} as const;

export type Styles = typeof styles;