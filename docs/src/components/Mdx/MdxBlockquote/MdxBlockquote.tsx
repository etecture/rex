import { Blockquote } from "@mantine/core";
import type React from "react";
import type { ReactNode } from "react";

export interface MdxBlockquoteProps {
  children?: ReactNode;
}

const MdxBlockquote: React.FC<MdxBlockquoteProps> = ({ children }) => {
  return <Blockquote py={"xs"}>{children}</Blockquote>;
};

export { MdxBlockquote };
