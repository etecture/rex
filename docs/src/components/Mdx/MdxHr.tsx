import { Divider } from "@mantine/core";
import React, { ReactNode } from "react";

export interface MdxHrProps {
  children?: ReactNode;
}

const MdxHr: React.FC<MdxHrProps> = () => {
  return <Divider my={"lg"} />;
};

export { MdxHr };
