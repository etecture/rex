import { Preview } from "@storybook/react";
import rexTheme from "./rexTheme";

import "./styles/globals.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: rexTheme,
      source: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
