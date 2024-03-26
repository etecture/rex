import { useMemo } from "react";
import type { DefaultTableRow } from "../interface/DefaultTableRow";
import type { TableColumn } from "../interface/TableColumn";
import { getCellValue } from "../util/getCellValue";

export type UseCellValueProps<TRow extends DefaultTableRow> = {
  row: TRow;
  column: TableColumn<TRow>;
  isSelected: boolean;
};

export const useCellValue = <TRow extends DefaultTableRow>(props: UseCellValueProps<TRow>) => {
  const { column, row, isSelected } = props;

  return useMemo(() => {
    if (column.cellRenderer) {
      return column.cellRenderer({ row, isSelected });
    }

    const _value = getCellValue(row, column);

    if (["string", "number"].includes(typeof _value)) {
      return _value as string | number;
    }

    return "";
  }, [row, column, isSelected]);
};
