import { describe, expect, it } from "vitest";
import { findKey } from "./findKey";

describe("findKey", () => {
  it("should correctly return the key by passing an existing value", async () => {
    const source = {
      A: "a",
      B: "b",
      C: "c",
    } as const;

    expect(findKey(source, "a")).toBe("A");
    expect(findKey(source, "b")).toBe("B");
    expect(findKey(source, "c")).toBe("C");
  });

  it("should return undefined for non existing values", async () => {
    const source = {
      A: "a",
      B: "b",
      C: "c",
    } as const;

    // @ts-expect-error
    expect(findKey(source, "d")).toBe(undefined);
  });
});
