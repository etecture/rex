import { Center, Divider, Group, Text } from "@mantine/core";
import React from "react";

const notFound: React.FC = () => {
  return (
    <Center h={"100%"}>
      <Group gap={40}>
        <Text fz={64} c={"dark.4"} fw={"bold"} lts={5}>
          404
        </Text>

        <Divider orientation="vertical" />

        <Text c={"dark.1"}>page not found</Text>
      </Group>
    </Center>
  );
};

export default notFound;
