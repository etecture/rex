import { ActionIcon, Group, NavLink, Stack, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import { IconCompass, IconInfoCircle, IconNavigation } from "@tabler/icons-react";
import { NavItemPrimary } from "./NavItemPrimary/NavItemPrimary";
import { NavItemCategory } from "./NavItemCategory/NavItemCategory";
import { NavItem } from "./NavItem/NavItem";

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <Stack h={"100%"} w={250} bg="dark" py={"xl"} pl={"md"} gap={"xs"}>
      <NavItemPrimary route={"/docs/getting-started"} label={"Getting Started"} icon={<IconCompass />} />
      <NavItemPrimary route={"/docs/about"} label={"About"} icon={<IconInfoCircle />} />

      <Stack mt={"lg"}>
        <NavItemCategory label="components" items={[{ label: "Scrollbar", route: "/docs/components/scrollbar" }]} />
        <NavItemCategory
          label="hooks"
          items={[{ label: "useResizeObserver", route: "/docs/hooks/use-resize-observer" }]}
        />
      </Stack>
    </Stack>
  );
};

export { Nav };
