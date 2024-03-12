import { Divider } from "@mantine/core";
import type React from "react";
import type { ReactNode } from "react";

export interface MdxHrProps {
  children?: ReactNode;
}

const MdxHr: React.FC<MdxHrProps> = () => {
  return <Divider my={"lg"} />;
};

export { MdxHr };
