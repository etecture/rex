"use client";

import { CodeHighlight } from "@mantine/code-highlight";
import React from "react";

import styles from "./MdxPre.module.css";

export interface MdxPreProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const MdxPre: React.FC<MdxPreProps> = ({ children }) => {
  const code = children.props.children;
  const [, lang] = children.props.className.split("-");

  return <CodeHighlight code={code} language={lang} className={styles.container} />;
};

export { MdxPre };
