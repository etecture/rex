"use client";

import { Scrollbar } from "@etecture/rex";
import { CodeHighlight } from "@mantine/code-highlight";
import { Container, Paper, Tabs, TabsList, TabsPanel, TabsTab, Text, Title } from "@mantine/core";
import type React from "react";
import { type ReactNode, useState } from "react";

import { docs } from "../../../docgen/docgen";
import { PropTable } from "../../components/PropTable/PropTable";

import styles from "./ComponentLayout.module.css";

export interface ComponentLayoutProps {
  componentName: string;
  children: ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = (props) => {
  const { componentName, children } = props;

  const importCode = `import { ${componentName} } from "@etecture/rex";`;

  const targetDocgen = docs.find((entry) => entry.component === componentName);
  const withProps = targetDocgen && targetDocgen.props.length > 0;

  const [activeTab, setActiveTab] = useState<string | null>("usage");

  return (
    <Scrollbar>
      <Container py={60}>
        <Paper py="lg" px={"xl"} bg={"dark.6"} radius={0} withBorder>
          <Title c="white">{componentName}</Title>
          <Text>{targetDocgen?.description}</Text>
          <CodeHighlight code={importCode} lang="tsx" my={"md"} />
        </Paper>

        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          classNames={{ root: styles.tabsRoot, tab: styles.tabsTab }}
        >
          <TabsList my={"xl"}>
            <TabsTab value="usage" fz="xl" fw="bold" px="xl">
              Usage
            </TabsTab>

            {withProps && (
              <TabsTab value="props" fz="xl" fw="bold" px="xl">
                Props
              </TabsTab>
            )}
          </TabsList>

          <TabsPanel value="usage">{children}</TabsPanel>

          <TabsPanel value="props">
            <PropTable component={componentName} />
          </TabsPanel>
        </Tabs>
      </Container>
    </Scrollbar>
  );
};

export { ComponentLayout };
