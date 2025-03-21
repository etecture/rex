import clsx from "clsx";
import { useCellValue } from "../../hooks/useCellValue";
import type { DefaultTableRow } from "../../interface/DefaultTableRow";
import type { TableCellClassNames } from "../../interface/TableClassNames";
import type { TableColumn } from "../../interface/TableColumn";
import styles from "./TableCell.module.css";

export type TableCellProps<TRow extends DefaultTableRow> = {
  row: TRow;
  column: TableColumn<TRow>;
  isLast: boolean;
  isSelected: boolean;
  classNames?: TableCellClassNames;
};

const TableCell = <TRow extends DefaultTableRow>(props: TableCellProps<TRow>) => {
  const { row, column, isSelected, classNames } = props;

  const cellValue = useCellValue({ row, column, isSelected });

  let width = column.width ?? 0;
  if (width === "content") width = "0.1%";

  const cellClasses = clsx(styles.cell, classNames?.tableCell);
  const contentClasses = clsx(styles.content, classNames?.tableCellContent);

  return (
    <td
      className={cellClasses}
      style={{ width, maxWidth: column.maxWidth, minWidth: column.minWidth }}
    >
      <div className={contentClasses}>{cellValue}</div>
    </td>
  );
};

export { TableCell };
