import clsx from "clsx";
import type { TableCellRendererParams } from "../../interface/TableCellRenderer";
import type { TableColumn } from "../../interface/TableColumn";
import type { ValidRowModel } from "../../interface/ValidTableRow";
import { type GetCellValueParams, getRowValue } from "../../util/getRowValue";
import styles from "./TableCell.module.css";

export type TableCellProps<TRow extends ValidRowModel> = {
  row: TRow;
  column: TableColumn<TRow>;
  isLast: boolean;
  height: string | number;
  isSelected: boolean;
  classNames?: string;
};

const TableCell = <TRow extends ValidRowModel>(props: TableCellProps<TRow>) => {
  const { row, column, height, isSelected, classNames } = props;

  const cellRendererParams: TableCellRendererParams<TRow> = {
    row,
    isSelected,
  };

  const getCellValueParams: GetCellValueParams<TRow> = {
    row,
    column,
  };

  const cellContent = column.cellRenderer
    ? column.cellRenderer(cellRendererParams)
    : getRowValue(getCellValueParams);

  let width = column.width ?? 0;
  if (width === "content") width = "0.1%";

  const cellClasses = clsx(styles.cell, classNames);

  return (
    <td
      className={cellClasses}
      style={{ width, maxWidth: column.maxWidth, minWidth: column.minWidth }}
    >
      <div className={styles.content} style={{ height }}>
        <div className={styles.inner}>{cellContent}</div>
      </div>
    </td>
  );
};

export { TableCell };
