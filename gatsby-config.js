require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fleury, tienda en línea`,
    description: `Tienda en línea`,
    author: `@Awce2`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
        name: `Fleury - Florería by Camberos`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F907C`,
        theme_color: `#2F907C`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Balance", "BalanceTransaction", "Product", "Sku"],
        secretKey: "stripe_secret_key_here",
        downloadFiles: true,
      },
    },
  ],
}
