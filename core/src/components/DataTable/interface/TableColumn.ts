import type { TableCellRenderer } from "./TableCellRenderer";
import type { TableHeaderRenderer } from "./TableHeaderRenderer";
import type { ValidCellValue } from "./ValidCellValue";
import type { ValidRowModel } from "./ValidTableRow";

export type TableColumnAccessor<TRow extends ValidRowModel> =
  | keyof TRow
  | ((row: TRow) => ValidCellValue);

type TableColumnWithAccessor<TRow extends ValidRowModel> = {
  accessor: TableColumnAccessor<TRow>;
  cellRenderer?: TableCellRenderer<TRow>;
};

type TableColumnWithRenderer<TRow extends ValidRowModel> = {
  accessor?: TableColumnAccessor<TRow>;
  cellRenderer: TableCellRenderer<TRow>;
};

export type TableColumns<TRow extends ValidRowModel> = TableColumn<TRow>[];

export type TableColumn<TRow extends ValidRowModel> = {
  /**
   * A unique id for the column, needed to properly memoize and identify the column in several contexts
   */
  id: string;

  /**
   * An optional column label. Will be used for the default header cell.
   * If not defined, the header will be empty with only the column options.
   */
  label?: string;

  /**
   * An optional width for the column as px or percentage.
   * Use 'content' to shrink the column to the contents width.
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
  headerRenderer?: TableHeaderRenderer<TRow>;

  /**
   * An optional cell renderer that can be used to render the cell with custom elements
   * If not set the table will simply render the value of the passed row via the defined accessor or
   * if defined via the getValue function
   */
  cellRenderer?: TableCellRenderer<TRow>;
} & (TableColumnWithAccessor<TRow> | TableColumnWithRenderer<TRow>);
