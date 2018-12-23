module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testURL: "http://localhost",
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/storybook-static/",
    "<rootDir>/dist/"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/storybook-static/",
    "<rootDir>/dist/"
  ]
};
