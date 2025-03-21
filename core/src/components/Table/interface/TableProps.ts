import type { ReactNode } from "react";
import type { DefaultTableRow } from "./DefaultTableRow";
import type { TableBorders } from "./TableBorders";
import type { TableClassNames } from "./TableClassNames";
import type { TableColumn } from "./TableColumn";
import type { TableRowId } from "./TableRowId";

export type GetRowId<TRow extends DefaultTableRow> = (row: TRow) => TableRowId;
export type EstimateRowHeight<TRow extends DefaultTableRow> = (row: TRow, index: number) => number;

export type OnSelectRowProps<TRow extends DefaultTableRow> = { row: TRow; id: TableRowId };
export type OnSelectRow<TRow extends DefaultTableRow> = (props: OnSelectRowProps<TRow>) => void;

export type OnDeselectRowProps<TRow extends DefaultTableRow> = { row: TRow; id: TableRowId };
export type OnDeselectRow<TRow extends DefaultTableRow> = (props: OnDeselectRowProps<TRow>) => void;

export interface TableProps<TRow extends DefaultTableRow>
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TRow[];
  columns: TableColumn<TRow>[];

  /**
   * Rendered when data is empty
   */
  noDataContent?: ReactNode;

  /**
   * Should return a unique identifier for the corresponding row that doesn't change
   * @param row the dataset for the corresponding row
   * @returns a unique identifier
   */
  getRowId: GetRowId<TRow>;

  /**
   * Used to estimate the row height until its measured after being rendered.
   * The closer the estimated value is to the actual row height the smoother the scrolling will appear.
   */
  estimateRowHeight?: EstimateRowHeight<TRow>;

  /**
   * The amount of rows rendered out of view
   * @default 5
   */
  overscan?: number;

  /**
   * If true the table header will stick to the top
   * @default true
   */
  stickyHeader?: boolean;

  /**
   * A list of selected row ids
   */
  selectedRows?: TableRowId | TableRowId[];

  /**
   * Called whenever a row is selected
   */
  onSelectRow?: OnSelectRow<TRow>;

  /**
   * Called whenever a row is deselected
   */
  onDeselectRow?: OnDeselectRow<TRow>;

  /**
   * Renders cells with borders
   * @default false
   */
  borders?: boolean | TableBorders;

  /**
   * If true the rows will be rendered with alternating colors.
   * The colors can be customized with the css vars --rex-table-cell-even-background-color and --rex-table-cell-background-color
   * @default false
   */
  stripedRows?: boolean;

  /**
   * A set of class names for each element of the table
   */
  classNames?: TableClassNames;
}
