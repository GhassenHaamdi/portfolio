const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evanitsg/",
  },
  email: {
    label: "Email",
    href: "mailto:evan.it.sg@gmail.com",
  },
  pubs: {
    label: "Liste des publications",
    to: "docs",
  },
  cours: {
    label: "Cours",
    to: "blog",
  },
  rapportPeda: {
    label: "Rapport Pédagogique",
    href: "https://evantay.com/pdf/resume.pdf",
  },
  rapportSc: {
    label: "Rapport Scientifique",
    href: "https://evantay.com/pdf/resume.pdf",
  },
  resume: {
    label: "CV",
    href: "https://evantay.com/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Ghassen Haamdi",
  tagline:
    "I am a Software Engineer and Cloud Engineer passionate about solving meaningful problems.",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  url: 'https://github.com',

  baseUrl: '/portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ghassenHaamdi', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  deploymentBranch: "gh-pages",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Ghassen Haamdi",
      logo: {
        alt: "Ghassen Haamdi",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Cours", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Publications",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "Rapport Scientifique",
          position: "right",
        },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "Rapport Pédagogique",
          position: "right",
        },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "CV",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connecter",
          items: [
            internetProfiles.linkedin,
            internetProfiles.email,
          ],
        },
        {
          title: "Découvrir",
          items: [
            internetProfiles.pubs,
            internetProfiles.cours,
       
          ],
        },
        {
          title: "Documents",
          items: [
        
            internetProfiles.resume,
            internetProfiles.rapportPeda,
            internetProfiles.rapportSc,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `© Ghassen Haamdi ${new Date().toLocaleDateString()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins:    [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  
};
