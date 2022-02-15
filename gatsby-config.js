module.exports = {
  siteMetadata: {
    title: ``,
    description: `We have created a disruptive tool to help you sell your raw cards faster. Using Vision Ai, we are able to pre grade your cards in seconds! Click HERE for more Info!`,
    author: `Due Dilly`,
    siteUrl: `https://www.duedilly.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/due-dilly.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/form.js", // Change to the script filename
      },
    },
  ],
}
