import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { TableProps } from ".";
import { Table } from "./Table";
import type { TableColumn } from "./interface/TableColumn";

type MyData = { a: string; b: string; c: number; d: number[] };

const defaultData: MyData[] = [
  { a: "a1", b: "b1", c: 10, d: [1, 2, 3] },
  { a: "a2", b: "b2", c: 20, d: [4, 5, 6] },
  { a: "a3", b: "b3", c: 30, d: [2, 4, 3, 3, 5] },
];

const columns: TableColumn<MyData>[] = [
  { id: "a", accessor: "a" },
  { id: "b", accessor: "b" },
  { id: "c", accessor: "c" },
  { id: "d", cellRenderer: ({ row }) => row.d.join(", ") },
];

const tableProps: TableProps<MyData> & { "data-testid": string } = {
  data: defaultData,
  columns,
  getRowId: (row) => row.a,
  "data-testid": "table-root",
};

describe("Table", () => {
  it("should render", async () => {
    render(<Table {...tableProps} />);
    expect(screen.getByTestId("table-root")).toBeVisible();
  });
});
