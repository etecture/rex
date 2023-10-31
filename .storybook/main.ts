import { StorybookConfig } from "@storybook/react-vite";

const storyDirectories = ["core"];
const stories = storyDirectories
  .map((it) => [`../${it}/**/*.mdx`, `../${it}/**/*.stories.@(js|jsx|mjs|ts|tsx)`])
  .reduce((stories, current) => stories.concat(...current), []);

const config: StorybookConfig = {
  stories,
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "./tsconfig.base.json",
    },
  },
};

export default config;
