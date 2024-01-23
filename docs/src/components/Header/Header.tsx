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
        <ActionIcon
          color="dark.4"
          size={"lg"}
          p={4}
          component={Link}
          href={"https://github.com/etecture/rex"}
        >
          <IconGithub fill="white" />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export { Header };
