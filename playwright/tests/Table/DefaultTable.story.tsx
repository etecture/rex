import type { ReactNode } from "react";
import { Table, type TableColumn } from "../../../core/src";
import styles from "./DefaultTable.story.module.css";

type MyData = { id: number; a: string; b: string; c: number };

export type DefaultTableStoryProps = {
  rows?: number;
  withHeaders?: boolean;
  stickyHeader?: boolean;
  rowHeight?: number;
  overscan?: number;
  wrapperHeight?: number;
};

const DefaultTableStory = (props: DefaultTableStoryProps) => {
  const {
    rows = 25,
    withHeaders = false,
    stickyHeader = true,
    rowHeight = 36,
    overscan = 5,
    wrapperHeight = 300,
  } = props;

  const data: MyData[] = new Array(rows).fill("").map((_, index) => ({
    id: index,
    a: `a${index}`,
    b: `b${index}`,
    c: index * Math.random() * 100,
  }));

  const defaultRenderer = (value: ReactNode) => <div style={{ height: rowHeight }}>{value}</div>;

  let columns: TableColumn<MyData>[] = [
    { id: "a", accessor: "a", cellRenderer: ({ row }) => defaultRenderer(row.a) },
    { id: "b", accessor: "b", cellRenderer: ({ row }) => defaultRenderer(row.b) },
    { id: "c", accessor: "c", cellRenderer: ({ row }) => defaultRenderer(row.c) },
  ];

  if (withHeaders) {
    columns = columns.map((col) => ({ ...col, header: `${col.id} Header` }));
  }

  return (
    <div style={{ height: wrapperHeight }} className={styles.container}>
      <Table
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
        stickyHeader={stickyHeader}
        overscan={overscan}
      />
    </div>
  );
};

export { DefaultTableStory };
