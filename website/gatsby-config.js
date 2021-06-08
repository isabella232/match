module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Match",
    description:
      "Providing designers and developers with tools to create consistent, high quality public facing Twilio experiences.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({
            stage: 1,
            importFrom: require.resolve(
              "@twilio-labs/match-tokens/twilio/custom-media.css"
            ),
          }),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/docs`,
        name: "doc",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "image",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              quality: 90,
              wrapperStyle: "margin: var(--space-scale180) auto;",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 90,
      },
    },
    "gatsby-plugin-image",
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
