"use client";

import { Table, type TableColumn, type TableRowId } from "@etecture/rex";
import { useState } from "react";

const code = `

import { Table, type TableRowId, type TableColumn } from "@etecture/rex";
import { useState } from "react";

type MyData = { id: string; name: string; price: number };

const staticData = [
  { id: "1", name: "Product A", price: 50 },
  { id: "2", name: "Product B", price: 30 },
  { id: "3", name: "Product C", price: 25 },
  { id: "4", name: "Product D", price: 40 },
  { id: "5", name: "Product E", price: 60 },
  { id: "6", name: "Product F", price: 35 },
  { id: "7", name: "Product G", price: 45 },
  { id: "8", name: "Product H", price: 100 },
  { id: "9", name: "Product I", price: 421 },
  { id: "10", name: "Product J", price: 22 },
  { id: "11", name: "Product J", price: 90 },
  { id: "12", name: "Product J", price: 15 },
];

const staticColumns: TableColumn<MyData>[] = [
  { id: "1", accessor: "id", header: undefined },
  { id: "2", accessor: "name", header: undefined },
  { id: "3", accessor: "price", header: undefined },
];

const Example = () => {
  const [selected, setSelected] = useState<TableRowId[]>([]);

  const getRowId = (row: MyData) => row.id;

  return (
    <>
      <Table
      borders
      getRowId={getRowId}
      data={staticData}
      columns={staticColumns}
      selectedRows={selected}
      onSelectRow={({ id }) => setSelected((state) => [...state, id])}
      onDeselectRow={({ id }) =>
        setSelected((state) => state.toSpliced(state.indexOf(id), 1))
      }
      />
    </>
  );
};
`;

type MyData = { id: string; name: string; price: number };

const staticData = [
  { id: "1", name: "Product A", price: 50 },
  { id: "2", name: "Product B", price: 30 },
  { id: "3", name: "Product C", price: 25 },
  { id: "4", name: "Product D", price: 40 },
  { id: "5", name: "Product E", price: 60 },
  { id: "6", name: "Product F", price: 35 },
  { id: "7", name: "Product G", price: 45 },
  { id: "8", name: "Product H", price: 100 },
  { id: "9", name: "Product I", price: 421 },
  { id: "10", name: "Product J", price: 22 },
  { id: "11", name: "Product J", price: 90 },
  { id: "12", name: "Product J", price: 15 },
];

const staticColumns: TableColumn<MyData>[] = [
  { id: "1", accessor: "id", header: undefined },
  { id: "2", accessor: "name", header: undefined },
  { id: "3", accessor: "price", header: undefined },
];

const Example = () => {
  const [selected, setSelected] = useState<TableRowId[]>([]);

  const getRowId = (row: MyData) => row.id;

  return (
    <div style={{ padding: 25, color: "black" }}>
      <Table
        getRowId={getRowId}
        selectedRows={selected}
        onSelectRow={({ id }) => setSelected((state) => [...state, id])}
        onDeselectRow={({ id }) => setSelected((state) => state.toSpliced(state.indexOf(id), 1))}
        data={staticData}
        columns={staticColumns}
        borders
      />
    </div>
  );
};

export { code, Example as component };
