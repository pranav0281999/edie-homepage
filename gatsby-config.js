module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "edie-homepage",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Material Icons", "Heebo", "Poppins", "Montserrat"],
        }
      }
    }
  ],
};
