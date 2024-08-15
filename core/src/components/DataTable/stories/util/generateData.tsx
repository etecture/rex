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

export const genericColumns = [
  {
    id: "checkbox",
    width: "content",
    cellRenderer: ({ isSelected }) => (
      <div style={{ width: 20, display: "inline-flex", justifyContent: "center" }}>
        {isSelected ? <Check /> : null}
      </div>
    ),
  },
  { id: "id", accessor: "id", label: "ID", width: "content" },
  {
    id: "img",
    label: "Image",
    cellRenderer: ({ row }) => <img height={50} src={row.image} alt="lorem picsum" />,
    width: "content",
  },
  {
    id: "description",
    accessor: (row) => row.complex.c,
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
    label: "Date",
    accessor: "date",
    width: "content",
    cellRenderer: ({ row }) => row.date.toLocaleDateString(),
  },
  { id: "amount", label: "Amount", accessor: "amount", width: "content", minWidth: 120 },
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
] as const satisfies TableColumn<GenericData>[];
