// bug in html-loader that prevents CommonJS module from being flattened: https://github.com/webpack-contrib/html-loader/issues/203
export const resolveCommonModule = (
  module: { default: string } | string | undefined
): string | undefined => {
  if (typeof module === "object") {
    module = module.default;
  }
  return module;
};
