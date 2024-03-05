import { Meta, StoryObj } from "@storybook/react";

import { Table } from "../Table";
import { DefaultTableRow } from "../interface/DefaultTableRow";
import { TableColumn } from "../interface/TableColumn";
import { generateData, genericColumns } from "./util/generateData";
import { useState } from "react";
import { TableRowId } from "../interface/TableRowId";
import { TableProps } from "../interface/TableProps";

const defaultData = generateData({ amount: 500 });
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
    stripedRows: false,
    getRowId: (row) => row.id,
    getRowHeight: () => 50,
  } as Partial<TableProps<DefaultTableRow>>,
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

const TableWrapper = (args: TableProps<DefaultTableRow>) => {
  const [selected, setSelected] = useState<TableRowId[]>([]);

  return (
    <div style={{ height: 400, padding: 25 }}>
      <Table
        {...args}
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

export const Headerless: Story = {
  args: {
    columns: headerlessColumns,
  },
  render: (args) => <TableWrapper {...args} />,
};
