import clsx from "clsx";
import { useCellValue } from "../../hooks/useCellValue";
import { DefaultTableRow } from "../../interface/DefaultTableRow";
import { TableColumn } from "../../interface/TableColumn";
import styles from "./TableCell.module.css";

export type TableCellProps<TRow extends DefaultTableRow> = {
  row: TRow;
  column: TableColumn<TRow>;
  isLast: boolean;
  height: string | number;
  isSelected: boolean;
  classNames?: string;
};

const TableCell = <TRow extends DefaultTableRow>(props: TableCellProps<TRow>) => {
  const { row, column, height, isSelected, classNames } = props;

  const cellValue = useCellValue({ row, column, isSelected });

  let width = column.width ?? 0;
  if (width === "content") width = "0.1%";

  const cellClasses = clsx(styles.cell, classNames);

  return (
    <td
      className={cellClasses}
      style={{ width, maxWidth: column.maxWidth, minWidth: column.minWidth }}
    >
      <div className={styles.content} style={{ height }}>
        <div className={styles.inner}>{cellValue}</div>
      </div>
    </td>
  );
};

export { TableCell };
