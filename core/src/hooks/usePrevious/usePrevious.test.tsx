import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePrevious } from "./usePrevious";

describe("usePrevious", () => {
  it("should return null for the first render", async () => {
    const { result } = renderHook(() => usePrevious("first"));
    expect(result.current).toBeNull();
  });

  it("should return the previous value after rerender", async () => {
    const { result, rerender } = renderHook((value: string) => usePrevious(value ?? "first"));
    expect(result.current).toBeNull();
    rerender("second");
    expect(result.current).toBe("first");
    rerender("third");
    expect(result.current).toBe("second");
    rerender("fourth");
    rerender("fifth");
    rerender("sixth");
    expect(result.current).toBe("fifth");
  });

  it("should return the first value after the first render when useInitialValueAsPrevious is true", async () => {
    const { result, rerender } = renderHook((value: string) =>
      usePrevious(value ?? "first", { useInitialValueAsPrevious: true }),
    );
    expect(result.current).toBe("first");
    rerender("second");
    expect(result.current).toBe("first");
  });
});
