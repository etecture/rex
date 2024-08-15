import type { TableColumn, ValidRowModel } from "../../../interface";
import type { TableSort } from "../../../interface/TableSort";
import type { SortIcons } from "../../../interface/tableProps/TableSortProps";
import { HeaderSort, type HeaderSortOnToggle } from "../HeaderSort/HeaderSort";
import styles from "./DefaultHeader.module.css";

export interface DefaultHeaderProps<TRow extends ValidRowModel = ValidRowModel> {
  column: TableColumn<TRow>;
  sort: TableSort | undefined;
  sortIcons: SortIcons | undefined;
  onSortToggle: HeaderSortOnToggle | undefined;
}

export const DefaultHeader = <TRow extends ValidRowModel = ValidRowModel>(
  props: DefaultHeaderProps<TRow>,
) => {
  const { column, sort, sortIcons, onSortToggle } = props;

  return (
    <div className={styles.headerContent}>
      <div className={styles.headerLabel}>{column.label}</div>
      <HeaderSort sort={sort} columnId={column.id} sortIcons={sortIcons} onToggle={onSortToggle} />
      <div className={styles.headerDivider} />
    </div>
  );
};
