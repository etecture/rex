import { DefaultTableRow } from "../interface/DefaultTableRow";
import { TableColumn } from "../interface/TableColumn";

export const getCellValue = <TRow extends DefaultTableRow>(
  row: TRow,
  column: TableColumn<TRow>,
) => {
  const { accessor } = column;

  if (
    typeof accessor === "string" ||
    typeof accessor === "symbol" ||
    typeof accessor === "number"
  ) {
    return row[accessor];
  }

  return accessor(row);
};
