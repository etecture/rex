import { Table, type TableColumn } from "../../../core/src";

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

  let columns: TableColumn<MyData>[] = [
    { id: "a", accessor: "a", header: "A" },
    { id: "b", accessor: "b", header: "B" },
    { id: "c", accessor: "c", header: "C" },
  ];

  if (withHeaders) {
    columns = columns.map((col) => ({ ...col, header: `${col.id} Header` }));
  }

  return (
    <div style={{ height: wrapperHeight }}>
      <Table
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
        getRowHeight={() => rowHeight}
        stickyHeader={stickyHeader}
        overscan={overscan}
      />
    </div>
  );
};

export { DefaultTableStory };
