module.exports = {
  env: {
    development: {
      presets: ["next/babel"],
      plugins: [
        [
          "styled-components",
          {
            ssr: true,
            displayName: true,
            preprocess: false
          }
        ],
        [
          "module-resolver",
          {
            root: ["./"],
            alias: {
              utils: "./utils",
              components: "./components",
              pages: "./pages"
            }
          }
        ]
      ]
    },
    production: {
      presets: ["next/babel"],
      plugins: [
        [
          "styled-components",
          {
            ssr: true,
            displayName: false,
            preprocess: false
          }
        ],
        [
          "module-resolver",
          {
            root: ["./"],
            alias: {
              utils: "./utils",
              components: "./components",
              pages: "./pages"
            }
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          "next/babel",
          {
            "preset-env": {
              modules: "commonjs"
            }
          }
        ]
      ],
      plugins: [
        [
          "styled-components",
          {
            ssr: true,
            displayName: true,
            preprocess: false
          }
        ],
        [
          "module-resolver",
          {
            root: ["./"],
            alias: {
              utils: "./utils",
              components: "./components",
              pages: "./pages"
            }
          }
        ]
      ]
    }
  }
};
