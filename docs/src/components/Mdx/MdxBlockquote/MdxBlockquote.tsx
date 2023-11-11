import { Blockquote } from "@mantine/core";
import React from "react";

export interface MdxBlockquoteProps {
  children?: any;
}

const MdxBlockquote: React.FC<MdxBlockquoteProps> = ({ children }) => {
  return <Blockquote py={"xs"}>{children}</Blockquote>;
};

export { MdxBlockquote };
