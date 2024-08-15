import type { TableBorders } from "../TableBorders";
import type { TableColumns } from "../TableColumn";
import type { TableHeaderRenderer } from "../TableHeaderRenderer";
import type { TableRowId } from "../TableRowId";
import type { ValidRowModel } from "../ValidTableRow";
import type { TableSelectionProps } from "./TableSelectionProps";
import type { TableSortProps } from "./TableSortProps";

export type GetRowId<TRow extends ValidRowModel> = (row: TRow) => TableRowId;
export type GetRowHeight<TRow extends ValidRowModel> = (row: TRow, index: number) => number;

export type DataTableProps<TRow extends ValidRowModel> = {
  /**
   * The table data, should be memoized strictly to avoid unnecessary rerenders
   */
  data: TRow[];

  /**
   * The column definitions for the table, should be memoized strictly to avoid unnecessary rerenders
   */
  columns: TableColumns<TRow>;

  /**
   * A global header renderer for all columns that overrides the internal default.
   * A renderer defined in the column directly will take priority over this global renderer.
   */
  headerRenderer?: TableHeaderRenderer<TRow>;

  /**
   * Should return a unique identifier for the corresponding row that doesn't change
   * @param row the dataset for the corresponding row
   * @returns a unique identifier
   */
  getRowId: GetRowId<TRow>;

  /**
   * Used to determine the height of each row
   * @default 36
   */
  getRowHeight?: GetRowHeight<TRow>;

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
   * Classname for the container div element of the table
   */
  className?: string;

  /**
   * Optional native HTML Props for the container div
   */
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & TableSelectionProps<TRow> &
  TableSortProps;
