export interface TableCellClassNames {
  tableCell?: string;
  tableCellContent?: string;
}

export interface TableRowClassNames extends TableCellClassNames {
  tableRow?: string;
}

export interface TableClassNames extends TableRowClassNames {
  scrollContainer?: string;
  root?: string;
  table?: string;
  tableHeader?: string;
  tableBody?: string;
  noDataContent?: string;
}
