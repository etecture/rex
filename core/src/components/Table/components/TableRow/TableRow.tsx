import type { VirtualItem } from "@tanstack/react-virtual";
import clsx from "clsx";
import { useMemo } from "react";
import type { DefaultTableRow } from "../../interface/DefaultTableRow";
import type { TableCellClassNames, TableRowClassNames } from "../../interface/TableClassNames";
import type { TableColumn } from "../../interface/TableColumn";
import type { OnDeselectRow, OnSelectRow } from "../../interface/TableProps";
import { TableCell } from "../TableCell/TableCell";
import styles from "./TableRow.module.css";

export type TableRowProps<TRow extends DefaultTableRow> = {
  id: string | number;
  row: TRow;
  columns: TableColumn<TRow>[];
  virtualItem: VirtualItem;
  striped: boolean;
  isSelected: boolean;
  classNames?: TableRowClassNames;
  measureElement: (node: Element | null | undefined) => void;
  onSelectRow: OnSelectRow<TRow> | undefined;
  onDeselectRow: OnDeselectRow<TRow> | undefined;
};

const TableRow = <TRow extends DefaultTableRow>(props: TableRowProps<TRow>) => {
  const {
    id,
    virtualItem,
    row,
    columns,
    striped,
    isSelected,
    classNames,
    measureElement,
    onSelectRow,
    onDeselectRow,
  } = props;

  const isStriped = striped && virtualItem.index % 2 === 0;

  const handleRowClick = () => {
    if (isSelected) {
      onDeselectRow?.({ id, row });
    } else {
      onSelectRow?.({ id, row });
    }
  };

  const selectable = (onSelectRow && !isSelected) || (onDeselectRow && isSelected);
  const rowClasses = clsx(
    classNames?.tableRow,
    styles.row,
    selectable && styles.selectable,
    isSelected && styles.selected,
    isStriped && styles.striped,
  );

  const cellClasses: TableCellClassNames = useMemo(
    () => ({
      tableCell: clsx(styles.rowCell, classNames?.tableCell),
      tableCellContent: classNames?.tableCellContent,
    }),
    [classNames],
  );

  return (
    <tr
      className={rowClasses}
      onClick={handleRowClick}
      ref={measureElement}
      data-index={virtualItem.index}
    >
      {columns.map((column, index) => {
        return (
          <TableCell
            key={`${id}_${column.id}`}
            column={column}
            row={row}
            isSelected={isSelected}
            isLast={columns.length - 1 === index}
            classNames={cellClasses}
          />
        );
      })}
    </tr>
  );
};

export { TableRow };
