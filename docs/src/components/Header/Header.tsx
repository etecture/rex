import { ActionIcon, Group, Text } from "@mantine/core";
import Link from "next/link";

import { IconGithub } from "../Icons/IconGithub";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Group h={50} px={"md"} justify="space-between" className={styles.header}>
      <Group>
        <Link href={"/"}>
          <Text c="white">Rex</Text>
        </Link>
      </Group>

      <Group>
        <Link href="https://github.com/etecture/rex">
          <ActionIcon color="dark.4" size={"lg"} p={4}>
            <IconGithub fill="white" />
          </ActionIcon>
        </Link>
      </Group>
    </Group>
  );
};

export { Header };
