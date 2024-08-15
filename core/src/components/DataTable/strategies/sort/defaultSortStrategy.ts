import { SortDirection } from "../../interface/TableSort";
import type { SortStrategy } from "../../interface/tableProps/TableSortProps";

const sortNumber = (left: number, right: number) => left - right;
const sortDate = (left: Date, right: Date) => left.getTime() - right.getTime();
const sortString = (left: string, right: string) => left.localeCompare(right);

export const defaultSortStrategy: SortStrategy = ({ values, sort }) => {
  const [leftValue, rightValue] = values;

  let sortResult = 0;

  if (typeof leftValue === "number" && typeof rightValue === "number") {
    sortResult = sortNumber(leftValue, rightValue);
  } else if (leftValue instanceof Date && rightValue instanceof Date) {
    sortResult = sortDate(leftValue, rightValue);
  } else {
    sortResult = sortString(leftValue.toString(), rightValue.toString());
  }

  const direction = sort.direction === SortDirection.ASC ? 1 : -1;

  return sortResult * direction;
};
