module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"]
};
