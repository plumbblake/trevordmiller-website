module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/storybook-static/"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/storybook-static/"
  ]
};
