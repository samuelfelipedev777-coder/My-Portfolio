
export const styles = {
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

    linksImage: "h-full w-full object-contain p-1.5 pointer-events-none",

    button:
      "relative z-[60] flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/[0.08]",

    buttonIcon:
      "cursor-pointer text-white transition-transform duration-300 hover:scale-105",
  },

  // ========== DRAWER ==========
  drawer: {
    overlay: "fixed inset-0 z-40 bg-black/35 backdrop-blur-[5px]",

    overlayOpen:
      "pointer-events-auto opacity-100 transition-opacity duration-500",

    overlayClosed:
      "pointer-events-none opacity-0 transition-opacity duration-500",

    root:
      "fixed right-0 top-0 z-50 h-screen w-full max-w-lg border-l border-white/[0.08] bg-[#07111f] px-8 py-8 shadow-[-24px_0_100px_rgba(0,0,0,0.35)] md:px-12",

    open:
      "translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

    closed:
      "translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

    list: "flex flex-col pt-28 md:pt-32",

    link:
      "glitch-link relative border border-white/[0.10] bg-white/[0.015] py-7 px-5 text-3xl font-semibold tracking-[-0.04em] text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text transition-all duration-300 hover:border-blue-300/[0.28] hover:bg-white/[0.035] md:py-8 md:text-5xl",
  },

  // ========== TEXT ==========
  text: {
    root:
      "grid w-full grid-cols-2 gap-4 px-6 text-md font-semibold leading-[0.95] tracking-[-0.055em] text-blue-400 md:block md:px-10 md:text-[2.125rem] md:-translate-y-20",

    item: 
      "block text-left md:block",

    itemRight: 
      "block text-right md:text-left py-2",
  },

  // ========== HERO ==========
  hero: {
    section:
      "relative min-h-[100svh] overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-screen",

    container:
      "relative z-10 px-6 pt-32 md:px-10 md:pt-40 lg:px-14",

    content:
      "relative z-10 pt-[42svh] md:pt-78",

    background:
      "absolute inset-0 z-0 overflow-hidden",

    backgroundImage:
      "h-full w-full object-cover object-center max-md:scale-[1.28] max-md:origin-[center_58%] md:object-center",

    image: "object-cover object-center",

    badge: "",
    title: "",
    titleHighlight: "",
    description: "",
    actions: "",
    primaryButton: "",
    secondaryButton: "",

    imageWrapper: "absolute inset-0 h-full w-full",
  },

  // ========== SOBRE ==========
  about: {
    section: "",
    container: "",
    title: "",
    content: "",
    text: "",
    imageWrapper: "",
    image: "",
    skillsWrapper: "",
    skillsTitle: "",
    skillsList: "",
    skillItem: "",
    skillIcon: "",
    skillName: "",
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
    copyright: "",
  },
} as const;

export type Styles = typeof styles;