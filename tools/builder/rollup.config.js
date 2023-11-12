/* eslint-disable import/no-default-export */
import typescriptPlugin from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/rexb.js",
      format: "esm",
    },
  ],
  plugins: [typescriptPlugin()],
};
