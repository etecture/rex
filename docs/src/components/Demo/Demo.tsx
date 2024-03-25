import { Suspense } from "react";
import styles from "./Demo.module.css";
import { Box, Divider, Paper } from "@mantine/core";
import type { FC } from "react";
import { CodeHighlightTabs } from "@mantine/code-highlight";

export interface DemoProps {
  data: { code: string; component: FC };
}

export const Demo = (props: DemoProps) => {
  const { data } = props;

  return (
    <Paper className={styles.container} withBorder mih={300} my={"sm"}>
      <Box p={"sm"}>
        <Suspense>
          <data.component />
        </Suspense>
      </Box>

      <Divider />

      <CodeHighlightTabs
        withExpandButton
        defaultExpanded={false}
        code={[{ code: data.code, fileName: "Example.tsx", language: "tsx" }]}
      />
    </Paper>
  );
};
