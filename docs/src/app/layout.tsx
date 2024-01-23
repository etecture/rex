import { Box, Group, MantineProvider, Stack } from "@mantine/core";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Header } from "@/components/Header/Header";
import { Nav } from "@/components/Nav/Nav";
import { Theme } from "@/theme/Theme";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rex - Documentation",
  description:
    "Exotic components, hooks and functions you wouldn't find in most react component libraries.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={Theme} defaultColorScheme="dark">
          <Stack h={"100vh"} gap={0}>
            <Header />

            <Group align="stretch" gap={0} className={styles.body}>
              <Nav />
              <Box style={{ flex: 1, minWidth: 0, height: "100%" }}>{children}</Box>
            </Group>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
