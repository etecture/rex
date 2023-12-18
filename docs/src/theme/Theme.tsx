"use client";

import { Container, DefaultMantineColor, MantineColorsTuple, createTheme } from "@mantine/core";

import "@mantine/core/styles.layer.css";
import "@mantine/code-highlight/styles.layer.css";

import "@etecture/rex/styles.css";

import "./globalStyles.css";
import "./Fonts.css";

type ExtendedCustomColors = "primary" | "stone" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeOther {
    almostBlack: string;
    textColor: string;
    headerHeight: number;
    displayFont: string;
    discordEmbedBackground: string;
    discordMentionTextColor: string;
    discordMentionBackground: string;
  }

  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export const Theme = createTheme({
  fontFamily: "Cairo",
  colors: {
    primary: [
      "#EFF3FA",
      "#96B2DC",
      "#5380C6",
      "#355FA0",
      "#284879",
      "#1B3152",
      "#122138",
      "#0D1726",
      "#090F1A",
      "#060A12",
    ],
    dark: [
      "#C7CCD5",
      "#8E98AB",
      "#657188",
      "#4D5567",
      "#3A414E",
      "#2C313B",
      "#1E2128",
      "#14161C",
      "#0E0F13",
      "#090A0D",
    ],
  },

  components: {
    Container: Container.extend({
      defaultProps: {
        size: "lg",
      },
    }),
  },
});
