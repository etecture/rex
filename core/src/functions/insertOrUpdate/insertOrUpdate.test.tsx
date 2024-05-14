import { describe, expect, it } from "vitest";
import { insertOrUpdate } from "./insertOrUpdate";

describe("insertOrUpdate", () => {
  it("should correctly add items", async () => {
    const source: Array<{ id: string; value: string }> = [];
    insertOrUpdate({ source, item: { id: "1", value: "world" } });
    insertOrUpdate({ source, item: { id: "2", value: "world" } });

    expect(source).toHaveLength(2);
    expect(source).toContainEqual({ id: "1", value: "world" });
    expect(source).toContainEqual({ id: "2", value: "world" });
  });

  it("should correctly add and update items", async () => {
    const source: Array<{ id: string; value: string }> = [];
    insertOrUpdate({ source, item: { id: "1", value: "world" } });
    insertOrUpdate({ source, item: { id: "2", value: "world" } });

    expect(source).toHaveLength(2);
    expect(source).toContainEqual({ id: "1", value: "world" });
    expect(source).toContainEqual({ id: "2", value: "world" });

    insertOrUpdate({ source, item: { id: "2", value: "hello world" } });

    expect(source).toHaveLength(2);
    expect(source).toContainEqual({ id: "1", value: "world" });
    expect(source).toContainEqual({ id: "2", value: "hello world" });
  });

  it("should correctly add and update items with identifier callback", async () => {
    const source: Array<{ person: { id: string; name: string }; value: string }> = [];

    insertOrUpdate({
      source,
      item: { person: { id: "1", name: "Steve" }, value: "world" },
      identifier: (item) => item.person.id,
    });

    expect(source).toHaveLength(1);

    insertOrUpdate({
      source,
      item: { person: { id: "2", name: "Harry" }, value: "hello" },
      identifier: (item) => item.person.id,
    });

    insertOrUpdate({
      source,
      item: { person: { id: "3", name: "Harry" }, value: "test" },
      identifier: (item) => item.person.id,
    });

    expect(source).toHaveLength(3);
    expect(source).toContainEqual({ person: { id: "1", name: "Steve" }, value: "world" });
    expect(source).toContainEqual({ person: { id: "2", name: "Harry" }, value: "hello" });
    expect(source).toContainEqual({ person: { id: "3", name: "Harry" }, value: "test" });

    insertOrUpdate({
      source,
      item: { person: { id: "2", name: "Harold" }, value: "this changed" },
      identifier: (item) => item.person.id,
    });

    expect(source).toHaveLength(3);
    expect(source).toContainEqual({ person: { id: "1", name: "Steve" }, value: "world" });
    expect(source).toContainEqual({ person: { id: "2", name: "Harold" }, value: "this changed" });
    expect(source).toContainEqual({ person: { id: "3", name: "Harry" }, value: "test" });
  });
});
