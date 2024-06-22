import { describe, expect, it } from "vitest";
import { moveElementInArray } from "./moveElementInArray";

describe("moveElementInArray", () => {
  it("should correctly move string items", async () => {
    const entries: Array<string> = ["A", "B", "C", "D"];
    const updatedArray = moveElementInArray({ entries, moveFromIndex: 0, moveToIndex: 3 });

    expect(updatedArray).toEqual(["B", "C", "D", "A"]);

    const updatedArray2 = moveElementInArray({ entries, moveFromIndex: 3, moveToIndex: 1 });
    expect(updatedArray2).toEqual(["A", "D", "B", "C"]);
  });
  it("should correctly move object items", async () => {
    const entries: Array<{ id: string; name: string }> = [
      { id: "1", name: "Peter" },
      { id: "2", name: "Petra" },
      { id: "3", name: "Johann" },
    ];
    const updatedArray = moveElementInArray({ entries, moveFromIndex: 1, moveToIndex: 0 });

    expect(updatedArray).toEqual([
      { id: "2", name: "Petra" },
      { id: "1", name: "Peter" },
      { id: "3", name: "Johann" },
    ]);

    const updatedArray2 = moveElementInArray({ entries, moveFromIndex: 0, moveToIndex: 2 });

    expect(updatedArray2).toEqual([
      { id: "2", name: "Petra" },
      { id: "3", name: "Johann" },
      { id: "1", name: "Peter" },
    ]);
  });

  it("should correctly handle index out of bounce", async () => {
    const entries: Array<string> = ["A", "B", "C", "D"];
    const updatedArray = moveElementInArray({ entries, moveFromIndex: 10, moveToIndex: 3 });

    expect(updatedArray).toEqual(["A", "B", "C", "D"]);
  });
});
