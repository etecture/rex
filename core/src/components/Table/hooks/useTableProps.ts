import type { DefaultTableRow } from "../interface/DefaultTableRow";
import type { TableBorders } from "../interface/TableBorders";
import type { TableColumn } from "../interface/TableColumn";
import type {
  GetRowHeight,
  GetRowId,
  OnDeselectRow,
  OnSelectRow,
  TableProps,
} from "../interface/TableProps";
import type { TableRowId } from "../interface/TableRowId";

export type ComposedTableProps<TRow extends DefaultTableRow> = {
  data: TRow[];
  columns: TableColumn<TRow>[];
  overscan: number;
  stickyHeader: boolean;
  stripedRows: boolean;
  borders: TableBorders;
  selectedRows: TableRowId[];
  className?: string;
  getRowId: GetRowId<TRow>;
  getRowHeight: GetRowHeight<TRow>;
  onSelectRow?: OnSelectRow<TRow>;
  onDeselectRow?: OnDeselectRow<TRow>;
  divProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const useTableProps = <TRow extends DefaultTableRow>(props: TableProps<TRow>) => {
  const {
    columns,
    data,
    className,
    getRowId,
    overscan,
    getRowHeight,
    stickyHeader,
    stripedRows,
    borders,
    selectedRows,
    onSelectRow,
    onDeselectRow,
    ...divProps
  } = props;

  const _borders: TableBorders =
    typeof borders === "boolean"
      ? { horizontal: borders, table: borders, vertical: borders }
      : {
          horizontal: borders?.horizontal ?? true,
          table: borders?.table ?? true,
          vertical: borders?.vertical ?? false,
        };

  let _selectedRows: TableRowId[] = [];
  if (selectedRows) {
    _selectedRows = Array.isArray(selectedRows) ? selectedRows : [selectedRows];
  }

  return {
    columns: columns,
    data: data,
    getRowId,
    overscan: overscan ?? 5,
    getRowHeight: getRowHeight ?? (() => 36),
    stickyHeader: stickyHeader ?? true,
    stripedRows: stripedRows ?? false,
    borders: _borders,
    selectedRows: _selectedRows,
    onSelectRow: onSelectRow,
    onDeselectRow: onDeselectRow,
    className,
    divProps: divProps,
  } as const satisfies ComposedTableProps<TRow>;
};
