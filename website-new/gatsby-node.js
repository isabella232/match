
const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getSiteUrl = (options) => {
  return options.siteUrl || 'http://localhost:8000/'
}

function createSchemaCustomization({ actions }) {
  const { createTypes } = actions
  const typeDefs = `
    type NavItem {
      title: String!
      url: String!
    }
    type AlgoliaDocSearchMetadata {
      apiKey: String!
      indexName: String!
    }
    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      author: String
      twitterAccount: String
      githubRepositoryURL: String
      sections: [String!]
      navItems: [NavItem!]
      docSearch: AlgoliaDocSearchMetadata
    }
    type MdxFrontmatter {
      title: String!
      slug: String
      section: String
      order: Int
    }
  `
  createTypes(typeDefs)
}

function createDirectoryIfNotExists({ reporter }, pathname) {
  if (!fs.existsSync(pathname)) {
    reporter.info(`creating the ${pathname} directory`)
    fs.mkdirSync(pathname)
  }
}

async function onPreBootstrap(options) {
  // Create all required directories
  createDirectoryIfNotExists(options, 'pages')
  createDirectoryIfNotExists(options, 'pages/docs')
  createDirectoryIfNotExists(options, 'images')
}

function onCreateMdxNode({ node, getNode, actions }, options) {
  const { createNodeField } = actions
  const slug = node.frontmatter.slug || createFilePath({ node, getNode })

  createNodeField({
    name: 'id',
    node,
    value: node.id,
  })

  createNodeField({
    name: 'title',
    node,
    value: node.frontmatter.title,
  })

  createNodeField({
    name: 'description',
    node,
    value: node.frontmatter.description || '',
  })

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  })

  createNodeField({
    name: 'section',
    node,
    value: node.frontmatter.section || '',
  })

  function getOrderField() {
    if (!Number.isNaN(Number(node.frontmatter.order))) {
      return node.frontmatter.order
    }
    return -9999
  }

  createNodeField({
    name: 'order',
    node,
    value: getOrderField(),
  })

  const url = new URL(getSiteUrl(options))
  url.pathname = slug;

  createNodeField({
    name: 'url',
    node,
    value: url.toString(),
  })
}

function onCreateNode(...args) {
  if (args[0].node.internal.type === `Mdx`) {
    onCreateMdxNode(...args)
  }
}

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions

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
  `)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const filteredEdges = data.allMdx.edges.filter((edge) => {
    if (edge.node.parent.sourceInstanceName === 'default-page') {
      const { slug } = edge.node.fields
      const hasCustom404 = data.allMdx.edges.find(
        (_edge) => edge !== _edge && _edge.node.fields.slug === slug,
      )
      return !hasCustom404
    }
    return true
  })

  // Create pages
  filteredEdges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        __dirname,
        `./src/templates/doc.tsx`,
      ),
      context: {
        id: node.id,
      },
    })
  })
}

module.exports = {
  createSchemaCustomization,
  onPreBootstrap,
  onCreateNode,
  createPages,
}
