import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";
import { type ElementRef, useCallback, useMemo, useRef } from "react";
import { Scrollbar } from "..";
import styles from "./Table.module.css";
import { TableHeader } from "./components/TableHeader/TableHeader";
import { TableRow } from "./components/TableRow/TableRow";
import { useIsScrolled } from "./hooks/useIsScrolled";
import { useTableProps } from "./hooks/useTableProps";
import type { DefaultTableRow } from "./interface/DefaultTableRow";
import type { TableRowClassNames } from "./interface/TableClassNames";
import type { TableProps } from "./interface/TableProps";

const Table = <TRow extends DefaultTableRow>(props: TableProps<TRow>) => {
  const tableProps = useTableProps(props);

  const viewportRef = useRef<ElementRef<"div">>(null);
  const isScrolled = useIsScrolled(viewportRef);
  const hasHeader = tableProps.columns.some((column) => Boolean(column.header));

  const estimateSize = useCallback(
    (index: number) => {
      return tableProps.estimateRowHeight?.(tableProps.data[index], index) ?? 36;
    },
    [tableProps.estimateRowHeight, tableProps.data],
  );

  const virtualizer = useVirtualizer({
    count: tableProps.data.length,
    getScrollElement: () => viewportRef.current,
    estimateSize,
    overscan: tableProps.overscan,
  });

  const virtualizedItems = virtualizer.getVirtualItems();
  const topOffset = virtualizedItems[0]?.start ?? 0;

  const showNoDataContent = Boolean(tableProps.data.length === 0 && tableProps.noDataContent);

  const headerRef = useRef<HTMLTableSectionElement>(null);
  const headerHeight = headerRef.current?.clientHeight ?? 0;
  const totalHeight = virtualizer.getTotalSize() + headerHeight;

  const containerClasses = clsx(
    tableProps.className,
    tableProps.classNames?.scrollContainer,
    styles.container,
    isScrolled && styles.scrolled,
    tableProps.borders.table && styles.withTableBorders,
    tableProps.borders.horizontal && styles.withHorizontalBorders,
    tableProps.borders.vertical && styles.withVerticalBorders,
    tableProps.stickyHeader && styles.stickyHeader,
  );

  const rowClassNames: TableRowClassNames = useMemo(
    () => ({
      tableRow: tableProps.classNames?.tableRow,
      tableCell: tableProps.classNames?.tableCell,
      tableCellContent: tableProps.classNames?.tableCellContent,
    }),
    [tableProps.classNames],
  );

  const noDataContentClasses = clsx(styles.noDataContent, tableProps.classNames?.noDataContent);

  return (
    <Scrollbar {...tableProps.divProps} className={containerClasses} viewportRef={viewportRef}>
      <div style={{ height: totalHeight }} className={tableProps.classNames?.root}>
        <table cellPadding={0} className={tableProps.classNames?.table}>
          {hasHeader && (
            <thead className={tableProps.classNames?.tableHeader} ref={headerRef}>
              <tr className={tableProps.classNames?.tableRow}>
                {tableProps.columns.map((column) => {
                  return <TableHeader key={column.id} label={column.header} />;
                })}
              </tr>
            </thead>
          )}

          <tbody className={tableProps.classNames?.tableBody}>
            <tr style={{ height: topOffset, overflowAnchor: "none" }} />

            {virtualizedItems.map((virtualItem) => {
              const row = tableProps.data[virtualItem.index];
              const rowId = tableProps.getRowId(row);

              return (
                <TableRow
                  key={rowId}
                  id={rowId}
                  row={row}
                  virtualItem={virtualItem}
                  measureElement={virtualizer.measureElement}
                  columns={tableProps.columns}
                  striped={tableProps.stripedRows}
                  isSelected={tableProps.selectedRows.includes(rowId)}
                  onSelectRow={tableProps.onSelectRow}
                  onDeselectRow={tableProps.onDeselectRow}
                  classNames={rowClassNames}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {showNoDataContent && <div className={noDataContentClasses}>{tableProps.noDataContent}</div>}
    </Scrollbar>
  );
};

export { Table };
