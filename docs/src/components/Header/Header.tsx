import { ActionIcon, Group, Text } from "@mantine/core";
import React from "react";

import styles from "./Header.module.css";

import { IconGithub } from "@/icons/IconGithub";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Group h={50} px={"md"} justify="space-between" className={styles.header}>
      <Group>
        <Text c="white">react-exotics</Text>
      </Group>

      <Group>
        <ActionIcon
          color="dark.4"
          size={"lg"}
          p={4}
          onClick={() => (window.location.href = "https://github.com/etecture/rex")}
        >
          <IconGithub fill="white" />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export { Header };
