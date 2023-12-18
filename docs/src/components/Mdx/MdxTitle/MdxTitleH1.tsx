import { Title } from "@mantine/core";
import React, { ReactNode } from "react";

export interface MdxTitleH1Props {
  children?: ReactNode;
}

const MdxTitleH1: React.FC<MdxTitleH1Props> = ({ children }) => {
  return <Title c="white">{children}</Title>;
};

export { MdxTitleH1 };
