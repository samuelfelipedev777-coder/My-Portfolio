export const styles = {
  /* ========== LAYOUT GLOBAL ========== */
  layout: {
    main: "",
    container: "",
    section: "",
    sectionTitle: "",
    sectionSubtitle: "",
  },

  /* ========== HEADER ========== */
  header: {
    root: "",

    // Estados do scroll
    hidden: "",
    visible: "",
    top: "", // No topo da página (transparente)
    scrolled: "", // Depois de rolar (blur)
    menuOpen: "", // Quando o drawer está aberto

    nav: "",

    // Logo
    logoWrapper: "",
    logoLink: "",
    logoTitle: "",
    logoText: "",
    logoImage: "",

    // Links desktop
    linksWrapper: "",
    linksTitle: "",
    link: "",
    linksImage: "",

    // Botão do menu (mobile)
    button: "",
    buttonIcon: "",
  },

  /* ========== DRAWER (MENU LATERAL MOBILE) ========== */
  drawer: {
    overlay:
      "",
    overlayOpen: "",
    overlayClosed: "",

    root: "",
    open: "",
    closed: "",

    list: "",

    link: "",
  },

  /* ========== HERO ========== */
  hero: {
    section: "",
    container: "",
    content: "",
    badge: "",
    title: "",
    titleHighlight: "",
    description: "",
    actions: "",
    primaryButton: "",
    secondaryButton: "",
    imageWrapper: "",
    image: "",
  },

  /* ========== SOBRE ========== */
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

  /* ========== PROJECTS ========== */
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

  /* ========== CONTATO ========== */
  contact: {
    section: "",
    container: "",
    title: "",
    subtitle: "",
    wrapper: "",

    // Formulário
    form: "",
    field: "",
    label: "",
    input: "",
    textarea: "",
    error: "",
    submitButton: "",

    // Informações / redes sociais
    infoWrapper: "",
    infoItem: "",
    infoIcon: "",
    infoText: "",
    socialList: "",
    socialLink: "",
    socialIcon: "",
  },

  /* ========== FOOTER ========== */
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