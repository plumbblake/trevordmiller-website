const syntaxHighlight = require("remark-highlight.js");

module.exports = {
  pageExtensions: ["js"],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            mdPlugins: [syntaxHighlight]
          }
        }
      ]
    });

    return config;
  }
};
