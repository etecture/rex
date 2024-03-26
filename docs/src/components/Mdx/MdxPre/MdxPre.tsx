"use client";

import { CodeHighlight } from "@mantine/code-highlight";
import type React from "react";
import type { PropsWithChildren, ReactElement } from "react";

import styles from "./MdxPre.module.css";

export interface MdxPreProps {
  children: ReactElement<PropsWithChildren<{ className?: string; children: string }>>;
}

const MdxPre: React.FC<MdxPreProps> = ({ children }) => {
  const code = children.props.children;
  const [, lang] = children.props.className?.split("-") ?? [];

  return <CodeHighlight code={code} language={lang} className={styles.container} />;
};

export { MdxPre };
