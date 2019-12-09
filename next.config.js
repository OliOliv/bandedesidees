const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    url: false
  },
});

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
  
})
