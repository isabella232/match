module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/packages/match-website/.cache",
    "<rootDir>/packages/match-website/public",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // globals: {
  //   'ts-jest': {
  //     packageJson: '<rootDir>/package.json',
  //   },
  // },
};
