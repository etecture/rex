import type { ReactNode } from "react";

import styles from "./TableHeader.module.css";

export type TableHeaderProps = {
  label: ReactNode;
};

const TableHeader = (props: TableHeaderProps) => {
  const { label } = props;

  return <th className={styles.header}>{label ?? ""}</th>;
};

export { TableHeader };
