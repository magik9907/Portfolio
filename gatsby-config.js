module.exports = {
  siteMetadata: {
    title: `Łukasz Milewski - portfolio`,
    description: `Łukasz Milewski - developer of JavaScript and ReactJS.`,
    author: `Łukasz Milewski`,
    keywords: 'Łukasz Milewski, front-end developer, JavaScript Developer, ReactJS Developer',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    'gatsby-image',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Łukasz Milewski - portfolio`,
        short_name: `ŁukaszMilewski`,
        start_url: `/`,
        lang: 'en',
        background_color: `#22A7F0`,
        description: 'Łukasz Milewski - developer of JavaScript and ReactJS',
        theme_color: `#22A7F0`,
        display: `standalone`,
        include_favicon: false,
        localize: [
          {
            start_url: `/pl/`,
            lang: `pl`,
            name: `Łukasz Milewski - portfolio`,
            short_name: `Łukasz Milewski`,
            description: `Łukasz Milewski developer tworzący w JavaScript-cie i ReactJS.`,
          },
        ],
        icon: 'src/icons/favicon-32x32.png',
        icons: [
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable",
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-fontawesome-css',
  ],
}
