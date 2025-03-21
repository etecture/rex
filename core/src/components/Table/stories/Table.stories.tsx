import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Table } from "../Table";
import type { DefaultTableRow } from "../interface/DefaultTableRow";
import type { TableColumn } from "../interface/TableColumn";
import type { TableProps } from "../interface/TableProps";
import type { TableRowId } from "../interface/TableRowId";
import styles from "./Table.stories.module.css";
import { dynamicHeightColumns, generateData, genericColumns } from "./util/generateData";

const defaultData = generateData({ amount: 5000 });
const defaultColumns = genericColumns as TableColumn<DefaultTableRow>[];
const headerlessColumns = defaultColumns.map((it) => ({ ...it, header: undefined }));

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    overscan: { control: { type: "number", min: 1 } },
    stickyHeader: { control: "boolean" },
    stripedRows: { control: "boolean" },
    borders: { control: "object" },
    data: { control: false },
    columns: { control: false },
  },
  args: {
    data: defaultData,
    columns: defaultColumns,
    overscan: 5,
    stickyHeader: true,
    borders: { table: true, horizontal: true, vertical: false },
    stripedRows: true,
    getRowId: (row) => row.id,
    getRowHeight: () => 50,
  } as Partial<TableProps<DefaultTableRow>>,
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

type TableWrapperProps = TableProps<DefaultTableRow> & {
  height?: number | string;
};

const TableWrapper = (args: TableWrapperProps) => {
  const { height = 400, ...tableProps } = args;
  const [selected, setSelected] = useState<TableRowId[]>([]);

  return (
    <div style={{ height, padding: 25 }}>
      <Table
        {...tableProps}
        selectedRows={selected}
        onSelectRow={({ id }) => setSelected((state) => [...state, id])}
        onDeselectRow={({ id }) => setSelected((state) => state.toSpliced(state.indexOf(id), 1))}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <TableWrapper {...args} />,
};

export const DynamicHeight: Story = {
  render: (args) => (
    <TableWrapper {...args} columns={dynamicHeightColumns as TableColumn<DefaultTableRow>[]} />
  ),
};

export const Headerless: Story = {
  args: {
    columns: headerlessColumns,
  },
  render: (args) => <TableWrapper {...args} />,
};

export const Customized: Story = {
  render: (args) => (
    <TableWrapper
      {...args}
      classNames={{
        scrollContainer: styles.scrollContainer,
        root: styles.root,
        table: styles.table,
        tableHeader: styles.tableHeader,
        tableBody: styles.tableBody,
        tableRow: styles.tableRow,
        tableCell: styles.tableCell,
        tableCellContent: styles.tableCellContent,
      }}
    />
  ),
};

export const NoData: Story = {
  render: (args) => (
    <TableWrapper
      {...args}
      data={[]}
      noDataContent={
        <div style={{ fontSize: 20, color: "#aaa", fontWeight: "bold" }}>No data!</div>
      }
    />
  ),
};

export const FullHeight: Story = {
  render: (args) => <TableWrapper {...args} data={generateData({ amount: 25 })} height={"auto"} />,
};
