"use client";

import { UnstyledButton, Group, ThemeIcon, Text } from "@mantine/core";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./NavItemPrimary.module.css";

export interface NavItemPrimaryProps {
  label: string;
  icon: ReactNode;
  route: string;
}

const NavItemPrimary: React.FC<NavItemPrimaryProps> = (props) => {
  const { label, icon, route } = props;

  const path = usePathname();
  const isActive = path === route;

  return (
    <Link href={route} className={clsx(styles.link, isActive && styles.active)}>
      <UnstyledButton>
        <Group gap={"xs"}>
          <ThemeIcon size={"lg"} variant="subtle" color="primary.2" className={styles.icon}>
            {icon}
          </ThemeIcon>

          <Text>{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

export { NavItemPrimary };
