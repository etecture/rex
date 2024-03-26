import clsx from "clsx";
import type { DefaultTableRow } from "../../interface/DefaultTableRow";
import type { TableColumn } from "../../interface/TableColumn";
import type { OnDeselectRow, OnSelectRow } from "../../interface/TableProps";
import { TableCell } from "../TableCell/TableCell";
import styles from "./TableRow.module.css";

export type TableRowProps<TRow extends DefaultTableRow> = {
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

const TableRow = <TRow extends DefaultTableRow>(props: TableRowProps<TRow>) => {
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
