import type { TableRowId } from "../TableRowId";
import type { ValidRowModel } from "../ValidTableRow";

export type OnSelectRowProps<TRow extends ValidRowModel> = { row: TRow; id: TableRowId };
export type OnSelectRow<TRow extends ValidRowModel> = (props: OnSelectRowProps<TRow>) => void;

export type OnDeselectRowProps<TRow extends ValidRowModel> = { row: TRow; id: TableRowId };
export type OnDeselectRow<TRow extends ValidRowModel> = (props: OnDeselectRowProps<TRow>) => void;

export interface TableSelectionProps<TRow extends ValidRowModel> {
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
}
