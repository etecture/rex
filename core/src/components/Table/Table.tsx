import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";
import { type ElementRef, useRef } from "react";
import { Scrollbar } from "..";
import styles from "./Table.module.css";
import { TableHeader } from "./components/TableHeader/TableHeader";
import { TableRow } from "./components/TableRow/TableRow";
import { useIsScrolled } from "./hooks/useIsScrolled";
import { useTableProps } from "./hooks/useTableProps";
import type { DefaultTableRow } from "./interface/DefaultTableRow";
import type { TableProps } from "./interface/TableProps";

const Table = <TRow extends DefaultTableRow>(props: TableProps<TRow>) => {
  const tableProps = useTableProps(props);

  const viewportRef = useRef<ElementRef<"div">>(null);
  const isScrolled = useIsScrolled(viewportRef);
  const hasHeader = tableProps.columns.some((column) => Boolean(column.header));

  const virtualizer = useVirtualizer({
    count: tableProps.data.length,
    getScrollElement: () => viewportRef.current,
    estimateSize: (index) => tableProps.getRowHeight(tableProps.data[index], index),
    overscan: tableProps.overscan,
  });

  const virtualizedItems = virtualizer.getVirtualItems();
  const topOffset = virtualizedItems[0]?.start ?? 0;

  const containerClasses = clsx(
    tableProps.className,
    styles.container,
    isScrolled && styles.scrolled,
    tableProps.borders.table && styles.withTableBorders,
    tableProps.borders.horizontal && styles.withHorizontalBorders,
    tableProps.borders.vertical && styles.withVerticalBorders,
    tableProps.stickyHeader && styles.stickyHeader,
  );

  return (
    <Scrollbar {...tableProps.divProps} className={containerClasses} viewportRef={viewportRef}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        <table>
          {hasHeader && (
            <thead>
              <tr>
                {tableProps.columns.map((column) => {
                  return <TableHeader key={column.id} label={column.header} />;
                })}
              </tr>
            </thead>
          )}

          <tbody>
            <tr style={{ height: topOffset, overflowAnchor: "none" }} />
            {virtualizedItems.map((virtualItem) => {
              const row = tableProps.data[virtualItem.index];
              const rowId = tableProps.getRowId(row);

              return (
                <TableRow
                  key={rowId}
                  id={rowId}
                  index={virtualItem.index}
                  row={row}
                  columns={tableProps.columns}
                  height={virtualItem.size}
                  striped={tableProps.stripedRows}
                  isSelected={tableProps.selectedRows.includes(rowId)}
                  onSelectRow={tableProps.onSelectRow}
                  onDeselectRow={tableProps.onDeselectRow}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Scrollbar>
  );
};

export { Table };
