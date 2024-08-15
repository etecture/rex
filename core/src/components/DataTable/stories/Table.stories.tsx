import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { DataTable } from "../DataTable";
import type { TableRowId } from "../interface/TableRowId";
import { SortDirection, type TableSort } from "../interface/TableSort";
import type { DataTableProps } from "../interface/tableProps/TableProps";
import { SelectorIcon } from "./util/SelectorIcon";
import { SortDownIcon } from "./util/SortDownIcon";
import { SortUpIcon } from "./util/SortUpIcon";
import { type GenericData, generateData, genericColumns } from "./util/generateData";

const defaultData = generateData({ amount: 500 });
const defaultColumns = genericColumns;
const headerlessColumns = defaultColumns.map((it) => ({
  ...it,
  header: undefined,
}));

export default {
  title: "Components/DataTable",
  component: DataTable,
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
    sortIcons: { control: false },
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
  },
} satisfies Meta<typeof DataTable<GenericData>>;

type Story = StoryObj<typeof DataTable<GenericData>>;

interface CreateWrapperProps {
  withSort?: boolean;
}

const sortIcons = {
  ASC: <SortUpIcon />,
  DESC: <SortDownIcon />,
  UNSORTED: <SelectorIcon />,
};

const createWrapper = (props?: CreateWrapperProps) => {
  const { withSort = false } = props ?? {};

  return (args: DataTableProps<GenericData>) => {
    const [selected, setSelected] = useState<TableRowId[]>([]);
    const [tableSort, setTableSort] = useState<TableSort>({
      column: "id",
      direction: SortDirection.ASC,
    });

    return (
      <div style={{ height: 400, padding: 25 }}>
        <DataTable
          data={args.data}
          columns={args.columns}
          getRowId={(row) => row.id}
          sort={tableSort}
          selectedRows={selected}
          sortIcons={sortIcons}
          onSortToggle={({ nextSort }) => setTableSort(nextSort)}
          onSelectRow={({ id }) => setSelected((state) => [...state, id])}
          onDeselectRow={({ id }) => setSelected((state) => state.toSpliced(state.indexOf(id), 1))}
        />
      </div>
    );
  };
};

export const Default: Story = {
  render: createWrapper(),
};

export const Headerless: Story = {
  args: {
    columns: headerlessColumns,
  },
  render: createWrapper(),
};

export const Sortable: Story = {
  render: createWrapper({ withSort: true }),
};
