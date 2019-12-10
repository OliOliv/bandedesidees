const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const path = require('path');

// module.exports = withImages({
//   webpack(config, options) {
//     return config;
//   }
// });

module.exports = withCSS(
  withSass({
    webpack(config, options) {
      
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
        
      });
      config.resolve.modules.push(path.resolve('./'))

      return config;
    }
  })
);

