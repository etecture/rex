import type { TableColumn } from "../interface/TableColumn";
import type { ValidRowModel } from "../interface/ValidTableRow";

export interface GetCellValueParams<TRow extends ValidRowModel> {
  row: TRow;
  column: TableColumn<TRow>;
}

export type GetRowValueFn = <TRow extends ValidRowModel>(
  params: GetCellValueParams<TRow>,
) => string | number;

export const getRowValue: GetRowValueFn = (params) => {
  const _value = getCellValue(params);

  if (!_value) {
    return "";
  }

  if (typeof _value === "string" || typeof _value === "number") {
    return _value;
  }

  if ("toString" in (_value as object)) {
    return (_value as object).toString();
  }

  return "";
};

const getCellValue = <TRow extends ValidRowModel>(params: GetCellValueParams<TRow>) => {
  const { row, column } = params;
  const { accessor } = column;

  if (!accessor) {
    console.error(`Missing accessor for column ${column.id}!`);
    return "";
  }

  if (
    typeof accessor === "string" ||
    typeof accessor === "symbol" ||
    typeof accessor === "number"
  ) {
    return row[accessor];
  }

  return accessor(row);
};
