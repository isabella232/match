module.exports = {
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
          require("postcss-custom-media")({
            importFrom: require.resolve(
              "@twilio-labs/match-tokens/twilio/custom-media.css"
            ),
          }),
        ],
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/docs`,
        name: "doc",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: 'gatsby-remark-images',
        //     options: {
        //       maxWidth: 1200
        //     }
        //   }
        // ]
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
