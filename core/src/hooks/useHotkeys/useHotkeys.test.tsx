import { renderHook } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { useHotkeys } from "./useHotkeys";

describe("useHotkeys", () => {
  it("should trigger enter keydown", async () => {
    const enterCallback = vi.fn();

    renderHook(() => useHotkeys([["Enter", enterCallback]]));

    await userEvent.keyboard("{Enter}");
    expect(enterCallback).toBeCalledTimes(1);

    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard("{Enter}");
    expect(enterCallback).toBeCalledTimes(3);
  });

  it("should trigger keydown for multiple hotkeys", async () => {
    const enterCallback = vi.fn();
    const escapeCallback = vi.fn();
    const letterCallback = vi.fn();

    renderHook(() =>
      useHotkeys([
        ["Enter", enterCallback],
        ["Escape", escapeCallback],
        ["h", letterCallback],
      ]),
    );

    await userEvent.keyboard("{Enter}");
    expect(enterCallback).toBeCalledTimes(1);

    await userEvent.keyboard("{Escape}");
    await userEvent.keyboard("h");
    expect(enterCallback).toBeCalledTimes(1);
    expect(escapeCallback).toBeCalledTimes(1);
    expect(letterCallback).toBeCalledTimes(1);
  });

  it("should trigger exact keydowns", async () => {
    const letterCallback = vi.fn();
    const combiCallback = vi.fn();

    renderHook(() =>
      useHotkeys([
        ["h", letterCallback],
        ["Control+h", combiCallback],
      ]),
    );

    await userEvent.keyboard("h");
    expect(letterCallback).toBeCalledTimes(1);
    expect(combiCallback).toBeCalledTimes(0);

    await userEvent.keyboard("{Control>}h{/Control}");
    expect(letterCallback).toBeCalledTimes(1);
    expect(combiCallback).toBeCalledTimes(1);

    await userEvent.keyboard("{Control>}hh{/Control}");
    expect(combiCallback).toBeCalledTimes(3);
  });
});
