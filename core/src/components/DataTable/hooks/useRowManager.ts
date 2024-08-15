import { useMemo } from "react";
import type { ValidRowModel } from "../interface";
import type { ValidCellValue } from "../interface/ValidCellValue";
import { getRowValue } from "../util/getRowValue";
import type { ComposedTableProps } from "./useTableProps";

export const useRowManager = <TRow extends ValidRowModel>(props: ComposedTableProps<TRow>) => {
  const sortedRows = useMemo(() => {
    if (!props.sort || !props.sortStrategy) return props.data;

    return props.data.toSorted((left, right) => {
      if (!props.sort || !props.sortStrategy) return 0;

      const targetColumn = props.columns.find((col) => col.id === props.sort?.column);
      if (!targetColumn) {
        console.error(`Tried to sort rows with an unknown column via id ${props.sort.column}`);
        return 0;
      }

      const sortRows: [TRow, TRow] = [left, right];

      const sortValues: [ValidCellValue, ValidCellValue] = [
        getRowValue({ column: targetColumn, row: left }),
        getRowValue({ column: targetColumn, row: right }),
      ];

      return props.sortStrategy({
        rows: sortRows,
        values: sortValues,
        sort: props.sort,
        column: targetColumn,
      });
    });
  }, [props.data, props.sort, props.columns, props.sortStrategy]);

  return { sortedRows };
};
