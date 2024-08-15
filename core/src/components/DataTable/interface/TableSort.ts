export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
  UNSORTED = "UNSORTED",
}

export interface TableSort {
  direction: SortDirection;
  column: string;
}
