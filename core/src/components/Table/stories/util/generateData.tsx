import type { TableColumn } from "../../interface/TableColumn";
import { Check } from "./Check";

export type GenericData = {
  id: string;
  image: string;
  description: string;
  date: Date;
  amount: number;
  optional?: string;
  complex: { a: string; b: number; c: Date };
};

type GenerateDataOptions = {
  amount: number;
};

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

export const generateData = (options: GenerateDataOptions): GenericData[] => {
  const { amount } = options;
  const data = new Array(amount).fill("").map(
    (_, index) =>
      ({
        id: `${index}`,
        image: `https://picsum.photos/200/200?${index}`,
        description: new Array(Math.round(Math.random() * 4)).fill(lorem).join(" "),
        date: new Date(),
        amount: Math.round(Math.random() * 1000),
        optional: Math.random() > 0.5 ? "Something" : undefined,
        complex: {
          a: ["A", "B", "C"][Math.floor(Math.random() * 2.9)],
          b: Math.round(Math.random() * 25),
          c: new Date(),
        },
      }) satisfies GenericData,
  );

  return data;
};

export const genericColumns: TableColumn<GenericData>[] = [
  {
    id: "checkbox",
    width: "content",
    cellRenderer: ({ isSelected }) => (
      <div style={{ width: 20, display: "inline-flex", justifyContent: "center" }}>
        {isSelected ? <Check /> : null}
      </div>
    ),
  },
  { id: "id", accessor: "id", header: "ID", width: "content" },
  {
    id: "img",
    header: "Image",
    cellRenderer: ({ row }) => (
      <img height={42} src={row.image} alt="lorem picsum" style={{ borderRadius: 8 }} />
    ),
    width: "content",
  },
  {
    id: "description",
    accessor: "description",
    maxWidth: 250,
    minWidth: 100,
    cellRenderer: ({ row }) => (
      <div
        style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
        title={row.description}
      >
        {row.description}
      </div>
    ),
  },
  {
    id: "date",
    header: "Date",
    accessor: "date",
    width: "content",
    cellRenderer: ({ row }) => row.date.toLocaleDateString(),
  },
  { id: "amount", header: "Amount", accessor: "amount", width: "content", minWidth: 120 },
  { id: "optional", accessor: "optional" },
  {
    id: "complex",
    accessor: "complex",
    width: "content",
    minWidth: 80,
    cellRenderer: ({ row }) => (
      <div>
        {row.complex.a}({row.complex.b})
      </div>
    ),
  },
];

export const dynamicHeightColumns: TableColumn<GenericData>[] = genericColumns.map((col) => {
  if (col.id === "description") {
    return {
      ...col,
      cellRenderer: ({ row }) => (
        <div style={{ textWrap: "wrap" }} title={row.description}>
          {row.description}
        </div>
      ),
    } satisfies TableColumn<GenericData>;
  }

  return col;
});
