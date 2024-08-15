import type { ReactNode } from "react";
import type { HeaderSortOnToggle } from "../../components/TableHeader/HeaderSort/HeaderSort";
import type { TableColumn } from "../TableColumn";
import { SortDirection, type TableSort } from "../TableSort";
import type { ValidCellValue } from "../ValidCellValue";
import type { ValidRowModel } from "../ValidTableRow";

export interface SortStrategyParams<TRow extends ValidRowModel> {
  rows: [TRow, TRow];
  values: [ValidCellValue, ValidCellValue];
  column: TableColumn<TRow>;
  sort: TableSort;
}

export type SortStrategy = <TRow extends ValidRowModel>(params: SortStrategyParams<TRow>) => number;

export type SortIcons = {
  [SortDirection.ASC]: ReactNode;
  [SortDirection.DESC]: ReactNode;
  [SortDirection.UNSORTED]: ReactNode;
};

export interface TableSortEnabledProps {
  sort: TableSort;
  sortStrategy?: SortStrategy;
  sortIcons: SortIcons;
  onSortToggle?: HeaderSortOnToggle;
}

export interface TableSortDisabledProps {
  sort?: false | null | undefined;
  sortStrategy?: undefined;
  sortIcons?: undefined;
  onSortToggle?: undefined;
}

export type TableSortProps = TableSortEnabledProps | TableSortDisabledProps;
