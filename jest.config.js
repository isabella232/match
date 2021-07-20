module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-files-after-env.ts"],
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "<rootDir>/.jest/file-mock.ts",
  },
  collectCoverageFrom: ["<rootDir>/packages/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/packages/match-tokens/",
    "<rootDir>/packages/match-props/",
    "<rootDir>/packages/(?:.+?)/dist/",
    "<rootDir>/packages/(?:.+?)/stories/",
    "<rootDir>/packages/(?:.+?)/styles.ts",
    "<rootDir>/packages/(?:.+?)/index.ts",
    "<rootDir>/packages/(?:.+?)/constants.ts",
    "<rootDir>/packages/(?:.+?)/*.d.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
