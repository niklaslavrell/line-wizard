module.exports = {
  siteMetadata: {
    shortTitle: 'Line Wizard',
    title: 'Line Wizard | Clean Instagram Line Breaks',
    siteUrl: `https://www.linewizard.club`,
    description: `Quick and Clean Line Breaks Without Dots on Your Instagram Posts with the Line Wizard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Line Wizard',
        short_name: 'Line Wizard',
        start_url: '/',
        background_color: '#8821AC',
        theme_color: '#8821AC',
        display: 'standalone',
        icon: 'src/images/wizard-purple-512.png', // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117499442-2',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.linewizard.club`,
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
