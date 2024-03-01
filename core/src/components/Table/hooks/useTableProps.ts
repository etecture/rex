import { DefaultTableRow } from "../interface/DefaultTableRow";
import { TableBorders } from "../interface/TableBorders";
import { TableColumn } from "../interface/TableColumn";
import {
  GetRowHeight,
  GetRowId,
  OnDeselectRow,
  OnSelectRow,
  TableProps,
} from "../interface/TableProps";
import { TableRowId } from "../interface/TableRowId";

export type ComposedTableProps<TRow extends DefaultTableRow> = {
  data: TRow[];
  columns: TableColumn<TRow>[];
  overscan: number;
  stickyHeader: boolean;
  stripedRows: boolean;
  borders: TableBorders;
  selectedRows: TableRowId[];
  getRowId: GetRowId<TRow>;
  getRowHeight: GetRowHeight<TRow>;
  onSelectRow?: OnSelectRow<TRow>;
  onDeselectRow?: OnDeselectRow<TRow>;
};

export const useTableProps = <TRow extends DefaultTableRow>(props: TableProps<TRow>) => {
  const borders: TableBorders =
    typeof props.borders === "boolean"
      ? { horizontal: props.borders, table: props.borders, vertical: props.borders }
      : {
          horizontal: props.borders?.horizontal ?? true,
          table: props.borders?.table ?? true,
          vertical: props.borders?.vertical ?? false,
        };

  let selectedRows: TableRowId[] = [];
  if (props.selectedRows) {
    selectedRows = Array.isArray(props.selectedRows) ? props.selectedRows : [props.selectedRows];
  }

  return {
    columns: props.columns,
    data: props.data,
    getRowId: props.getRowId,
    overscan: props.overscan ?? 5,
    getRowHeight: props.getRowHeight ?? (() => 36),
    stickyHeader: props.stickyHeader ?? true,
    stripedRows: props.stripedRows ?? false,
    borders,
    selectedRows,
    onSelectRow: props.onSelectRow,
    onDeselectRow: props.onDeselectRow,
  } as const satisfies ComposedTableProps<TRow>;
};
