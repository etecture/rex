import { Preview } from "@storybook/react";
import rexTheme from "./rexTheme";

import "./styles/globals.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: rexTheme,
      source: "light",
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: "XS",
          styles: {
            width: "576px",
            height: "300px",
          }
        },
        sm: {
          name: "SM",
          styles: {
            width: "770px",
            height: "500px",
          }
        },
        md: {
          name: "MD",
          styles: {
            width: "995px",
            height: "600px",
          }
        },
        lg: {
          name: "LG",
          styles: {
            width: "1205px",
            height: "600px",
          }
        },
        xl: {
          name: "XL",
          styles: {
            width: "1410px",
            height: "600px",
          }
        }
      },
    }
  },
};

export default preview;
