import { describe, it, expect } from "vitest";
import { fireEvent, renderHook } from "@testing-library/react";

import { BreakpointValues, DEFAULT_BREAKPOINTS, useBreakpoint } from "./useBreakpoint";

const resize = (width: number) => {
  (document.body.clientWidth as number) = width;
  fireEvent(window, new Event("resize"));
};

const values = {
  xs: "xsVal",
  md: "mdVal",
  xl: "xlVal",
} satisfies BreakpointValues;

describe("useBreakpoint", () => {
  it("should use smallest value as default", async () => {
    resize(1920);
    const { result } = renderHook(() => useBreakpoint({ xs: values.xs }));
    expect(result.current.value).toBe(values.xs);
  });

  it("should use a matching value", async () => {
    resize(DEFAULT_BREAKPOINTS.md);
    const { result } = renderHook(() => useBreakpoint(values));
    expect(result.current.value).toBe(values.md);
  });

  it("should change on window resize", async () => {
    resize(DEFAULT_BREAKPOINTS.md);
    const { result } = renderHook(() => useBreakpoint(values));
    expect(result.current.value).toBe(values.md);

    resize(DEFAULT_BREAKPOINTS.xs);
    expect(result.current.value).toBe(values.xs);

    resize(DEFAULT_BREAKPOINTS.md - 10);
    expect(result.current.value).toBe(values.xs);

    resize(DEFAULT_BREAKPOINTS.md);
    expect(result.current.value).toBe(values.md);

    resize(DEFAULT_BREAKPOINTS.xl - 10);
    expect(result.current.value).toBe(values.md);

    resize(DEFAULT_BREAKPOINTS.xl);
    expect(result.current.value).toBe(values.xl);
  });

  it("should use a matching value with custom breakpoints", async () => {
    const { result } = renderHook(() => useBreakpoint(values, { xs: 10, md: 20, xl: 40 }));

    resize(10);
    expect(result.current.value).toBe(values.xs);

    resize(20);
    expect(result.current.value).toBe(values.md);

    resize(40);
    expect(result.current.value).toBe(values.xl);
  });
});
