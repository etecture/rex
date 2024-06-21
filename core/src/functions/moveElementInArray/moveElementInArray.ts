type MoveElementInArrayProps<T> = {
  entries: Array<T>;
  moveFromIndex: number;
  moveToIndex: number;
};

/**
 * Moves items in an array using a startindex and a targetindex.
 * The items do not have to be of a specific type.
 *
 * If the startindex is out of bounds, the original array is returned.
 * If the targetindex is out of bounds, the item is moved to the end of the array.
 *
 * @param entries the array to update
 * @param moveFromIndex the index of the item to move
 * @param moveToIndex the index to move the item to
 * @returns the updated array
 */
export const moveElementInArray = <T>(props: MoveElementInArrayProps<T>): Array<T> => {
  const { entries, moveFromIndex, moveToIndex } = props;

  if (moveFromIndex < 0 || moveFromIndex >= entries.length) {
    console.error("moveFromIndex out of bounds");
    return entries;
  }

  const elementToMove = entries[moveFromIndex];

  const entriesToUpdate = entries.slice();

  entriesToUpdate.splice(moveFromIndex, 1);
  entriesToUpdate.splice(moveToIndex, 0, elementToMove);

  return entriesToUpdate;
};
