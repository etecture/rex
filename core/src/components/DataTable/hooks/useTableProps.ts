import { useMemo } from "react";
import type { HeaderSortOnToggle } from "../components/TableHeader/HeaderSort/HeaderSort";
import type {
  DataTableProps,
  GetRowHeight,
  GetRowId,
  OnDeselectRow,
  OnSelectRow,
  TableBorders,
  TableColumn,
  TableRowId,
  ValidRowModel,
} from "../interface";
import type { TableHeaderRenderer } from "../interface/TableHeaderRenderer";
import type { TableSort } from "../interface/TableSort";
import type { SortIcons, SortStrategy } from "../interface/tableProps/TableSortProps";
import { defaultSortStrategy } from "../strategies/sort/defaultSortStrategy";

export type ComposedTableProps<TRow extends ValidRowModel> = {
  data: TRow[];
  columns: TableColumn<TRow>[];
  headerRenderer?: TableHeaderRenderer<TRow>;
  overscan: number;
  stickyHeader: boolean;
  stripedRows: boolean;
  borders: TableBorders;
  selectedRows: TableRowId[];
  sort?: TableSort;
  sortStrategy?: SortStrategy;
  sortIcons?: SortIcons;
  onSortToggle?: HeaderSortOnToggle;
  className?: string;
  getRowId: GetRowId<TRow>;
  getRowHeight: GetRowHeight<TRow>;
  onSelectRow?: OnSelectRow<TRow>;
  onDeselectRow?: OnDeselectRow<TRow>;
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const useTableProps = <TRow extends ValidRowModel>(props: DataTableProps<TRow>) => {
  const _borders: TableBorders = useMemo(
    () =>
      typeof props.borders === "boolean"
        ? { horizontal: props.borders, table: props.borders, vertical: props.borders }
        : {
            horizontal: props.borders?.horizontal ?? true,
            table: props.borders?.table ?? true,
            vertical: props.borders?.vertical ?? false,
          },
    [props.borders],
  );

  const _selectedRows: TableRowId[] = useMemo(() => {
    if (props.selectedRows) {
      return Array.isArray(props.selectedRows) ? props.selectedRows : [props.selectedRows];
    }

    return [];
  }, [props.selectedRows]);

  return {
    columns: props.columns,
    data: props.data,
    headerRenderer: props.headerRenderer,
    getRowId: props.getRowId,
    overscan: props.overscan ?? 5,
    getRowHeight: props.getRowHeight ?? (() => 36),
    stickyHeader: props.stickyHeader ?? true,
    stripedRows: props.stripedRows ?? false,
    sort: props.sort || undefined,
    sortStrategy: props.sortStrategy ?? defaultSortStrategy,
    sortIcons: props.sortIcons,
    onSortToggle: props.onSortToggle,
    borders: _borders,
    selectedRows: _selectedRows,
    onSelectRow: props.onSelectRow,
    onDeselectRow: props.onDeselectRow,
    className: props.className,
    elementProps: props.elementProps,
  } as const satisfies ComposedTableProps<TRow>;
};
