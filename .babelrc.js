module.exports = {
  plugins: [
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
  ],
  env: {
    development: {
      presets: ["next/babel"]
    },
    production: {
      presets: ["next/babel"]
    },
    test: {
      presets: [["next/babel", { "preset-env": { modules: "commonjs" } }]]
    }
  }
};
