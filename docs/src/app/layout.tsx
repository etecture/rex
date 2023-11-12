"use client";

import { Inter } from "next/font/google";
import { Container, Group, MantineProvider, Stack } from "@mantine/core";
import { Scrollbar } from "@etecture/rex";
import { ReactNode } from "react";

import { Header } from "@/components/Header/Header";
import { Theme } from "@/theme/Theme";
import { Nav } from "@/components/Nav/Nav";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={Theme} defaultColorScheme="dark">
          <Stack h={"100vh"} gap={0}>
            <Header />

            <Group align="stretch" gap={0} className={styles.body}>
              <Nav />
              <Scrollbar mih={0} style={{ flex: 1 }}>
                <Container className={styles.content} py={"xl"}>
                  {children}
                </Container>
              </Scrollbar>
            </Group>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
