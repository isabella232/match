const path = require("path");

module.exports = {
  title: "Match",
  tagline:
    "Providing designers and developers with tools to create consistent, high quality public facing Twilio experiences.",
  url: "https://match.twilio.design",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "twilio-labs",
  projectName: "match",
  noIndex: true,
  themeConfig: {
    // algolia: {
    //   apiKey: "47ecd3b21be71c5822571b9f59e52544",
    //   indexName: "docusaurus-2",
    //   searchParameters: {
    //     facetFilters: [`version:2.0.0-alpha.61`],
    //   },
    // },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Twilio Match",
      // logo: {
      //   alt: "Match Logo",
      //   src: "img/logo.png",
      // },
      items: [
        // {
        //   type: "doc",
        //   position: "left",
        //   docId: "getting-started",
        //   label: "Docs",
        // },
        {
          href: "https://github.com/twilio-labs/match",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright ${new Date().getFullYear()} Twilio, Inc.`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    "plugin-docusaurus-tokens",
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: [path.resolve(__dirname, "../match-components/src/**/*.tsx")],
        global: true,
        parserOptions: {
          shouldRemoveUndefinedFromOptional: true,
          shouldExtractLiteralValuesFromEnum: true,
          shouldExtractLiteralValuesFromUnion: false,
          savePropValueAsString: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("@types/react");
            }
            return true;
          },
        },
      },
    ],
  ],
};
