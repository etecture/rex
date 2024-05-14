export type InsertOrUpdateIdentifier<ItemType> = keyof ItemType | ((item: ItemType) => unknown);

type InsertOrUpdatePropsImplicit<ItemType> = {
  source: ItemType[];
  item: ItemType;
  identifier?: InsertOrUpdateIdentifier<ItemType>;
};

type InsertOrUpdatePropsExplicit<ItemType> = {
  source: ItemType[];
  item: ItemType;
  identifier: InsertOrUpdateIdentifier<ItemType>;
};

type InsertOrUpdateProps<ItemType> = ItemType extends { id: unknown }
  ? InsertOrUpdatePropsImplicit<ItemType>
  : InsertOrUpdatePropsExplicit<ItemType>;

/**
 * Adds an item to an array or updates it if it already exists. This function mutates the source array.
 * If the source contains a property "id" the identifier option is optional and will default to "id".
 */
export const insertOrUpdate = <ItemType extends Record<string, unknown>>(
  props: InsertOrUpdateProps<ItemType>,
) => {
  const { identifier = "id", item, source } = props;

  const target = source.find((it) => {
    const isFunction = typeof identifier === "function";
    const leftValue = isFunction ? identifier(it) : it[identifier];
    const rightValue = isFunction ? identifier(item) : item[identifier];
    return leftValue === rightValue;
  });

  if (!target) {
    source.push(item);
  } else {
    source.splice(source.indexOf(target), 1, item);
  }
};
