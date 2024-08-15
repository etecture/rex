import clsx from "clsx";
import type { OnDeselectRow, OnSelectRow, TableColumn, ValidRowModel } from "../../interface";
import { TableCell } from "../TableCell/TableCell";
import styles from "./TableRow.module.css";

export type TableRowProps<TRow extends ValidRowModel> = {
  id: string | number;
  index: number;
  row: TRow;
  columns: TableColumn<TRow>[];
  height: string | number;
  striped: boolean;
  isSelected: boolean;
  onSelectRow: OnSelectRow<TRow> | undefined;
  onDeselectRow: OnDeselectRow<TRow> | undefined;
};

const TableRow = <TRow extends ValidRowModel>(props: TableRowProps<TRow>) => {
  const { id, index, row, columns, height, striped, isSelected, onSelectRow, onDeselectRow } =
    props;

  const isStriped = striped && index % 2 === 0;

  const handleRowClick = () => {
    if (isSelected) {
      onDeselectRow?.({ id, row });
    } else {
      onSelectRow?.({ id, row });
    }
  };

  const selectable = (onSelectRow && !isSelected) || (onDeselectRow && isSelected);
  const rowClasses = clsx(
    styles.row,
    selectable && styles.selectable,
    isSelected && styles.selected,
    isStriped && styles.striped,
  );

  return (
    <tr className={rowClasses} onClick={handleRowClick}>
      {columns.map((column, index) => {
        return (
          <TableCell
            key={`${id}_${column.id}`}
            column={column}
            row={row}
            isSelected={isSelected}
            height={height}
            isLast={columns.length - 1 === index}
            classNames={styles.rowCell}
          />
        );
      })}
    </tr>
  );
};

export { TableRow };
