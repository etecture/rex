import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useOnChange } from "./useOnChange";

describe("useOnChange", () => {
  it("should not trigger when nothing changed", async () => {
    const onChange = vi.fn();

    const { rerender } = renderHook((value: unknown) =>
      useOnChange({ value: value ?? "first", onChange }),
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    rerender("first");
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it("should trigger when value changed", async () => {
    const onChange = vi.fn();

    const { rerender } = renderHook((value: unknown) =>
      useOnChange({ value: value ?? "first", onChange }),
    );

    rerender("first");
    expect(onChange).toHaveBeenCalledTimes(0);
    rerender("second");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("second");
    rerender("third");
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith("third");
    rerender("fourth");
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenCalledWith("fourth");
  });
});
