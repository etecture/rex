import type { TableColumn, ValidRowModel } from "../../interface";
import type { TableHeaderRenderer } from "../../interface/TableHeaderRenderer";
import type { TableSort } from "../../interface/TableSort";
import type { SortIcons } from "../../interface/tableProps/TableSortProps";
import { DefaultHeader } from "./DefaultHeader/DefaultHeader";
import type { HeaderSortOnToggle } from "./HeaderSort/HeaderSort";
import styles from "./TableHeader.module.css";

export type TableHeaderProps<TRow extends ValidRowModel> = {
  column: TableColumn<TRow>;
  sort: TableSort | undefined;
  sortIcons: SortIcons | undefined;
  headerRenderer: TableHeaderRenderer<TRow> | undefined;
  onSortToggle: HeaderSortOnToggle | undefined;
};

const TableHeader = <TRow extends ValidRowModel>(props: TableHeaderProps<TRow>) => {
  const { column, sort, sortIcons, headerRenderer, onSortToggle } = props;

  if (column.headerRenderer) {
    return <th className={styles.header}>{column.headerRenderer({ column, sort })}</th>;
  }

  if (headerRenderer) {
    return <th className={styles.header}>{headerRenderer({ column, sort })}</th>;
  }

  return (
    <th className={styles.header}>
      <DefaultHeader
        column={column}
        sort={sort}
        sortIcons={sortIcons}
        onSortToggle={onSortToggle}
      />
    </th>
  );
};

export { TableHeader };
