const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Frontend Developer',
    author: 'Vlad Plesu',
    location: 'Iasi, Romania'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    }
  ]
};
