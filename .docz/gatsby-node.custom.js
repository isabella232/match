exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-class-properties",
    name: "@babel/plugin-proposal-object-rest-spread",
  });
};
