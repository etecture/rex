import { Title } from "@mantine/core";
import React, { ReactNode } from "react";

export interface MdxTitleH1Props {
  children?: ReactNode;
}

const MdxTitleH2: React.FC<MdxTitleH1Props> = ({ children }) => {
  return (
    <Title order={2} c="white" fw={"normal"} mt={"xl"}>
      {children}
    </Title>
  );
};

export { MdxTitleH2 };
