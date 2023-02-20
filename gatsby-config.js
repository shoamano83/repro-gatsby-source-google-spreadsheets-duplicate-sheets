/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '14SD7HcpKKVebNnCjKdORcv7M9NPFPERTRLOk76x6fkU',
        apiKey: process.env.GOOGLE_API_KEY,
        //credentials: require('./path-to-credentials-file.json'),
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1SdAWpT5zAt3AF95pc78wH4gEcsX4BqxTahgthsUlw1o',
        apiKey: process.env.GOOGLE_API_KEY,
        //credentials: require('./path-to-credentials-file.json'),
      }
    },
  ],
}
