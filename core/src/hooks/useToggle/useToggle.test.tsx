import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should return initially false", async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it("should correctly set the value with the handlers", async () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => result.current[1].open());
    expect(result.current[0]).toBe(true);

    act(() => result.current[1].close());
    expect(result.current[0]).toBe(false);

    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);

    act(() => result.current[1].toggle());
    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);

    act(() => result.current[1].toggle());
    act(() => result.current[1].toggle());
    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(false);
  });
});
