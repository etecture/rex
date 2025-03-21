import type { ReactNode } from "react";
import type { DefaultTableRow } from "../interface/DefaultTableRow";
import type { TableBorders } from "../interface/TableBorders";
import type { TableClassNames } from "../interface/TableClassNames";
import type { TableColumn } from "../interface/TableColumn";
import type {
  EstimateRowHeight,
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
  noDataContent?: ReactNode;
  className: string | undefined;
  classNames: TableClassNames | undefined;
  getRowId: GetRowId<TRow>;
  estimateRowHeight: EstimateRowHeight<TRow> | undefined;
  onSelectRow: OnSelectRow<TRow> | undefined;
  onDeselectRow: OnDeselectRow<TRow> | undefined;
  divProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const useTableProps = <TRow extends DefaultTableRow>(props: TableProps<TRow>) => {
  const {
    columns,
    data,
    className,
    classNames,
    getRowId,
    overscan,
    estimateRowHeight,
    stickyHeader,
    stripedRows,
    borders,
    selectedRows,
    noDataContent,
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
    estimateRowHeight,
    stickyHeader: stickyHeader ?? true,
    stripedRows: stripedRows ?? false,
    borders: _borders,
    selectedRows: _selectedRows,
    noDataContent,
    onSelectRow,
    onDeselectRow,
    className,
    classNames,
    divProps: divProps,
  } as const satisfies ComposedTableProps<TRow>;
};
