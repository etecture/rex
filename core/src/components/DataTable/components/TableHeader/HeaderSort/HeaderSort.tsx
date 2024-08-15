import clsx from "clsx";
import { SortDirection, type TableSort } from "../../../interface/TableSort";
import type { SortIcons } from "../../../interface/tableProps/TableSortProps";
import styles from "./HeaderSort.module.css";

export type HeaderSortOnToggleParams = {
  columnId: string;
  nextSort: TableSort;
};

export type HeaderSortOnToggle = (params: HeaderSortOnToggleParams) => void;

export interface HeaderSortProps {
  columnId: string;
  sort: TableSort | undefined;
  sortIcons: SortIcons | undefined;
  onToggle: HeaderSortOnToggle | undefined;
}

const sortOrder = {
  [SortDirection.ASC]: SortDirection.DESC,
  [SortDirection.DESC]: SortDirection.UNSORTED,
  [SortDirection.UNSORTED]: SortDirection.ASC,
};

export const HeaderSort = (props: HeaderSortProps) => {
  const { columnId, sort, sortIcons, onToggle } = props;

  const isSorted =
    sort !== undefined && sort.column === columnId && sort.direction !== SortDirection.UNSORTED;

  const columnSort = isSorted ? sort.direction : SortDirection.UNSORTED;
  const sortIcon = sortIcons?.[columnSort];

  const handleSortToggle = () => {
    const nextDirection = sortOrder[columnSort];

    onToggle?.({
      columnId,
      nextSort: {
        column: columnId,
        direction: nextDirection,
      },
    });
  };

  return (
    <div className={clsx(styles.headerSort, isSorted && styles.sorted)} onClick={handleSortToggle}>
      {sortIcon}
    </div>
  );
};
