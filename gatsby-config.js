module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: 'localhost:8001',
        hostingWPCOM: false,
        protocol: 'http',
        useACF: false,
        auth: {},
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/taxonomies",
          "**/users",
          "**/tags",
        ],
      },
    }
  ],
}
