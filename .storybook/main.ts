import { StorybookConfig } from "@storybook/react-vite";

const storyDirectories = ["core", "functions", "hooks"];
const stories = storyDirectories
  .map((it) => [`../${it}/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)`])
  .reduce((stories, current) => stories.concat(...current), []);

const config: StorybookConfig = {
  stories,
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-viewport"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
};

export default config;
