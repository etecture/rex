import { ActionIcon, Group, Text, UnstyledButton } from "@mantine/core";
import React from "react";

import { IconGithub } from "../Icons/IconGithub";

import styles from "./Header.module.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Group h={50} px={"md"} justify="space-between" className={styles.header}>
      <Group>
        <UnstyledButton onClick={() => (window.location.href = "/")}>
          <Text c="white">Rex</Text>
        </UnstyledButton>
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
