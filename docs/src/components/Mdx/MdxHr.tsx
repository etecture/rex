import { Divider } from "@mantine/core";
import React from "react";

export interface MdxHrProps {
  children?: any;
}

const MdxHr: React.FC<MdxHrProps> = (props) => {
  return <Divider my={"lg"} />;
};

export { MdxHr };
