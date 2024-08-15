import type { ReactNode } from "react";
import type { TableColumn } from "./TableColumn";
import type { TableSort } from "./TableSort";
import type { ValidRowModel } from "./ValidTableRow";

export interface TableHeaderRendererParams<TRow extends ValidRowModel> {
  column: TableColumn<TRow>;
  sort: TableSort | undefined;
}

export type TableHeaderRenderer<TRow extends ValidRowModel> = (
  params: TableHeaderRendererParams<TRow>,
) => ReactNode;
