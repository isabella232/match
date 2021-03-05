module.exports = {
  siteMetadata: {
    title: "Match",
    description:
      "Providing designers and developers with tools to create consistent, high quality public facing Twilio experiences.",
  },
  plugins: [
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
