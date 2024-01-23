"use client";

import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

import { NavItem } from "../NavItem/NavItem";

import styles from "./NavItemCategory.module.css";

export type NavCategoryData = {
  label: string;
  route: string;
};

export interface NavItemCategoryProps {
  label: string;
  items: NavCategoryData[];
}

const NavItemCategory: React.FC<NavItemCategoryProps> = (props) => {
  const { label, items } = props;
  const pathname = usePathname();

  const initiallyOpen = items.some((item) => item.route === pathname);
  const [isOpened, handler] = useDisclosure(initiallyOpen);

  return (
    <Stack gap={"xs"}>
      <UnstyledButton c={"dark.3"} onClick={handler.toggle}>
        <Group gap={"xs"}>
          {isOpened ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}

          <Text fw="bold" fz={"sm"} lts={2}>
            {label}
          </Text>
        </Group>
      </UnstyledButton>

      {isOpened && (
        <Stack py={8} className={styles.category}>
          {items.map((item) => (
            <NavItem key={item.route} label={item.label} route={item.route} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export { NavItemCategory };
