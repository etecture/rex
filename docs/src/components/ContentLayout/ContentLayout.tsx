"use client";

import { Scrollbar } from "@etecture/rex";
import { Container } from "@mantine/core";
import React, { ReactNode } from "react";

import styles from "./ContentLayout.module.css";

export interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <Scrollbar mih={0} style={{ flex: 1 }}>
      <Container className={styles.content} py={"xl"}>
        {children}
      </Container>
    </Scrollbar>
  );
};

export { ContentLayout };
