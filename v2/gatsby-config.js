module.exports = {
  siteMetadata: {
    title: `Arkadip`,
    titleTemplate: "%s | Arkadip",
    description: `A Computer science and Engineering student, Deep Learning and Computer Vision 
    engineer and a web developer`,
    siteUrl: 'https://v2.arkadip.me',
    image: '/images/icon.png',
    author: `@darkmatter18`,
    twitterUsername: "@arkadipb21",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-147992308-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Arkadip`,
        short_name: `Arkadip`,
        start_url: `/`,
        background_color: `#111935`,
        theme_color: `#13CA91`,
        display: `standalone`
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
