import type { ReactNode } from "react";
import type { ValidRowModel } from "./ValidTableRow";

export type TableCellRendererParams<TRow extends ValidRowModel> = {
  row: TRow;
  isSelected: boolean;
};

export type TableCellRenderer<TRow extends ValidRowModel> = (
  params: TableCellRendererParams<TRow>,
) => ReactNode;
