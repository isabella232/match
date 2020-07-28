const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Match',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/serenabuxton/Documents/match/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Match',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/serenabuxton/Documents/match',
          templates:
            '/Users/serenabuxton/Documents/match/node_modules/docz-core/dist/templates',
          docz: '/Users/serenabuxton/Documents/match/.docz',
          cache: '/Users/serenabuxton/Documents/match/.docz/.cache',
          app: '/Users/serenabuxton/Documents/match/.docz/app',
          appPackageJson: '/Users/serenabuxton/Documents/match/package.json',
          appTsConfig: '/Users/serenabuxton/Documents/match/tsconfig.json',
          gatsbyConfig: '/Users/serenabuxton/Documents/match/gatsby-config.js',
          gatsbyBrowser:
            '/Users/serenabuxton/Documents/match/gatsby-browser.js',
          gatsbyNode: '/Users/serenabuxton/Documents/match/gatsby-node.js',
          gatsbySSR: '/Users/serenabuxton/Documents/match/gatsby-ssr.js',
          importsJs: '/Users/serenabuxton/Documents/match/.docz/app/imports.js',
          rootJs: '/Users/serenabuxton/Documents/match/.docz/app/root.jsx',
          indexJs: '/Users/serenabuxton/Documents/match/.docz/app/index.jsx',
          indexHtml: '/Users/serenabuxton/Documents/match/.docz/app/index.html',
          db: '/Users/serenabuxton/Documents/match/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
