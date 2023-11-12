import { Inter } from "next/font/google";
import { Group, MantineProvider, Stack } from "@mantine/core";
import { ReactNode } from "react";
import { Metadata } from "next";

import { Header } from "@/components/Header/Header";
import { Theme } from "@/theme/Theme";
import { Nav } from "@/components/Nav/Nav";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rex - Documentation",
  description: "Exotic components, hooks and functions you wouldn't find in most react component libraries.",
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
              <ContentLayout>{children}</ContentLayout>
            </Group>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
