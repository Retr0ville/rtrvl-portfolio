
require(`dotenv`).config()


const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE 

module.exports = {
  siteMetadata: {
    siteTitle: `Samuel Akhaze`,
    siteTitleAlt: `Rtrvl - Projects, Blog, and Design showcase`,
    siteHeadline: `Rtrvl - Projects, Blog, and Design showcase`,
    siteUrl: `https://github.com/Retr0ville`,
    siteDescription: `Projects, Blog, and Design showcase`,
    siteLanguage: `en`,
    siteImage: `/android-chrome-192x192.png`,
    author: `Samuel Akhaze`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/svgs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rtrvl - My Portfolio`,
        short_name: `Rtrvl`,
        description: `Projects, Blog, and Design showcase`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },`gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `jpg`, `png`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
  ].filter(Boolean),
}
