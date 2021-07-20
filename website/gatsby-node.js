const path = require("path");

const { createFilePath } = require("gatsby-source-filesystem");

function createSchemaCustomization({ actions }) {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      sidebarLabel: String!
      description: String
      slug: String
      section: String
      figma: String
      github: String
      image: File @fileByRelativePath
    }
  `;
  createTypes(typeDefs);
}

function onCreateMdxNode({ node, getNode, actions }) {
  const { createNodeField } = actions;
  const slug = node.frontmatter.slug || createFilePath({ node, getNode });

  createNodeField({
    name: "id",
    node,
    value: node.id,
  });

  createNodeField({
    name: "title",
    node,
    value: node.frontmatter.title,
  });

  createNodeField({
    name: "sidebarLabel",
    node,
    value: node.frontmatter.sidebar_label || node.frontmatter.title,
  });

  createNodeField({
    name: "description",
    node,
    value: node.frontmatter.description || "",
  });

  createNodeField({
    name: "slug",
    node,
    value: slug,
  });

  createNodeField({
    name: "figma",
    node,
    value: node.frontmatter.figma || "",
  });

  createNodeField({
    name: "github",
    node,
    value: node.frontmatter.github || "",
  });

  createNodeField({
    name: "section",
    node,
    value: node.frontmatter.section || "",
  });
}

function onCreateNode(...args) {
  if (args[0].node.internal.type === `Mdx`) {
    onCreateMdxNode(...args);
  }
}

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages
  data.allMdx.edges.map(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(__dirname, `./src/templates/doc.tsx`),
      context: {
        id: node.id,
      },
    });
  });
}

module.exports = {
  createSchemaCustomization,
  onCreateNode,
  createPages,
};
