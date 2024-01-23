import { InlineCodeHighlight } from "@mantine/code-highlight";
import { Box, Code, Group, Stack, Table, TableTbody, TableTd, TableTr, Text } from "@mantine/core";
import React from "react";

import { docs } from "../../../docgen/docgen";

export interface PropTableProps {
  component: string;
}

const PropTable: React.FC<PropTableProps> = (props) => {
  const { component } = props;

  const targetDocgen = docs.find((entry) => entry.component === component);

  if (!targetDocgen) return null;

  return (
    <Box my={"sm"}>
      <Table>
        <TableTbody>
          {targetDocgen.props.map((prop) => {
            return (
              <TableTr key={prop.name}>
                <TableTd miw={240}>
                  <Text fz="sm" fw="bold">
                    {prop.name}
                  </Text>
                </TableTd>

                <TableTd>
                  <InlineCodeHighlight code={prop.type.name} lang="ts" px={8} />
                </TableTd>

                <TableTd maw={380}>
                  <Stack gap={"xs"}>
                    <Text fz="sm">{prop.description}</Text>

                    {prop.defaultValue && (
                      <Group gap={"xs"} align="center">
                        <Text component="span" c="dimmed" fz="sm">
                          Default:
                        </Text>
                        <Code>{prop.defaultValue?.value}</Code>
                      </Group>
                    )}
                  </Stack>
                </TableTd>
              </TableTr>
            );
          })}
        </TableTbody>
      </Table>
    </Box>
  );
};

export { PropTable };
