import { renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useIsIdle } from "./useIsIdle";

const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

describe("useIsIdle", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("should return idle by default", async () => {
    const { result } = renderHook(() => useIsIdle({ idleAfterMs: 1000 }));
    expect(result.current).toBe(true);
  });

  it("should return idle after the set amount of ms", async () => {
    const { result } = renderHook(() => useIsIdle({ idleAfterMs: 1000 }));
    expect(result.current).toBe(true);
    await user.click(document.body);
    expect(result.current).toBe(false);
    await act(async () => await vi.advanceTimersByTimeAsync(1000));
    expect(result.current).toBe(true);
  });
});
