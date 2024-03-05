import { ReactNode } from "react";
import { DefaultTableRow } from "./DefaultTableRow";

export type TableColumnAccessor<TRow extends DefaultTableRow> =
  | keyof TRow
  | ((row: DefaultTableRow) => keyof TRow);

export type TableCellRendererParams<TRow extends DefaultTableRow> = {
  row: TRow;
  isSelected: boolean;
};
export type TableCellRenderer<TRow extends DefaultTableRow> = (
  params: TableCellRendererParams<TRow>,
) => ReactNode;

type TableColumnWithAccessor<TRow extends DefaultTableRow> = {
  accessor: TableColumnAccessor<TRow>;
  cellRenderer?: TableCellRenderer<TRow>;
};
type TableColumnWithRenderer<TRow extends DefaultTableRow> = {
  accessor?: TableColumnAccessor<TRow>;
  cellRenderer: TableCellRenderer<TRow>;
};

export type TableColumn<TRow extends DefaultTableRow> = {
  /**
   * A unique id for the column
   */
  id: string;

  /**
   * An optional width for the column as px or percentage. Use 'content' to shrink to the contents width.
   */
  width?: number | string | "content";

  /**
   * An optional minimum width for the column
   */
  minWidth?: number;

  /**
   * An optional maximum width for the column
   */
  maxWidth?: number;

  /**
   * An optional header for the column
   */
  header?: ReactNode;
} & (TableColumnWithAccessor<TRow> | TableColumnWithRenderer<TRow>);
