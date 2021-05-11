module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/proposal-class-properties", { loose: true }],
    ["@babel/proposal-private-methods", { loose: true }],
    ["@babel/proposal-private-property-in-object", { loose: true }],
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
    "babel-plugin-styled-components",
  ],
};
