"use client";

import { Group, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

import styles from "./NavItem.module.css";

export interface NavItemProps {
  label: string;
  route: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, route } = props;

  const path = usePathname();
  const isActive = path === route;

  return (
    <Link href={route} className={clsx(styles.item, isActive && styles.active)}>
      <Group>
        <Text fz={"sm"}>{label}</Text>
      </Group>
    </Link>
  );
};

export { NavItem };
