module.exports = {
  siteMetadata: {
    title: `Łukasz Milewski - portfolio`,
    description: `Łukasz Milewski developer z pasji uczący sie front-endu z JavaScript i ReactJS na czele.`,
    author: `Łukasz Milewski`,
    keywords: 'Łukasz Milewski, front-end developer, JavaScript Developer, ReactJS Developer',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Łukasz Milewski - portfolio`,
        short_name: `ŁukaszMilewski`,
        start_url: `/`,
        background_color: `#22A7F0`,
        theme_color: `#22A7F0`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sass',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
