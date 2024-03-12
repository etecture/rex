"use client";

import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import type { ReactNode } from "react";

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
