import { Stack } from "@mantine/core";
import { IconCompass, IconInfoCircle } from "@tabler/icons-react";
import React from "react";

import { NavItemCategory } from "./NavItemCategory/NavItemCategory";
import { NavItemPrimary } from "./NavItemPrimary/NavItemPrimary";

const Nav: React.FC = () => {
  return (
    <Stack h={"100%"} w={250} bg="dark" py={"xl"} pl={"md"} gap={"xs"}>
      <NavItemPrimary route={"/"} label={"Getting Started"} icon={<IconCompass />} />
      <NavItemPrimary route={"/docs/about"} label={"About"} icon={<IconInfoCircle />} />

      <Stack mt={"lg"}>
        <NavItemCategory
          label="components"
          items={[{ label: "Scrollbar", route: "/docs/components/scrollbar" }]}
        />
        <NavItemCategory
          label="hooks"
          items={[{ label: "useBreakpoint", route: "/docs/hooks/use-breakpoint" }]}
        />
      </Stack>
    </Stack>
  );
};

export { Nav };
