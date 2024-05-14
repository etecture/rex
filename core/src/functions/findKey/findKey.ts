/**
 * Returns the key of an object with a specific value.
 * Always returns the first occurrence.
 *
 * @param object source object
 * @param value the value to search for
 * @returns the first occurrence of the key with the specified value
 */
export const findKey = <ObjectType extends Record<string, unknown>>(
  object: ObjectType,
  value: (typeof object)[keyof typeof object],
) => {
  const keys = Object.keys(object);

  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};
