import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default {
  input: pkg.main,
  output: [
    {
      file: pkg.publishConfig.main,
      format: "cjs",
    },
    {
      file: pkg.publishConfig.module,
      format: "esm",
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      typescript: require("typescript"),
      tsconfig: "./tsconfig.json",
    }),
    babel({
      exclude: "node_modules/**",
    })
  ],
};
