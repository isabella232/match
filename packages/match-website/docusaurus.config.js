const path = require("path");

module.exports = {
  title: "Match",
  tagline:
    "Providing designers and developers with tools to create consistent, high quality public facing Twilio experiences.",
  url: "https://match.twilio.design",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "twilio-labs", // Usually your GitHub org/user name.
  projectName: "match", // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: "47ecd3b21be71c5822571b9f59e52544",
    //   indexName: "docusaurus-2",
    //   searchParameters: {
    //     facetFilters: [`version:2.0.0-alpha.61`],
    //   },
    // },
    navbar: {
      title: "Match",
      logo: {
        alt: "Match Logo",
        src: "img/logo.png",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
      ],
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
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "./plugins/register-match-tokens"),
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: [path.resolve(__dirname, "../match-components/src/**/*.tsx")],
        global: true,
        parserOptions: {
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
